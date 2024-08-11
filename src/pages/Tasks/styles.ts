import styled from 'styled-components';

export const TasksContainer = styled.div`
  width: 100%;
  box-sizing: border-box; 
  margin: 0;
`;

export const TasksCardsContainer = styled.div`
    padding-top: 6rem;
    width: 100%;
    background-color: #f0f0f0;
    height: 100%;
`

export const TasksSectionAddCards = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;

    @media (max-width: 768px) {
      align-items: center;
      width: 80%;
      padding: 1rem 2rem;
      margin: 0 auto;
    }
`