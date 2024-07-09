import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar/navbar';
import { LandingPage } from './pages/LandingPage/landingPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <LandingPage />
    </div>
  );
}

export default App;
