'use client';

import React, { useState } from 'react';

const InstallationGuideClient = () => {
    const devices = [
        "IPTV sur TVIP Box",
        "Formuler - MyTVOnline 2",
        "Samsung Smart TV",
        "LG Smart TV",
        "MAG Box",
        "Enigma Box",
        "Android TV & Box",
        "Apple TV",
        "Chromecast",
        "Windows PC",
        "Mac (macOS)",
        "Smartphones (iOS & Android)",
        "Amazon Firestick"
    ];

    const [selectedDevice, setSelectedDevice] = useState(devices[2]); // Default to Samsung

    const getGuideContent = (device: string) => {
        switch (device) {
            case "Samsung Smart TV":
            case "LG Smart TV":
                return {
                    title: `Installation sur ${device}`,
                    steps: [
                        "Allez dans le Content Store (LG) ou le Samsung App Store.",
                        "Recherchez l'application 'IPTV Smarters Pro' ou 'IBO Player'.",
                        "Installez et ouvrez l'application.",
                        "Choisissez 'Add New User' ou 'Change Playlist'.",
                        "Entrez les identifiants (Nom, Utilisateur, Mot de passe et URL Portal) envoyés par WhatsApp.",
                        "Cliquez sur 'Add User' et profitez de vos chaînes."
                    ]
                };
            case "Amazon Firestick":
            case "Android TV & Box":
                return {
                    title: `Installation sur ${device}`,
                    steps: [
                        "Allez dans les paramètres -> Ma Fire TV -> Options pour développeurs.",
                        "Activez 'Applications de sources inconnues'.",
                        "Téléchargez l'application 'Downloader' depuis l'App Store.",
                        "Tapez le code de téléchargement pour IPTV Smarters Pro (fourni par notre support).",
                        "Une fois installé, ouvrez l'application et entrez vos accès M3U ou Xtream Codes.",
                        "Votre abonnement est prêt !"
                    ]
                };
            case "Smartphones (iOS & Android)":
                return {
                    title: `Installation sur Mobile`,
                    steps: [
                        "Téléchargez 'IPTV Smarters Pro' ou 'GSE Smart IPTV' sur App Store ou Play Store.",
                        "Ouvrez l'application.",
                        "Sélectionnez 'Login with Xtream Codes API'.",
                        "Entrez vos identifiants reçus par WhatsApp.",
                        "Connectez-vous et commencez le streaming."
                    ]
                };
            default:
                return {
                    title: `Installation sur ${device}`,
                    steps: [
                        "Veuillez nous contacter sur WhatsApp pour recevoir le guide spécifique à cet appareil.",
                        "L'activation se fait généralement via l'adresse MAC de votre boîtier.",
                        "Notre équipe vous accompagnera étape par étape pour la configuration.",
                        "Le test de 24h est également disponible sur cet appareil."
                    ]
                };
        }
    };

    const guide = getGuideContent(selectedDevice);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-44 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-dark/60 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40 z-10"></div>
                    <img
                        src="/images/hero-bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                <div className="relative z-20 max-w-4xl mx-auto px-6 text-center animate-reveal">
                    <h1 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
                        GUIDE <br />
                        <span className="text-primary italic">D'INSTALLATION IPTV</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        Bienvenue dans votre guide d'installation. Nous avons créé ce guide pour vous aider à démarrer facilement avec notre service premium en quelques étapes simples.
                    </p>
                </div>
            </section>

            {/* Device Selection */}
            <section className="py-24 px-6 bg-white shrink-0">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 uppercase tracking-tighter">
                            INSTALLER IPTV <br />
                            <span className="text-[#065f46] italic">POUR TOUS VOS APPAREILS</span>
                        </h2>
                        <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg font-medium">
                            Nous savons que chaque appareil est unique, c'est pourquoi nous avons créé des guides étape par étape sans aucune expérience technique requise. Sélectionnez votre appareil ci-dessous.
                        </p>
                    </div>

                    {/* Button Grid */}
                    <div className="flex flex-wrap justify-center gap-3 mb-20">
                        {devices.map((device) => (
                            <button
                                key={device}
                                onClick={() => setSelectedDevice(device)}
                                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all transform active:scale-95 ${selectedDevice === device
                                        ? 'bg-[#065f46] text-white shadow-xl shadow-primary/20 scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {device}
                            </button>
                        ))}
                    </div>

                    {/* Instruction Card */}
                    <div className="glass-morphism bg-gray-50 rounded-[48px] p-8 md:p-16 border border-gray-100 text-left max-w-4xl mx-auto animate-reveal shadow-2xl shadow-gray-200" key={selectedDevice}>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-[#065f46] flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">{guide.title}</h3>
                        </div>

                        <div className="space-y-6">
                            {guide.steps.map((step, index) => (
                                <div key={index} className="flex gap-6 items-start group">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        {index + 1}
                                    </span>
                                    <p className="text-gray-600 font-medium text-base md:text-lg pt-0.5">{step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 rounded-3xl bg-[#065f46]/5 border border-[#065f46]/10">
                            <p className="text-[#065f46] font-bold text-sm">
                                <span className="uppercase tracking-widest block mb-2 underline">Activation :</span>
                                Envoyez-nous l'adresse MAC située sous votre boitier ou affichée sur l'application pour l'enregistrement du portail.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InstallationGuideClient;
