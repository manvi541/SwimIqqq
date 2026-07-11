import { Waves, Camera, Upload, Headphones, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center w-full overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* Navbar Container */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
            <Waves className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">SwimIQ</span>
        </div>
        <div className="flex gap-4">
          <Link
            to="/demo"
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20 text-sm"
          >
            Live Demo
          </Link>
          <Link
            to="/upload"
            className="px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl font-medium text-slate-300 hover:bg-slate-700 transition-all text-sm"
          >
            Upload Video
          </Link>
        </div>
      </nav>

      {/* Main Layout Container */}
      <main className="w-full max-w-6xl px-6 mx-auto flex flex-col items-center flex-1 z-10">
        
        {/* Main Hero Header Block */}
        <section className="flex flex-col items-center text-center pt-20 pb-12 max-w-3xl w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            AI-Powered Swimming Coach
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] mb-8 w-full text-white break-words">
            Real-time form analysis.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Instant coaching feedback.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            SwimIQ uses computer vision and AI to analyze your swimming stroke in real-time.
            Poolside cameras track your form. Your phone delivers audio coaching through headphones — while you swim.
          </p>

          {/* Action Row Links */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-white text-lg hover:from-cyan-400 hover:to-blue-400 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              Start Live Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/upload"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 border border-slate-700/60 rounded-2xl font-semibold text-slate-300 text-lg hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload a Video
            </Link>
          </div>
        </section>

        {/* Organized 3-Column Features Section */}
        <section className="w-full relative max-w-5xl my-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-cyan-500/10 blur-3xl rounded-full" />
          <div className="relative bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md">
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
          </div>
        </section>

        {/* Separated How It Works Block */}
        <section className="w-full mt-16 pt-16 pb-24 border-t border-slate-900/60 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-3">How It Works</h2>
            <p className="text-slate-400 text-sm font-medium">From water to insight in milliseconds</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Poolside Camera', desc: 'Captures swimmer from both lane ends' },
              { step: '02', title: 'MoveNet AI', desc: 'Detects 17 body keypoints in real-time' },
              { step: '03', title: 'Form Analysis', desc: 'Computes symmetry, extension, alignment' },
              { step: '04', title: 'Audio Feedback', desc: 'Coaching tips delivered through headphones' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center p-4">
                <div className="text-5xl font-black text-cyan-500/15 mb-4 tracking-wider">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Structured Footer */}
      <footer className="w-full border-t border-slate-900 py-8 text-center text-slate-500 text-xs font-medium tracking-wide">
        SwimIQ — AI Swimming Coach. Built for hackers.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 group">
      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed font-normal">{description}</p>
    </div>
  )
}
