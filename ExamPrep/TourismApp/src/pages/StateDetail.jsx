import {useParams, useNavigate} from "react-router-dom";
import './StateDetail.css';

function StateDetail() {
    const {stateId } = useParams();
    const navigate = useNAvigate();

    const stateInfo = {
        lagos: {
            name: 'Lagos',
            capital: 'Ikeja',
            region: 'South West',
            population: '14 million',
            description: 'Lagos is the economic hub of Nigeria and one of the fastest-growing cities in Africa.',
            attractions: ['Lekki conservation Centre', 'National museum', 'Bar Beach']
        },
        abuja: {
            name: 'FCT Abuja',
            capital: 'Abuja',
            region: 'North Central',
            population: '3.5 million',
            description: 'Abuja is the capital city of Nigeria, known for its modern architecture and central location',
            attractions: ['Aso Rock', 'National Mosque', 'Millenium Park']
        },
        kano: {
            name: 'Kano',
            capital: 'Kano',
            region: 'North West',
            population: '13 million',
            description: 'Kano is one of the oldest cities in West Africa and a major commercial center',
            attractions: ['Kano City Walls', 'Gidan Makama Museum', 'Kurmi Market']     
        },
        rivers: {
            name: 'Rivers',
            capital: 'Port Harcourt',
            region: 'South South',
            population: '7 million',
            description: 'Rivers State is known for its oil and gas industry and beautiful waterways.',
            attractions: ['Port Harcourt Tourist Beach', 'Isaac Boro Park', 'Rivers State Museum']
        },
        oyo: {
            name: 'Oyo',
            capital: 'Ibadan',
            region: 'South West',
            population: '7 million',
            description: 'Oyo State is home to Ibadan, one of the Largest cities in West Africa.',
            attractions: ['Cocoa House', 'University of Ibadan', 'Bower Tower']
        },
        kaduna: {
            name: 'Kaduna',
            capital: 'Kaduna',
            region: 'North West',
            population: '8 million',
            description: 'Kaduna is a major industrial and commercial centre in northern Nigeria.',
            attractions: ['Kajuru Castle', 'National Museum Kaduna', 'Kanmuku National Park']
        },
    };

    const state = stateInfo[stateId];

    if (!state) {
        return (
            <div className="state-detail">
                <h1>State not found</h1>
                <button onClick={() => navigate('/states')}>
                    Back to States
                </button>
            </div>
        );
    }

    return (
        <div className="state-detail">
            <button onClick={() => navigate('/states')} className="back-btn">
                ← Back to States
            </button>

            <h1>{state.name} State</h1>

            <div className="states-info">
                <div className="info-item">
                    <strong>Capital:</strong> {state.capital}
                </div>
                <div className="info-item">
                    <strong>Region:</strong> {state.region}
                </div>
                <div className="info-item">
                    <strong>Population:</strong> {state.population}
                </div>
            </div>

            <div className="description">
                <h2>About</h2>
                <p>{state.description}</p>
            </div>

            <div className="attractions">
                <h2>Popular Attractions</h2>
                <ul>
                    {state.attractions.map((attraction, index) => (
                        <li key={index}>{attraction}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StateDetail;