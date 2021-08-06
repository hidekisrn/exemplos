import styled from 'styled-components';

import BackButton from '~/components/BackButton';
import Introduction from '~/components/customHooks/Introduction';
import FirstExample from '~/components/customHooks/FirstExample';
import SecondExample from '~/components/customHooks/SecondExample';

const OuterCustomHooksPage = styled.div``;

const CustomHooksPage = () => {
  return (
    <OuterCustomHooksPage>
      <BackButton />

      <Introduction />
      <FirstExample />
      <SecondExample />
    </OuterCustomHooksPage>
  );
};

export default CustomHooksPage;
