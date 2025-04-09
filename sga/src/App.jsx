import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/sign-in/sign-in.component";
import FrontPage from "./pages/front-page/front_page.page";
import HomeSeller from "./pages/home_seller/home_seller.page";
import CreateUser from "./pages/home_seller/create_user/create_user.component";
import InventoryPage from "./pages/Inventory-Page/Inventory_Page.page";

function App() {
  return (

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Inventario" element={<InventoryPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/HomeSeller" element={<HomeSeller />} />
        <Route path="/HomeSeller/CreateUser" element={<CreateUser />} />
      </Routes>

  );
}

export default App;
