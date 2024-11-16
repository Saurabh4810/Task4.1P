import React from 'react';
import Navbar from './Navbar'; // Importing Navbar component
import FeaturedArticles from './FeaturedArticles'; // Importing FeaturedArticles component
import FeaturedTutorials from './featuredTutorial'; // Importing FeaturedTutorials component
import SignupForm from './Signupform'; // Importing SignupForm component
import Footer from './Footer'; // Importing Footer component

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedArticles />
      <FeaturedTutorials />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;