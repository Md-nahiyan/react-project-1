/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer';
import Header from './components/Header'
import Results from './pages/Results';
import MealPage from './pages/MealPage';


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/mealPage" element={<MealPage/>}/>
        {/* <Route path="/meal/:strCategory" element={<MealCategory />}/> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
