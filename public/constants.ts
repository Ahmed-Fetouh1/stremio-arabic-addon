import type { ContentItem } from './types';

export const ADDON_NAME = 'إضافة Stremio العربية متعددة المصادر';
export const ADDON_DESCRIPTION = 'بوابتك إلى مكتبة ضخمة من الأفلام والمسلسلات العربية، مباشرة في Stremio. إضافتنا تجمع المحتوى من أفضل المصادر، لتمنحك تجربة بث سلسة.';

// ⚠️ IMPORTANT: This will be automatically set to current domain
// In production (Railway): https://your-app.up.railway.app/addon/manifest.json
// In development: http://localhost:7000/addon/manifest.json
export const INSTALL_URL = typeof window !== 'undefined' 
  ? `stremio://${window.location.host}/addon/manifest.json`
  : 'stremio://localhost:7000/addon/manifest.json';

export const SUPPORTED_SITES = [
  'مصدر تجريبي 1 (Demo Source 1)',
  'مصدر تجريبي 2 (Demo Source 2)',
  'محتوى Creative Commons',
  'جودة 720p & 1080p',
];

export const FEATURES = [
  {
    title: 'مصادر متعددة',
    description: 'تجميع المحتوى من عدة مصادر بجودة عالية.',
    icon: '🔗'
  },
  {
    title: 'جودة عالية',
    description: 'اختر بين جودة بث 720p و 1080p للحصول على أفضل تجربة.',
    icon: '🎬'
  },
  {
    title: 'تكامل سلس',
    description: 'يتم التثبيت مباشرة في تطبيق Stremio الخاص بك بنقرة واحدة.',
    icon: '🔌'
  },
  {
    title: 'استضافة مجانية',
    description: 'يعمل على مدار الساعة مع استضافة مجانية.',
    icon: '🆓'
  }
];

export const SAMPLE_CONTENT: ContentItem[] = [
  { id: '1', title: 'Big Buck Bunny', type: 'فيلم', posterUrl: 'https://picsum.photos/seed/movie1/400/600' },
  { id: '2', title: 'Sintel', type: 'فيلم', posterUrl: 'https://picsum.photos/seed/series1/400/600' },
  { id: '3', title: 'محتوى تجريبي', type: 'فيلم', posterUrl: 'https://picsum.photos/seed/movie2/400/600' },
  { id: '4', title: 'محتوى قانوني', type: 'مسلسل', posterUrl: 'https://picsum.photos/seed/series2/400/600' },
  { id: '5', title: 'Creative Commons', type: 'فيلم', posterUrl: 'https://picsum.photos/seed/movie3/400/600' },
  { id: '6', title: 'جودة عالية HD', type: 'مسلسل', posterUrl: 'https://picsum.photos/seed/series3/400/600' },
  { id: '7', title: '720p & 1080p', type: 'فيلم', posterUrl: 'https://picsum.photos/seed/movie4/400/600' },
  { id: '8', title: 'بث مجاني', type: 'مسلسل', posterUrl: 'https://picsum.photos/seed/series4/400/600' },
];
