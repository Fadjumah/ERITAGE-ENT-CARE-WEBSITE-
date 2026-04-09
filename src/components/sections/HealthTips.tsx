import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Shield, Sparkles, Activity, Search, Droplets, Wind, LucideIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getArticleMetadata } from "@/utils/blogLoader";
import ScrollReveal from "@/components/shared/ScrollReveal";

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

const HealthTips = () => {
  const navigate = useNavigate();
  const articles = getArticleMetadata();
  const displayedArticles = articles.slice(0, 3);

  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">Health Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert advice from our ENT specialists to help you maintain better ear, nose, and throat health
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {displayedArticles.map((article, index) => {
            const IconComponent = iconMap[article.icon] || BookOpen;
            
            return (
              <ScrollReveal key={article.slug} animation="fade-in-up" delay={index * 100}>
                <Card 
                  className="hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] h-full"
                  onClick={() => handleArticleClick(article.slug)}
                >
                  <CardHeader className="pb-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm line-clamp-2 leading-relaxed">{article.description}</CardDescription>
                    <div className="mt-3 text-sm text-primary font-medium">
                      Read article →
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
        
        {articles.length > 3 && (
          <ScrollReveal animation="fade-in" delay={300}>
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => navigate('/blog')}
                className="gap-2 hover:scale-105 transition-transform"
              >
                Browse All Health Articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default HealthTips;
