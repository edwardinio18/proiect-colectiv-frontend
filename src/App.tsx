import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Leaderboard } from './pages/Leaderboard';
import { GameModes } from './pages/GameModes';
import { MyAccount } from './pages/MyAccount';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { PracticeGame } from './pages/PracticeGame';
import { QuestionType } from './pages/QuestionType';
import { Rankings } from './pages/Rankings';
import { OnlyText } from './pages/OnlyText';
import { OnlyPhotos } from './pages/OnlyPhotos';
import { MixedMode } from './pages/MixedMode';


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
      path: '/leaderboard',
      element: <Leaderboard />
    },
    {
      path: '/gamemode',
      element: <GameModes />
    },
    {
      path: '/myaccount',
      element: <MyAccount />
    },
    {
      path: '/practice',
      element: <PracticeGame />
    },
    {
      path: '/question-type',
      element: <QuestionType />
    },
    {
      path: '/rankings',
      element: <Rankings />
    }, 
    {
      path: '/normal-text', 
      element: < OnlyText/>
    }, 
    {
      path: '/normal-images',
      element: <OnlyPhotos/>
    }, 
    {
      path: '/normal-mixed', 
      element: <MixedMode/>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;
