import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransactionHistoryContainer, Table, TableHeader, TableCell } from './TransactionHistory.styled';

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }

  render() {
    return (
      <TransactionHistoryContainer>
        <Table className="transaction-history">
          <thead>
            <tr>
              <TableHeader>Type</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Currency</TableHeader>
            </tr>
          </thead>

          <tbody>
            {this.items.map((item, index) => (
              <tr key={item.id}>
                <TableCell isAlternate={index % 2 === 1}>
                  {item.type.slice(0, 1).toUpperCase() + item.type.slice(1)}
                </TableCell>
                <TableCell isAlternate={index % 2 === 1}>{item.amount}</TableCell>
                <TableCell isAlternate={index % 2 === 1}>{item.currency}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TransactionHistoryContainer>
    );
  }
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
