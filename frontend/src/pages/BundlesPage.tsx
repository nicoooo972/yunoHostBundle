import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import Bundles from '../components/Bundles';
import Logo from '../assets/logo.png';
// import { bundlesData } from '../data/Data';
import '../components/Bundles.css';  // Import du fichier CSS
import { useHref } from 'react-router-dom';

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
                const result = await response.json();

                // Filtrer les propriétés nécessaires (bundleName et bundleDesc)
                const filteredData = result
                    .filter((item) => item.bundleName && item.bundleDesc)
                    .map((item) => ({ bundleName: item.bundleName, bundleDesc: item.bundleDesc }));

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
        <div className="cartes-container">
            <img src={Logo} alt="Logo" style={{ marginBottom: '20px' }} />

            <Container>
                <h1>Application bundles</h1>
                <h2 className="titre-2">Choisissez le Bundle qui répond à votre besoin quotidien </h2>
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
        </div>
    );
};

export default BundlesPage;