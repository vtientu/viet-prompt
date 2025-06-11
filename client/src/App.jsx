import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import FavouritePage from "./pages/Favourite";
import AdminPage from "./pages/Admin";
import InformationLayout from "./layouts/InformationLayout";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <LoginPage />
          </MainLayout>
        }
      />
      <Route
        path="/register"
        element={
          <MainLayout>
            <RegisterPage />
          </MainLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <MainLayout>
            <ForgotPassword />
          </MainLayout>
        }
      />
      <Route
        path="/reset-password"
        element={
          <MainLayout>
            <ResetPassword />
          </MainLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <InformationLayout>
            <Profile />
          </InformationLayout>
        }
      />
      <Route
        path="/favourite"
        element={
          <InformationLayout>
            <FavouritePage />
          </InformationLayout>
        }
      />
      <Route
        path="/admin"
        element={
          <InformationLayout>
            <AdminPage />
          </InformationLayout>
        }
      />
      <Route
        path="/transaction"
        element={
          <InformationLayout>
            <Transaction />
          </InformationLayout>
        }
      />
    </Routes>
  );
}

export default App;
