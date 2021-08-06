import styled from 'styled-components';

import BackButton from '~/components/BackButton';
import Introduction from '~/components/useMemo/Introduction';
import FirstExample from '~/components/useMemo/FirstExample';
import SecondExample from '~/components/useMemo/SecondExample';
import ThirdExample from '~/components/useMemo/ThirdExample';

const OuterUseMemoPage = styled.div``;

const UseMemoPage = () => {
  return (
    <OuterUseMemoPage>
      <BackButton />

      <Introduction />
      <FirstExample />
      <SecondExample />
      <ThirdExample />
    </OuterUseMemoPage>
  );
};

export default UseMemoPage;
