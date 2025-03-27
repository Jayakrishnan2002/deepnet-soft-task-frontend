import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MenuManager from './components/MenuManager';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Home/>} />
          <Route path="/reservation" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/admin/menu" element={<MenuManager />} />

        </Routes>
      </Layout>
    </Router>
  )
}

export default App
