import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as C from 'infrastructure/screens';

const AppRouters = (): JSX.Element => {
  return (
    <Router>
      <C.Navbar />
      <Routes>
        <Route exact path='/' element={<C.Home />} />
        <Route exact path='/Projects' element={<C.Projects />} />
        <Route exact path='/About' element={<C.About />} />
        <Route exact path='/Contact' element={<C.Contact />} />
        <Route path='*' element={<C.Error />} />
      </Routes>
      <C.Footer />
    </Router>
  );
};

export default AppRouters;
