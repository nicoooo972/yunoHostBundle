import { useState, useEffect } from 'react';
import Card from './Card';

import Install from './Install';
import './AllCard.css';
import './Card.css';

interface Application {
    name: string;
    description: string;
    logo_hash: string;
    version: string;
    weight: string;
    subtags: string[];
    items: [];
}

const AllCard: React.FC = () => {
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [showInstall, setShowInstall] = useState(false);

    const [data, setData] = useState<Application[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/app/files');
                const result = await response.json();

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
            setSelectedCards(selectedCards.filter((cardTitle) => cardTitle !== title));
        } else {
            setSelectedCards([...selectedCards, title]);
        }
    };

    const handleLaunchBundles = () => {
        const lowercaseSelectedCards = selectedCards.map((app) => app.toLowerCase());

        console.log('Bundles sélectionnés :', lowercaseSelectedCards);
        setShowInstall(true);
    };

    return (
        <div className="Cartes">
            <h1 className='text-2xl font-semibold'>Choisissez les Bundles à installer</h1>

            <div className="flex flex-wrap gap-6 justify-center">
                {data
                    .filter((item) => item.name)
                    .map((bundle, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6">
                            <Card
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
                        </div>
                    ))}
            </div>

            <button className="launch-bundles-button mt-10" onClick={handleLaunchBundles}>
                Installer les bundles
            </button>
            <Install open={showInstall} onClose={() => setShowInstall(false)} selectedApps={selectedCards.map((app) => app.toLowerCase())} />
        </div>
    );
};

export default AllCard;
