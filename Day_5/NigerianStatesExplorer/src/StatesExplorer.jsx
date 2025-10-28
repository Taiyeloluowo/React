import React, { useState } from "react";
import "./App.css";

const StatesExplorer = () => {
    // Step 1: Array of Nigerian States
    const statesData = [
        { name: "", capital: "Ikeja", region: "North East" },
        { name: "Oyo", capital: "Ibadan", region: "North Central" },
        { name: "Kano", capital: "Kano", region: "North West" },
        { name: "Enugu", capital: "Enugu", region: "South East" },
        { name: "Kaduna", capital: "Kaduna", region: "South South" },
        { name: "Plateau", capital: "Jos", region: "North Central" },
        { name: "Rivers", capital: "Port Harcourt", region: "South West" },
        { name: "Borno", capital: "Maiduguri", region: "North East" },
        { name: "Edo", capital: "Benin City", region: "South South" },
        { name: "Osun", capital: "Osogbo", region: "South West" },
    ];

    // Step 2: State management
    const [search, setSearch] = useState("");
    const [regionFilter, setRegionFilter] = useState("All");

    // Step 3: Filtering logic
    const filteredStates = statesData.filter((state) => {
        const matchesSearch =
            state.name.toLowerCase().includes(search.toLowerCase()) ||
            state.capital.toLowerCase().includes(search.toLowerCase());
        const matchesRegion =
            regionFilter === "All" || state.region.includes(regionFilter);
        return matchesSearch && matchesRegion;
    });

    return (
        <div className="states-container">
            <h2>🇳🇬 Nigerian States Explorer</h2>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by state or capital..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />

            {/* Region Filter Buttons */}
            <div className="region-buttons">
                {["All", "North", "South", "East", "West"].map((region) => (
                    <button
                        key={region}
                        className={regionFilter === region ? "active" : ""}
                        onClick={() => setRegionFilter(region)}
                    >
                        {region}
                    </button>
                ))}
            </div>

            {/* Results */}
            <ul className="state-list">
                {filteredStates.length > 0 ? (
                    filteredStates.map((state, index) => (
                        <li key={index}>
                            <strong>{state.name}</strong> - Capital: {state.capital} (
                            {state.region})
                        </li>
                    ))
                ) : (
                    <p className="no-results">No results found</p>
                )}
            </ul>

            {/* Footer */}
            <p className="count-text">
                Showing {filteredStates.length} of {statesData.length} states
            </p>
        </div>
    );
};

export default StatesExplorer;