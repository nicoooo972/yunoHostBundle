import React, { useState, useEffect } from 'react';
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
    const [activeItems, setActiveItems] = useState<string[]>([]);

    useEffect(() => {
        setActiveItems(listItems);
    }, [listItems]);

    const handleButtonClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleToggleItem = (item: string) => {
        const isItemActive = activeItems.includes(item);
        if (isItemActive) {
            setActiveItems(activeItems.filter(activeItem => activeItem !== item));
        } else {
            setActiveItems([...activeItems, item]);
        }
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
                    <Button variant="contained" color="primary" onClick={onToggle} style={{ marginTop: '15%' }}>
                        {isSelected ? 'Désélectionner' : 'Sélectionner'}
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleButtonClick} style={{ marginTop: '15%', marginLeft: '3%' }}>
                        En savoir plus
                    </Button>
                </CardContent>
            </Card>

            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true}
                maxWidth="md"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {listItems.map(item => (
                            <li key={item} style={{ marginBottom: '5%', fontWeight: 'bold' }}>
                                {item}
                                <Button
                                    variant={activeItems.includes(item) ? "contained" : "outlined"}
                                    color={activeItems.includes(item) ? "secondary" : "primary"}
                                    onClick={() => handleToggleItem(item)}
                                    style={{ position: 'absolute', left: '85%' }}


                                >
                                    {activeItems.includes(item) ? "Désactiver" : "Activer"}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'flex-start' }}>
                    <Button onClick={handleCloseDialog} color="primary">
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default CarteSimple;
