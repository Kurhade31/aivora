import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Aivora',
    default: 'Aivora — Understand AI. Navigate the AI era. Build what\'s next.',
  },
  description:
    'An open knowledge platform for understanding artificial intelligence, exploring the technologies behind it, and turning knowledge into real-world systems.',
  keywords: [
    'Artificial Intelligence',
    'AI Knowledge Map',
    'Machine Learning',
    'LLMs',
    'RAG',
    'AI Agents',
    'AI Engineering',
    'Foundation Models',
    'DeepSeek',
    'Llama 3',
    'AI Architecture',
  ],
  authors: [{ name: 'Aivora Contributors' }],
  creator: 'Aivora Open Source Project',
  metadataBase: new URL('https://aivora.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aivora.dev',
    title: 'Aivora — AI Knowledge, Learning & Discovery Platform',
    description: 'Understand AI. Navigate the AI era. Build what\'s next.',
    siteName: 'Aivora',
    images: [
      {
        url: '/og/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Aivora — AI Knowledge Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aivora — Understand AI. Navigate the AI era. Build what\'s next.',
    description: 'An open knowledge platform for understanding artificial intelligence from first principles to real systems.',
    images: ['/og/og-image.svg'],
  },
  icons: {
    icon: '/brand/favicon.svg',
    shortcut: '/brand/favicon.svg',
    apple: '/brand/app-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/brand/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-primary-subtle selection:text-primary">
        {/* Skip to main content for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-primary text-primary-foreground font-mono text-xs rounded-md shadow-lg"
        >
          Skip to main content
        </a>

        <Navigation />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
