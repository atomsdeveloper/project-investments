import * as Styled from './styles';

//Components
import { Content } from '../components/GridTwoColums';
import { Nav } from '../components/Navbar/index';

export const App = () => {
  return (
    <Styled.Container>
      <Nav />

      <Content />
    </Styled.Container>
  );
};
