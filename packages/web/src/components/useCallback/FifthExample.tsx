import { useState, useEffect } from 'react';
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

const FifthExample = () => {
  const [count, setCount] = useState(0);
  const [rendersCount, setRendersCount] = useState(0);

  const handleCount = () => setCount(prevCount => prevCount + 1);

  useEffect(() => {
    document.title = `Contador atual: ${count}`;

    const handleRendersCount = () => {
      setRendersCount(prevRendersCount => prevRendersCount + 1);
    };

    handleRendersCount();
  }, [count]);

  return (
    <Container>
      <Title>Quinto exemplo</Title>
      <SubTitle>Outra possibilidade: Criar método dentro do useEffect</SubTitle>

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

export default FifthExample;
