import styled from 'styled-components';

import BackButton from '~/components/BackButton';
import Introduction from '~/components/useEffect/Introduction';
import FirstExample from '~/components/useEffect/FirstExample';
import SecondExample from '~/components/useEffect/SecondExample';
import ThirdExample from '~/components/useEffect/ThirdExample';
import FourthExample from '~/components/useEffect/FourthExample';
import FifthExample from '~/components/useEffect/FifthExample';

const OuterUseEffectPage = styled.div``;

const UseEffectPage = () => {
  return (
    <OuterUseEffectPage>
      <BackButton />

      <Introduction />
      <FirstExample />
      <SecondExample />
      <ThirdExample />
      <FourthExample />
      <FifthExample />
    </OuterUseEffectPage>
  );
};

export default UseEffectPage;
