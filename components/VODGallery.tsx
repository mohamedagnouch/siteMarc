import React from 'react';
import Image from 'next/image';

const VODGallery = () => {
    const items = [
        { title: "Mean Girls", image: "/images/mean_girls.png", genre: "Comedy" },
        { title: "The Beekeeper", image: "/images/beekeeper.png", genre: "Action" },
        { title: "LaLiga", image: "/images/laliga.png", genre: "Sports" },
        { title: "Premier League", image: "/images/premier_league.png", genre: "Sports" },
    ];

    return (
        <section id="vod" className="py-24 px-6 relative bg-dark overflow-hidden">
            {/* Subtle light streak */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 animate-reveal">
                    <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
                        Catalogue 2026
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
                        CINÉMA & SPORT <br />
                        <span className="text-primary italic">SANS LIMITES</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
                        Plongez dans un univers de divertissement premium. Des milliers de titres VOD et les plus grandes compétitions sportives en qualité 4K UHD.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[24px] aspect-[2/3] shadow-2xl transition-all duration-700 hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer border border-white/5 active:scale-95 animate-reveal"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="mb-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-lg shadow-primary/50">
                                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                    {item.genre}
                                </span>
                                <h3 className="text-white font-black text-xl md:text-2xl leading-tight">
                                    {item.title}
                                </h3>

                                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[8px] font-bold text-gray-300 uppercase">4K UHD</span>
                                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[8px] font-bold text-gray-300 uppercase">Multi-Audio</span>
                                </div>
                            </div>

                            {/* Border Glow */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-[24px] transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-14">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === 2 ? 'w-8 bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'w-2 bg-white/10'}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VODGallery;
