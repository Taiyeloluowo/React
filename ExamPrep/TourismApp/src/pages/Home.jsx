import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Explore Nigeria</h1>
            <p>Discover the beauty and diversity of Nigerian states</p>
            <div className="home-stats">
                <div className="stat-card">
                    <h3>36</h3>
                    <p>States</p>
                </div>
                <div className="stat-card">
                    <h3>6</h3>
                    <p>Geo-Political Zones</p>
                </div>
                <div className="stat-card">
                    <h3>200M+</h3>
                    <p>Population</p>
                </div>
            </div>
            <Link to="/states" className="explore-btn">Explore States</Link>
        </div>
    );
}

export default Home;