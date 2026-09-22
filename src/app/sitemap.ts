import { MetadataRoute } from 'next';
import { getAllConcepts, getAllRoadmaps, getAllModels, getAllTools, getAllFrameworks } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aivora.dev';

  const staticRoutes = [
    '',
    '/map',
    '/stack',
    '/learn',
    '/build',
    '/build/architectures',
    '/build/prompt-lab',
    '/ecosystem/models',
    '/ecosystem/tools',
    '/ecosystem/frameworks',
    '/safety',
    '/glossary',
    '/timeline',
    '/careers',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const conceptRoutes = getAllConcepts().map((c) => ({
    url: `${baseUrl}/learn/concept/${c.slug}`,
    lastModified: new Date(c.lastVerified),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const roadmapRoutes = getAllRoadmaps().map((r) => ({
    url: `${baseUrl}/learn/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...conceptRoutes, ...roadmapRoutes];
}
