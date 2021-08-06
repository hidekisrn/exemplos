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

const FirstExample = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const handleCount = () => setCount(prevCount => prevCount + 1);

  const handleSecondCount = () =>
    setSecondCount(prevSecondCount => prevSecondCount + 1);

  const handleChangeDocumentTitle = () => {
    console.log('contagem atual:', count);
  };

  useEffect(() => {
    document.title = `useCallback - ${count}`;
    handleChangeDocumentTitle();
  }, [count, handleChangeDocumentTitle]);

  return (
    <Container>
      <Title>Primeiro exemplo</Title>
      <SubTitle>Usando funções sem useCallback pro useEffect</SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <StyledButton onClick={handleCount} variant="outlined">
          +1
        </StyledButton>

        <RightText>{secondCount}</RightText>
        <StyledButton onClick={handleSecondCount} variant="outlined">
          +1
        </StyledButton>
      </SubContainer>
    </Container>
  );
};

export default FirstExample;
