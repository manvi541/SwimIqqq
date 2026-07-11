import { Waves, Camera, Upload, Headphones, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white w-full font-sans flex flex-col items-center">
      
      {/* 1. NAVBAR - Completely isolated at the top */}
      <nav className="w-full max-w-5xl px-6 py-6 flex justify-between items-center border-b border-slate-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center">
            <Waves className="w-6 h-6 text-slate-950" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">SwimIQ</span>
        </div>
        <div className="flex gap-4">
          <Link to="/demo" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
            Live Demo
          </Link>
          <Link to="/upload" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
            Upload Video
          </Link>
        </div>
      </nav>

      {/* MAIN LAYOUT WRAPPER - Gives everything breathing room */}
      <main className="w-full max-w-4xl px-6 flex flex-col items-center">

        {/* 2. HERO HEADER BLOCK */}
        <header className="w-full text-center pt-16 pb-12">
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-500/10 px-3 py-1.5 rounded-full mb-6 border border-cyan-500/20">
            AI-Powered Swimming Coach
          </span>
          
          {/* Increased line-height (leading-relaxed) to absolutely stop text overlapping */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-normal text-white mb-6">
            Real-time form analysis.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Instant coaching feedback.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            SwimIQ uses computer vision and AI to analyze your swimming stroke in real-time. 
            Poolside cameras track your form. Your phone delivers audio coaching through headphones — while you swim.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/demo" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-transform transform hover:-translate-y-0.5">
              Start Live Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/upload" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
              <Upload className="w-5 h-5" /> Upload a Video
            </Link>
          </div>
        </header>

        {/* 3. FEATURE CARDS BLOCK - Standard spaced out rows/columns */}
        <section className="w-full py-12 border-t border-slate-900 mt-8">
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

        {/* 4. HOW IT WORKS BLOCK */}
        <section className="w-full py-16 border-t border-slate-900 mt-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-2">How It Works</h2>
          <p className="text-slate-500 text-sm mb-12">From water to insight in milliseconds</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Poolside Camera', desc: 'Captures swimmer from both lane ends' },
              { step: '02', title: 'MoveNet AI', desc: 'Detects 17 body keypoints in real-time' },
              { step: '03', title: 'Form Analysis', desc: 'Computes symmetry, extension, alignment' },
              { step: '04', title: 'Audio Feedback', desc: 'Coaching tips delivered through headphones' }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center bg-slate-900/30 p-6 rounded-2xl border border-slate-900">
                <div className="text-4xl font-black text-cyan-500/20 mb-3">{item.step}</div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <footer className="w-full border-t border-slate-900 py-8 text-center text-slate-600 text-xs mt-auto">
        SwimIQ — AI Swimming Coach. Built for hackers.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-900/50 border border-slate-900 p-6 rounded-2xl flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}
