import React, { useContext, useState } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import BrickLayout from "../layouts/BrickLayout";
import Loading from "./Loading";
import CenterContent from "src/layouts/CenterContent";

function BrickComponent({ price }) {

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(false);


  const initialization = {
    amount: price,
    // payer: {
    //   email: user.email,   --> Aca habria que poner el mail con el que inicio sesion
    // }, 
  };

  // const customization = {
  //   visual: {
  //     style: {
  //       customVariables: {           --> Ver si queremos cambiar el color del boton
  //         textPrimaryColor: 'string',
  //         textSecondaryColor: 'string'
  //       }
  //     }
  //   }
  // };


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
      <div>
        <p className="text-md font-bold">Mercado Pago</p>
        <p className="font-thin italic pb-2">
          Tus datos están seguros dentro de esta ventana ✔️
        </p>

        {loading &&
          <div className="block space-y-2">
            <CenterContent>
              <Loading />
            </CenterContent >
          </div>
        }

        <div className={shown ? "block space-y-2" : "hidden"}>

          <CardPayment
            initialization={initialization}
            customization={customization}
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
          />
        </div>
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
