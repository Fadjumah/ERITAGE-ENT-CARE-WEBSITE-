import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Heart, Shield, Sparkles, Activity, Search, Droplets, Wind, LucideIcon } from 'lucide-react';
import { getArticleMetadata, ArticleMetadata } from '@/utils/blogLoader';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Heart,
  Shield,
  Sparkles,
  Activity,
  Search,
  Droplets,
  Wind,
};

interface RelatedArticlesProps {
  currentSlug: string;
  maxArticles?: number;
}

const RelatedArticles = ({ currentSlug, maxArticles = 3 }: RelatedArticlesProps) => {
  const allArticles = getArticleMetadata();
  
  // Filter out current article and get related ones
  const relatedArticles = allArticles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, maxArticles);

  if (relatedArticles.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t">
      <h2 className="text-2xl font-serif font-bold mb-6">Related Health Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedArticles.map((article) => {
          const IconComponent = iconMap[article.icon] || BookOpen;
          
          return (
            <Link key={article.slug} to={`/blog/${article.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                  <span className="text-sm text-primary font-medium mt-2 inline-block">Read article →</span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedArticles;
