// Styles
import './bootstrap.scss'; // Importing root stylesheet + custom SCSS
import './App.css'; // Importing default HTML styles
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
 
const App = () => {
  return (
    <>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
