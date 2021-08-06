import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import Container from '~/components/Container';
import SubContainer from '~/components/SubContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';
import Text from '~/components/Text';

const RightText = styled(Text)`
  margin-left: 16px;
`;

const StyledButton = styled(Button)`
  && {
    margin-left: 8px;
    border-radius: 8px;
  }
`;

const ThirdExample = () => {
  const [count, setCount] = useState(0);
  const [rendersCount, setRendersCount] = useState(0);

  const handleCount = () => setCount(prevCount => prevCount + 1);

  const handleRendersCount = useCallback(() => {
    setRendersCount(prevRendersCount => prevRendersCount + 1);
  }, []);

  useEffect(() => {
    document.title = `Contador atual: ${count}`;
    handleRendersCount();
  }, [count, handleRendersCount]);

  return (
    <Container>
      <Title>Terceiro exemplo</Title>
      <SubTitle>
        Primeira forma correta de usar funções como dependências: useCallback
      </SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <StyledButton onClick={handleCount} variant="outlined">
          +1
        </StyledButton>

        <RightText>Quantidade de renderizações: {rendersCount}</RightText>
      </SubContainer>
    </Container>
  );
};

export default ThirdExample;
