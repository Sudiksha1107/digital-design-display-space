
export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-fade-in">
            ECE Engineer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-delay">
            Passionate about Electronics, Circuits, and Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Skills
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
