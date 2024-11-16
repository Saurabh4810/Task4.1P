const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailgun = require('mailgun-js');

const app = express();
const PORT = 5000; // You can change the port if necessary

// Mailgun configuration
const mg = mailgun({
  apiKey: 'Your Api Key', // Removed Api Key Due to Security purpose
  domain: 'Your Domain',  // Removed Domain Due to Security purpose
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint for subscribing to the newsletter
app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const data = {
    from: 'Daily Insider <newsletter@YOUR_MAILGUN_DOMAIN>',
    to: email,
    subject: 'Welcome to the Daily Insider Newsletter!',
    text: 'Thank you for subscribing to our newsletter!',
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    return res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
