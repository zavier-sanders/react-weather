import React from 'react';
import imgSpace from '../logo.svg';
import imgLN from '../images/linkedin-logo.svg';
import imgTwitter from '../images/twitter-icon_black.svg';

export default (props) => {
    return (
      <div className="navbar">
        <div className="w-container">
          <div className="w-row">
            <div className="left-nav w-col w-col-6 w-col-small-6 w-col-tiny-6" style={{display: "inline-block"}}>
              <a className="w-inline-block" href="index.html"><img className="logo" src={imgSpace} width="37"/>
                <div className="brand">React Weather</div>
              </a>
            </div>
            <div className="right-nav w-col w-col-6 w-col-small-6 w-col-tiny-6" style={{display: "inline-block", float: "right"}}>
              <a className="social-btn w-inline-block" href="https://www.linkedin.com/in/zaviersanders"><img src={imgLN} width="25"/>
              </a>
              <a className="social-btn w-inline-block" href="http://twitter.com/zavier_sanders"><img src={imgTwitter} width="25"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
