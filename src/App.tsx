function App() {
  return (
    <div className="font-display text-white min-h-screen">
      {/* Floating Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="glass rounded-xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white text-xl">account_tree</span>
            </div>
            <span className="text-xl font-bold tracking-tight">YieldOps</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Scout</a>
            <a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Handshake</a>
            <a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Operator</a>
            <a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/20 transition-all">
              Login
            </button>
            <button className="bg-primary btn-glow px-6 py-2 rounded-lg text-sm font-bold text-white hover:scale-105 transition-all">
              Launch Console
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          V2.0 Autonomous Engine Now Live
        </div>
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-[1.1] mb-8">
          The Era of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Autonomous</span> E-commerce Scaling.
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          Deploy a fleet of AI agents to scout trends, negotiate with suppliers, and operate your store 24/7. Built for high-growth DTC brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary btn-glow px-10 py-5 rounded-xl text-lg font-bold hover:scale-105 transition-transform flex items-center gap-2">
            Start Scaling Now <span className="material-symbols-outlined">trending_up</span>
          </button>
          <button className="glass px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/5 transition-all flex items-center gap-2">
            View Sandbox <span className="material-symbols-outlined">terminal</span>
          </button>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-10">Trusted by Global High-Growth Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <img alt="Brand 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8a7d7pxVby77k94P2YKxYTciRlGz6XyDDiUc3sb7PWnpmkOK2aUbMBYNJNF51xtZdT6QdlNUZ-BYBFgeti1Dsaz-s-jZ6q2CKCV5T3Cs6Tv1pV5whpnL2eG57Lz4Ng5Rmp6DH5qEgLpyT97hsMDSh3ti5ocIOEZAQD6ZbPjxyMJ_98odtM6Ua0RRFE5T57cH2fUxL-GifBW5gxeGtqkgg0XNun0TBaAdFKjjn878LwCtbtXMJC5XfxWPp7Bjm1k_9dwRvhQnx5c9B" className="h-8 w-auto" />
            <img alt="Brand 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsk1H0NTdwQddxegEGBSWlGxPnqmb_mt4wM_tTlD4r3cZ3kPBRl7kSh0GqGeZwaPnU2RmoL5h9SvfqLxr7UYHszduk-KRKZMfIV1qX-i5xuMinFqoKKKxqivo5gc-YbDf-jS8Nz4vJAY544nCQsZiXQlutS8a7c5kkgONd7NxTdiyOJFyTwlXh-aVh4mfx5K9LX_HJdHq4j0qt7xBtqJ-DkJR8ay8PqBcEz__0LRqLOL24bsjlhLA1z-fcpYLoTPW_LkP2qkGn9Hzw" className="h-8 w-auto" />
            <img alt="Brand 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHONGnwbdm0M-hcBbGReVX8BQMy10Fz7kz7BVSXKzz7QuZ1UQUek0-xvfffLq8g5MEnFJMdDugP3cNnl0F9pmle140TaeGM_7s-SGEBng8DBeshGHo0VP2O0cJY42XJjM_sUSVVpLId8Nc6IsC7Rh02dEnZzrHQNVWIz54fnDH7uj2AI-rASCilVJPCzM7WNBr-sovwspN9RgTyKjcsYqkB32hrApvE1wNOqZxFmNi9JCBqMkRKdW7kqz5gKiPxp-XIcWdfEpt5Fl" className="h-8 w-auto" />
            <img alt="Brand 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2dWp7juYqYFko8_P9llXoGTCekExkxG3brsZin1CtuBot_KujkkDdUgLLVhYChrN6z95cBYv3m0QOzDG1-YAHOrieLkjRyppLPiZWyNfrPkB8ray6anQb1G8E8-1DCSpxTzHwQuPOeEoQyANAcZnHeitAz-mcIyq0T4hFyqHJrfGNpxlx2MjjZXsmvq17zczPl99B9HqEfBnLcH8oa8xHDVnY0W9ORjFU_YH-iGefUbFb2CS5uvldqJguURELFXYGsy4iQ6YnLhSE" className="h-8 w-auto" />
            <img alt="Brand 5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0YnxUQmhDQ0nUsgjXz2ulLfklfGKPsJIyqRQKRSzFxEYkdo_1BTmGK4uUherrTeVU0KFZia8SfhkhQrXE7J0YHBQyEGUlKwupCx3V7mgGNRqNhyh3qoTuaMkI73MFgedfiwK4SIPqY1yHFsWQVwZNyCwEI9NN7JJc-orG1Ks7x54sBMU8sqkeDFM9gsBS3mBLPYPbvZz44fcIXQ9IaB64svHsHpWJhx9Eclr7S3rU_jr0Ww0JeFcqDwWLYgyqxawFXS0tw9JuweP2" className="h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* Agent Trifecta */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">The Agent Trifecta</h2>
            <p className="text-white/60 text-lg">Specialized autonomous units working in perfect harmony to maximize your margins and minimize operational drag.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <div className="text-primary font-bold text-2xl">24/7</div>
              <div className="text-white/40 text-xs uppercase font-bold tracking-widest">Uptime Guaranteed</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-right">
              <div className="text-secondary font-bold text-2xl">98%</div>
              <div className="text-white/40 text-xs uppercase font-bold tracking-widest">Automation Rate</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Scout Card */}
          <div className="glass-active rounded-2xl p-8 group hover:border-primary/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary">search_insights</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Scout Agent</h3>
            <p className="text-white/50 leading-relaxed mb-8">
              Market intelligence and real-time trend spotting across global marketplaces. Identifies high-margin opportunities before they hit the mainstream.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span> TikTok Trends Analysis
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span> Competitor Pricing Logs
              </li>
            </ul>
            <div className="h-32 w-full bg-background-dark/50 rounded-lg overflow-hidden border border-white/5">
              <div className="p-3 text-[10px] font-mono text-primary/70 animate-pulse">
                &gt; Analyzing Amazon Best Sellers...<br />
                &gt; Found 12 high-velocity leads<br />
                &gt; Potential margin: +45%
              </div>
            </div>
          </div>
          {/* Handshake Card */}
          <div className="glass rounded-2xl p-8 group hover:border-secondary/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-secondary">handshake</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Handshake Agent</h3>
            <p className="text-white/50 leading-relaxed mb-8">
              Automated supplier negotiation and procurement via proprietary LLMs trained on 10M+ logistics contracts.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span> 24/7 Supplier Outreach
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span> Smart Contract Generation
              </li>
            </ul>
            <div className="h-32 w-full bg-background-dark/50 rounded-lg overflow-hidden border border-white/5">
              <div className="p-3 text-[10px] font-mono text-secondary/70">
                &gt; Negotiating Unit Cost: $4.50<br />
                &gt; Target: $4.10<br />
                &gt; Counter-offer sent...
              </div>
            </div>
          </div>
          {/* Operator Card */}
          <div className="glass rounded-2xl p-8 group hover:border-white/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-white">settings_account_box</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Operator Agent</h3>
            <p className="text-white/50 leading-relaxed mb-8">
              Inventory management and customer lifecycle optimization 24/7. Your store runs perfectly even while you sleep.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-white text-base">check_circle</span> Stock Out Prediction
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-white text-base">check_circle</span> Auto-scaling Ad Spend
              </li>
            </ul>
            <div className="h-32 w-full bg-background-dark/50 rounded-lg overflow-hidden border border-white/5">
              <div className="p-3 text-[10px] font-mono text-white/40">
                &gt; Order #9923 Fulfilled<br />
                &gt; Re-stocking threshold reached<br />
                &gt; Triggering replenishment...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Feed Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Live Performance Feed</h2>
              <p className="text-white/50">Real-time telemetry from active agent fleets</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
              <span className="size-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-mono text-secondary">LIVE SYNC</span>
            </div>
          </div>
          <div className="bg-black/80 rounded-xl border border-white/10 overflow-hidden font-mono text-sm">
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-red-500/50"></div>
                <div className="size-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="size-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-white/30 text-[10px]">agent_console_v2.log</span>
            </div>
            <div className="p-6 h-[300px] overflow-y-auto terminal-scroll space-y-2">
              <div className="text-white/40">[14:22:01] <span className="text-primary">SCOUT_AGENT_04</span>: Initiating deep-crawl of Shopify ecosystem...</div>
              <div className="text-white/40">[14:22:05] <span className="text-secondary">HANDSHAKE_AI</span>: Negotiation for SK-991 successful. Savings: $12.4k/mo</div>
              <div className="text-white/40">[14:22:12] <span className="text-white/60">OPERATOR_UNIT</span>: Restocked "Cloud Runner" series. ETA 3 days.</div>
              <div className="text-white/40">[14:22:18] <span className="text-primary">SCOUT_AGENT_04</span>: Alert: Emerging trend "Gorpcore-Lite" spikes 200% in US/EU.</div>
              <div className="text-white/40">[14:22:25] <span className="text-secondary">HANDSHAKE_AI</span>: Contacting 5 verified suppliers for Gorpcore components.</div>
              <div className="text-white/40">[14:23:01] <span className="text-white/60">OPERATOR_UNIT</span>: Dynamic pricing adjusted on Storefront-A (+4.2%).</div>
              <div className="text-white/40">[14:23:05] <span className="text-primary">SCOUT_AGENT_04</span>: Sourcing complete for new lead. Forwarding to Handshake.</div>
              <div className="text-white/20 animate-pulse">_</div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Ready to let your store <span className="text-primary">run itself</span>?</h2>
          <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto">
            Join the 500+ brands generating passive hyper-growth with YieldOps. Setup takes under 60 minutes.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button className="bg-primary text-white text-2xl font-black py-8 px-16 rounded-2xl btn-glow hover:scale-105 transition-all group flex items-center gap-4">
              ENTER THE CONSOLE
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
            <p className="text-white/40 text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-base">verified_user</span>
              No credit card required for 14-day trial
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <span className="material-symbols-outlined text-primary">account_tree</span>
            <span className="font-bold tracking-tight">YieldOps © 2024</span>
          </div>
          <div className="flex gap-8 text-white/40 text-sm">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Twitter (X)</a>
            <a className="hover:text-white transition-colors" href="#">Documentation</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-secondary"></div>
            <span className="text-xs text-white/40 font-mono tracking-widest uppercase">System Status: Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
