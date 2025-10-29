import React, { useState } from "react";
import "./App.css";

const StatesExplorer = () => {
    // Step 1: Array of Nigerian States
    const statesData = [
        { name: "Adamawa", capital: "Yola", region: "North East" },
        { name: "Jigawa", capital: "Dutse", region: "North West" },
        { name: "Benue", capital: "Makurdi", region: "North Central" },
        { name: "Ebonyi", capital: "Abakaliki", region: "South East" },
        { name: "Cross-river", capital: "Calabar", region: "South South" },
        { name: "Niger", capital: "Minna", region: "North Central" },
        { name: "Ekiti", capital: "Ado-Ekiti", region: "South West" },
        { name: "Gombe", capital: "Gombe", region: "North East" },
        { name: "Bayelsa", capital: "Yenagoa", region: "South South" },
        { name: "Ogun", capital: "Abeokuta", region: "South West" },
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