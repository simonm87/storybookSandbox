import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ buttonType, backgroundColor, size, label, ...props }) => {

  let sizeClass = '';
  if (size === 'small') {
    sizeClass = ' sm';
  }

  return (
    <a className={`btn--${buttonType}${sizeClass}`}>{label}</a>

    //<button
    //  type="button"
    //  className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    //  style={backgroundColor && { backgroundColor }}
    //  {...props}
    //>
    //  {label}
    //</button>

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
  backgroundColor: PropTypes.string,
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
  backgroundColor: null,
  buttonType: 'action',
  size: 'large',
  onClick: undefined
};
