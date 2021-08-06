import { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import Container from '~/components/Container';
import SubContainer from '~/components/SubContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';
import Text from '~/components/Text';
import { pow } from '~/utils/bigInt';

const RightText = styled(Text)`
  margin-left: 16px;
`;

const CalculatedText = styled(Text)`
  margin-left: 24px;
`;

const StyledButton = styled(Button)`
  && {
    margin-left: 8px;
    border-radius: 8px;
  }
`;

const FirstExample = () => {
  const [count, setCount] = useState(0n);
  const [secondCount, setSecondCount] = useState(0n);

  const handleCount = () => setCount(prevCount => prevCount + 10n);

  const handleSecondCount = () =>
    setSecondCount(prevSecondCount => prevSecondCount + 1n);

  const calculatedTimes = () => {
    const countTimes = count / 10n + secondCount;
    console.log(
      'Executou esse cálculo',
      countTimes.toString(),
      `vez${countTimes === 1n ? '' : 'es'}`,
    );

    return pow(count, 10000n);
  };

  return (
    <Container>
      <Title>Primeiro exemplo</Title>
      <SubTitle>Fazendo cálculos pesados sem useMemo</SubTitle>

      <SubContainer>
        <Text>{count.toString()}</Text>
        <StyledButton onClick={handleCount} variant="outlined">
          +10
        </StyledButton>
        <RightText>{secondCount.toString()}</RightText>
        <StyledButton onClick={handleSecondCount} variant="outlined">
          +1
        </StyledButton>

        <CalculatedText>
          {count.toString()} ** 10000 = {calculatedTimes().toString()}
        </CalculatedText>
      </SubContainer>
    </Container>
  );
};

export default FirstExample;
