import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListContainer, FriendList1 } from './FriendList.styled';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.friends = this.props.friends;
  }

  render() {
    return (
      <FriendListContainer>
        <FriendList1 className="friend-list">
          {this.friends.map(friend => (
            <FriendListItem
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          ))}
        </FriendList1>
      </FriendListContainer>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
