import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  admins: string[];
  domains: string[];
  password: string;
}

const App: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const [admins, setAdmins] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    // Récupération des noms et des domaines de la route get
    fetch("http://localhost:3000/install/users-admin")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAdmins(data.admins);
      });
  }, []);

  const onSubmit = (data: { admins: string[]; domains: string[]; password: string }) => {
    // Faire quelque chose avec les données du formulaire
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Formulaire</h1>

      <div>
        <label htmlFor="admins">Admins</label>
        <select
          id="admins"
          {...register("admins")}
        >
          {admins.map((users, index) => (
            <option key={index} value={users}>
              {users}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="domains">Noms de domaine</label>
        <input
          type="text"
          id="domains"
          {...register("domains")}
          placeholder="Entrez les noms de domaine"
        />
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="Entrez le mot de passe"
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default App;
