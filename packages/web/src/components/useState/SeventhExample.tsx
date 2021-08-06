import styled from 'styled-components';

import Container from '~/components/Container';
import SubContainer from '~/components/SubContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';

type SixthExampleProps = {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
  padding: 8px;
  min-width: 300px;
  background-color: #f5f5fb;
`;

const SixthExample = ({ email, onChange }: SixthExampleProps) => {
  return (
    <Container>
      <Title>Sétimo exemplo</Title>
      <SubTitle>Estados derivados do React pt. 2</SubTitle>

      <SubContainer>
        <StyledInput
          type="email"
          value={email}
          onChange={onChange}
          spellCheck={false}
        />
      </SubContainer>
    </Container>
  );
};

export default SixthExample;
