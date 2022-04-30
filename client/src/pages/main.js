import './main.scss';
import Header from '../components/header/header';
import Form from '../components/form/form';
import Section from '../components/section/section';
import { GlobalProvider } from '../context/GlobalState';

const Main = () => (
  <GlobalProvider>
    <div className="main">
      <div className="content">
        <Header />
        <Form />
        <Section />
      </div>
    </div>
  </GlobalProvider>
);

export default Main;
