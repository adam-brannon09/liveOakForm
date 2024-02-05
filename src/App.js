import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import RepForm from './pages/RepForm';


function App() {
  return (
    // added react router for future use
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/:salesRep" element={<RepForm/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
