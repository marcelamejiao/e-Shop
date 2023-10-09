import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlantsPage from './pages/PlantsPage/PlantsPage';
import PlantsContextProvider from './context/PlantsContextProvider';
import PlantPage from './pages/PlantPage/PlantPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import NavBar from './component/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <PlantsContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<Navigate to="/plants" replace />} />
            <Route path="/plants" element={<PlantsPage />} />
            <Route path="/plants/:id" element={<PlantPage />} />
            <Route path="/shoppingCart" element={<ShoppingCartPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </PlantsContextProvider>
    </>
  )
}

export default App
