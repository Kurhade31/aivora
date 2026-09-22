'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, BookOpen, Cpu, Wrench, Layers, ShieldCheck, Terminal, Compass } from 'lucide-react';
import { searchKnowledgeGraph, SearchResultItem } from '@/lib/data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from parent or global handler
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setResults(searchKnowledgeGraph(val));
    } else {
      setResults([]);
    }
  };

  if (!isOpen) return null;

  const getTypeIcon = (type: SearchResultItem['type']) => {
    switch (type) {
      case 'concept':
        return <BookOpen className="w-4 h-4 text-primary" />;
      case 'model':
        return <Cpu className="w-4 h-4 text-secondary" />;
      case 'tool':
        return <Wrench className="w-4 h-4 text-accent" />;
      case 'framework':
        return <Layers className="w-4 h-4 text-info" />;
      case 'architecture':
        return <Terminal className="w-4 h-4 text-warning" />;
      case 'project':
        return <Compass className="w-4 h-4 text-primary" />;
      default:
        return <BookOpen className="w-4 h-4 text-muted" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Search Aivora Knowledge Graph"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-border bg-surface-elevated/40">
          <Search className="w-5 h-5 text-muted mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search concepts, models, tools, architectures, projects..."
            className="w-full bg-transparent text-foreground placeholder:text-muted outline-none text-base font-sans"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setResults([]);
                inputRef.current?.focus();
              }}
              className="p-1 text-muted hover:text-foreground"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 text-xs font-mono px-2 py-1 bg-surface-elevated text-muted rounded border border-border"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 divide-y divide-border/30">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-muted text-sm font-mono">
              No matching knowledge nodes found for "{query}"
            </div>
          )}

          {!query && (
            <div className="py-8 px-4 text-xs text-muted">
              <p className="font-semibold uppercase tracking-wider text-primary mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['RAG', 'DeepSeek-R1', 'Autonomous Agents', 'Embeddings', 'vLLM', 'Cursor', 'Prompt Injection'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setQuery(term);
                        setResults(searchKnowledgeGraph(term));
                      }}
                      className="px-2.5 py-1 rounded bg-surface-elevated border border-border text-foreground hover:border-primary/50 text-xs transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {results.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              onClick={onClose}
              className="flex items-start justify-between p-3 rounded-lg hover:bg-surface-elevated transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-surface-elevated/70 mt-0.5 shrink-0 border border-border/50">
                  {getTypeIcon(item.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-surface-elevated text-muted border border-border/40">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted line-clamp-1 mt-0.5">{item.description}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all mt-2 shrink-0" />
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-surface-elevated/20 border-t border-border flex items-center justify-between text-[11px] text-muted font-mono">
          <span>Aivora Knowledge Graph Search</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
