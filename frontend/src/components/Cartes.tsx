import { useState, useEffect } from 'react';
import CarteSimple from './CarteSimple';
import Install from './Install';
import './Cartes.css';
import './CarteSimple.css';
// import { cartesData } from '../data/Data';

interface Application {
    name: string;
    description: string;
    logo_hash: string;
    items: []

}

const Cartes: React.FC = () => {
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [showInstall, setShowInstall] = useState(false);

    const [data, setData] = useState<Application[]>([]);

    // ...

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/app/files');
                const result = await response.json()

                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleCardToggle = (title: string) => {
        const isSelected = selectedCards.includes(title);
        if (isSelected) {
            setSelectedCards(selectedCards.filter(cardTitle => cardTitle !== title));
        } else {
            setSelectedCards([...selectedCards, title]);
        }
    };

    const handleLaunchBundles = () => {
        const lowercaseSelectedCards = selectedCards.map(app => app.toLowerCase());

        console.log('Bundles sélectionnés :', lowercaseSelectedCards);
        setShowInstall(true);
    };

    return (
        <div className="container-style">
            <h1>Choisissez les Bundles que vous voulez </h1>

            <div className="cartes-container">
                {data
                    .filter(item => item.name)
                    .map((bundle, index) => (
                        <CarteSimple
                            key={index}
                            title={bundle.name}
                            description={bundle.description}
                            imageUrl={bundle.logo_hash}
                            isSelected={selectedCards.includes(bundle.name)}
                            onToggle={() => handleCardToggle(bundle.name)}
                            listItems={bundle.items}
                        />
                    ))}


            </div>

            <h1>Confirmez votre choix </h1>
            <button className="launch-bundles-button" onClick={handleLaunchBundles}>
                Je lance mes Bundles
            </button>
            <Install open={showInstall} onClose={() => setShowInstall(false)} selectedApps={selectedCards.map(app => app.toLowerCase())}/>
        </div>
    );
};

export default Cartes;