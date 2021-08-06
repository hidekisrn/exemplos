import styled from 'styled-components';
import * as React from 'react';

const OuterEnvironmentLayout = styled.div``;

const EnvironmentLayout: React.FC = ({ children }) => {
  return <OuterEnvironmentLayout>{children}</OuterEnvironmentLayout>;
};

export default EnvironmentLayout;
