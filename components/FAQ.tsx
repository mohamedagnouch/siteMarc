'use client';

import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            category: "GÉNÉRAL",
            question: "L'IPTV, c'est quoi exactement ?",
            answer: "L'IPTV (Internet Protocol Television) est la diffusion de contenus télévisuels via internet. Contrairement au satellite, vous n'avez besoin que d'une connexion internet pour accéder à des milliers de chaînes et VOD en haute définition.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            category: "TECHNIQUE",
            question: "Sur quels appareils puis-je regarder ?",
            answer: "Notre service est compatible avec TOUS les appareils : Smart TV (Samsung, LG, Sony), Box Android, Amazon Firestick, MAG, Smartphones (iOS/Android), Tablettes et PC/Laptop.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            category: "QUALITÉ",
            question: "Quelle connexion internet est requise ?",
            answer: "Pour une expérience fluide en 4K UHD, nous recommandons une connexion d'au moins 12 Mbps. Pour la Full HD, 8 Mbps suffisent. Notre technologie anti-freeze optimise le flux selon votre débit.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.05 9.05 0 0112.728 0m-15.557-2.828a13.314 13.314 0 0118.385 0" />
                </svg>
            )
        },
        {
            category: "ABONNEMENT",
            question: "Comment se passe l'installation ?",
            answer: "Après votre commande, vous recevrez vos accès en 5 minutes environ par WhatsApp ou Email. Notre équipe Premium vous accompagne en direct pour configurer votre application préférée.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 px-6 bg-dark-accent/30 relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-20 animate-reveal">
                    <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
                        Support Center
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
                        VOS QUESTIONS, <br />
                        <span className="text-primary italic">NOS RÉPONSES</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        Tout ce que vous devez savoir pour profiter du service IPTV numéro 1 au Maroc.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`glass-morphism rounded-[32px] overflow-hidden transition-all duration-500 border animate-reveal ${openIndex === index ? 'border-primary/40 shadow-2xl shadow-primary/10' : 'border-white/5 hover:border-white/10'
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left transition-all group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 group-hover:text-white'
                                        }`}>
                                        {faq.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${openIndex === index ? 'text-primary' : 'text-gray-600'
                                            }`}>
                                            {faq.category}
                                        </span>
                                        <span className={`text-lg md:text-xl font-black tracking-tight ${openIndex === index ? 'text-white' : 'text-gray-300'
                                            }`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                </div>
                                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-primary/20 border-primary/30 text-primary' : 'text-gray-500'
                                    }`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-8 pt-0 ml-20">
                                    <div className="h-[1px] w-full bg-white/5 mb-6"></div>
                                    <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
