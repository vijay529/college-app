import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/MainDropdown/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <Sidebar/>
    </div>
    </Router>
  );
}

export default App;
