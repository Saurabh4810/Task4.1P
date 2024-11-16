import React from 'react';
import { Icon } from 'semantic-ui-react';

const tutorials = [
  { title: 'Tutorial 1', description: 'Description of Tutorial 1', rating: 4.6 },
  { title: 'Tutorial 2', description: 'Description of Tutorial 2', rating: 4.9 },
  { title: 'Tutorial 3', description: 'Description of Tutorial 3', rating: 4.7 },
];

const FeaturedTutorials = () => (
  <div>
    <center>
      <h2>Featured Tutorials</h2>
    </center>

    {/* Tutorial Cards */}
    <div className="tutorial-cards" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      {tutorials.map((tutorial, index) => (
        <div key={index} className="tutorial-card" style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}>
          <img src={`https://picsum.photos/200/150?random=${index + 3}`} alt="Tutorial" />
          <h3>{tutorial.title}</h3>
          <p>{tutorial.description}</p>
          {/* Star Rating */}
          <div>
            {[...Array(Math.floor(tutorial.rating))].map((_, i) => (
              <Icon key={i} name="star" color="yellow" />
            ))}
            {tutorial.rating % 1 !== 0 && <Icon name="star half" color="yellow" />}
            <span>{tutorial.rating}</span>
          </div>
        </div>
      ))}
    </div>

    {/* See More Tutorials Button */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        See More Tutorials
      </button>
    </div>
  </div>
);

export default FeaturedTutorials;
