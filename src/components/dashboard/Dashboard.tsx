import {
  Search,
  Rocket,
  ShieldAlert,
  Zap,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  AlertCircle
} from 'lucide-react';
import AgentCard from './AgentCard';

const Dashboard = () => {
  const agents = [
    {
      name: 'Product Scout',
      icon: Search,
      description: 'Scouts the market and authorizes only high-potential products for scaling.',
      status: 'scanning' as const,
      color: 'text-blue-400',
      metrics: [
        { label: 'Opport. Found', value: '12', trend: 'up' as const, trendValue: '+3' },
        { label: 'Avg. Margin', value: '64%', trend: 'up' as const, trendValue: '2.1%' }
      ]
    },
    {
      name: 'Growth & Ads',
      icon: Rocket,
      description: 'Executes and optimizes pricing, ads, and growth with autonomous precision.',
      status: 'active' as const,
      color: 'text-primary',
      metrics: [
        { label: 'ROAS', value: '4.2x', trend: 'up' as const, trendValue: '0.4' },
        { label: 'CPA', value: '$12.40', trend: 'down' as const, trendValue: '8%' }
      ]
    },
    {
      name: 'Risk Monitor',
      icon: ShieldAlert,
      description: 'Detects losses, hidden waste, and financial risk before capital is burned.',
      status: 'alert' as const,
      color: 'text-red-400',
      metrics: [
        { label: 'Waste Stopped', value: '$2.4k', trend: 'up' as const, trendValue: '12%' },
        { label: 'Health Score', value: '98/100' }
      ]
    },
    {
      name: 'Conversion Lab',
      icon: Zap,
      description: 'Analyzes landing pages and checkout flows to eliminate friction and psychological barriers.',
      status: 'optimizing' as const,
      color: 'text-secondary',
      metrics: [
        { label: 'Conv. Rate', value: '3.8%', trend: 'up' as const, trendValue: '1.2%' },
        { label: 'A/B Tests', value: '8 Active' }
      ]
    }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Command Center</h2>
          <p className="text-gray-400 mt-2">All autonomous systems are operational. Risk level is <span className="text-green-400 font-bold">LOW</span>.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass px-4 py-2 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-wider">Live System Sync</span>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Daily Revenue', value: '$42,390', icon: DollarSign, color: 'text-primary' },
          { label: 'Net Profit', value: '$14,200', icon: TrendingUp, color: 'text-secondary' },
          { label: 'Ad Spend', value: '$8,400', icon: BarChart3, color: 'text-blue-400' },
          { label: 'Risk Alerts', value: '0 Critical', icon: AlertCircle, color: 'text-gray-400' },
        ].map((stat, idx) => (
          <div key={idx} className="glass p-6 border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
              <stat.icon size={18} className={stat.color} />
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Agent Grid */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-xl font-bold">Autonomous Agents</h3>
          <div className="h-px flex-1 bg-white/10 ml-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {agents.map((agent, idx) => (
            <AgentCard key={idx} {...agent} />
          ))}
        </div>
      </div>

      {/* Activity Feed / Critical Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-6">
          <h3 className="text-lg font-bold mb-6">Recent Autonomous Decisions</h3>
          <div className="space-y-4">
            {[
              { time: '2 mins ago', agent: 'Risk Monitor', action: 'Paused Campaign "Shoes_Summer_Sale" due to ROAS dropping below 1.5x threshold.', type: 'risk' },
              { time: '15 mins ago', agent: 'Growth & Ads', action: 'Increased daily budget by 15% for "Bestseller_Lamp_V2" following high conversion velocity.', type: 'growth' },
              { time: '1 hour ago', agent: 'Product Scout', action: 'Identified 3 new high-margin suppliers for "Ergonomic Chairs" in the EU market.', type: 'scout' },
              { time: '3 hours ago', agent: 'Conversion Lab', action: 'Implemented new "Trust Badge" variation on checkout page after 12% improvement in test group.', type: 'conv' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5 items-start">
                <div className="text-[10px] text-gray-500 font-bold whitespace-nowrap mt-1">{item.time}</div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase mr-2">{item.agent}</span>
                  <p className="text-sm text-gray-300 mt-1">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6">
          <h3 className="text-lg font-bold mb-6">Market Intel</h3>
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                <TrendingUp size={16} /> Hot Niche Alert
              </h4>
              <p className="text-sm text-gray-300">Smart Home Gardening is seeing a 45% WoW increase in search volume with low ad competition.</p>
            </div>

            <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <Users size={16} /> Audience Shift
              </h4>
              <p className="text-sm text-gray-300">Millennial demographic showing higher resonance with "Sustainability" hooks over "Fast Delivery".</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
