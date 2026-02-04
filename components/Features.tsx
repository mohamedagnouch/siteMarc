import React from 'react';

const Features = () => {
    const features = [
        {
            title: "QUALITÉ CINÉMA 4K",
            description: "Une netteté incomparable et des couleurs éclatantes pour une immersion totale sur vos écrans UHD.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" />
                </svg>
            )
        },
        {
            title: "15,000+ CHAÎNES",
            description: "Sport, Cinéma, Documentaires et Jeunesse. Le meilleur de la TV mondiale accessible en un clic.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    <path d="M3.6 9h16.8M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                </svg>
            )
        },
        {
            title: "STABILITÉ ANTI-FREEZE",
            description: "Technologie de streaming avancée garantissant 0 coupure, même lors des pics d'audience.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "SUPPORT RÉACTIF",
            description: "Notre équipe technique vous accompagne 24/7 sur WhatsApp pour une satisfaction totale.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L3 11V5a2 2 0 012-2h10a2 2 0 012 2v3.414l-1.586 1.586z" />
                </svg>
            )
        },
        {
            title: "MULTI-SUPPORT",
            description: "Compatible avec Smart TV, Android, iOS, Windows et Mag. Votre abonnement vous suit partout.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "INSTALLATION EXPRESS",
            description: "Activation immédiate après commande. Recevez vos accès et commencez à regarder en 5 minutes.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="py-32 px-6 relative overflow-hidden bg-dark-accent/50">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 animate-reveal">
                    <h2 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
                        LE CHOIX DE <br />
                        <span className="text-primary italic">LA PERFORMANCE</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        Chaque détail a été pensé pour vous offrir l'expérience télévisuelle la plus fluide et complète du marché marocain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-morphism p-10 rounded-[40px] border border-white/5 hover:border-primary/30 transition-all duration-500 group flex flex-col items-start hover:-translate-y-2 animate-reveal"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-black mb-4 text-white tracking-tight leading-none uppercase">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
