import React from 'react';
import './../css/DefaultTemplate.css'; // Assuming the CSS file is converted or reused
import './../css/screen.css'; // Importing screen.css
import MemberRegistration from './MemberRegistration';
import logo from './../logo.svg'; // Assuming the logo is in the same directory

const DefaultTemplate = () => {
  return (
    <div id="container">
      <div className="dualbrand">
        <img src="resources/gfx/rhjb_eap_logo.png" alt="Red Hat JBoss Logo" />
      </div>
      <div id="content">
        {/* Placeholder for dynamic content */}
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Welcome to the Member Registration App</h1>
                </header>
                <main>
                    <MemberRegistration />
                </main>
            </div>
        </div>
      </div>
      <div id="aside">
        <p>Learn more about Red Hat JBoss Enterprise Application Platform.</p>
        <ul>
          <li>
            <a href="https://access.redhat.com/documentation/en/jboss-enterprise-application-platform/">
              Documentation
            </a>
          </li>
          <li>
            <a href="http://www.redhat.com/en/technologies/jboss-middleware/application-platform">
              Product Information
            </a>
          </li>
        </ul>
      </div>
      <div id="footer">
        <p>
          This project was generated from a Maven archetype from JBoss.
          <br />
        </p>
      </div>
    </div>
  );
};

export default DefaultTemplate;