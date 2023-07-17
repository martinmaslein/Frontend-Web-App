import React, { useContext, useState, useEffect } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import PaymentLayout from "../../layouts/PaymentLayout";
import Loading from "../Loading";
import CenterContent from "src/layouts/CenterContent";
import { Cookies, useCookies  } from 'react-cookie';
import Status from 'src/components/mercadoPagoComps/Status';
import { apiUrl } from "src/utils/constantes";



function Payment({ price, user }) {

  const [cookies, setCookie] = useCookies(['cart']);
  const cartItems = cookies.cart || [];

  const createOrder = async (email, name, mpID) => {

    const address = "Terrada 341";
    const orderData = { delivery_address: address, email: email, name: name, details: [], mpID: mpID };

    cartItems.map((item, index) => {
      orderData.details[index] = { quantity: item.quantity, product_id: item.id };
    });

    sendOrder(orderData);
  };

  const sendOrder = async (orderData) => {
    try {
      const response = await fetch(apiUrl + 'orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log('Orden creada correctamente');
        cartItems.splice(0, cartItems.length);
        setCookie('cart', cartItems, { path: '/' })
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  initMercadoPago("TEST-9bb71dcc-9e11-4fed-ae79-1c3249f396e1", {
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
      fetch(apiUrl + "comprar/auth", {
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
          if (response.status === "approved") {
            createOrder(user.email, user.name, response.id);
          }
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
