import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Bundles.css';

interface Bundles {
    nom: string;
    description: string;
    lien?: string;
    onChoisir: () => void;
}

const Bundles: React.FC<Bundles> = ({ nom, description, lien, onChoisir }) => {
    return (
        <div className='bundles-container pt-10'>
            <div className="relative ">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <Card className="relative p-6 bg-white border-2 border-indigo-500 rounded-lg hover:scale-105 transition duration-500">
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
                        <Button className="bundles-button" variant="contained" onClick={onChoisir}>
                            Choisir
                        </Button>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default Bundles;
