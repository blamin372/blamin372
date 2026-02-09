import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="flex min-h-screen bg-[#0f1117] text-white">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
