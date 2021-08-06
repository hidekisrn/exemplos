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
const getFirstCountValue = () => Math.floor(Math.random() * 10) + 1;

const SecondExample = () => {
  const [count, setCount] = useState(() => {
    const randomValue = getFirstCountValue();
    return randomValue;
  });

  const handleCount = () => setCount(prevCount => prevCount + 1);

  return (
    <Container>
      <Title>Segundo exemplo</Title>
      <SubTitle>
        Iniciando estado com função que gera um valor de 1 a 10
      </SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <StyledButton onClick={handleCount} variant="outlined">
          +1
        </StyledButton>
      </SubContainer>
    </Container>
  );
};

export default SecondExample;
