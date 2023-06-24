import React, { useContext, useState } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import BrickLayout from "../layouts/BrickLayout";
import Loading from "./Loading";
import CenterContent from "src/layouts/CenterContent";

function BrickComponent() {

  const API_URL = "a";
  const MP_URL = import.meta.env.VITE_REAT_APP_PUBLIC_KEY;

  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(false);


  const initialization = {
    amount: 100,
  };

  const onSubmit = async (formData) => {
    const token = await getAccessTokenSilently();
    return new Promise((resolve, reject) => {
      fetch(API_URL + "/comprar/auth", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Error");
          return response.json();
        })
        .then((data) => {
          if (data.status !== undefined && data.status === "approved") {
            setCompra({ ...compra, forma_de_pago: "MercadoPago #" + data.id });
          }
          handleNextStep();
        })
        .then((response) => {
          resolve();
        })
        .catch((error) => {
          handleNextStep();
          reject();
        });
    });
  };


  const onError = async (error) => {
    // callback called for all Brick error cases
    console.log(error);
  };


  const onReady = async () => {
    setLoading(false);
    setShown(true);
  };
  const TITULO = "Pago";
  const CONTENT = (
    <>
      {loading &&
        <CenterContent>
          <Loading />
        </CenterContent >
      }

      <div className={shown ? "block space-y-2" : "hidden"}>
        <p className="text-md font-bold">Mercado Pago</p>
        <p className="font-thin italic pb-2">
          Tus datos están seguros dentro de esta ventana ✔️
        </p>
        <CardPayment
          initialization={initialization}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={onError}
        />
      </div>
    </>
  );




  return (

    <BrickLayout
      title={TITULO}
      content={CONTENT}
    />

  );
}

export default BrickComponent;
