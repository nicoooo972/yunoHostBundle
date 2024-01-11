import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface InstallForm {
    onClose: () => void;
    open: boolean;
}

const Install: React.FC<InstallForm> = ({ onClose, open }) => {
    const [nomAdmin, setNomAdmin] = useState('');
    const [nomDomaine, setNomDomaine] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const handleSubmit = () => {
        console.log('Formulaire soumis avec les valeurs :', { nomAdmin, nomDomaine, motDePasse });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Remplissez le formulaire d'installation</DialogTitle>
            <DialogContent>
                {/* Using InputLabel to provide a label for the Select */}
                <InputLabel htmlFor="nom-administrateur">Nom de l'administrateur</InputLabel>
                <Select
                    id="nom-administrateur"
                    variant="outlined"
                    fullWidth
                    value={nomAdmin}
                    onChange={(e) => setNomAdmin(e.target.value as string)}
                >
                    {/* Example list of options, replace with your actual data */}
                    <MenuItem value="admin1">Admin 1</MenuItem>
                    <MenuItem value="admin2">Admin 2</MenuItem>
                    <MenuItem value="admin3">Admin 3</MenuItem>
                </Select>

                <TextField
                    label="Nom de domaine"
                    variant="outlined"
                    fullWidth
                    value={nomDomaine}
                    onChange={(e) => setNomDomaine(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Mot de passe"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Annuler
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Valider
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Install;