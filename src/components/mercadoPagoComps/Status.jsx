import React, { useContext, useState } from "react";
import { StatusScreen } from '@mercadopago/sdk-react';
import StatusLayout from "../../layouts/StatusLayout";
import Loading from "../Loading";
import CenterContent from "src/layouts/CenterContent";
import { Link } from 'react-router-dom';

function Status({ payment_id }) {

    const [loading, setLoading] = useState(true);
    const [shown, setShown] = useState(false);

    const initialization = {
        paymentId: payment_id,
    };
    const onError = async (error) => {
        console.log(error);
    };
    const onReady = async () => {
        setLoading(false);
        setShown(true);
    };

    const CONTENT = (
        <>
            <div>
                {loading &&
                    <div className="block space-y-2">
                        <CenterContent>
                            <Loading />
                        </CenterContent >
                    </div>
                }

                <div className={shown ? "block space-y-2" : "hidden"}>

                    <StatusScreen
                        initialization={initialization}
                        onReady={onReady}
                        onError={onError}
                    />
                </div>
            </div>
        </>
    );

    return (

        <div>
            <StatusLayout
                content={CONTENT}
            />
            <Link to="/" className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">
                Aceptar
            </Link>

        </div>
    );
}

export default Status;
