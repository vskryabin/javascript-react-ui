import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './Toggle';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  order: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  order: 'asc',
};

class SortButton extends React.Component {
  render() {
    const { order } = this.props;
    return (
      <Toggle
        text = {order === 'asc' ? 'Ascending' : 'Descending'}
        icon = {order === 'asc' ? 'arrow-circle-up' : 'arrow-circle-down'}
        {...this.props}
      />
    );
  }
}

SortButton.propTypes = propTypes;
SortButton.defaultProps = defaultProps;

export default SortButton;
