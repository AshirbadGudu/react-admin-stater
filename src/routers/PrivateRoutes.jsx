import { ChangePassword, Dashboard } from "pages";
import { Routes } from "react-router";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Routes path="/" element={<Dashboard />} />
      <Routes path="/dashboard" element={<Dashboard />} />
      <Routes path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
};

export default PrivateRoutes;
