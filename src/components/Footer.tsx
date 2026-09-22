import React from 'react';
import Link from 'next/link';
import { GitBranch, ShieldCheck, Terminal, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-surface/50 transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/brand/aivora-mark.svg" alt="Aivora Mark" className="w-7 h-7" />
              <span className="font-display font-black text-lg tracking-wider text-foreground">
                AIVORA
              </span>
            </Link>
            <p className="text-xs text-muted leading-relaxed max-w-sm">
              "Understand AI. Navigate the AI era. Build what's next."
              <br />
              An open knowledge platform connecting AI concepts, models, frameworks, and practical systems from first principles.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted font-mono pt-2">
              <span className="inline-flex items-center gap-1 text-accent">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                All Sources Verified
              </span>
              <span>•</span>
              <span>Zero Advertising</span>
              <span>•</span>
              <span>Open Source</span>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li><Link href="/map" className="hover:text-primary transition-colors">Interactive AI Map</Link></li>
              <li><Link href="/ecosystem/models" className="hover:text-primary transition-colors">AI Models</Link></li>
              <li><Link href="/ecosystem/tools" className="hover:text-primary transition-colors">AI Tools by Job</Link></li>
              <li><Link href="/ecosystem/frameworks" className="hover:text-primary transition-colors">Frameworks</Link></li>
              <li><Link href="/stack" className="hover:text-primary transition-colors">Find Your AI Stack</Link></li>
            </ul>
          </div>

          {/* Col 3: Learn & Build */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">
              LEARN & BUILD
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li><Link href="/learn" className="hover:text-primary transition-colors">Learning Paths</Link></li>
              <li><Link href="/build" className="hover:text-primary transition-colors">Project Lab</Link></li>
              <li><Link href="/build/architectures" className="hover:text-primary transition-colors">Architecture Library</Link></li>
              <li><Link href="/build/prompt-lab" className="hover:text-primary transition-colors">Prompt Engineering Lab</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">AI Career Map</Link></li>
            </ul>
          </div>

          {/* Col 4: Safety & Principles */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">
              PRINCIPLES & SYSTEM
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li><Link href="/safety" className="hover:text-primary transition-colors">AI Safety Center</Link></li>
              <li><Link href="/glossary" className="hover:text-primary transition-colors">AI Glossary</Link></li>
              <li><Link href="/timeline" className="hover:text-primary transition-colors">AI Timeline (1950-Now)</Link></li>
              <li><a href="https://github.com/adarsh/aivora" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">GitHub Repository <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted font-mono gap-4">
          <p>© {new Date().getFullYear()} Aivora. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <Link href="/safety" className="hover:text-foreground">Safety</Link>
            <Link href="/glossary" className="hover:text-foreground">Glossary</Link>
            <Link href="/map" className="hover:text-foreground">Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
