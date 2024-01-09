// CarteSimple.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface CarteSimpleProps {
    title: string;
    description: string;
    imageUrl: string;
}

const CarteSimple: React.FC<CarteSimpleProps> = ({ title, description, imageUrl }) => {
    return (
        <Card>
            {/* Image de la carte */}
            <CardMedia component="img" height="140" image={imageUrl} alt={title} />

            {/* Contenu de la carte */}
            <CardContent>
                {/* Titre de la carte */}
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                {/* Description de la carte */}
                <Typography variant="body2" color="text.secondary">

                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CarteSimple;

