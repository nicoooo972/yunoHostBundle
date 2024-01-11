import { useState, useEffect } from "react";

interface Application {
  name: string;
  description: string;
  weight: string;
  version: string;
  category: string;
  subtags: string[];
  logo_hash: string;
}

function App() {
  const [data, setData] = useState<Application[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/app/files', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Include a body if needed
          // body: JSON.stringify({ key: 'value' }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterDataByCategory = () => {
    if (selectedCategory) {
      const filteredData = data.filter(application => application.category === selectedCategory);
      return filteredData;
    }
    return data;
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All Bundles</option>
        <option value="synchronization">Synchronization</option>
        <option value="social_media">Social Media</option>
        <option value="multimedia">Multimedia</option>
      </select>

      <div style={{ width: '1080px', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
        {filterDataByCategory().map((application) => (
          <div key={application.name}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
              <img src={`https://app.yunohost.org/default/v3/logos/${application.logo_hash}.png`} alt="" width={64} height={64} loading='lazy' />
              <li>{application.name}</li>
            </div>
            <p>{application.description}</p>
            <span>{application.weight}</span>
            <span>{application.version}</span>
            <strong>{application.category}</strong>
            {application.subtags && application.subtags.length > 0 && (
              <ul>
                {application.subtags.map((subtag, index) => (
                  <li key={index}>{subtag}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
