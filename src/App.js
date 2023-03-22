import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import DashboardPage from "./pages/DashboardPage";

import AccountDetailsPage from "./pages/AccountDetailsPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ResetPassword from "./pages/auth/ResetPassword";
import ProfilePage from "./pages/profile/ProfilePage";
import ChangePasswordPage from "./pages/profile/ChangePasswordPage";
import UserPreferencesPage from "./pages/profile/UserPreferencesPage";
import AdminBlankPage from "./pages/AdminBlankPage";
import EmailSettings from "./pages/EmailSettings";
import WhatsAppCallsettings from "./pages/WhatsAppCallsettings";
import VoiceCallSettings from "./pages/VoiceCallSettings";
import PaymentDetails from "./pages/PaymentDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/change-password" element={<ChangePasswordPage />} />
        <Route exact path="/preferences" element={<UserPreferencesPage />} />
        <Route exact path="/account" element={<AccountDetailsPage />} />
        <Route exact path="/blank-page" element={<AdminBlankPage />} />
        <Route exact path="/voicecall" element={<VoiceCallSettings />} />
        <Route exact path="/whatsapp" element={<WhatsAppCallsettings />} />
        <Route exact path="/email" element={<EmailSettings />} />
        <Route exact path="/payments" element={<PaymentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
