import React from 'react';
import '../Steps/Html/index.scss';
import './index.scss';

const admiosLogo = require('../../images/admios-logo.png');

export default function Footer(): JSX.Element {
  return (
    <footer>
        <a href="https://twitter.com/_juliettech">
        <p>This page was build with lots of 💙 by
          Juliette Chevalier.
        </p>
      </a>

      <img src={admiosLogo} alt="Admios" width="200px" />
    </footer>
  )
}