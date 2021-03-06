import React from 'react';
import css from './Footer.css';
import config from '../../../config/config.json';

const Footer = () => (
  <footer className={css.footer}>
    <p>
      {config.name} is on&nbsp;
      <a href={config.github}>GitHub</a>.
      <br />
      <a href="/docs">Docs</a>
      &nbsp;&middot;&nbsp;
      <a href={`${config.github}/issues`}>Report an issue</a>
      &nbsp;&middot;&nbsp;
      <a href={`${config.github}/fork`}>Contribute</a>
    </p>
  </footer>
);

export default Footer;
