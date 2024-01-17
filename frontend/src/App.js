import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Confirmation from './pages/Confirmation'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
