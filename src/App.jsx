import { BrowserRouter, Routes, Route } from "react-router-dom";

// O Layout agora é quem carrega o Header e Footer
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/produto/:id" element={<ProductView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
