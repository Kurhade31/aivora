import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Briefcase, CheckCircle2, ArrowRight, BookOpen, Terminal } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllCareers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Career Map & Engineering Roles',
  description:
    'An objective analysis of real-world AI career paths: core responsibilities, essential skills, concepts to master, recommended tools, and portfolio projects.',
};

export default function CareersPage() {
  const careers = getAllCareers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <AivoraBadge variant="secondary" size="sm">
          Professional Pathways
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Career Map & Technical Roles
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          An objective, hype-free map of specialized engineering disciplines across the AI ecosystem. Understand exact operational responsibilities, prerequisite skill sets, and portfolio milestones.
        </p>
      </div>

      {/* Career Roles Grid */}
      <div className="space-y-8">
        {careers.map((role) => (
          <div
            key={role.id}
            id={role.slug}
            className="p-6 sm:p-8 rounded-2xl bg-surface border border-border space-y-6 shadow-md"
          >
            <div className="border-b border-border pb-5">
              <span className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">
                Engineering Discipline
              </span>
              <h2 className="text-2xl font-bold text-foreground">{role.title}</h2>
              <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                {role.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Responsibilities */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block">
                  Core Responsibilities:
                </span>
                <ul className="space-y-1.5 text-xs text-foreground">
                  {role.coreResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Skills */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block">
                  Required Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {role.keySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Concepts, Tools & Projects */}
            <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-surface-elevated border border-border/70">
                <span className="text-muted block mb-1.5 uppercase font-bold text-[10px]">
                  Concepts to Master:
                </span>
                <div className="flex flex-wrap gap-1">
                  {role.conceptsToMaster.map((c) => (
                    <Link
                      key={c}
                      href={`/learn/concept/${c}`}
                      className="text-primary hover:underline"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-elevated border border-border/70">
                <span className="text-muted block mb-1.5 uppercase font-bold text-[10px]">
                  Recommended Tools:
                </span>
                <div className="flex flex-wrap gap-1">
                  {role.recommendedTools.map((t) => (
                    <Link
                      key={t}
                      href={`/ecosystem/tools?highlight=${t}`}
                      className="text-accent hover:underline"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-elevated border border-border/70">
                <span className="text-muted block mb-1.5 uppercase font-bold text-[10px]">
                  Portfolio Projects:
                </span>
                <div className="flex flex-wrap gap-1">
                  {role.recommendedProjects.map((p) => (
                    <Link
                      key={p}
                      href={`/build#${p}`}
                      className="text-secondary hover:underline"
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
