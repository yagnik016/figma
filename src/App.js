import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
