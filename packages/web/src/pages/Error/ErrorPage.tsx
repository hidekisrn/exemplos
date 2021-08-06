import styled from 'styled-components';

import BackButton from '~/components/BackButton';

const OuterErrorPage = styled.div``;

const ErrorPage = () => {
  return (
    <OuterErrorPage>
      <BackButton />
    </OuterErrorPage>
  );
};

export default ErrorPage;
