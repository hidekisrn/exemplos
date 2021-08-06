import styled from 'styled-components';

import BackButton from '~/components/BackButton';
import FirstExample from '~/components/useMemo/FirstExample';
import SecondExample from '~/components/useMemo/SecondExample';
import Introduction from '~/components/useMemo/Introduction';

const OuterUseMemoPage = styled.div``;

const UseMemoPage = () => {
  return (
    <OuterUseMemoPage>
      <BackButton />

      <Introduction />
      <FirstExample />
      <SecondExample />
    </OuterUseMemoPage>
  );
};

export default UseMemoPage;
