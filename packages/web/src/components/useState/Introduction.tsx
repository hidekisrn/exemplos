import { useState } from 'react';
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

let thirdCount = 0;

const Introduction = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount(prevCount => prevCount + 1);

  let secondCount = 0;

  const handleSecondCount = () => {
    secondCount += 1;
    console.log(secondCount);
  };

  const handleThirdCount = () => {
    thirdCount += 1;
    console.log(thirdCount);
  };

  return (
    <Container>
      <Title>Introdução</Title>
      <SubTitle>Por que usamos o useState?</SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <StyledButton onClick={handleCount} variant="outlined">
          +1
        </StyledButton>

        <RightText>{secondCount}</RightText>
        <StyledButton onClick={handleSecondCount} variant="outlined">
          +1
        </StyledButton>

        <RightText>{thirdCount}</RightText>
        <StyledButton onClick={handleThirdCount} variant="outlined">
          +1
        </StyledButton>
      </SubContainer>
    </Container>
  );
};

export default Introduction;
