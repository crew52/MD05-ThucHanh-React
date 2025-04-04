import {Route, Routes} from "react-router";
import './App.css'
import MusicList from "./pages/music/musicList/index.jsx";
import MusicCreate from "./pages/music/musicCreate/index.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<MusicList/>}></Route>
            <Route path="/create" element={<MusicCreate/>} />
        </Routes>
    </>
  )
}

export default App
