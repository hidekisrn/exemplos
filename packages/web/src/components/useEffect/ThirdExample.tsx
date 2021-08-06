import { useState, useEffect } from 'react';
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

const ThirdExample = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount(prevCount => prevCount + 1);

  useEffect(() => {
    document.title = `Contador atual: ${count}`;

    return () => {
      document.title = 'React Hooks';
    };
  }, [count]);

  return (
    <Container>
      <Title>Terceiro exemplo</Title>
      <SubTitle>Efeitos com limpeza</SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <StyledButton onClick={handleCount} variant="outlined">
          +1
        </StyledButton>
      </SubContainer>
    </Container>
  );
};

export default ThirdExample;
