import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Author from './pages/author';
import Explore from './pages/explore';
import Home from './pages/home';
import Item from './pages/item';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/author" element={<Author />}></Route>
          <Route path="/item" element={<Item />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
