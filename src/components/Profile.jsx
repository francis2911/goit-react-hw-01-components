import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContainerProfile, ImageProfile, NameProfile, DescriptionProfile, ListProfile, StastProfile, StatsLabel, StastQuantity } from './Profile.styled';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.username = this.props.username;
    this.tag = this.props.tag;
    this.location = this.props.location;
    this.avatar = this.props.avatar;
    this.stats = this.props.stats;
  }

  render() {
    return (

      <ContainerProfile className="profile">
        <DescriptionProfile className="description">
          <ImageProfile src={this.avatar} alt={this.username} className="avatar" />
          <NameProfile className="name">{this.username}</NameProfile>
          <span className="tag">@{this.tag}</span>
          <p className="location">{this.location}</p>
        </DescriptionProfile>

        <StastProfile className="stats">
          {Object.entries(this.stats).map(([key, value]) => (
            <ListProfile>
              <StatsLabel className="label">{key}</StatsLabel>
              <StastQuantity className="quantity">{value}</StastQuantity>
            </ListProfile>
          ))}
        </StastProfile>
      </ContainerProfile>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

