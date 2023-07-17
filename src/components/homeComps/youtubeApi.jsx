import React, { useEffect, useState } from 'react';

function YoutubeApi() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSNxIry_FPFcQDFRbi3VOAw&maxResults=2&order=rating&key=AIzaSyDw3uf8Xdw2kUl7JQg1StOYZ8KSSIvEW98'
                );
                const data = await response.json();
                const videoList = data.items;
                setVideos(videoList);
            } catch (error) {
                console.log(error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="flex flex-col items-center container px-5 py-8 mx-auto">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                <span>¡En el centro del escenario!</span>
            </h2>
            <p className="text-lg mb-4 font-medium title-font">Descubre nuestros increíbles demos de equipos de sonido y guitarras!</p>

            <div className="youtube-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {videos && Array.isArray(videos) ? (
                    videos.map((video) => (
                        <div key={video.id.videoId} style={{ marginBottom: '20px', flexBasis: 'calc(50% - 10px)' }}>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))
                ) : (
                    <p>Cargando videos...</p>
                )}
            </div>
        </div>


    );


}

export default YoutubeApi;