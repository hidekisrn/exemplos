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

const ThirdExample = () => {
  const [count, setCount] = useState(0);

  const handleCountPlusThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <Container>
      <Title>Terceiro exemplo</Title>
      <SubTitle>Somando +3 acessando o estado atual</SubTitle>

      <SubContainer>
        <Text>{count}</Text>
        <StyledButton onClick={handleCountPlusThree} variant="outlined">
          +3
        </StyledButton>
      </SubContainer>
    </Container>
  );
};

export default ThirdExample;
