import React, { useState } from "react";
import "./WelcomeContact.css";

function WelcomeContact() {
  const [input, setInput] = useState();

  return (
    <div className="welcomecontact">
      <div className="welcomecontact_container">
        <div className="welcomecontact_email">
          <h3>Join our newsletter</h3>
          <form>
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
        <div className="welcomecontact_social">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Pinterest</p>
          <p>Youtube</p>
        </div>
        <div className="welcomecontact_terms">
          <p>Cookies settings</p>
          <p>Privacy and Cookies Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeContact;
