import React, { useEffect } from 'react';
import './Noticias.css'; // Importa el archivo CSS correspondiente

const Noticias = () => {
    useEffect(() => {
        // Carga el SDK de Facebook cuando el componente se monta
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.nonce = 'your_nonce';
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <section id="noticias" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Noticias</h2>
                    <div className="fb-page" data-href="https://www.facebook.com" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com">Página</a>
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Noticias;
