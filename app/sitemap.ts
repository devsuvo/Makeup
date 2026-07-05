import { MetadataRoute } from 'next';
import { portfolioItems } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suvodev.studio';

  const staticPages = [
    '',
    '/about',
    '/portfolio',
    '/services',
    '/bridal-packages',
    '/testimonials',
    '/blog',
    '/gallery',
    '/pricing',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const dynamicPortfolioPages = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...dynamicPortfolioPages];
}
