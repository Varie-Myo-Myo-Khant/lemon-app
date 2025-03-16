import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'; 
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
