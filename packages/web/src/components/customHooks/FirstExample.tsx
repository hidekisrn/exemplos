import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import Container from '~/components/Container';
import SubContainer from '~/components/SubContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';
import useModal from '~/hooks/useModal';
import ModalExample from './ModalExample';

const StyledButton = styled(Button)`
  && {
    margin-left: 8px;
    border-radius: 8px;
  }
`;

const FirstExample = () => {
  const [isModalOpened, { openModal, closeModal }] = useModal();

  return (
    <>
      <Container>
        <Title>Primeiro exemplo</Title>
        <SubTitle>Custom Hook para modais</SubTitle>

        <SubContainer>
          <StyledButton onClick={openModal} variant="outlined">
            Abrir modal
          </StyledButton>
        </SubContainer>
      </Container>

      <ModalExample open={isModalOpened} onClose={closeModal} />
    </>
  );
};

export default FirstExample;
