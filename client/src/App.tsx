// React
// import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Styles
import './bootstrap.scss'; // Importing root stylesheet + custom SCSS
import './app.css'; // Importing default HTML styles
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';


 
function App() {

  return (
    <>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
