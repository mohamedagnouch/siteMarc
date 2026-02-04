import React from 'react';

const PlatformCompatibility = () => {
    const platforms = [
        {
            name: "SMART TV",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="10" r="3" fill="currentColor" opacity="0.3" />
                </svg>
            )
        },
        {
            name: "ANDROID",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
                </svg>
            )
        },
        {
            name: "IOS",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
            )
        },
        {
            name: "WINDOWS",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.45v6.1l8-1.11V3.88L3 5.45zm8 6.1l10-1.39V3.4L11 5.45v6.1zM3 18.55l8 1.11v-6.77l-8 1.11v4.55zm8 1.11l10-1.39v-6.77l-10 1.39v6.77z" />
                </svg>
            )
        },
        {
            name: "PC / LAPTOP",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 20h20M7 20l1-4m8 4l-1-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.3" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 px-6 relative bg-dark-accent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                        Compatible avec tous vos appareils
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Profitez de votre abonnement IPTV sur n'importe quel appareil, n'importe où, n'importe quand
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group flex flex-col items-center justify-center text-center hover:scale-105 transform duration-300"
                        >
                            <div className="text-gray-400 group-hover:text-primary transition-colors mb-4">
                                {platform.icon}
                            </div>
                            <h3 className="text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors uppercase tracking-wide">
                                {platform.name}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        Installation simple et rapide • Support technique disponible 24/7
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PlatformCompatibility;
