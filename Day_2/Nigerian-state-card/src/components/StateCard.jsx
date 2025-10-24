function StateCard({ state, capital, region, population, children}) {
    
            function getRegionColor(region) {
                if (region === "North"){
                    return "#8B4513"
                } else if (region === "South") {
                    return "#008751"
                } else if (region === "East") {
                    return "#FFD700"
                } else if (region === "West") {
                    return "#4169E1"
                } else {
                    return "#fff"
                }

            }

            return (
                <div className="main" style={{ backgroundColor: getRegionColor(region)}}>
                    <h1>{state}</h1>
                    <p><strong>Capital:</strong> {capital}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Population:</strong> {population}</p>
                    <p>{children}</p>
                </div>
            )


}

export default StateCard;