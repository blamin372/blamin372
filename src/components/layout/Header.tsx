import { Bell, Search as SearchIcon, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 glass-active border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-lg w-96">
        <SearchIcon className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search products, campaigns, metrics..."
          className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-gray-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f1117]"></span>
        </button>

        <div className="h-8 w-[1px] bg-white/10 mx-2"></div>

        <button className="flex items-center gap-3 hover:bg-white/5 p-1.5 rounded-lg transition-all">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
            JD
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold leading-none">John Doe</p>
            <p className="text-[10px] text-gray-400 mt-1">Enterprise Admin</p>
          </div>
          <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
