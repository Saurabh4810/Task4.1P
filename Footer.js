import React from 'react';
import { Icon } from 'semantic-ui-react'; // Importing Icon for social media

const Footer = () => (
  <div className="footer" style={{ backgroundColor: 'lightblue', padding: '20px' }}>
    <div className="footer-sections" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
      <div>
        <h4>Explore</h4>
        <p>Details about exploring</p>
      </div>
      <div>
        <h4>Support</h4>
        <p>Details about support</p>
      </div>
      <div>
        <h4>Stay Connected</h4>
        <p>Details about staying connected</p>
        {/* Social media icons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Icon name="facebook" size="large" />
          <Icon name="twitter" size="large" />
          <Icon name="instagram" size="large" />
        </div>
      </div>
    </div>
    <center>
      <p>Dev@Deakin 2022 | Privacy Policy | Terms of Conduct</p>
    </center>
  </div>
);

export default Footer;
