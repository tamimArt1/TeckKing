import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { theme } from './theme';
import { GlobalStyles } from './components/styled/Global.Styled';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
