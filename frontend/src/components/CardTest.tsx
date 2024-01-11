import { useState, useEffect } from "react";

interface Application {
    bundleName: string;
    bundleDesc: string;
}

function App() {
    const [data, setData] = useState<Application[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/app/files', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
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

    return (
        <div>
            {data.map((application, index) => (
                <div key={index}>
                    {application.bundleName && <div>Bundle Name: {application.bundleName}</div>}
                    {application.bundleDesc && <div>Bundle Description: {application.bundleDesc}</div>}

                </div>
            ))}
        </div>
    );
}

export default App;
