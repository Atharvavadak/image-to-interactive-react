import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "FEATURES", href: "/features" },
    { name: "ABOUT US", href: "#about" },
    { name: "HOW IT WORKS", href: "#how-it-works" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-6 h-6 bg-primary rounded"></div>
              <div className="w-6 h-6 bg-primary rounded"></div>
              <div className="w-6 h-6 bg-primary rounded"></div>
            </div>
            <div className="text-xl font-bold">
              <span className="text-foreground">Form</span>
              <span className="text-primary">FIT</span>
            </div>
            <div className="text-xs text-muted-foreground ml-2">
              REP. POSTURE. SMART
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="nav"
                asChild
              >
                <a href={item.href} className="font-medium tracking-wide">
                  {item.name}
                </a>
              </Button>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              LOGIN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="nav"
                asChild
                className="block w-full text-left"
              >
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              </Button>
            ))}
            <Button variant="hero" size="lg" className="w-full">
              LOGIN
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;