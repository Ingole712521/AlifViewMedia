function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Highlights', href: '#highlights' },
        { name: 'Awards', href: '#awards' },
        { name: 'Speakers', href: '#coming-soon' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'}`} data-name="Header" data-file="components/Header.js">
            <div className="container-custom flex justify-between items-center">
                <a href="#" className="flex items-center gap-3">
                    <img src="https://app.trickle.so/storage/public/images/usr_1452a2b3e8000001/875a0e90-5415-4fa5-937d-db5b1bd2cb63.png" alt="BharatView Logo" className="h-10 md:h-12 object-contain" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-[var(--text-muted)] hover:text-[var(--primary)] font-medium transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary text-sm px-5 py-2.5">Register Now</a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-[var(--text-main)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="block text-base font-medium text-[var(--text-muted)] hover:text-[var(--primary)]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary w-full text-center mt-2">Register Now</a>
                </div>
            )}
        </header>
    );
}