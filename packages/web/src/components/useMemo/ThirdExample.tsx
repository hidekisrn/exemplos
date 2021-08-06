import { useState, useMemo, useEffect } from 'react';
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

const ThirdExample = () => {
  const [count, setCount] = useState(0n);
  const [secondCount, setSecondCount] = useState(0n);

  const handleCount = () => setCount(prevCount => prevCount + 10n);

  const handleSecondCount = () =>
    setSecondCount(prevSecondCount => prevSecondCount + 1n);

  const calculatedTimes = useMemo(
    () => ({ value: pow(count, 10000n) }),
    [count],
  );

  useEffect(() => {
    const countTimes = count / 10n;

    console.log(
      'Executou esse cálculo',
      countTimes.toString(),
      `vez${countTimes === 1n ? '' : 'es'}`,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedTimes]);

  return (
    <Container>
      <Title>Terceiro exemplo</Title>
      <SubTitle>Mantendo a igualdade referencial</SubTitle>

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
          {count.toString()} ** 10000 = {calculatedTimes.value.toString()}
        </CalculatedText>
      </SubContainer>
    </Container>
  );
};

export default ThirdExample;
