function Awards() {
    const categories = [
        "BFSI Excellence Awards",
        "HealthCare & Life Sciences Excellence Awards",
        "Education & Skill Development Excellence Awards",
        "Advertising & Marketing Excellence Awards",
        "Employment & Workplace Excellence Awards",
        "Business Excellence Awards",
        "IT & Governance Excellence Awards",
        "Solar Energy & Sustainability Excellence Awards",
        "Wind Energy Excellence Awards",
        "EMobility Awards",
        "Retail, E-Commerce & Consumer Brands Awards",
        "Media & Entertainment Awards",
        "Real Estate Excellence Awards",
        "Hospitality, Travel & Tourism Awards",
        "E-Learning Excellence Awards",
        "Manufacturing & Industrial Excellence Awards",
        "Logistic & Supply Chain Awards",
        "Procurement Awards",
        "Retail Excellence Awards",
        "Oil & Gas Excellence awards",
        "Multiplex & Shopping Mall Excellence Awards"
    ];

    return (
        <section id="awards" className="section-padding bg-white" data-name="Awards" data-file="components/Awards.js">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">BharatView Business Awards</h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Recognizing outstanding organizations and leaders across multiple sectors.</p>
                    <div className="w-20 h-1 bg-[var(--secondary)] mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {categories.map((category, index) => (
                        <div key={index} className="p-4 rounded-lg border border-gray-100 hover:border-[var(--primary)]/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 group bg-[var(--bg-color)]">
                            <div className="icon-award text-[var(--secondary)] mt-1 group-hover:scale-110 transition-transform"></div>
                            <span className="text-[var(--text-main)] font-medium text-sm leading-tight pt-1">{category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}