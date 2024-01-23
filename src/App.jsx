import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { NotFound } from "./pages/NotFound/NotFound";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/cars-advert" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="catalog" element={<Catalog />}></Route>
        <Route path="favorites" element={<Favorites />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
