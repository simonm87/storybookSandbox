import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import classNames from "classnames";

export const Button = ({ buttonType, backgroundColor, size, label, ...props }) => {

  return (
    <a
      className={classNames({
        'btn--action': (buttonType === 'action' ? true : false),
        'btn--outline': (buttonType === 'outline' ? true : false),
        'sm': (size === 'small' ? true : false)
      })}>{label}</a>
  );
};


Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  //primary: PropTypes.bool,
  /**
   * What background color to use
   */
  //backgroundColor: PropTypes.string,
  /**
   * What type of button is it?
   */
  buttonType: PropTypes.oneOf(['action', 'outline']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  //backgroundColor: null,
  buttonType: 'action',
  size: 'large',
  onClick: undefined
};
