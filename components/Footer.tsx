import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-[#065f46] text-white pt-24 pb-8 overflow-hidden">
            {/* Wavy background top effect */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
                <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                            ABONNEMENT <span className="text-white italic">IPTV</span> MAROC
                        </h2>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-sm">
                            Accédez à des milliers de chaînes et de contenus VOD en HD et 4K avec notre abonnement IPTV fiable et performant.
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="font-bold text-sm uppercase tracking-wider">Paiement sécurisé</h3>
                            <div className="bg-white/10 inline-flex p-2 rounded-lg gap-2 items-center flex-wrap">
                                {/* Simplified representation of payment logos based on the image */}
                                <div className="h-6 w-10 bg-white rounded-sm flex items-center justify-center font-bold text-[8px] text-gray-800">VISA</div>
                                <div className="h-6 w-10 bg-white rounded-sm flex items-center justify-center font-bold text-[8px] text-gray-800">MC</div>
                                <div className="h-6 w-10 bg-white rounded-sm flex items-center justify-center font-bold text-[8px] text-blue-600">PayPal</div>
                                <div className="h-6 w-10 bg-white rounded-sm flex items-center justify-center font-bold text-[8px] text-orange-600">WU</div>
                                <div className="h-6 w-10 bg-white rounded-sm flex items-center justify-center font-bold text-[8px] text-green-600">BMCE</div>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="flex flex-col md:items-end">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg uppercase tracking-wider">Liens Utiles</h3>
                            <ul className="space-y-3 text-gray-100 font-medium">
                                <li><a href="#pricing" className="hover:underline transition-all">Prix</a></li>
                                <li><a href="#vod" className="hover:underline transition-all">Chaines</a></li>
                                <li><a href="#faq" className="hover:underline transition-all">FAQ</a></li>
                                <li><a href="/installation" className="hover:underline transition-all">Guide D'installation</a></li>
                                <li><a href="https://wa.me/212708894866" className="hover:underline transition-all">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Links */}
                <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 text-center">
                    <a href="#" className="hover:text-white transition-colors">Conditions Générales D'utilisation</a>
                    <span className="opacity-30 hidden md:inline">|</span>
                    <a href="#" className="hover:text-white transition-colors">Politique De Confidentialité</a>
                    <span className="opacity-30 hidden md:inline">|</span>
                    <a href="#" className="hover:text-white transition-colors">Politique De Confidentialité RGPD</a>
                    <span className="opacity-30 hidden md:inline">|</span>
                    <a href="#" className="hover:text-white transition-colors">Politique De Remboursement</a>
                </div>
            </div>

            {/* Floating WhatsApp stays handled elsewhere or globally */}
        </footer>
    );
};

export default Footer;
