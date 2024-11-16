import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const Navbar = () => (
  <Menu
    style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#1b1c1d', // Dark background color
      padding: '10px 20px', // Adds padding to the navbar
    }}
    secondary
    inverted // Inverts the text and button colors for a dark theme
  >
    {/* DEV@Deakin Text */}
    <Menu.Item>
      <span
        style={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: '#f9f9f9', // White text color for contrast
          marginRight: '30px',
        }}
      >
        DEV@Deakin
      </span>
    </Menu.Item>

    {/* Navigation Links */}
    <Menu.Item name="Home" style={{ color: '#f9f9f9', marginRight: '20px' }} />
    <Menu.Item name="About" style={{ color: '#f9f9f9', marginRight: '20px' }} />
    <Menu.Item name="Features" style={{ color: '#f9f9f9', marginRight: '20px' }} />

    {/* Right-aligned Post Login button */}
    <Menu.Menu position="right" style={{ marginLeft: 'auto' }}>
      <Menu.Item>
        <Button primary>Post Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;