import React from 'react';
import '../Steps/Html/index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <p>This page was build with lots of love by Juliette Chevalier.</p>
      <ul className="noBullets">
        <li><FontAwesomeIcon icon="twitter"/></li>
      </ul>
    </footer>
  )
}