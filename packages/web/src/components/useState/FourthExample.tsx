import { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import Container from '~/components/Container';
import SubContainer from '~/components/SubContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';
import Text from '~/components/Text';

const StyledButton = styled(Button)`
  && {
    margin-left: 8px;
    border-radius: 8px;
  }
`;

const FourthExample = () => {
  const [count, setCount] = useState(0);

  const handleCountPlusThree = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <Container>
      <Title>Quarto exemplo</Title>
      <SubTitle>Somando +3 acessando o estado anterior</SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <StyledButton onClick={handleCountPlusThree} variant="outlined">
          +3
        </StyledButton>
      </SubContainer>
    </Container>
  );
};

export default FourthExample;
