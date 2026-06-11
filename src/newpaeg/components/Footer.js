function Footer() {
    return (
        <footer id="contact" className="bg-[#0a1120] text-white pt-16 pb-8 border-t-4 border-[var(--secondary)]" data-name="Footer" data-file="components/Footer.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <img src="https://app.trickle.so/storage/public/images/usr_1452a2b3e8000001/875a0e90-5415-4fa5-937d-db5b1bd2cb63.png" alt="BharatView Logo" className="h-12 object-contain bg-white/10 p-2 rounded mb-6" />
                        <p className="text-gray-400 leading-relaxed mb-6">
                            India's most influential cross-industry platform inspiring innovation, recognizing excellence, and fostering meaningful business connections.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-bold mb-6 font-['Playfair_Display']">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors">Overview</a></li>
                            <li><a href="#highlights" className="text-gray-400 hover:text-white transition-colors">Key Highlights</a></li>
                            <li><a href="#awards" className="text-gray-400 hover:text-white transition-colors">Awards Categories</a></li>
                            <li><a href="#coming-soon" className="text-gray-400 hover:text-white transition-colors">Speakers & Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 font-['Playfair_Display']">Contact Us</h4>
                        <div className="space-y-4">
                            <p className="text-gray-400 flex items-start gap-3">
                                <span className="icon-mail mt-1 text-[var(--secondary)]"></span>
                                <span>info@bharatview.com<br/>(Coming Soon)</span>
                            </p>
                            <p className="text-gray-400 flex items-start gap-3">
                                <span className="icon-phone mt-1 text-[var(--secondary)]"></span>
                                <span>+91 XXX XXX XXXX</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; 2026 BharatView Business Summit & Awards. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--primary)] hover:text-white transition-all"><span className="icon-twitter"></span></a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--primary)] hover:text-white transition-all"><span className="icon-linkedin"></span></a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--primary)] hover:text-white transition-all"><span className="icon-facebook"></span></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}