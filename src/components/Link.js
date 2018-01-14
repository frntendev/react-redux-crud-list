import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }

    render() {
        const { onClick, children } = this.props;
        return <a href="" onClick={event => {
            event.preventDefault();
            onClick();
        }
        }>{children}</a>;
    }
}

export default Link;