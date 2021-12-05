import { PanelLayout } from "layouts";
import {
  Categories,
  Dashboard,
  Notifications,
  Products,
  Settings,
  Users,
} from "pages";
import { Routes, Route } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <PanelLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account-settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </PanelLayout>
  );
};

export default PrivateRoutes;
