import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import PlantsPage from './pages/PlantsPage/PlantsPage';
import PlantsContextProvider from './context/PlantsContextProvider';
import NavBar from './component/NavBar/NavBar';

function App() {

  return (
    <>
      <PlantsContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/plants" element={<PlantsPage />} />
          </Routes>
        </BrowserRouter>
      </PlantsContextProvider>
    </>
  )
}

export default App
