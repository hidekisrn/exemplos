import React from 'react';
import styled from 'styled-components';

const OuterErrorBoundary = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.p`
  margin: 48px 0 0;
  color: #808080;
  text-align: center;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font: normal normal normal 15px/24px TTNorms-Regular;
  color: #9b95a4;
  text-align: center;
  margin: 4px 0 0;
`;

type PropsType = Record<string, unknown>;

type StatesType = { error: Error | null };

class ErrorBoundary extends React.Component<PropsType, StatesType> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error !== null) {
      return (
        <OuterErrorBoundary>
          <Title>Não foi possível concluir a sua ação</Title>
          <Subtitle>Por favor, tente em outro momento</Subtitle>
        </OuterErrorBoundary>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
