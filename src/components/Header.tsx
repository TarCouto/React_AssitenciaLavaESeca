import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed left-0 w-full flex justify-between items-center p-6 z-50 transition-colors duration-300 text-white ${isScrolled ? 'bg-gray-600' : 'bg-transparent'}`}>
            <div className="text-4xl font-bold ml-6">Assistência Técnica</div>
            <div className="flex space-x-8 mr-6">
                <Link to="/" className="text-xl hover:text-gray-300">Home</Link>
                <Link to="/services" className="text-xl hover:text-gray-300">Serviços</Link>
                <Link to="/team" className="text-xl hover:text-gray-300">Equipe</Link>
                <Link to="/contact" className="text-xl hover:text-gray-300">Contato</Link>
            </div>
        </nav>
    );
}
