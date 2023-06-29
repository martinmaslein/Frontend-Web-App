import React, { useContext, useState, useEffect } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import PaymentLayout from "../../layouts/PaymentLayout";
import Loading from "../Loading";
import CenterContent from "src/layouts/CenterContent";
import { Cookies } from 'react-cookie';
import Status from 'src/components/mercadoPagoComps/Status';



function Payment({ price, user }) {

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const PUBLIC_KEY = import.meta.env.VITE_REAT_APP_PUBLIC_KEY;
  initMercadoPago(PUBLIC_KEY, {
    locale: "es-AR",
  });

  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(false);

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const [id, setId] = useState(null);

  const initialization = {
    amount: price,
    payer: {
      email: user.email,
    },
  };

  const cookie = new Cookies();

  const onSubmit = async (formData) => {
    let token = cookie.get("auth_token");
    return new Promise((resolve, reject) => {
      fetch("http://127.0.0.1:8000/rest/comprar/auth", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setId(response.id);
          handleNextStep();
          resolve();
        })
        .catch((error) => {
          console.log("Error en el fetch", error);
          reject();
        });
    });
  };



  const onError = async (error) => {
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
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
          />
        </div>
      </div>
    </>
  );

  return (

    <div>
      {step === 1 && (
        <div>
          <h2>Paso 1</h2>
          <PaymentLayout
            title={TITULO}
            content={CONTENT}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          {id && (
            <Status
              payment_id={id}
            />
          )}
        </div>
      )}

    </div>

  );
}

export default Payment;
