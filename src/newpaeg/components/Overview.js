function Overview() {
    return (
        <section id="overview" className="section-padding bg-white" data-name="Overview" data-file="components/Overview.js">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">Overview</h2>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                        The BharatView Business Summit & Awards 2026 is a premier leadership platform designed to bring together entrepreneurs, business leaders, innovators, policymakers, investors, and industry experts from diverse sectors to exchange ideas, explore opportunities, and celebrate excellence.
                    </p>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                        As India continues its journey toward becoming a global economic powerhouse, BharatView serves as a catalyst for meaningful conversations on innovation, entrepreneurship, digital transformation, sustainability, leadership, and business growth. The summit will feature insightful keynote sessions, panel discussions, fireside chats, and networking opportunities with some of the country's most influential business minds.
                    </p>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                        The event will culminate in the prestigious BharatView Business Awards, recognizing outstanding organizations, entrepreneurs, professionals, and changemakers who have demonstrated exceptional achievements, innovation, and leadership in their respective industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="card p-8 bg-blue-50 border-none">
                        <div className="w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mb-6">
                            <div className="icon-eye text-2xl"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Vision</h3>
                        <p className="text-[var(--text-muted)] leading-relaxed">
                            To create India's most influential cross-industry platform that inspires innovation, recognizes excellence, and fosters meaningful business connections.
                        </p>
                    </div>
                    <div className="card p-8 bg-amber-50 border-none">
                        <div className="w-14 h-14 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center mb-6">
                            <div className="icon-rocket text-2xl"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Mission</h3>
                        <p className="text-[var(--text-muted)] leading-relaxed">
                            To empower businesses, entrepreneurs, and leaders by providing a platform for knowledge sharing, networking, recognition, and growth, contributing to India's economic and entrepreneurial success story.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}