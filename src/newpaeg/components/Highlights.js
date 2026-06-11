function Highlights() {
    const highlights = [
        { icon: "mic", text: "Inspiring keynote addresses by industry leaders" },
        { icon: "users", text: "High-impact panel discussions across multiple sectors" },
        { icon: "handshake", text: "Exclusive networking opportunities with decision-makers" },
        { icon: "award", text: "Recognition of excellence through the BharatView Business Leadership Awards 2026" },
        { icon: "trending-up", text: "Insights into emerging business trends and market opportunities" },
        { icon: "briefcase", text: "Platform for collaboration, partnerships, and business growth" }
    ];

    return (
        <section id="highlights" className="section-padding bg-[var(--bg-color)]" data-name="Highlights" data-file="components/Highlights.js">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Key Highlights</h2>
                    <div className="w-20 h-1 bg-[var(--secondary)] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {highlights.map((item, index) => (
                        <div key={index} className="card p-6 flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                                <div className={`icon-${item.icon} text-xl`}></div>
                            </div>
                            <p className="text-[var(--text-main)] font-medium leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}