import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Destinations from './pages/Destinations.jsx';
import Emergency from './pages/Emergency.jsx';
import History from './pages/History.jsx';
import Sidebar from './components/Sidebar.jsx';
import ChatAssistant from './components/ChatAssistant.jsx';

function AppLayout({ children }) {
  const [chatOpen, setChatOpen] = useState(false);
  const location = useLocation();
  const isLogin = location.pathname === '/';
  return <div className={isLogin ? 'login-layout' : 'app-layout'}>
    {!isLogin && <Sidebar />}
    <main className={isLogin ? 'login-main' : 'main-content'}>{children}</main>
    <ChatAssistant open={chatOpen} setOpen={setChatOpen} />
  </div>;
}

export default function App() {
  return <Routes>
    <Route path="/" element={<AppLayout><Login /></AppLayout>} />
    <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
    <Route path="/destinations" element={<AppLayout><Destinations /></AppLayout>} />
    <Route path="/emergency" element={<AppLayout><Emergency /></AppLayout>} />
    <Route path="/history" element={<AppLayout><History /></AppLayout>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
