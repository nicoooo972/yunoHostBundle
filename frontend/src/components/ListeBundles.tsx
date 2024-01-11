import React from 'react';
import { Container, Grid } from '@mui/material';
import Bundles from './Bundle';
import { bundlesData } from '../data/Data';

interface ListeBundlesProps {
    handleChoisir: (carteNom: string) => void;
}

const ListeBundles: React.FC<ListeBundlesProps> = ({ handleChoisir }) => {
    return (
        <div className="cartes-container bundles-page-container">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {bundlesData.map((carte, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4} style={{ marginBottom: '10px' }}>
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

export default ListeBundles;
