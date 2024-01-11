import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

interface InstallForm {
  onClose: () => void;
  open: boolean;
  selectedApps: string[];
}

const Install: React.FC<InstallForm> = ({ onClose, open, selectedApps }) => {
  const [admins, setAdmins] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [password, setPassword] = useState<string>('');
  const [selectedAdmin, setSelectedAdmin] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<string>('');

  useEffect(() => {
    // Récupération des noms et des domaines de la route get
    const getAdminsData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/install/users-admin',
        );
        console.log(response);
        const data = await response.json();

        setAdmins(Object.keys(data.admins.users));

        const response2 = await fetch('http://localhost:3000/install/domain');
        console.log(response2);
        const data2 = await response2.json();

        setDomains(data2.domain.domains);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getAdminsData(); // Call  the fetchData function directly
  }, []);

  const handleSubmit = () => {
    const formData = {
        name: selectedApps,
        admin: selectedAdmin,
        domain: selectedDomain,
        password: password,
      };
        console.log('Formulaire soumis avec les valeurs :', formData);
        onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Remplissez le formulaire d'installation</DialogTitle>
      <DialogContent>
        {/* Using InputLabel to provide a label for the Select */}
        <InputLabel htmlFor="nom-administrateur">
          Nom de l'administrateur
        </InputLabel>
        <Select
          variant="outlined"
          fullWidth
          value={selectedAdmin}
          onChange={(e) => setSelectedAdmin(e.target.value as string)}
        >
          {admins.map((user, index) => (
            <MenuItem key={index} value={user}>
              {user}
            </MenuItem>
          ))}
        </Select>
        <InputLabel htmlFor="domain">Nom du domaine</InputLabel>
        <Select
          variant="outlined"
          fullWidth
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value as string)}
        >
          {domains.map((main, index) => (
            <MenuItem key={index} value={main}>
              {main}
            </MenuItem>
          ))}
        </Select>
        <InputLabel htmlFor="password">Mot de passe</InputLabel>
        <TextField
          label="Mot de passe"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
