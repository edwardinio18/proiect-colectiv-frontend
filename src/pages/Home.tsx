import { Link } from "react-router-dom";

export function Home(){
    return (
        <>
            <h1>Home page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Go login</Link>
                    </li>
                    <li>
                        <Link to="/register">Go register</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">Go to leaderboard</Link>
                    </li>
                    <li>
                        <Link to="/gamemode">Go select gamemode</Link>
                    </li>
                    <li>
                        <Link to="/questiontype">Go select questiontype</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}