'use client';

import React from 'react';

const Pricing = () => {
    const plans = [
        {
            duration: "1 MOIS",
            price: "9.99 €",
            features: [
                "4K / FHD / HD IPTV",
                "+15,000 Chaînes Live",
                "+60,000 VOD & Séries",
                "Stabilité Anti-Freeze",
                "Installation 5 Mins",
                "Support 24/7 WhatsApp"
            ],
            highlight: false,
            badge: "Essai"
        },
        {
            duration: "3 MOIS",
            price: "24.99 €",
            features: [
                "4K / FHD / HD IPTV",
                "+15,000 Chaînes Live",
                "+60,000 VOD & Séries",
                "Stabilité Anti-Freeze",
                "Installation 5 Mins",
                "Support 24/7 WhatsApp"
            ],
            highlight: false,
            badge: "Populaire"
        },
        {
            duration: "6 MOIS",
            price: "29.99 €",
            features: [
                "4K / FHD / HD IPTV",
                "+15,000 Chaînes Live",
                "+60,000 VOD & Séries",
                "Stabilité Anti-Freeze",
                "Installation 5 Mins",
                "Support 24/7 WhatsApp"
            ],
            highlight: true,
            badge: "MEILLEURE OFFRE"
        },
        {
            duration: "12 MOIS",
            price: "39.99 €",
            features: [
                "4K / FHD / HD IPTV",
                "+15,000 Chaînes Live",
                "+60,000 VOD & Séries",
                "Stabilité Anti-Freeze",
                "Installation 5 Mins",
                "Support 24/7 WhatsApp"
            ],
            highlight: false,
            badge: "Sérénité"
        }
    ];

    return (
        <section id="pricing" className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-white opacity-[0.03]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 animate-reveal">
                    <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-[#065f46]">
                        NOS TARIFS 2026
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tighter leading-none">
                        PRÊT POUR <br />
                        <span className="text-[#065f46] italic">L'IMMERSION ?</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        Des offres transparentes, sans engagement et activées en quelques minutes.
                        Choisissez la durée qui vous convient le mieux.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-[40px] p-8 md:p-10 transition-all duration-700 flex flex-col group animate-reveal ${plan.highlight
                                    ? 'bg-[#065f46] text-white scale-105 z-10 shadow-[0_40px_80px_-15px_rgba(6,95,70,0.4)]'
                                    : 'bg-gray-50 text-gray-900 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200'
                                }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Badge */}
                            <div className={`absolute top-6 right-8 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${plan.highlight ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-500'
                                }`}>
                                {plan.badge}
                            </div>

                            <div className="mb-10">
                                <span className={`text-xs font-black uppercase tracking-[0.2em] ${plan.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
                                    {plan.duration}
                                </span>
                                <div className="text-5xl font-black mt-3 tracking-tighter">
                                    {plan.price.split(' ')[0]}
                                    <span className="text-xl ml-1 opacity-60">€</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center text-xs font-bold">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 transition-colors ${plan.highlight ? 'bg-white/20 text-white' : 'bg-[#065f46]/10 text-[#065f46]'
                                            }`}>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className={plan.highlight ? 'text-gray-100' : 'text-gray-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/212708894866"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-5 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95 ${plan.highlight
                                        ? 'bg-white text-[#065f46] hover:shadow-xl shadow-lg'
                                        : 'bg-[#065f46] text-white hover:bg-[#047857] shadow-lg shadow-primary/20'
                                    }`}
                            >
                                S'ABONNER
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>

                            <div className="mt-6 flex flex-col items-center gap-1">
                                <p className={`text-[10px] font-black uppercase tracking-[0.1em] ${plan.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
                                    ACTIVATION EN 5 MINS
                                </p>
                                <p className="text-[10px] font-black text-[#ef4444] uppercase tracking-[0.1em] animate-pulse">
                                    TEST GRATUIT 24H
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
