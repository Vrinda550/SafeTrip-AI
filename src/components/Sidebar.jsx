import { NavLink, useNavigate } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, MapPinned, Siren, History, LogOut, Compass } from 'lucide-react';
const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/destinations', label: 'Find destination', icon: MapPinned },
  { to: '/emergency', label: 'Emergency SOS', icon: Siren },
  { to: '/history', label: 'Travel history', icon: History },
];
export default function Sidebar() {
  const navigate = useNavigate();
  return <aside className="sidebar">
    <div className="brand"><div className="brand-mark"><ShieldCheck size={23}/></div><div><b>SafeTrip<span> AI</span></b><small>TRAVEL WITH CONFIDENCE</small></div></div>
    <div className="side-label">WORKSPACE</div>
    <nav>{links.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}><Icon size={19}/><span>{label}</span>{label === 'Emergency SOS' && <i className="nav-dot"/>}</NavLink>)}</nav>
    <div className="sidebar-bottom"><div className="side-tip"><Compass size={18}/><b>Explore safely</b><p>Plan smarter. Stay aware. Travel freely.</p></div><button className="logout-link" onClick={() => navigate('/')}><LogOut size={17}/> Sign out</button></div>
    <div className="sidebar-foot">SAFE TRIP • YOUR JOURNEY MATTERS</div>
  </aside>;
}
