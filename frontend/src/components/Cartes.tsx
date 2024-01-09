import React from 'react';
import CarteSimple from './CarteSimple';
import './Cartes.css';


const Cartes: React.FC = () => {
    return (
        <div className="cartes-container">
            <div className="custom-card-container">

                <CarteSimple
                    title="Fichiers"
                    description="Nextcloud 
                Syncthing -> mode trou noir (:question:)"
                    imageUrl="./logo.png"
                    link="https://apps.yunohost.org/catalog"
                />
            </div>
            <div className="custom-card-container">

                <CarteSimple
                    title="Contacts, agenda
                "
                    description="Nextcloud"
                    imageUrl="./logo.png"
                    link=""
                />
            </div>
            <div className="custom-card-container">

                <CarteSimple
                    title="Mots de passe
                "
                    description="Vaultwarden
                Keepass"
                    imageUrl="./logo.png"
                    link=""
                />
            </div>
            <div className="custom-card-container">

                <CarteSimple
                    title="Navigateur"
                    description="syncserver-rs"
                    imageUrl="./logo.png"
                    link=""
                />
            </div>
            <div className="custom-card-container">

                <CarteSimple
                    title="Paperasserie"
                    description="Paperless-ngx
                SignaturePDF
                (finances) Kresus , (Firefly-III , Actual )"
                    imageUrl="./logo.png"
                    link=""
                />
            </div>
            <div className="custom-card-container">

                <CarteSimple
                    title="Lectures"
                    description="BookWyrm"
                    imageUrl="./logo.png"
                    link=""

                />
            </div>
            <div className="custom-card-container">

                <CarteSimple
                    title="Musique"
                    description="Airsonic
                Navidrome
                Jellyfin -> à tester
                Backup (:question: :question: :question:)
                entre clic borg / de ton périphérique vers clic, backup des backup <= bouton téléchargement"
                    imageUrl="./logo.png"
                    link=""
                />
            </div>

        </div>
    );
};

export default Cartes;
