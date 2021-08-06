import Container from '~/components/Container';
import useFetch from '~/hooks/useFetch';

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

  const dogName = response.data?.status;
  const imageUrl = response.data?.message;

  return (
    <Container>
      <h3>Status: {dogName}</h3>
      <div>
        <img src={imageUrl} alt="Random Dog" width={300} />
      </div>
    </Container>
  );
};

export default SecondExample;
