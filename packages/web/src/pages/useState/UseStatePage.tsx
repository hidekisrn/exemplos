import styled from 'styled-components';
import { useState } from 'react';

import BackButton from '~/components/BackButton';
import Introduction from '~/components/useState/Introduction';
import FirstExample from '~/components/useState/FirstExample';
import SecondExample from '~/components/useState/SecondExample';
import ThirdExample from '~/components/useState/ThirdExample';
import FourthExample from '~/components/useState/FourthExample';
import FifthExample from '~/components/useState/FifthExample';
import SecondFifthExample from '~/components/useState/SecondFifthExample';
import SixthExample from '~/components/useState/SixthExample';
import SeventhExample from '~/components/useState/SeventhExample';

const OuterUseStatePage = styled.div``;

const UseStatePage = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <OuterUseStatePage>
      <BackButton />

      <Introduction />

      <FirstExample />
      <SecondExample />
      <ThirdExample />
      <FourthExample />
      <FifthExample />
      <SecondFifthExample />
      <SixthExample email="lucasgdbittencourt@gmail.com" />
      <SeventhExample email={email} onChange={handleChangeEmail} />
    </OuterUseStatePage>
  );
};

export default UseStatePage;
