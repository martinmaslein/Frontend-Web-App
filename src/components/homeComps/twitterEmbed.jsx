import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Loading from "src/components/Loading.jsx";

function TwitterEmbed() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const loadScript = async () => {
            const scriptModule = await import('scriptjs');
            const script = scriptModule.default;

        };

        loadScript();

    }, []);

    return (
        <div className="flex flex-col items-center container px-5 py-4 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900">
                Tus artistas favoritos
            </h1>

            {isLoading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <TwitterTimelineEmbed
                            onLoad={function noRefCheck() { }}
                            options={{
                                height: 500,
                                width: 500,
                            }}
                            screenName="pogopedia"
                            sourceType="profile"
                            tweetLimit={10}
                        />
                    </div>
                    <div>
                        <TwitterTimelineEmbed
                            onLoad={function noRefCheck() { }}
                            options={{
                                height: 500,
                                width: 500,
                            }}
                            screenName="crockpics"
                            sourceType="profile"
                            tweetLimit={10}
                        />
                    </div>
                </div>
            )}
        </div>
    );

}

export default TwitterEmbed;
