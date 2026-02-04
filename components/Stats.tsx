import React from 'react';

const Stats = () => {
    const stats = [
        {
            label: "Films & Séries",
            value: "+15 000",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
            )
        },
        {
            label: "Qualité Image",
            value: "4K UHD",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            label: "Chaînes Live",
            value: "+10 000",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.05 9.05 0 0112.728 0m-15.557-2.828a13.314 13.314 0 0118.385 0" />
                </svg>
            )
        },
        {
            label: "Support Client",
            value: "24/7",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 relative px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-gradient opacity-30"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="glass-morphism rounded-[32px] p-8 text-center transition-all duration-500 hover:shadow-primary/10 hover:-translate-y-2 border border-white/5 group animate-reveal"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                            {stat.icon}
                        </div>
                        <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
