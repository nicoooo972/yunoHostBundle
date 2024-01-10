import React, { useRef } from 'react';
import Accueil from '../components/Acceuil';
import Cartes from '../components/Cartes';
import './SynchroBundlePage.css';

const Synchro: React.FC = () => {
    const cartesRef = useRef<HTMLDivElement>(null);

    const handleScrollToCartes = () => {
        if (cartesRef.current) {
            cartesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }; return (
        <div>
            <div>
                <Accueil scrollToCartes={handleScrollToCartes} />
            </div>
            <div ref={cartesRef}>
                <Cartes />
            </div>
        </div>
    );
};


export default Synchro;
