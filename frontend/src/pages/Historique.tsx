import { useState, useEffect } from 'react';

interface Application {
  index: number;
  application: string[];
}

const BundlesInstaller: React.FC = () => {
  const [data, setData] = useState<Application[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/install/installed-apps')
      .then((response) => response.json())
      .then((data) => {
        // Mise à jour de l'état avec les données récupérées
        setData(data.installedApps);
        console.log(data.installedApps);    
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          width: '1080px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4rem',
        }}
      >
        {data.map((application, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <div>
                <h3>{application}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundlesInstaller;
