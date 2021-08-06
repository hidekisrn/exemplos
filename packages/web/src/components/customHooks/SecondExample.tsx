import Container from '~/components/Container';
import SubContainer from '~/components/SubContainer';
import useFetch from '~/hooks/useFetch';

type returnType = {
  status: number;
  message: string;
};

const SecondExample = () => {
  const { data, error, loading } = useFetch<returnType>(
    'https://dog.ceo/api/breeds/image/random',
  );

  if (loading) {
    return <Container>Carregando...</Container>;
  }
  console.log(data);

  if (error || !data) {
    return <Container>Erro!</Container>;
  }

  const dogName = data.status;
  const imageUrl = data.message;

  return (
    <Container>
      <SubContainer>
        <h3>{dogName}</h3>
        <div>
          <img src={imageUrl} alt="Random Dog" width={300} />
        </div>
      </SubContainer>
    </Container>
  );
};

export default SecondExample;
