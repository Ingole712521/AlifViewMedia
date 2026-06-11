function WhoShouldAttend() {
    const attendees = [
        "Business Leaders & Corporate Executives",
        "Entrepreneurs & Startup Ecosystem",
        "Investors & Financial Leaders",
        "Industry Professionals",
        "Government & Policy Makers",
        "Sector Representatives",
        "Sustainability Experts"
    ];

    return (
        <section className="section-padding bg-[var(--primary)] text-white" data-name="WhoShouldAttend" data-file="components/WhoShouldAttend.js">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Who Should Attend?</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Join the elite gathering of India's most forward-thinking professionals. This summit is curated for those who drive change, foster innovation, and shape the future of business.
                        </p>
                        <a href="#contact" className="btn-secondary hidden md:inline-flex">Reserve Your Seat</a>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {attendees.map((item, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-center gap-3">
                                    <div className="icon-circle-check text-[var(--secondary)] text-xl flex-shrink-0"></div>
                                    <span className="font-medium text-sm sm:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center md:hidden">
                            <a href="#contact" className="btn-secondary w-full">Reserve Your Seat</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}