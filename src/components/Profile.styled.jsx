import styled from 'styled-components';

export const ContainerProfile = styled.div`
  border-radius: 5px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin:50px;
`;
export const DescriptionProfile = styled.div`
display: flex; 
  flex-direction: column; 
  align-items: center;
  padding-bottom: 25px;
  color: #7F8C8D;
`;

export const ImageProfile = styled.img`
width: 100px;
border-radius: 100%;
margin: 30px 0px 10px 0px;
`;


export const NameProfile = styled.p`
font-weight: 700;
font-size: 20px;
color: #17202A;
`;

export const StastProfile = styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
background-color: #F4F6F6;
border-top: 1px solid #EAECEE;
margin: 0;
padding:0;
height: 70px;
`;

export const ListProfile = styled.li`
border: 1px solid;
border-color: #EAECEE;
width:100%;
padding-top: 12px;
`;

export const StatsLabel = styled.span`
display: flex;
text-transform: capitalize;
justify-content: center;
color: #7F8C8D;
font-size: 13px;
margin-bottom:5px;
`;

export const StastQuantity = styled.span`
display: flex;
justify-content: center;
font-weight: 700;
`;

