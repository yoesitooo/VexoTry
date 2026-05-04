import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-vexo-black border-t border-white/5 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white tracking-tighter mb-2">VexoTry</h3>
          <p className="text-slate-500 text-sm">
            © 2026 VexoTry Inc. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-vexo-accent/20 transition-all">
            <Twitter size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-vexo-accent/20 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-vexo-accent/20 transition-all">
            <Github size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer