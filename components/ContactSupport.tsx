import React from 'react';

const ContactSupport = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-dark relative overflow-hidden">
            {/* High-end visual depth layers */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="glass-morphism rounded-[60px] p-12 md:p-24 border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden animate-reveal">

                    {/* Decorative Background Icon */}
                    <div className="absolute -right-20 -bottom-20 opacity-[0.02] pointer-events-none">
                        <svg className="w-[500px] h-[500px] text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.01 4.01c-4.42 0-8 3.58-8 8 0 1.58.46 3.05 1.25 4.3l-1.25 3.69 3.78-1.21c1.21.71 2.62 1.13 4.12 1.13 4.42 0 8-3.58 8-8s-3.58-8-8-8zm0 14.33c-1.33 0-2.58-.38-3.64-1.04l-.26-.16-2.22.71.58-2.12-.17-.28c-.68-1.12-1.07-2.43-1.07-3.83 0-3.6 2.93-6.52 6.52-6.52s6.52 2.93 6.52 6.52-2.93 6.52-6.52 6.52zm3.32-4.57c-.18-.09-1.08-.53-1.25-.59-.17-.06-.29-.09-.42.09-.12.18-.48.59-.59.72-.11.13-.22.14-.4.05-.18-.09-.76-.28-1.44-.89-.53-.47-.89-1.05-.99-1.23-.1-.18-.01-.27.08-.36.08-.08.18-.21.27-.31.09-.1.12-.17.18-.28.06-.11.03-.21-.01-.3-.04-.09-.42-1.01-.57-1.38-.15-.35-.3-.3-.42-.31l-.35-.01c-.13 0-.34.05-.51.24-.17.19-.65.64-.65 1.56s.67 1.81.76 1.94c.09.13 1.31 2.01 3.19 2.82.45.19.8.3 1.07.39.45.14.86.12 1.18.07.36-.05 1.08-.44 1.23-.87.16-.42.16-.79.11-.86-.05-.08-.17-.12-.35-.21z" />
                        </svg>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-16">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Support Live 24/7 Disponible</span>
                            </div>

                            <h2 className="text-4xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
                                BESOIN D'UNE <br />
                                <span className="text-primary italic">ASSISTANCE ?</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                Que ce soit pour une installation, un test gratuit ou une question technique, notre équipe Premium est à votre écoute instantanément sur WhatsApp.
                            </p>
                        </div>

                        <div className="flex flex-col items-center shrink-0">
                            <div className="relative group mb-10">
                                <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                                <div className="relative bg-white p-10 rounded-full shadow-2xl transform transition-transform group-hover:scale-110 duration-700">
                                    <svg className="w-16 h-16 text-[#065f46] fill-current" viewBox="0 0 24 24">
                                        <path d="M12.01 4.01c-4.42 0-8 3.58-8 8 0 1.58.46 3.05 1.25 4.3l-1.25 3.69 3.78-1.21c1.21.71 2.62 1.13 4.12 1.13 4.42 0 8-3.58 8-8s-3.58-8-8-8zm0 14.33c-1.33 0-2.58-.38-3.64-1.04l-.26-.16-2.22.71.58-2.12-.17-.28c-.68-1.12-1.07-2.43-1.07-3.83 0-3.6 2.93-6.52 6.52-6.52s6.52 2.93 6.52 6.52-2.93 6.52-6.52 6.52zm3.32-4.57c-.18-.09-1.08-.53-1.25-.59-.17-.06-.29-.09-.42.09-.12.18-.48.59-.59.72-.11.13-.22.14-.4.05-.18-.09-.76-.28-1.44-.89-.53-.47-.89-1.05-.99-1.23-.1-.18-.01-.27.08-.36.08-.08.18-.21.27-.31.09-.1.12-.17.18-.28.06-.11.03-.21-.01-.3-.04-.09-.42-1.01-.57-1.38-.15-.35-.3-.3-.42-.31l-.35-.01c-.13 0-.34.05-.51.24-.17.19-.65.64-.65 1.56s.67 1.81.76 1.94c.09.13 1.31 2.01 3.19 2.82.45.19.8.3 1.07.39.45.14.86.12 1.18.07.36-.05 1.08-.44 1.23-.87.16-.42.16-.79.11-.86-.05-.08-.17-.12-.35-.21z" />
                                    </svg>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/212708894866"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto bg-primary hover:bg-green-600 text-white px-16 py-6 rounded-[32px] text-lg font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(34,197,94,0.5)] active:scale-95 flex items-center justify-center gap-3"
                            >
                                CONTACTER LE SUPPORT
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <p className="mt-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                                RÉPONSE EN MOINS DE 2 MINUTES
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSupport;
