import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';
import _ from 'lodash';

class AddFriendInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || ''
        };
    }

    render() {
        return (
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    autoFocus="true"
                    className={classnames('form-control', styles.addFriendInput)}
                    placeholder="Type the name of a friend"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleSubmit.bind(this)}/>
                <p>
                    <input className={styles.radioButton} value={1} type="radio" id="male" name="gender"
                           defaultChecked/>
                    <label htmlFor="male">Male</label>
                </p>
                <p>
                    <input className={styles.radioButton} value={0} type="radio" id="female" name="gender"
                           />
                    <label htmlFor="female">Female</label>
                </p>
            </div>
        );
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    handleSubmit(e) {
        const name = e.target.value.trim();
        const parent = e.currentTarget.parentElement;
        const gender = _.find(parent.getElementsByClassName(styles.radioButton), (item) => item.checked).value;
        if (e.which === 13) {
            this.props.addFriend(name, Number(gender));
            this.setState({name: ''});
        }
    }

}

AddFriendInput.propTypes = {
    addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
