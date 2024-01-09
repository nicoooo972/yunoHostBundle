import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

interface CarteSimpleProps {
    title: string;
    description: string;
    imageUrl: string;
}

const CarteSimple: React.FC<CarteSimpleProps> = ({ title, description, imageUrl, }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleButtonClick = () => {
        // Gérer l'ouverture du dialogue ici
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        // Gérer la fermeture du dialogue ici
        setOpenDialog(false);
    };

    return (
        <div >
            <Card className="custom-card-container">
                <CardMedia component="img" height="180" image={imageUrl} alt={title} />

                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    <Button variant="contained" color="primary" onClick={handleButtonClick}>
                        En savoir plus
                    </Button>
                </CardContent>
            </Card>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {/* Ajoutez ici le contenu du dialogue, en fonction de vos besoins */}
                    <Typography variant="body1">{description}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Fermer
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CarteSimple;
