import { PanelLayout } from "layouts";
import { ChangePassword, Dashboard, Notifications, Users } from "pages";
import { Routes, Route } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <PanelLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </PanelLayout>
  );
};

export default PrivateRoutes;
