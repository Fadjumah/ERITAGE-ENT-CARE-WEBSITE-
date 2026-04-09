export interface ArticleMetadata {
  title: string;
  description: string;
  slug: string;
  icon: string;
  date: string;
  author: string;
  authorTitle: string;
  authorExperience: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

// Simple frontmatter parser for browser
const parseFrontmatter = (fileContent: string): { data: Record<string, string>; content: string } => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: fileContent };
  }
  
  const frontmatterText = match[1];
  const content = match[2];
  
  const data: Record<string, string> = {};
  const lines = frontmatterText.split('\n');
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  });
  
  return { data, content };
};

// Import all markdown files
const articleModules = import.meta.glob('/src/content/articles/*.md', { 
  as: 'raw',
  eager: true 
});

export const getAllArticles = (): Article[] => {
  const articles: Article[] = [];

  Object.entries(articleModules).forEach(([path, content]) => {
    const { data, content: markdownContent } = parseFrontmatter(content as string);
    
    articles.push({
      title: data.title,
      description: data.description,
      slug: data.slug,
      icon: data.icon,
      date: data.date,
      author: data.author,
      authorTitle: data.authorTitle || 'ENT Specialist',
      authorExperience: data.authorExperience || '10+ years of clinical experience',
      content: markdownContent,
    });
  });

  // Sort by date, newest first
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  const articles = getAllArticles();
  return articles.find(article => article.slug === slug);
};

export const getArticleMetadata = (): ArticleMetadata[] => {
  return getAllArticles().map(({ content, ...metadata }) => metadata);
};
