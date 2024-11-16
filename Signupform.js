import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data.message);
      setEmail(''); // Clear the email field after successful subscription
    } catch (error) {
      setMessage('There was an error subscribing. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="signup-section">
      <h3>Sign up for Daily Insider</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button primary onClick={handleSubscribe}>
        Subscribe
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignupForm;
