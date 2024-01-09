// Cartes.tsx
import React from 'react';
import CarteSimple from './CarteSimple';
import './Cartes.css';


const Cartes: React.FC = () => {
    return (
        <div className="cartes-container">

            <CarteSimple
                title="Fichiers"
                description="Nextcloud 
                Syncthing -> mode trou noir (:question:)"
                imageUrl="lien_de_l_image"
            />
            <CarteSimple
                title="Contacts, agenda
                "
                description="Nextcloud"
                imageUrl="lien_de_l_image"
            />
            <CarteSimple
                title="Mots de passe
                "
                description="Vaultwarden
                Keepass"
                imageUrl="lien_de_l_image"
            />
            <CarteSimple
                title="Navigateur"
                description="syncserver-rs"
                imageUrl="lien_de_l_image"
            />
            <CarteSimple
                title="Paperasserie"
                description="Paperless-ngx
                SignaturePDF
                (finances) Kresus , (Firefly-III , Actual )"
                imageUrl="lien_de_l_image"
            />
            <CarteSimple
                title="Lectures"
                description="BookWyrm"
                imageUrl="lien_de_l_image"
            />
            <CarteSimple
                title="Musique"
                description="Airsonic
                Navidrome
                Jellyfin -> à tester
                Backup (:question: :question: :question:)
                entre clic borg / de ton périphérique vers clic, backup des backup <= bouton téléchargement"
                imageUrl="lien_de_l_image"
            />

        </div>
    );
};

export default Cartes;
