import CompanyCard from './CompanyCard';

function App() {
  return (
    <div className="app">
      <h1>Top Nigerian Tech Companies</h1>
      <div className="company-grid">
        <CompanyCard 
          name="Paystack"
          industry="Fintech"
          location="Lagos"
          employees="200+"
          logo="paystack-logo.png"
          featured={true}
        />
        <CompanyCard 
          name="Flutterwave"
          industry="Payment Solutions"
          location="Lagos"
          employees="500+"
          logo="flutterwave-logo.png"
          featured={true}
        />
        <CompanyCard 
          name="Andela"
          industry="Tech Talent"
          location="Lagos"
          employees="1000+"
          logo="andela-logo.png"
          featured={false}
        />
      </div>
    </div>
  );
}

export default App;