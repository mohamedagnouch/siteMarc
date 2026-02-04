import { Metadata } from 'next';
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstallationGuideClient from "@/components/InstallationGuideClient";

export const metadata: Metadata = {
    title: "Guide d'installation IPTV Maroc | Tutoriels Tous Appareils 2026",
    description: "Guide complet pour installer votre abonnement IPTV sur Smart TV (Samsung, LG), Firestick, Android, iPhone et plus. Étapes simples et rapides.",
};

const InstallationGuide = () => {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            <InstallationGuideClient />

            {/* Support CTA */}
            <section className="py-24 px-6 bg-dark relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter">
                        TOUJOURS BESOIN <br />
                        <span className="text-primary italic">D'AIDE ?</span>
                    </h2>
                    <p className="text-gray-400 mb-12 text-lg font-medium">
                        Notre support technique est disponible 24/7 sur WhatsApp pour vous guider en direct.
                    </p>
                    <a
                        href="https://wa.me/212708894866"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex bg-primary hover:bg-green-600 text-white px-12 py-5 rounded-2xl text-lg font-black transition-all transform hover:scale-105 shadow-2xl shadow-primary/40 gap-3 items-center"
                    >
                        PARLER À UN TECHNICIEN
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </section>

            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/212708894866"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-[100] flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.129l-.651 2.353 2.411-.644c.867.469 1.823.715 2.981.715 3.182 0 5.768-2.586 5.768-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.446 8.212c-.149.427-.852.781-1.157.822-.271.037-.624.06-1.025-.06-.245-.073-.574-.191-1.503-.584-1.193-.505-1.958-1.713-2.018-1.793-.059-.08-.492-.654-.492-1.249 0-.595.311-.885.422-.995.111-.11.242-.138.322-.138.08 0 .16.001.23.003.076.002.179-.03.28-.27.112-.27.382-.93.415-1.001.033-.071.055-.152.008-.246-.047-.094-.105-.152-.21-.271-.105-.119-.219-.241-.312-.321-.101-.087-.206-.178-.088-.382.118-.204.523-.861 1.123-1.395.48-.427.886-.56 1.191-.56.305 0 .524.024.717.204.193.18.256.242.383.336a.35.35 0 00.312.003c.119-.059.752-.353.856-.445.105-.094.21-.137.314-.047.105.09.684.321.789.375.105.055.175.081.241.199.066.118.066.684-.083 1.111z" />
                    <path d="M12.036 3c-4.963 0-9 4.037-9 9 0 1.563.404 3.067 1.125 4.34L3 21l4.827-1.268A8.852 8.852 0 0012.036 21c4.963 0 9-4.037 9-9 0-4.963-4.037-9-9-9zm0 16.2c-1.398 0-2.722-.367-3.879-1.01l-.279-.156-2.883.756.77-2.784-.171-.272A7.147 7.147 0 014.836 12c0-3.97 3.23-7.2 7.2-7.2 3.97 0 7.2 3.23 7.2 7.2 0 3.97-3.23 7.2-7.2 7.2z" />
                </svg>
            </a>
        </main>
    );
};

export default InstallationGuide;
