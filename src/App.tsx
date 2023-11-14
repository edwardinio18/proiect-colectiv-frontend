import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Leaderboard } from './pages/Leaderboard';
import { GameModes } from './pages/GameModes';
import { QuestionTypes } from './pages/QuestionTypes';
import { MyAccount } from './pages/MyAccount';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { PracticeGame } from './pages/PracticeGame';
import { NormalGame } from './pages/NormalGame';
import { Ramkings } from './pages/Rankings';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/leaderboard', // here probably should be the id of the user as query parameter
      element: <Leaderboard />
    },
    {
      path: '/gamemode', // again, id of user as query param
      element: <GameModes />
    },
    {
      path: '/questiontype', // again, id of user as query param
      element: <QuestionTypes />
    },
    {
      path: '/myaccount', // again, id of user as query param
      element: <MyAccount />
    },
    {
      path: '/practice',
      element: <PracticeGame />
    },
    {
      path: '/normal',
      element: <NormalGame />
    },
    {
      path: '/rankings',
      element: <Ramkings />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;
