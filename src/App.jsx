import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./styles/App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<p>Hello world</p>} exact />
        <Route path="*" index element={<p>Halaman kosong</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
