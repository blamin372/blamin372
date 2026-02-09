import { LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface AgentCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  status: 'active' | 'scanning' | 'alert' | 'optimizing';
  metrics: {
    label: string;
    value: string;
    trend?: 'up' | 'down';
    trendValue?: string;
  }[];
  color: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, icon: Icon, description, status, metrics, color }) => {
  const statusColors = {
    active: 'text-green-400 bg-green-400/10',
    scanning: 'text-blue-400 bg-blue-400/10',
    alert: 'text-red-400 bg-red-400/10',
    optimizing: 'text-purple-400 bg-purple-400/10'
  };

  return (
    <div className="glass p-6 glass-hover group">
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
          <Icon className={`${color}`} size={24} />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{name}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white/5 p-3 rounded-lg border border-white/5">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-medium">{metric.label}</p>
            <div className="flex items-end gap-2">
              <span className="text-lg font-bold">{metric.value}</span>
              {metric.trend && (
                <span className={`flex items-center text-[10px] font-bold mb-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                  {metric.trendValue}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2.5 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/5 transition-all">
        Open Agent Interface
      </button>
    </div>
  );
};

export default AgentCard;
