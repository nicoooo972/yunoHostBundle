import React, { useState } from 'react';
import CarteSimple from './Carte';
import Install from './InstallPage';
import './ListeCartes.css';
import './Carte.css';
import { cartesData } from '../data/Data';

const Cartes: React.FC = () => {
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [showInstall, setShowInstall] = useState(false);

    const handleCardToggle = (title: string) => {
        const isSelected = selectedCards.includes(title);
        if (isSelected) {
            setSelectedCards(selectedCards.filter(cardTitle => cardTitle !== title));
        } else {
            setSelectedCards([...selectedCards, title]);
        }
    };

    const handleLaunchBundles = () => {
        console.log('Bundles sélectionnés :', selectedCards);
        setShowInstall(true);
    };

    return (
        <div className="container-style">
            <h1>Choisissez les Bundles que vous voulez </h1>

            <div className="cartes-container">
                {cartesData.map((bundle, index) => (
                    <CarteSimple
                        key={index}
                        title={bundle.title}
                        description={bundle.description}
                        imageUrl={bundle.imageUrl}
                        isSelected={selectedCards.includes(bundle.title)}
                        onToggle={() => handleCardToggle(bundle.title)}
                        listItems={bundle.items}
                    />
                ))}
            </div>

            <h1>Confirmez votre choix </h1>
            <button className="launch-bundles-button" onClick={handleLaunchBundles}>
                Je lance mes Bundles
            </button>
            <Install open={showInstall} onClose={() => setShowInstall(false)} />
        </div>
    );
};

export default Cartes;