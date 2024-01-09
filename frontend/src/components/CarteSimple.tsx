import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface CarteSimpleProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const CarteSimple: React.FC<CarteSimpleProps> = ({ title, description, imageUrl, link }) => {
    return (
        <Card>
            <CardMedia component="img" height="140" image={imageUrl} alt={title} />

            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>

                <Button variant="contained" color="primary" href={link} target="_blank">
                    En savoir plus
                </Button>
            </CardContent>
        </Card>
    );
};

export default CarteSimple;
