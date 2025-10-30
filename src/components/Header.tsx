import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Menu",
            path: "/menu",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];
    const isActive = (path: string) => location.pathname === path;
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center">
                        <div className="flex flex-col leading-tight">
                            <h1
                                className="text-3xl font-seasons font-bold"
                                style={{ color: "rgb(0, 0, 77)" }}
                            >
                                Indulgia
                            </h1>
                            <span className="text-sm text-gray-600 font-light">
                                Where Chocolate Meets Luxury
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-lg font-medium transition-colors ${
                                    isActive(item.path)
                                        ? "border-b-2"
                                        : "hover:opacity-70"
                                }`}
                                style={{
                                    color: "rgb(0, 0, 77)",
                                    borderColor: isActive(item.path)
                                        ? "rgb(0, 0, 77)"
                                        : "transparent",
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <XIcon
                                className="h-6 w-6"
                                style={{
                                    color: "rgb(0, 0, 77)",
                                }}
                            />
                        ) : (
                            <MenuIcon
                                className="h-6 w-6"
                                style={{
                                    color: "rgb(0, 0, 77)",
                                }}
                            />
                        )}
                    </button>
                </div>
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="block py-2 text-lg font-medium"
                                style={{
                                    color: "rgb(0, 0, 77)",
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
