import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import Pagination from './Pagination'

class FriendList extends Component {
    state = {page: 1};

    changePage(page) {
        this.setState({
            page: page + 1
        });
    }

    render() {
        const perPage = 2;
        const pages = Math.ceil(this.props.friends.length / perPage);
        const currentPage = this.state.page;
        const count = this.props.friends.length;
        const startOffset = (currentPage - 1) * perPage;
        let startCount = 0;
        return (
            <div className={styles.listContainer}>
                <ul className={styles.friendList}>
                    {count > 0 ? this.props.friends.map((friend, index) => {
                        if (index >= startOffset && startCount < perPage) {
                            startCount++;
                            return (
                                <FriendListItem
                                    key={index}
                                    id={index}
                                    name={friend.name}
                                    starred={friend.starred}
                                    gender={friend.gender}
                                    {...this.props.actions}
                                />
                            );
                        }
                        return null;
                    }) : <li className={styles.notFound}>Item not found</li>}

                </ul>
                {count > 2 && <Pagination currentPage={currentPage - 1}
                                          pageCount={pages}
                                          onPageClick={this.changePage.bind(this)}/>}
            </div>
        );
    }

}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default FriendList;
