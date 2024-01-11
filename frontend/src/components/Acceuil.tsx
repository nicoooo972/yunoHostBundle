import React, { useState, useEffect } from 'react';
import { Button, Typography, Container } from '@mui/material';
import logoImage from '../assets/logoBlanc.png';

interface AccueilProps {
    scrollToCartes: () => void;
}

const Accueil: React.FC<AccueilProps> = ({ scrollToCartes }) => {
    const [randomColor, setRandomColor] = useState<string>('white'); // Couleur initiale
    const colors = ['#C6F', '#4285f4', '#0f9d58', '#f4b400'];
    useEffect(() => {
        // Sélectionnez une couleur aléatoire parmi la liste des couleurs
        const randomIndex = Math.floor(Math.random() * colors.length);
        const newColor = colors[randomIndex];
        setRandomColor(newColor);
    }, []);

    const containerStyle: React.CSSProperties = {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '150px',
    };

    const titleStyle: React.CSSProperties = {
        marginBottom: '20px',
        color: randomColor,
    };

    const buttonStyle: React.CSSProperties = {
        marginTop: '80px',
        color: 'white',
        backgroundColor: randomColor,
        paddingLeft: '3rem',
        paddingRight: '3rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        fontSize: '1rem',
        fontWeight: 'bold',
    };

    const imageStyle: React.CSSProperties = {
        width: '200px',
        height: 'auto',
        marginBottom: '20px',
    };

    return (
        <Container style={containerStyle}>
            <img src={logoImage} alt="Logo" style={imageStyle} />

            <Typography variant="h4" gutterBottom style={titleStyle}>
                Vous cherchez à synchroniser vos données entre périphériques?
            </Typography>
            <Typography variant="h4" gutterBottom style={titleStyle}>
                Vous voulez sécuriser vos données?
            </Typography>
            <Typography variant="h4" gutterBottom style={titleStyle}>
                Vous voulez un accès hors ligne à vos données?
            </Typography>

            <Button variant="contained" style={buttonStyle} onClick={scrollToCartes}>
                Commencez maintenant
            </Button>
        </Container>
    );
};

export default Accueil;