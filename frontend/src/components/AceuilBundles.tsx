import React, { useState, useEffect } from 'react';
import logoImage from '../assets/logoBlanc.png';

interface AccueilBundles {
    scrollToCartes: () => void;
}

const AccueilBundles: React.FC<AccueilBundles> = ({ scrollToCartes }) => {
    const [randomColor, setRandomColor] = useState<string>('white'); // Initial color
    const colors = ['#C6F', '#4285f4', '#0f9d58', '#f4b400'];

    useEffect(() => {
        // Select a random color from the list
        const randomIndex = Math.floor(Math.random() * colors.length);
        const newColor = colors[randomIndex];
        setRandomColor(newColor);
    }, []);

    const buttonStyle: React.CSSProperties = {
        backgroundColor: randomColor,
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
    };
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '150px',
    };

    return (
        <div style={containerStyle}>
            <img className="image-style" src={logoImage} alt="Logo" style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
            <h1 style={{ marginBottom: '20px', color: randomColor }}>Application bundles</h1>
            <h2 style={{ color: randomColor }}>Choisissez le Bundle qui répond à votre besoin quotidien </h2>
            <button style={buttonStyle} onClick={scrollToCartes}>
                Je choisis mon Bundle
            </button>
        </div>
    );
};

export default AccueilBundles;
