import { useState, useEffect } from 'react';

interface BundlesInstallerProps {
  // Add any specific props if needed
}

const BundlesInstaller: React.FC<BundlesInstallerProps> = () => {
  const [data, setData] = useState<string[]>([]);

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
    <>
      <h1 className='text-2xl md:text-4xl pt-20 font-semibold'>Vos applications Installées</h1>
<div className='grid grid-cols-2 gap-10 pt-10'>
  {data.map((application, index) => (
    <div className='flex px-4 py-2 rounded-md shadow-lg bg-gray-50 items-center justify-between w-1/2 mx-auto' key={index}>
      <li className='flex mr-12 py-2 justify-center text-lg font-semibold'>{application}</li>
      <svg width="30" height="30" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#32cd44" stroke-linecap="round" stroke-linejoin="round">
          <path d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4" />
          <circle cx="7" cy="7" r="6.5" />
        </g>
      </svg>
    </div>
  ))}
</div>

    </>
  );
};

export default BundlesInstaller;
