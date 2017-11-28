/* Component for the display business categories */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BizPanel.scss';
import Link from '../Link';

function BizPanel({ className }) {
  return (
    <h1>{title}</h1>
    <p>Here is where the business panels will go.</p>
    </div>
  );
}

BizPanel.propTypes = {
  className: PropTypes.string,
};

export default withStyles(BizPanel, s);
