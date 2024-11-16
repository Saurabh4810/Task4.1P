import React from 'react';
import { Icon } from 'semantic-ui-react'; // Importing Icon for star rating

const articles = [
  { title: 'Article 1', description: 'Description of Article 1', author: 'Author 1', rating: 4.5 },
  { title: 'Article 2', description: 'Description of Article 2', author: 'Author 2', rating: 4.8 },
  { title: 'Article 3', description: 'Description of Article 3', author: 'Author 3', rating: 4.7 },
];

const FeaturedArticles = () => (
  <div>
    <center>
      <h2>Featured Articles</h2>
    </center>
    {/* Flower image below heading */}
    <div className="featured-articles-flower-image">
      <center>
        <img src="./ss.jpg" alt="Flower" style={{ width: '40%', height: 'auto' }} />
      </center>
    </div>

    {/* Article cards */}
    <div className="article-cards" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      {articles.map((article, index) => (
        <div key={index} className="article-card" style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}>
          <img src={`https://picsum.photos/200/150?random=${index}`} alt="Article" />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p><strong>{article.author}</strong></p>
          {/* Star rating */}
          <div>
            {[...Array(Math.floor(article.rating))].map((_, i) => (
              <Icon key={i} name="star" color="yellow" />
            ))}
            {article.rating % 1 !== 0 && <Icon name="star half" color="yellow" />}
            <span>{article.rating}</span>
          </div>
        </div>
      ))}
    </div>

    {/* See More Articles Button */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        See More Articles
      </button>
    </div>
  </div>
);

export default FeaturedArticles;
