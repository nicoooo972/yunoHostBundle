import React from 'react';
import CarteSimple from './CarteSimple';
import './Cartes.css';


const Cartes: React.FC = () => {
    return (

        <div className="container-style">
            <h1>Choisissez les Bundles que vous voulez </h1>

            <div className="cartes-container">
                <CarteSimple
                    title="Fichiers"
                    description="Nextcloud 
                Syncthing -> mode trou noir (:question:)"
                    imageUrl="./logo.png"

                />


                <CarteSimple
                    title="Contacts, agenda
                "
                    description="Nextcloud"
                    imageUrl="./logo.png"
                />

                <CarteSimple
                    title="Mots de passe
                "
                    description="Vaultwarden
                Keepass"
                    imageUrl="./logo.png"
                />

                <CarteSimple
                    title="Navigateur"
                    description="syncserver-rs"
                    imageUrl="./logo.png"
                />

                <CarteSimple
                    title="Paperasserie"
                    description="Paperless-ngx
                SignaturePDF
                (finances) Kresus , (Firefly-III , Actual )"
                    imageUrl="./logo.png"
                />

                <CarteSimple
                    title="Lectures"
                    description="BookWyrm"
                    imageUrl="./logo.png"

                />

                <CarteSimple
                    title="Musique"
                    description="Airsonic
                Navidrome
                Jellyfin -> à tester
                Backup (:question: :question: :question:)
                entre clic borg / de ton périphérique vers clic, backup des backup <= bouton téléchargement"
                    imageUrl="./logo.png"
                />




            </div>
            <h1>Confirmez votre choix </h1>
            <br></br>
            <button>Je lance mes Bundles</button>

        </div>


    );
};

export default Cartes;
