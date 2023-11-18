import '../styles/Mode.css';
import '../styles/Game.css';
import Header from '../components/Header';

export const NormalGame: React.FC = () => {
    return (
        <div className="game-container">
            <Header/>
            <div className="game-main">
                <h1>Not available yet</h1>
            </div>
        </div>
    );
};

export default NormalGame;
