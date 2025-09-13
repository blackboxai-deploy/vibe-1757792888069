export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center">
      <div className="text-center space-y-8 px-6 py-12">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Good Morning
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to your Next.js application! This is a beautiful greeting page 
            built with modern web technologies.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-red-200/50 transition-all duration-300 border border-red-100/50">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Next.js 15</h3>
              <p className="text-gray-600 text-sm">
                Built with the latest Next.js framework for optimal performance.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-red-200/50 transition-all duration-300 border border-red-100/50">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 text-sm">
                Styled with utility-first CSS framework for rapid development.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-red-200/50 transition-all duration-300 border border-red-100/50">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Responsive</h3>
              <p className="text-gray-600 text-sm">
                Fully responsive design that works beautifully on all devices.
              </p>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-gray-500">
              ❤️ Your application is ready to be customized and deployed!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}