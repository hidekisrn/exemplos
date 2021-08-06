import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  && .MuiDialog-paper {
    width: 100%;
    max-width: 720px;
    background: #fff 0% 0% no-repeat padding-box;
    box-shadow: 0 0 10px #00000040;
    border-radius: 14px 14px 10px 10px;
    padding: 24px;

    @media (max-width: 600px) {
      margin: 0;
      width: 100%;
      height: 100%;
      max-height: none;
      border-radius: 0;
    }
  }
`;

type ModalExampleProps = {
  open: boolean;
  onClose: () => void;
};

const ModalExample = ({ open, onClose }: ModalExampleProps) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      Modal
    </StyledDialog>
  );
};

export default ModalExample;
