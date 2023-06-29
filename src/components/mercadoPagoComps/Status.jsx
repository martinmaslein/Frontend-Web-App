import React, { useContext, useState } from "react";
import { StatusScreen } from '@mercadopago/sdk-react';
import StatusLayout from "../../layouts/StatusLayout";
import Loading from "../Loading";
import CenterContent from "src/layouts/CenterContent";

function Status({payment_id}) {

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

        <StatusLayout
            content={CONTENT}
        />

    );
}

export default Status;
