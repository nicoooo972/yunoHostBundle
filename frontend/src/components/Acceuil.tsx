import React, { useState, useEffect } from 'react';
import { Button, Container } from '@mui/material';


interface AccueilProps {
    scrollToCartes: () => void;
}

const Accueil: React.FC<AccueilProps> = ({ scrollToCartes }) => {
    const [randomColor, setRandomColor] = useState<string>('white'); // Couleur initiale
    const colors = ['#C6F'];
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



    return (
        <Container style={containerStyle}>
            <Button variant="contained" style={buttonStyle} onClick={scrollToCartes}>
                Commencez maintenant
            </Button>
        </Container>
    );
};

export default Accueil;