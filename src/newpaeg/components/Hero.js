function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary)]" data-name="Hero" data-file="components/Hero.js">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary)] opacity-90"></div>
            
            <div className="container-custom relative z-10 text-center text-white">
                <span className="inline-block py-1 px-3 rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)] border border-[var(--secondary)]/30 font-semibold text-sm mb-6 uppercase tracking-wider">
                    Premier Leadership Platform
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    BharatView Business <br/> Summit & Awards <span className="text-[var(--secondary)]">2026</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Bringing together entrepreneurs, business leaders, innovators, policymakers, and industry experts to exchange ideas, explore opportunities, and celebrate excellence.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#overview" className="btn-secondary w-full sm:w-auto">Discover More</a>
                    <a href="#awards" className="btn-primary bg-white text-[var(--primary)] hover:bg-gray-100 w-full sm:w-auto">View Awards</a>
                </div>
            </div>
        </section>
    );
}