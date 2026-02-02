
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Layout, 
  Code, 
  Zap, 
  Server, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Send,
  Loader2,
  Cpu,
  ShieldCheck,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { getAIResponse } from './services/geminiService';
import { NavLink, Skill, ConsultationMessage } from './types';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Helper component to render formatted AI text
const FormattedMessage: React.FC<{ content: string }> = ({ content }) => {
  // Split by double newlines for paragraphs
  const paragraphs = content.split(/\n\n+/);

  return (
    <div className="space-y-3">
      {paragraphs.map((para, i) => {
        // Check if paragraph is a list
        if (para.includes('\n- ') || para.startsWith('- ')) {
          const items = para.split(/\n- /).map(item => item.replace(/^- /, '').trim()).filter(Boolean);
          return (
            <ul key={i} className="list-disc ml-5 space-y-1">
              {items.map((item, j) => (
                <li key={j} className="leading-relaxed">
                  {renderBoldText(item)}
                </li>
              ))}
            </ul>
          );
        }
        
        return (
          <p key={i} className="leading-relaxed whitespace-pre-line">
            {renderBoldText(para)}
          </p>
        );
      })}
    </div>
  );
};

// Simple helper to render **text** as bold
const renderBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [messages, setMessages] = useState<ConsultationMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Contact Form States
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) error = 'Nama wajib diisi';
        else if (value.length < 3) error = 'Nama minimal 3 karakter';
        break;
      case 'email':
        if (!value) error = 'Email wajib diisi';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Format email tidak valid';
        break;
      case 'subject':
        if (!value) error = 'Subjek wajib diisi';
        break;
      case 'message':
        if (!value) error = 'Pesan wajib diisi';
        else if (value.length < 10) error = 'Pesan minimal 10 karakter';
        break;
      default:
        break;
    }
    setFormErrors(prev => ({ ...prev, [name]: error }));
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors: ContactFormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof ContactFormData]);
      if (error) errors[key as keyof ContactFormErrors] = error;
    });

    if (Object.values(errors).some(err => err)) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const navLinks: NavLink[] = [
    { label: 'Keahlian', href: '#skills' },
    { label: 'Proses', href: '#process' },
    { label: 'Konsultasi AI', href: '#ai' },
    { label: 'Kontak', href: '#contact' }
  ];

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response || '' }]);
    setIsTyping(false);
  };

  const expertise: Skill[] = [
    {
      title: 'Mobile Development',
      description: 'Pengembangan aplikasi React Native untuk Android & iOS dengan performa native.',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      tags: ['React Native', 'TestFlight', 'App Store', 'Play Store']
    },
    {
      title: 'Admin Dashboards',
      description: 'Sistem manajemen data kompleks menggunakan Laravel Filament & Livewire.',
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      tags: ['Laravel', 'Filament', 'Livewire', 'Order System']
    },
    {
      title: 'WordPress Custom',
      description: 'Pembuatan plugin custom untuk Elementor, WooCommerce, dan Payment Gateway.',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      tags: ['PHP', 'WooCommerce', 'Elementor', 'Custom Plugin']
    },
    {
      title: 'Advanced Backend',
      description: 'Integrasi third-party API, sistem OTP, Maps, dan Firebase real-time.',
      icon: <Server className="w-8 h-8 text-orange-400" />,
      tags: ['Firebase', 'Maps', 'Payment', 'OTP']
    }
  ];

  const processSteps = [
    { title: 'Analisis Kebutuhan', desc: 'Bedah ide bisnis dan tentukan arsitektur terbaik.' },
    { title: 'Development', desc: 'Coding dengan standar industri, clean code, dan scalable.' },
    { title: 'Testing via TestFlight', desc: 'Pengujian intensif untuk memastikan aplikasi stabil.' },
    { title: 'Deployment', desc: 'Publikasi resmi ke Play Store dan App Store.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white text-xl">D</div>
            <span className="text-xl font-bold tracking-tight">DevPortfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
              Hubungi Saya
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
              <Zap className="w-3 h-3" /> SIAP MEMBANTU BISNIS ANDA SCALE
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Mengubah <span className="gradient-text">Ide</span> Menjadi <span className="gradient-text">Aplikasi</span> Nyata.
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              Saya membantu bisnis membangun solusi digital stabil—mulai dari analisis kebutuhan, 
              development, testing, hingga publikasi di Store. Fokus pada performa dan skalabilitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ai" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
                Mulai Konsultasi <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#skills" className="px-8 py-4 glass hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
                Lihat Keahlian
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 20}/64/64`} className="w-10 h-10 rounded-full border-2 border-[#030712]" alt="client" />
                ))}
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-white font-bold">10+ Proyek</span> telah berhasil dipublikasi ke Store.
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-2xl -z-10"></div>
             <div className="glass rounded-3xl p-8 border border-white/10 overflow-hidden relative">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <Smartphone className="w-6 h-6 text-blue-400 mb-2" />
                            <h3 className="text-sm font-bold">Mobile First</h3>
                            <p className="text-xs text-slate-400">React Native (iOS/Android)</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <ShieldCheck className="w-6 h-6 text-green-400 mb-2" />
                            <h3 className="text-sm font-bold">Secure</h3>
                            <p className="text-xs text-slate-400">Secure Payment & Auth</p>
                        </div>
                    </div>
                    <div className="space-y-4 mt-8">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <TrendingUp className="w-6 h-6 text-purple-400 mb-2" />
                            <h3 className="text-sm font-bold">Scalable</h3>
                            <p className="text-xs text-slate-400">Micro-services Ready</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <Cpu className="w-6 h-6 text-orange-400 mb-2" />
                            <h3 className="text-sm font-bold">High Perf</h3>
                            <p className="text-xs text-slate-400">Optimized Architecture</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-center">
                    <div className="w-full h-32 bg-gradient-to-b from-slate-800 to-transparent rounded-t-xl opacity-50 flex items-center justify-center">
                        <Code className="w-12 h-12 text-slate-600" />
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Keahlian Utama</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Solusi pengembangan modern dengan tech stack pilihan untuk memastikan aplikasi Anda cepat, aman, dan mudah dimaintain.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group">
              <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Workflow Profesional</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Saya tidak hanya sekedar menulis kode, tapi memastikan setiap tahap pengembangan terpantau dengan baik untuk hasil maksimal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Optimasi Performa RN</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Migrasi Arsitektur Baru</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Dashboard Admin Terintegrasi</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="p-8 bg-white/5 rounded-3xl border border-white/5 relative">
                  <span className="absolute top-8 right-8 text-4xl font-black text-white/5">0{idx + 1}</span>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Consultation Section */}
      <section id="ai" className="py-20 bg-blue-600/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass rounded-[40px] p-8 md:p-12 border border-blue-500/20 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare className="w-32 h-32" />
            </div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Konsultasi Ide dengan AI</h2>
              <p className="text-slate-400">Punya ide aplikasi? Tanyakan pada asisten cerdas saya untuk rekomendasi teknis awal.</p>
            </div>
            
            <div className="space-y-6 mb-8 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {messages.length === 0 && (
                <div className="text-center py-10 text-slate-500 italic">
                  Belum ada percakapan. Mulai dengan menyapa atau jelaskan ide Anda!
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] px-5 py-4 rounded-2xl text-[15px] ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-600/20' 
                    : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/10'
                  }`}>
                    {msg.role === 'assistant' ? (
                      <FormattedMessage content={msg.content} />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 px-5 py-3 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                    <span className="text-xs text-slate-400 italic">Asisten sedang mengetik...</span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleConsultation} className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Contoh: Saya ingin buat aplikasi laundry antar jemput..."
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 pr-16 text-white placeholder:text-slate-500"
              />
              <button 
                type="submit"
                disabled={isTyping}
                className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Mari Membangun <br/><span className="gradient-text">Masa Depan</span> Digital Bersama.</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Tersedia untuk proyek freelance, kontrak, atau kolaborasi jangka panjang. 
              Mari bicarakan bagaimana saya bisa membantu bisnis Anda hari ini.
            </p>
            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-medium group-hover:text-blue-400 transition-colors">aikhacomp@gmail.com</p>
                </div>
              </a>
              {/* <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                  <p className="text-lg font-medium group-hover:text-purple-400 transition-colors">linkedin.com/in/yourprofile</p>
                </div>
              </div> */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-slate-500/10 transition-colors">
                  <Github className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">GitHub</p>
                  <p className="text-lg font-medium group-hover:text-white transition-colors">github.com/aikhacode</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass p-10 rounded-[40px] border border-white/10 relative">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 space-y-4 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pesan Terkirim!</h3>
                <p className="text-slate-400">Terima kasih telah menghubungi. Saya akan merespon email Anda sesegera mungkin.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
                >
                  Kirim pesan lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold block mb-2">Nama Lengkap</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${formErrors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors`} 
                      placeholder="John Doe" 
                    />
                    {formErrors.name && (
                      <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1 animate-in slide-in-from-top-1 duration-200">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold block mb-2">Email Bisnis</label>
                    <input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${formErrors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors`} 
                      placeholder="john@company.com" 
                    />
                    {formErrors.email && (
                      <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1 animate-in slide-in-from-top-1 duration-200">
                        <AlertCircle className="w-3 h-3" /> {formErrors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold block mb-2">Subjek Proyek</label>
                  <input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border ${formErrors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors`} 
                    placeholder="App Development / Web Solution" 
                  />
                  {formErrors.subject && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1 animate-in slide-in-from-top-1 duration-200">
                      <AlertCircle className="w-3 h-3" /> {formErrors.subject}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold block mb-2">Pesan</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border ${formErrors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors`} 
                    placeholder="Ceritakan sedikit tentang proyek Anda..."
                  ></textarea>
                  {formErrors.message && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1 animate-in slide-in-from-top-1 duration-200">
                      <AlertCircle className="w-3 h-3" /> {formErrors.message}
                    </div>
                  )}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sedang Mengirim...
                    </>
                  ) : (
                    'Kirim Pesan'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">D</div>
            <span className="font-bold tracking-tight">DevPortfolio</span>
          </div>
          <p className="text-sm text-slate-500">© 2024 Senior Fullstack Developer. Dibuat dengan presisi.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
