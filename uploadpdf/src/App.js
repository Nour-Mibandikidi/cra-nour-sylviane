import LocalButton from './Button';
import Header from '../../sharedComponents/src/components/header/header';
import Footer from '../../sharedComponents/src/components/footer/footer';
import './app.css';

const App = () => (
  <div>
    <Header/>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Footer/>
  </div>
);

export default App;
