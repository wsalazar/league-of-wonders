import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './output.css'
import 'react-toastify/dist/ReactToastify.css'
import AppContext from "./components/Context.jsx";

AppContext

createRoot(document.getElementById('root')).render(
  <>
      <AppContext>
        <App />
      </AppContext>
  </>
)
