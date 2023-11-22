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
            <Route path="/e-Shop" element={<Navigate to="/e-Shop/plants" replace />} />
            <Route path="/e-Shop/plants" element={<PlantsPage />} />
            <Route path="/e-Shop/plants/:id" element={<PlantPage />} />
            <Route path="/e-Shop/shoppingCart" element={<ShoppingCartPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </PlantsContextProvider>
    </>
  )
}

export default App
