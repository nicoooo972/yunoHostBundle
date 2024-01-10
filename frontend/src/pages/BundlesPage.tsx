import React from 'react';
import { Grid, Container } from '@mui/material';
import Bundles from '../components/Bundles';
import Logo from '../assets/logo.png';
import { bundlesData } from '../data/Data';  // Remplacez par le bon chemin

const BundlesPage: React.FC = () => {
    const handleChoisir = (carteNom: string) => {
        // Logique à exécuter lors du choix d'une carte
        console.log(`Carte choisie : ${carteNom}`);
    };

    return (
        <div className="cartes-container">
            <img src={Logo} alt="Logo" />

            <Container>
                <h1>Application bundles
                </h1>
                <h2 className="titre-2">Choisissez le Bundle qui répond à votre besoin quotidien </h2>

                <Grid container spacing={3}>
                    {bundlesData.map((carte, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                            <Bundles
                                nom={carte.nom}
                                description={carte.description}
                                lien={carte.lien}
                                onChoisir={() => handleChoisir(carte.nom)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default BundlesPage;
