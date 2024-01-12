import { useState, useEffect } from "react";

interface Application {
    name: string;
    description: string;
    version: string;
    subtags: string[];
    logo_hash: string;
}

const BundlesInstaller: React.FC = () => {
    const [data, setData] = useState<Application[]>([]);


    useEffect(() => {
        fetch('http://localhost:3000/app/files')
            .then(response => response.json())
            .then(data => {
                // Mise à jour de l'état avec les données récupérées
                setData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);

            });
    }, []);





    return (
        <div>
            <div style={{ width: '1080px', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
                {data.map((application) => (
                    <div key={application.name}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                            <img src={`https://app.yunohost.org/default/v3/logos/${application.logo_hash}.png`} alt="" width={64} height={64} loading='lazy' />
                            <li>{application.name}</li>
                        </div>
                        <p>{application.description}</p>
                        <span>{application.version}</span>
                        {application.subtags && application.subtags.length > 0 && (
                            <ul>
                                {application.subtags.map((subtag, index) => (
                                    <li key={index}>{subtag}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BundlesInstaller
