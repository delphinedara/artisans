/**
 * Notes
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>© 2017 Artisans</span>
      </div>
    </div>
  );
}

export default withStyles(Footer, s);
