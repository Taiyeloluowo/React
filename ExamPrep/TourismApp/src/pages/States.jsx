import { Link } from 'react-router-dom';
import './States.css';

function States() {
    const states = [
        { id: 'lagos', name: 'Lagos', capital: 'Ikeja', region: 'South West' },
        { id: 'abuja', name: 'FCT Abuja', capital: 'Abuja', region: 'North Central' },
        { id: 'kano', name: 'Kano', capital: 'Kano', region: 'North West' },
        { id: 'rivers', name: 'Rivers', capital: 'Port-Harcourt', region: 'South South' },
        { id: 'oyo', name: 'Oyo', capital: 'Ibadan', region: 'South West' },
        { id: 'kaduna', name: 'Kaduna', capital: 'Kaduna', region: 'North West' },
    ];

    return (
        <div className="states-page">
            <h1>Nigerian States</h1>
            <p>Click on any state to learn more</p>

            <div className="states-grid">
                {states.map(state => (
                    <Link
                        to={`/states/${state.id}`}
                        key={state.id}
                        className="state-card"
                        >
                        <h3>{state.name}</h3>
                        <p>Capital: {state.capital}</p>
                        <p className="region">{state.region}</p>
                        </Link>
                ))}
            </div>
        </div>
    );
}

export default States;