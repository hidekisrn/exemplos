import React, { useState } from 'react';
import styled from 'styled-components';

import Container from '~/components/Container';
import SubContainer from '~/components/SubContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';

type SixthExampleProps = {
  email: string;
};

const StyledInput = styled.input`
  padding: 8px;
  min-width: 300px;
  background-color: #f5f5fb;
`;

const SixthExample = (props: SixthExampleProps) => {
  const [email, setEmail] = useState(props.email);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <Title>Sexto exemplo</Title>
      <SubTitle>Estados derivados do React</SubTitle>

      <SubContainer>
        <StyledInput
          type="email"
          value={email}
          onChange={handleChangeEmail}
          spellCheck={false}
        />
      </SubContainer>
    </Container>
  );
};

export default SixthExample;
