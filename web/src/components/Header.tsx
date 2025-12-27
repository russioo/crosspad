"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletButton } from "./WalletButton";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8">
      <div className={`max-w-[1200px] mx-auto mt-4 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] rounded-full' 
          : 'bg-transparent'
      }`}>
        <nav className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2.5"
          >
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              scrolled ? 'bg-[var(--accent)]' : 'bg-[var(--accent)]'
            }`} />
            <span className="font-serif text-lg tracking-tight text-[var(--ink)]">
              Crosspad
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
            {[
              { href: "/launch", label: "Launch" },
              { href: "/tokens", label: "Tokens" },
              { href: "/docs", label: "Docs" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === link.href 
                    ? 'text-[var(--ink)]' 
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[var(--accent)] transition-all duration-300 ${
                  pathname === link.href ? 'w-4' : 'w-0'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors text-sm hidden sm:block px-3 py-2"
            >
              Twitter
            </Link>
            <WalletButton />
          </div>
        </nav>
      </div>
    </header>
  );
}
