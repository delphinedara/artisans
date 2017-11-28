/* Component of buttons that trigger the biz panels. */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PanelTransTrigger.scss';
import Link from '../Link';

function PanelTransTrigger({ className }) {
  return (
    <p>I believe Panel transition triggers will be the buttons shown on the find an artisan render.</p>
  );
}

PanelTransTrigger.propTypes = {
  className: PropTypes.string,
};

export default withStyles(PanelTransTrigger, s);
