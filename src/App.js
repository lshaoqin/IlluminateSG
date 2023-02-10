import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
import MenteePage from './pages/MenteePage';
import MentorPage from './pages/MentorPage';
import Apply from './pages/Apply';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/testmentee' element={<MenteePage />} />
      <Route path='/testmentor' element={<MentorPage />} />
      <Route path='/apply' element={<Apply />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
