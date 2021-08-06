import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const OuterBackButton = styled.div`
  margin: 16px 0 0 16px;
`;

const StyledButton = styled(Button)`
  && {
    border-radius: 8px;
  }
`;

const ButtonText = styled.span`
  margin-left: 8px;
`;

const Hyperlink = styled(Link)`
  && {
    text-decoration: none;
  }
`;

const BackButton = () => {
  return (
    <OuterBackButton>
      <Hyperlink to="/">
        <StyledButton variant="outlined">
          <ArrowBackIcon />
          <ButtonText>Voltar</ButtonText>
        </StyledButton>
      </Hyperlink>
    </OuterBackButton>
  );
};

export default BackButton;
