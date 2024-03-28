import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FriendListaItem, StatusDot, FriendName } from './FriendList.styled';

class FriendListItem extends Component {
  constructor(props) {
    super(props);
    this.avatar = this.props.avatar;
    this.name = this.props.name;
    this.isOnline = this.props.isOnline;
  }

  render() {
    return (
      <div>
        <FriendListaItem className="item">
          <StatusDot isOnline={this.isOnline} />
          <img
            className="avatar"
            src={this.avatar}
            alt={this.name + ' avatar'}
            width="48"
          />
          <FriendName className="name">{this.name}</FriendName>
        </FriendListaItem>
      </div>
    );
  }
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
