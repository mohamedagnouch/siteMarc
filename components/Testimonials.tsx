import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Yassine El Amrani",
            initials: "YE",
            color: "from-primary to-green-800",
            text: "J'étais sceptique au début à cause des coupures avec d'autres fournisseurs, mais ce service a vraiment transformé ma façon de regarder la télé. La qualité d'image sur ma Smart TV est incroyable.",
            stars: 5,
            status: "Client Vérifié"
        },
        {
            name: "Omar Benjelloun",
            initials: "OB",
            color: "from-blue-500 to-indigo-900",
            text: "Enfin un service IPTV fiable au Maroc ! Tout est fluide et stable, même pendant les grands matchs de la Champions League. J'apprécie particulièrement la large sélection de films récents en VOD.",
            stars: 5,
            status: "Abonné Premium"
        },
        {
            name: "Sanaa Mansouri",
            initials: "SM",
            color: "from-purple-500 to-pink-900",
            text: "Le service client via WhatsApp est vraiment au top ! Ils m'ont aidée pour l'installation sur ma Box Android et ont répondu très rapidement. L'offre de dessins animés est impressionnante.",
            stars: 5,
            status: "Client Vérifié"
        }
    ];

    return (
        <section id="testimonials" className="py-32 px-6 bg-dark relative overflow-hidden">
            {/* Background cinematic shadows */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 animate-reveal">
                    <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
                        Social Proof
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
                        CE QUE NOS <br />
                        <span className="text-primary italic">CLIENTS DISENT</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        Plus de 25,000 foyers au Maroc nous font confiance pour leur divertissement quotidien.
                        Voici pourquoi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="glass-morphism p-10 rounded-[48px] border border-white/5 hover:border-primary/30 transition-all duration-700 group flex flex-col relative animate-reveal"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11.5L12.017 11.5V13L14.017 13V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91244 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.01701C6.46473 8 6.01701 8.44772 6.01701 9V11.5L4.01701 11.5V13L6.01701 13V21H6.01701Z" />
                                </svg>
                            </div>

                            <div className="flex justify-start mb-8">
                                {[...Array(review.stars)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed italic mb-10 relative z-10">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-black text-xl shadow-xl`}>
                                    {review.initials}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-white font-black text-base tracking-tight">{review.name}</h3>
                                    <div className="flex items-center gap-1.5 text-primary">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-[10px] font-black uppercase tracking-[0.1em]">{review.status}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
