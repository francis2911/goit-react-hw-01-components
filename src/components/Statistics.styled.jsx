import styled from 'styled-components';

export const ContainerStatistics = styled.div`
  background-color: #ffff;
  border-radius: 5px;
  max-width: 370px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin:50px;
`;


export const TitleStatistics = styled.h1`
text-transform: uppercase;
font-size: 20px;
font-weight: 500;
display:flex;
justify-content:center;
height: 55px;
margin:0;
padding-top: 32px;
color: #34495E;
`;


export const ListStatistics = styled.ul`
display:flex;
justify-content: space-between;
list-style: none;
margin:0;
padding:0;
height: 67px;
`;

export const ItemStatistics = styled.li`
width:100%;
background-color: ${({ bgColor }) => bgColor};;
padding-top: 12px;
`;

export const LabelStatistics = styled.span`
display: flex;
justify-content: center;
color: #FFFF;
font-size: 13px;
`;

export const PercentageStatistics = styled.span`
display: flex;
justify-content: center;
color: #FFFF;
padding-top: 5px;
font-size: 18px;
`;