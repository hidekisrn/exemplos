import styled from 'styled-components';

import Container from '~/components/Container';
import useFetch from '~/hooks/useFetch';

const Image = styled.img`
  width: 300px;
`;

type returnType = {
  status: number;
  message: string;
};

const SecondExample = () => {
  const { response, error, loading } = useFetch<returnType>(
    'https://dog.ceo/api/breeds/image/random',
  );

  if (loading) {
    return <Container>Carregando...</Container>;
  }

  if (error || !response) {
    return <Container>Erro!</Container>;
  }

  const status = response.data?.status;
  const imageUrl = response.data?.message;

  return (
    <Container>
      <h3>Status: {status}</h3>
      <div>
        <Image src={imageUrl} alt="Random Dog" />
      </div>
    </Container>
  );
};

export default SecondExample;
