import styled from 'styled-components';
import { useEffect } from 'react';

import BackButton from '~/components/BackButton';
import Introduction from '~/components/useCallback/Introduction';
import FirstExample from '~/components/useCallback/FirstExample';
import SecondExample from '~/components/useCallback/SecondExample';
import ThirdExample from '~/components/useCallback/ThirdExample';
import FourthExample from '~/components/useCallback/FourthExample';
import FifthExample from '~/components/useCallback/FifthExample';

const OuterUseCallbackPage = styled.div``;

const UseCallbackPage = () => {
  useEffect(() => {
    return () => {
      document.title = 'React Hooks';
    };
  });

  return (
    <OuterUseCallbackPage>
      <BackButton />

      <Introduction />
      <FirstExample />
      <SecondExample />
      <ThirdExample />
      <FourthExample />
      <FifthExample />
    </OuterUseCallbackPage>
  );
};

export default UseCallbackPage;
