function ComingSoon() {
    const sections = [
        { id: 'advisory', title: 'Advisory Board', icon: 'users' },
        { id: 'jury', title: 'Jury', icon: 'gavel' },
        { id: 'speakers', title: 'Speakers', icon: 'mic-vocal' },
        { id: 'partners', title: 'Partners', icon: 'handshake' },
        { id: 'leadership', title: 'Leadership Awards', icon: 'trophy' }
    ];

    return (
        <section id="coming-soon" className="section-padding bg-[var(--bg-color)]" data-name="ComingSoon" data-file="components/ComingSoon.js">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {sections.map((section) => (
                        <div key={section.id} className="card p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
                            <div className={`icon-${section.icon} text-4xl text-[var(--primary)]/40 mb-4`}></div>
                            <h3 className="text-lg font-bold text-[var(--primary)] mb-2">{section.title}</h3>
                            <span className="text-sm font-medium text-[var(--secondary)] bg-[var(--secondary)]/10 px-3 py-1 rounded-full">Coming Soon...</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}