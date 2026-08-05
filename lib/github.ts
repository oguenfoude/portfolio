import enrichments from '@/data/projects.json';

export interface Repo {
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  default_branch: string;
}

export interface EnrichedProject {
  name: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  category: string;
  categoryEn: string;
  categoryAr: string;
  tech: string[];
  language: string;
  githubUrl: string;
  demoUrl: string;
  stars: number;
  updatedAt: string;
}

const CATEGORY_ORDER = ['barber', 'dental', 'healthcare', 'ecommerce', 'bots', 'apps', 'other'];

export async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/users/oguenfoude/repos?per_page=100&sort=updated', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const repos: Repo[] = await res.json();
    return repos.filter(r => r.name !== 'portfolio');
  } catch {
    return [];
  }
}

export async function getEnrichedProjects(): Promise<EnrichedProject[]> {
  const repos = await fetchRepos();
  const enrichments = (enrichmentsData as Record<string, unknown>).enrichments as Record<string, Record<string, unknown>>;

  const projects: EnrichedProject[] = repos.map(repo => {
    const enrich = enrichments[repo.name] as Record<string, string> | undefined;
    const category = enrich?.category || 'other';

    return {
      name: repo.name,
      titleEn: enrich?.titleEn || formatName(repo.name),
      titleAr: enrich?.titleAr || formatName(repo.name),
      descEn: enrich?.descEn || repo.description || 'No description available',
      descAr: enrich?.descAr || repo.description || 'لا يوجد وصف',
      category,
      categoryEn: enrich?.categoryEn || 'Other',
      categoryAr: enrich?.categoryAr || 'أخرى',
      tech: enrich?.tech ? String(enrich.tech).split(',').map(s => s.trim()) : [repo.language || 'Unknown'],
      language: repo.language || 'N/A',
      githubUrl: repo.html_url,
      demoUrl: enrich?.demoUrl || repo.homepage || '',
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
    };
  });

  return projects.sort((a, b) => {
    const aIdx = CATEGORY_ORDER.indexOf(a.category);
    const bIdx = CATEGORY_ORDER.indexOf(b.category);
    return (aIdx === -1 ? 99 : aIdx) - (bIdx === -1 ? 99 : bIdx);
  });
}

function formatName(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

const enrichmentsData = enrichments;
