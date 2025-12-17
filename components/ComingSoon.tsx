import React from 'react';

const ComingSoon: React.FC = () => {
    return (
        <div className="mesh-gradient min-h-screen flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center max-w-lg w-full">
                <div className="flex items-center gap-8 mb-8">
                    <img
                        src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logos-ModernRevenueClub-web_Logo%20complet-noir.png"
                        alt="Modern Revenue Club"
                        className="h-16 md:h-20 w-auto object-contain"
                    />

                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
                    Coming Soon
                </h1>
                <p className="text-slate-600 text-center text-lg">
                    We are preparing something. Stay tuned!
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <img
                        src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png"
                        alt="Ocobo"
                        className="h-6 md:h-8 w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
