/* component for left had side navigation */


import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SideNav.scss';
import Link from '../Link';

function SideNav({ className }) {
  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link className={s.link} to="/find-artisan">Find an Artisan</Link>
      <Link className={s.link} to="/review-artisan">Review an Artisan</Link>
    </div>
  );
}

SideNav.propTypes = {
  className: PropTypes.string,
};

export default withStyles(SideNav, s);
