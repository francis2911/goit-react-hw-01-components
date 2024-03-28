import styled from 'styled-components';

export const FriendListContainer = styled.div`
  max-width: 300px;
  margin:50px;
`;

export const FriendList1 = styled.ul`
 list-style: none;
 display: flex;
 flex-direction: column;
 padding: 0;
`;

export const FriendListaItem = styled.li`
 display: flex;
 align-items: center;
 border: solid 1px;
 margin: 5px 0;
 height: 65px;
 padding: 10px 20px;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
 border-color: #EAECEE;
 gap: 15px;
`;


export const StatusDot = styled.span`
display:flex;
width: 16px;
height: 16px;
border-radius: 50%;
background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;


export const FriendName = styled.p`
font-size: 20px;
`;
