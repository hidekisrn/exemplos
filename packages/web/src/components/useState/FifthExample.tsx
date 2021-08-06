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

const FifthExample = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);
  const [fourthCount, setFourthCount] = useState(0);
  const [fifthCount, setFifthCount] = useState(0);

  const handleCount = () => {
    setCount(prevCount => prevCount + 1);
    setSecondCount(prevSecondCount => prevSecondCount + 1);
    setThirdCount(prevThirdCount => prevThirdCount + 1);
    setFourthCount(prevFourthCount => prevFourthCount + 1);
    setFifthCount(prevFifthCount => prevFifthCount + 1);
  };

  return (
    <Container>
      <Title>Quinto exemplo</Title>
      <SubTitle>Automatic batching for fewer renders</SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <RightText>{secondCount}</RightText>
        <RightText>{thirdCount}</RightText>
        <RightText>{fourthCount}</RightText>
        <RightText>{fifthCount}</RightText>

        <StyledButton onClick={handleCount} variant="outlined">
          +1
        </StyledButton>
      </SubContainer>
    </Container>
  );
};

export default FifthExample;
