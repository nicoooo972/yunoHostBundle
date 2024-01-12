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
    version: string;
    weight: string;
    subtags: string[];
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
        <div className="">
            <h1 className='text-2xl font-semibold'>Choisissez les Bundles a installer </h1>

            <div className="flex mx-36 flex-wrap gap-10 px-6 items-start justify-start">
                {data
                    .filter(item => item.name)
                    .map((bundle, index) => (
                        <CarteSimple
                            key={index}
                            title={bundle.name}
                            description={bundle.description}
                            imageUrl={bundle.logo_hash}
                            version={bundle.version}
                            weight={bundle.weight}
                            isSelected={selectedCards.includes(bundle.name)}
                            onToggle={() => handleCardToggle(bundle.name)}
                            listItems={bundle.items}
                            subtags={bundle.subtags}
                        />
                    ))}
            </div>

            <button className="launch-bundles-button mt-10" onClick={handleLaunchBundles}>
                Installer les  bundles
            </button>
            <Install open={showInstall} onClose={() => setShowInstall(false)} selectedApps={selectedCards.map(app => app.toLowerCase())} />
        </div>
    );
};

export default Cartes;