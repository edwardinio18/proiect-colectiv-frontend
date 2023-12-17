import {useState, useEffect} from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import '../styles/Leaderboard.css';
import {Jwt} from '../interfaces/Jwt';

const API_URL = import.meta.env.VITE_API_URL;

const TOKEN = jwtDecode<Jwt>(localStorage.getItem('token')!);
const USER_ID = TOKEN.nameid;

const USER_USERNAME_URL = `${API_URL}/Users/${USER_ID}`;
const LEADERBOARD_URL = `${API_URL}/Leaderboard/text`;

const getAllLeaderboardData = async () => {
  const response = await fetch(LEADERBOARD_URL);
  const data = await response.json();

  data.sort((a: any, b: any) => b.score - a.score);

  return data;
};

const getCurrentUserLeaderboardData = async (userUsername: string) => {
  const response = await fetch(`${LEADERBOARD_URL}/${userUsername}`);
  return await response.json();
};

const getUserUsername = async () => {
  const response = await fetch(USER_USERNAME_URL);
  return await response.text();
};

export function LeaderboardText() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentUserLeaderboardData, setCurrentUserLeaderboardData] = useState({
    position: 0,
    score: 0,
  });
  const [userUsername, setUserUsername] = useState('');
  const showEntriesCount = 3;
  const emptyRowsCount = 2;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllLeaderboardData();
      setLeaderboardData(data);

      const userUsernameData = await getUserUsername();
      setUserUsername(userUsernameData);

      const currentUserData = await getCurrentUserLeaderboardData(userUsernameData);
      setCurrentUserLeaderboardData(currentUserData);
    };

    fetchData();
  }, []);

  const currentRank = currentUserLeaderboardData.position;

  return (
    <div className='leaderboard-container'>
      <Header/>
      <main className='leaderboard-main'>
        <div className={'leaderboard-wrapper'}>
          <h2 className={'leaderboard-title'}>Leaderboard (text)</h2>
          <ul className='leaderboard'>
            {leaderboardData.slice(0, showEntriesCount).map((entry: any, index: number) => (
              <li key={index} className='leaderboard-item'>
                <span className='rank'>#{index + 1}</span>
                <span className='name'>{entry.userName}</span>
                <span className='score'>{entry.score} points</span>
              </li>
            ))}

            {currentRank > showEntriesCount && Array.from({length: emptyRowsCount}, (_, index) => (
              <li key={`empty-${index}`} className='leaderboard-item'>
                <span className='rank'>-</span>
                <span className='name'>-</span>
                <span className='score'>-</span>
              </li>
            ))}

            {currentRank > showEntriesCount && (
              <li className='leaderboard-item'>
                <span className='rank'>#{currentRank}</span>
                <span className='name'>{userUsername}</span>
                <span className='score'>{currentUserLeaderboardData.score} points</span>
              </li>
            )}
          </ul>
        </div>
      </main>

      <div className='leaderboard-buttons'>
        <Link to='/leaderboard/mixed' className='leaderboard-button'>
          See leaderboard (mixed)
        </Link>
        <Link to='/leaderboard/image' className='leaderboard-button'>
          See leaderboard (images)
        </Link>
      </div>
    </div>
  );
}