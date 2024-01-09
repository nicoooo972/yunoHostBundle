import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const Accueil: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '150px',
        marginBottom: '150px',
    };

    const titleStyle: React.CSSProperties = {
        marginBottom: '20px',
    };

    const buttonStyle: React.CSSProperties = {
        marginTop: '120px',
        color: 'primary',
    };

    return (
        <Container style={containerStyle}>
            <Typography variant="h4" gutterBottom style={titleStyle}>
                Vous cherchez à synchroniser vos données entre périphériques?
            </Typography>
            <Typography variant="h4" gutterBottom style={titleStyle}>
                Vous voulez sécuriser vos données?
            </Typography>
            <Typography variant="h4" gutterBottom style={titleStyle}>
                Vous voulez un accès hors ligne à vos données?
            </Typography>

            <Button variant="contained" style={buttonStyle}>
                Commencez maintenant
            </Button>
        </Container>
    );
};

export default Accueil;
