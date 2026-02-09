import {
  LayoutDashboard,
  Search,
  Rocket,
  ShieldAlert,
  Zap,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Command Center', active: true },
    { icon: Search, label: 'Product Scout' },
    { icon: Rocket, label: 'Growth & Ads' },
    { icon: ShieldAlert, label: 'Risk Monitor' },
    { icon: Zap, label: 'Conversion Lab' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-white/10 flex flex-col z-50">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">AI COMMERCE</h1>
            <p className="text-[10px] text-primary font-medium tracking-widest mt-1">COMMAND CENTER</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              item.active
                ? 'bg-primary/20 text-primary border border-primary/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all">
          <HelpCircle size={20} />
          <span className="font-medium">Support</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-all mt-4">
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
