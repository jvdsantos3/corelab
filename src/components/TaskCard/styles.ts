import styled from 'styled-components';

interface CardBodyProps {
  bodyHeight?: string;
}

export const TaskCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 30%;
  margin: 0 auto;
  justify-content: center;

  
  @media (max-width: 1248px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }

`;

export const TaskCardHeader = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 1.4rem;
  border-radius: 8px 8px 0 0; 
  min-height: 3rem;
`;

export const TaskCardInput = styled.input`
  width: 90%;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #61dafb;
    outline: none;
  }
`;

export const TaskCardCheck = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

export const TaskCardBody = styled.div<CardBodyProps>`
  padding: 1rem 1.5rem;
  flex: 1; 
  min-height: ${(props) => (props.bodyHeight)};
  overflow: auto; 
`;

export const TaskCardFooter = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 8px 8px; 
  align-items: center;
`;

export const FooterButton = styled.button`
  background-color: #61dafb;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #4fa3d0;
  }

  &:first-of-type {
    margin-right: 10px; 
  }
`;

export const TaskCardTitle = styled.h3`
  padding: 10px 0;
`

export const TaskCardTextarea = styled.textarea`
  width: 100%;
  padding: 0.1rem 0.1rem;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  background: none; 
  resize: none; 
  
  &:focus {
    outline: none; 
  }
`;
