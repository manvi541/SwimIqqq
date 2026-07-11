import { Waves, Camera, Upload, Headphones, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white w-full font-sans flex flex-col items-center overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* 1. NAVBAR - Completely isolated with thick vertical padding */}
      <nav className="w-full max-w-5xl px-6 py-8 flex justify-between items-center border-b border-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center">
            <Waves className="w-6 h-6 text-slate-950" />
          </div>
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">SwimIQ</span>
        </div>
        <div className="flex gap-4">
          <Link to="/demo" className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
            Live Demo
          </Link>
          <Link to="/upload" className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
            Upload Video
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT WRAPPER */}
      <main className="w-full max-w-4xl px-6 flex flex-col items-center">

        {/* 2. HERO HEADER BLOCK - Heavily padded on top and bottom */}
        <header className="w-full text-center pt-24 pb-20 flex flex-col items-center space-y-8">
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 shadow-sm shadow-cyan-500/5">
            AI-Powered Swimming Coach
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.25] text-white max-w-3xl">
            Real-time form analysis.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Instant coaching feedback.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium pt-2">
            SwimIQ uses computer vision and AI to analyze your swimming stroke in real-time. 
            Poolside cameras track your form. Your phone delivers audio coaching through headphones — while you swim.
          </p>

          {/* Action Row Buttons - Separated cleanly from the description text */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center pt-6">
            <Link to="/demo" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-2 transition-transform transform hover:-translate-y-0.5 shadow-xl shadow-cyan-500/10">
              Start Live Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/upload" className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
              <Upload className="w-5 h-5" /> Upload a Video
            </Link>
          </div>
        </header>

        {/* 3. FEATURE CARDS BLOCK - Huge vertical margins pushing sections apart */}
        <section className="w-full py-16 border-t border-slate-900/60 my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Camera className="w-6 h-6" />} 
              title="Poolside Cameras" 
              description="Two cameras at lane ends capture your full stroke from stable angles." 
            />
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6" />} 
              title="AI Pose Analysis" 
              description="MoveNet tracks 17 body keypoints to analyze symmetry, extension, and alignment." 
            />
            <FeatureCard 
              icon={<Headphones className="w-6 h-6" />} 
              title="Live Audio Coaching" 
              description="Bone conduction headphones deliver instant form corrections while you swim." 
            />
          </div>
        </section>

        {/* 4. HOW IT WORKS BLOCK - Completely spaced out with huge margins */}
        <section className="w-full py-20 border-t border-slate-900/60 my-12 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">How It Works</h2>
            <p className="text-slate-500 text-sm font-medium">From water to insight in milliseconds</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: '01', title: 'Poolside Camera', desc: 'Captures swimmer from both lane ends' },
              { step: '02', title: 'MoveNet AI', desc: 'Detects 17 body keypoints in real-time' },
              { step: '03', title: 'Form Analysis', desc: 'Computes symmetry, extension, alignment' },
              { step: '04', title: 'Audio Feedback', desc: 'Coaching tips delivered through headphones' }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center bg-slate-900/20 p-8 rounded-2xl border border-slate-900/60 shadow-inner">
                <div className="text-5xl font-black text-cyan-500/15 mb-4 tracking-wider">{item.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-[180px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <footer className="w-full border-t border-slate-900/80 py-10 text-center text-slate-600 text-xs tracking-wide font-medium mt-auto">
        SwimIQ — AI Swimming Coach. Built for hackers.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-900/40 border border-slate-900/60 p-8 rounded-3xl flex flex-col items-center text-center backdrop-blur-sm group hover:border-cyan-500/20 transition-all duration-300">
      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed font-normal">{description}</p>
    </div>
  )
}
