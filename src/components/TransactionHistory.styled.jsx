import styled from 'styled-components';

export const TransactionHistoryContainer = styled.div`
  width: 600px;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin:50px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHeader = styled.th`
  border: 1px solid #EAECEE;
  background-color:#3498DF;
  padding: 8px;
  text-transform: uppercase;
  color: #FFFF;
  font-size: 12px;
  font-weight: 500;
  height: 25px;
`;

export const TableCell = styled.td`
  border: 1px solid #EAECEE;
  padding: 8px;
  background-color: ${props => props.isAlternate ? '#EAF2F8 ' : 'inherit'};
  color:#515A5A;
  font-size: 14px;
  height: 25px;
`;






