import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"


const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
