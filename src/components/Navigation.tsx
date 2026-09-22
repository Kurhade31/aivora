'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  Compass,
  BookOpen,
  Layers,
  Wrench,
  ShieldCheck,
  ChevronDown,
  Terminal,
  Cpu,
  Sparkles
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SearchModal } from './SearchModal';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Global Cmd+K trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    {
      title: 'EXPLORE',
      href: '/map',
      items: [
        { title: 'Interactive AI Map', desc: 'Visual Knowledge Orbit & Pathways', href: '/map' },
        { title: 'AI Model Explorer', desc: 'Frontier & Open-Weights Architectures', href: '/ecosystem/models' },
        { title: 'AI Tool Explorer', desc: 'Organized strictly by Job-to-be-Done', href: '/ecosystem/tools' },
        { title: 'Framework Explorer', desc: 'Inference, RAG & Agent Runtimes', href: '/ecosystem/frameworks' }
      ]
    },
    {
      title: 'LEARN',
      href: '/learn',
      items: [
        { title: 'Learning Paths', desc: 'From Zero to Research Grade', href: '/learn' },
        { title: 'AI Foundations', desc: 'Understand First Principles', href: '/learn/ai-foundations' },
        { title: 'LLM Engineering', desc: 'Inference, Quantization & PEFT', href: '/learn/llm-engineering' },
        { title: 'Autonomous Agents', desc: 'Cognitive Loops & Tool Use', href: '/learn/ai-agents' },
        { title: 'RAG Engineering', desc: 'Hybrid Retrieval & Reranking', href: '/learn/rag-engineering' }
      ]
    },
    {
      title: 'BUILD',
      href: '/build',
      items: [
        { title: 'Project Lab', desc: 'Production-ready hands-on tutorials', href: '/build' },
        { title: 'Architecture Library', desc: 'Data & execution flow diagrams', href: '/build/architectures' },
        { title: 'Prompt Engineering Lab', desc: 'Iterative prompt design studio', href: '/build/prompt-lab' },
        { title: 'Find Your AI Stack', desc: 'Interactive architecture generator', href: '/stack' }
      ]
    },
    {
      title: 'GUIDES',
      href: '/safety',
      items: [
        { title: 'AI Safety Center', desc: 'Vulnerability mitigations & guardrails', href: '/safety' },
        { title: 'AI Glossary', desc: 'Structured technical definitions', href: '/glossary' },
        { title: 'AI Timeline', desc: 'Verified historical milestones 1950-Now', href: '/timeline' },
        { title: 'AI Career Map', desc: 'Roles, skills, and learning paths', href: '/careers' }
      ]
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Mark & Lockup */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center shadow-glow group-hover:border-primary/60 transition-colors">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/brand/aivora-mark.svg`} alt="Aivora Mark" className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-wider text-foreground group-hover:text-primary transition-colors">
                  AIVORA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-muted -mt-1 uppercase">
                  Knowledge OS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-1 pl-4" aria-label="Main Navigation">
              {navLinks.map((section) => (
                <div
                  key={section.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(section.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={section.href}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono font-semibold tracking-wider transition-colors ${
                      pathname.startsWith(section.href)
                        ? 'text-primary bg-primary-subtle'
                        : 'text-muted hover:text-foreground hover:bg-surface-elevated'
                    }`}
                  >
                    {section.title}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </Link>

                  {/* Dropdown Flyout */}
                  {activeDropdown === section.title && (
                    <div className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-surface border border-border shadow-xl p-2 animate-fade-in z-50">
                      <div className="flex flex-col space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="p-2.5 rounded-lg hover:bg-surface-elevated transition-colors group/item block"
                          >
                            <div className="text-xs font-semibold text-foreground group-hover/item:text-primary transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-muted line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2">
            {/* Cmd+K Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-muted bg-surface-elevated border border-border/70 rounded-lg hover:border-primary/50 hover:text-foreground transition-all"
              aria-label="Search Knowledge Graph"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search Knowledge</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-background border border-border/80 rounded font-mono text-muted">
                ⌘K
              </kbd>
            </button>

            {/* Find Your Stack Quick Link */}
            <Link
              href="/stack"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-primary-foreground bg-primary hover:bg-primary-hover rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>FIND YOUR STACK</span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg text-muted hover:text-foreground hover:bg-surface-elevated border border-border/50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-surface px-4 py-4 space-y-4">
            {navLinks.map((section) => (
              <div key={section.title} className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                  {section.title}
                </span>
                <div className="grid grid-cols-1 gap-1 pl-2 pt-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs py-1 text-muted hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-border">
              <Link
                href="/stack"
                className="flex items-center justify-center gap-2 w-full py-2 text-xs font-mono font-bold text-primary-foreground bg-primary rounded-lg"
              >
                <Sparkles className="w-4 h-4" />
                FIND YOUR AI STACK
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Knowledge Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
