import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import NewIntern from "./pages/NewIntern";
import NotFound from "./components/common/NotFound";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./pages/About";

import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PublicRoute><Welcome /></PublicRoute>} />
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
            <Route path="/new-intern" element={<PrivateRoute><NewIntern /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}
