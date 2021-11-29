import { lazy } from "react";

export const Login = lazy(() => import("./Login"));
export const Dashboard = lazy(() => import("./Dashboard"));
export const ChangePassword = lazy(() => import("./ChangePassword"));
export const ForgotPassword = lazy(() => import("./ForgotPassword"));
export const Notifications = lazy(() => import("./Notifications"));
export const Users = lazy(() => import("./Users"));
