import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Bundle.css';

interface Bundles {
    nom: string;
    description: string;
    lien?: string;
    onChoisir: () => void;
}

const Bundles: React.FC<Bundles> = ({ nom, description, lien, onChoisir }) => {
    return (
        <Card className="bundles-card">
            <CardContent>
                <Typography variant="h5" component="div">

                    {nom}


                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                {lien ? (
                    <Button className="bundles-button" component={Link} to={lien} variant="contained">
                        Choisir
                    </Button>
                ) : (
                    <Button className="bundles-button" variant="contained" onClick={onChoisir} style={{ marginTop: '8%' }}>
                        Choisir
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default Bundles;