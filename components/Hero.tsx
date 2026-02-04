import React from 'react';

const Hero = () => {
    const devices = [
        {
            name: "Smart TV",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="13" rx="2" />
                    <path d="M7 16h10M12 16v4M10 20h4" />
                </svg>
            )
        },
        {
            name: "Android",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 10c0-3.866 3.134-7 7-7s7 3.134 7 7M8 10V3M16 10V3" />
                    <rect x="5" y="10" width="14" height="11" rx="2" />
                </svg>
            )
        },
        {
            name: "iOS",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21.3V18c-3.3 0-6-2.7-6-6s2.7-6 6-6V2.7M12 18h2.3c2.6 0 4.7-2.1 4.7-4.7s-2.1-4.7-4.7-4.7H12" />
                </svg>
            )
        },
        {
            name: "Windows",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 5l8-1.5v7.5H3V5zm0 14l8 1.5v-7.5H3V19zm9 1.5l9 1.5v-9h-9v7.5zm0-16.5v7.5h9v-9l-9 1.5z" />
                </svg>
            )
        },
        {
            name: "PC / Laptop",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 16h20v2H2v-2zm2-2h16V3H4v11zM7 16l-1 4h12l-1-4" />
                </svg>
            )
        }
    ];

    return (
        <section id="accueil" className="relative pt-40 pb-20 overflow-hidden min-h-[90vh] flex items-center justify-center">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dark/60 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40 z-10"></div>
                <img
                    src="/images/hero-bg.png"
                    alt="Cinematic Background"
                    className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
                />
            </div>

            {/* Background Effects (Secondary) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-20"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <div className="animate-reveal [animation-delay:100ms] mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Premium IPTV Service 2026
                </div>

                <h1 className="animate-reveal [animation-delay:300ms] text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-white uppercase">
                    VOTRE CINÉMA <br />
                    <span className="text-primary italic">À DOMICILE</span>
                </h1>

                <p className="animate-reveal [animation-delay:500ms] max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-12 font-medium leading-relaxed">
                    Accédez instantanément à plus de 15,000 chaînes mondiales et 60,000 VOD en 4K UHD.
                    Stabilité premium garantie pour une expérience sans compromis.
                </p>

                <div className="animate-reveal [animation-delay:700ms] flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                    <a
                        href="#pricing"
                        className="w-full sm:w-auto bg-primary hover:bg-green-600 text-white px-12 py-5 rounded-2xl text-lg font-black transition-all transform hover:scale-105 shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 active:scale-95"
                    >
                        COMMENCER L'EXPÉRIENCE
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a
                        href="https://wa.me/212708894866"
                        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl text-lg font-black transition-all flex items-center justify-center gap-3 border border-white/10"
                    >
                        TEST GRATUIT
                    </a>
                </div>

                {/* Device Compatibility */}
                <div className="animate-reveal [animation-delay:900ms] flex flex-col items-center gap-8 border-t border-white/5 pt-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity">
                        {devices.map((device) => (
                            <div key={device.name} className="flex flex-col items-center gap-3 group">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:text-primary group-hover:border-primary/50 transition-all">
                                    {device.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{device.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
