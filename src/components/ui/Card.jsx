import styled from 'styled-components';

const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  padding: 1em;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.35);
`;