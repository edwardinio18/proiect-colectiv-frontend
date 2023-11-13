import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { User } from './interfaces/User';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [prost, setProst] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`${apiUrl}/users/1`);
        if (!response.ok) {
          throw new Error(`o crapat`);
        }
        const user: User = await response.json();
        if (user.name) {
          setProst(user.name);
        }
    };
    fetchData();
  }, []);

  return (
    <Typography style={{ color: 'rgb(170, 51, 106)' }}>
      cine-i prost? {prost?? "loading..."}
    </Typography>
  );
}

export default App;
