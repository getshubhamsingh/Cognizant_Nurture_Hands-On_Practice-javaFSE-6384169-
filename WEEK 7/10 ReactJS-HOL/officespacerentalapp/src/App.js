import React from 'react';

function App() {
  // JSX heading element
  const heading = <h1> Office Space Rental App</h1>;

  // Working image URL
  const bannerUrl = "https://images.unsplash.com/photo-1590608897129-79da98d159ab?auto=format&fit=crop&w=1200&q=80";

  // List of office objects
  const offices = [
    { name: 'Skyline Tower', rent: 50000, address: 'Sector 21, Noida' },
    { name: 'Cyber Park', rent: 62000, address: 'Golf Course Road, Gurgaon' },
    { name: 'Tech Hub', rent: 45000, address: 'Hinjewadi, Pune' },
    { name: 'EcoSpace', rent: 72000, address: 'Electronic City, Bangalore' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Render heading */}
      {heading}

      {/* Render image */}
      <img
        src={bannerUrl}
        alt="Office Space"
        style={{ width: '100%', borderRadius: '8px', margin: '20px 0' }}
      />

      {/* Render office list */}
      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? 'red' : 'green',
          fontWeight: 'bold'
        };

        return (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '15px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h2>{office.name}</h2>
            <p>Address: {office.address}</p>
            <p style={rentStyle}>Rent: ₹{office.rent}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
