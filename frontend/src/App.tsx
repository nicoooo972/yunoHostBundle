import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  admins: string[];
  domains: string[];
  password: string;
}

const App: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const [admins, setAdmins] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    // Récupération des noms et des domaines de la route get
    const getAdminsData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/install/users-admin',
        );
        const data = await response.json();

        setAdmins(Object.keys(data.admins.users));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getAdminsData(); // Call  the fetchData function directly
  }, []);

  useEffect(() => {
    const getDomainsData = async () => {
      try {
        const response = await fetch('http://localhost:3000/install/domain');
        const data = await response.json();
        console.log(data);
        setDomains(data.domain.domains);
      } catch (error) {
        console.error('Error fetching domains:', error);
      }
    };
    console.log(domains);

    getDomainsData();
  }, []);

  const onSubmit = (data: {
    admins: string[];
    domains: string[];
    password: string;
  }) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Formulaire</h1>

      <div>
        <label htmlFor="admins">Admins</label>
        <select id="admins" {...register('admins')}>
          {admins.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="domains">Noms de domaine</label>
        <select id="domains" {...register('domains')}>
          {domains.map((main, index) => (
            <option key={index} value={main}>
              {main}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          {...register('password')}
          placeholder="Entrez le mot de passe"
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default App;
