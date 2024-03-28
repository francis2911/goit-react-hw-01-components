import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContainerStatistics, TitleStatistics, ListStatistics, ItemStatistics, LabelStatistics, PercentageStatistics } from './Statistics.styled';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.stats = this.props.stats;
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  render() {
    return (
      <ContainerStatistics>
        <section className="statistics">
          {this.title != null && <TitleStatistics className="title">{this.title}</TitleStatistics>}

          <ListStatistics className="stat-list">
            {this.stats.map(stat => (
              <ItemStatistics className="item" bgColor={this.getRandomHexColor()}>
                <LabelStatistics className="label">{stat.label}</LabelStatistics>
                <PercentageStatistics className="percentage">{stat.percentage}%</PercentageStatistics>
              </ItemStatistics>
            ))}
          </ListStatistics>
        </section>
      </ContainerStatistics>
    );
  }
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;



