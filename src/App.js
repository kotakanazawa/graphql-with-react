import "./App.css"
import Characterlist from "./pages/CharacterList"
import Character from "./pages/Character"
import Search from "./pages/Search"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Characterlist/>} />
        <Route path='/:id' element={<Character/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
