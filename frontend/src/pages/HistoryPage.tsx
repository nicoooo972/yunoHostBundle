import React, { useEffect, useState } from 'react';

interface Application {
    bundleName: string;
    bundleDesc: string;
}

const HistoryPage: React.FC = () => {
    const [data, setData] = useState<Application[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/app/files');
                const result: Application[] = await response.json();

                // Filtrer les éléments sans bundleName ou bundleDesc
                const filteredData = result.filter((item) => item.bundleName && item.bundleDesc);

                setData(filteredData);
                console.log(filteredData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Historique des Applications Installées</h2>
            <ul>
                {data.map((application, index) => (
                    <li key={index}>
                        <strong>Nom du Bundle:</strong> {application.bundleName}, <strong>Description:</strong> {application.bundleDesc}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryPage;
