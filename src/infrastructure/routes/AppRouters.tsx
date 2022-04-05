import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as C from 'infrastructure/screens';

const AppRouters = (): JSX.Element => {
  return (
    <Router>
      <C.Navbar />
      <Routes>
        <Route path='/' element={<C.Home />} />
        <Route path='/Projects' element={<C.Projects />} />
        <Route path='/About' element={<C.About />} />
        <Route path='/Contact' element={<C.Contact />} />
        <Route path='*' element={<C.Error />} />
      </Routes>
      <C.Footer />
    </Router>
  );
};

export default AppRouters;
