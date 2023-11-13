import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Leaderboard } from './pages/Leaderboard';
import { GameModes } from './pages/GameModes';
import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Home/>
    }, 
    {
      path: '/login', 
      element: <Login/>
    }, 
    {
      path: '/register', 
      element: <Register/>
    }, 
    {
      path: '/leaderboard', // here probably shoul be the id of the user as query parameter
      element: <Leaderboard/>
    }, 
    {
      path: '/gamemode', // again, id of user as query param
      element: <GameModes/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
