import './App.css';
import Header from './Components/Header';
import Panel from './Components/Panel';
import Response from './Components/SubComponents/Response';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header content="demo online test" />
      <Panel />
      <Footer content="Addmen" />
    </div>
  );
}

export default App;
