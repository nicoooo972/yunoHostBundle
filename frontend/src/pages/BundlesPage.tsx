// BundlesPage.tsx

import React, { useRef } from 'react';
import '../components/Bundle.css';
import AccueilBundles from '../components/AceuilBundles';
import ListeBundles from '../components/ListeBundles';

const BundlesPage: React.FC = () => {
    const cartesRef = useRef<HTMLDivElement>(null);

    const handleScrollToCartes = () => {
        if (cartesRef.current) {
            cartesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleChoisir = (carteNom: string) => {
        console.log(`Carte choisie : ${carteNom}`);
    };

    return (
        <div>
            <div>
                <AccueilBundles scrollToCartes={handleScrollToCartes} />
            </div>
            <div ref={cartesRef}>
                <ListeBundles handleChoisir={handleChoisir} />
            </div>
        </div>
    );
};

export default BundlesPage;
