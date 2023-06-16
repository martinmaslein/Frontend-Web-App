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
        <div className="flex flex-col items-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Tus artistas favoritos</h1>


            {isLoading ? (
                <Loading />
            ) : (
                <div className="flex">

                    <div className="w-1/2 mr-8">
                        
                        <TwitterTimelineEmbed
                            onLoad={function noRefCheck() { }}
                            options={{
                                height: 500,
                                width: 500,
                            }}
                            screenName="pogopedia"
                            sourceType="profile"
                            tweetLimit={10}
                        // noHeader="false"
                        />
                    </div>
                    <div className="w-1/2">
                        
                        <TwitterTimelineEmbed
                            onLoad={function noRefCheck() { }}
                            options={{
                                height: 500,
                                width: 500,
                            }}
                            screenName="crockpics"
                            sourceType="profile"
                            tweetLimit={10}
                        // noHeader="false"
                        />
                    </div>
                </div>
            )}
        </div>

    );
}

export default TwitterEmbed;
