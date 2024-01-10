import React, { useState } from 'react';
import './CarteSimple.css';

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
    isSelected: boolean;
    onToggle: () => void;
    listItems: string[];
}

const CarteSimple: React.FC<CarteSimpleProps> = ({ title, description, imageUrl, isSelected, onToggle, listItems }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleButtonClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div className={`card-container ${isSelected ? 'selected' : ''}`}>
            <Card className='custom-card-container' >
                <CardMedia component="img" height="200" image={imageUrl} alt={title} />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={onToggle} style={{ marginTop: '5%' }}>
                        {isSelected ? 'Désélectionner' : 'Sélectionner'}
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleButtonClick} style={{ marginTop: '5%', marginLeft: '3%' }}>
                        En savoir plus
                    </Button>
                </CardContent>
            </Card>

            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true} maxWidth="md">
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <div>
                        <p>Nom: Nom statique</p>
                        <p>Description: Description statique</p>
                        <p>Catégorie: Catégorie statique</p>
                        <p>Sous-catégorie: Sous-catégorie statique</p>
                        <p>Taille: Taille statique</p>
                        <p>Version: Version statique</p>
                    </div>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'flex-start' }}>
                    <Button onClick={handleCloseDialog} color="primary">
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CarteSimple;
