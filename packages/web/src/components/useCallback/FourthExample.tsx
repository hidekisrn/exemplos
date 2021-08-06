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

type setRendersCountType = React.Dispatch<React.SetStateAction<number>>;

const handleRendersCount = (setRendersCount: setRendersCountType) => {
  setRendersCount(prevRendersCount => prevRendersCount + 1);
};

const FourthExample = () => {
  const [count, setCount] = useState(0);
  const [rendersCount, setRendersCount] = useState(0);

  const handleCount = () => setCount(prevCount => prevCount + 1);

  useEffect(() => {
    document.title = `Contador atual: ${count}`;
    handleRendersCount(setRendersCount);
  }, [count]);

  return (
    <Container>
      <Title>Quarto exemplo</Title>
      <SubTitle>
        Segunda forma correta de usar funções como dependências: criar método
        fora do fluxo de renderização
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

export default FourthExample;
