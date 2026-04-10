import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/eritage-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/ent-services", label: "ENT Services" },
    { href: "/urgent-ent-guidance", label: "Urgent ENT" },
    { href: "/hearing-tests", label: "Hearing Tests" },
    { href: "/#locations", label: "Locations" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Eritage ENT Care" className="h-14 md:h-16 w-auto" />
            <span className="text-xl md:text-2xl font-bold text-primary hidden sm:inline">
              Eritage ENT Care
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/bookings"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm px-4 py-2 rounded-md"
            >
              <Calendar className="w-4 h-4" />
              Book
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/bookings"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm px-4 py-2 rounded-md w-fit"
            >
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
