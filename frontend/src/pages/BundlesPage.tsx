import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import Bundles from '../components/Bundles';

// import { bundlesData } from '../data/Data';
import '../components/Bundles.css';  // Import du fichier CSS

interface Application {
    bundleName: string;
    bundleDesc: string;
}

const BundlesPage: React.FC = () => {
    const handleChoisir = (carteNom: string) => {
        console.log(`Carte choisie : ${carteNom}`);
    };


    const [data, setData] = useState<Application[]>([]);

    // ...

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/app/files');
                const result: Application[] = await response.json();

                // Ensure that each item has the required properties
                const filteredData = result.filter((item) => item.bundleName && item.bundleDesc);

                setData(filteredData);
                console.log(filteredData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // ...


    return (
        <>  <div className="dark:bg-gray-700 p-4 min-h-screen">
            <div className="relative py-12 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="relative">
                        <div className="flex items-center justify-center h-[50vh] px-2 sm:px-0">
                            <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
                                <h1
                                    className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-white">
                                    Vous cherchez à synchroniser vos données entre périphériques?
                                </h1>
                                <p className="text-center text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300">Launch
                                    Vous voulez un accès hors ligne à vos données</p>
                                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                    <a href="" target="_blank"
                                        className="relative flex h-9 w-full items-center justify-center px-8 before:absolute 
                                      before:inset-0 before:rounded-full before:bg-teal-400 before:transition before:duration-300 
                                      hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                        <span className="relative text-sm font-semibold text-white">
                                            Lancer le bundle
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



            <Container>
                <Grid container spacing={3}>
                    {data.map((application, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                            <Bundles
                                nom={application.bundleName}
                                description={application.bundleDesc}
                                lien={"/Synchro/"}
                                onChoisir={() => handleChoisir(application.bundleName)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </>
    );
};

export default BundlesPage;