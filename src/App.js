
import './App.css';
import Login from "./components/Login/Login"
import {  BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div>

  <Router>
      <Routes>
        <Route path="/" element={<Login  />} />
        
      </Routes>
    </Router>
  
    </div> 
  
    
  );
}

export default App;
