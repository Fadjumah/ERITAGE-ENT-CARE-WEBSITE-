import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Shield, Sparkles, Activity, Search, Droplets, Wind, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getArticleMetadata } from "@/utils/blogLoader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import AdSense from "@/components/shared/AdSense";

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

const Blog = () => {
  const navigate = useNavigate();
  const articles = getArticleMetadata();

  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const breadcrumbSchemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eritageentcare.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Health Articles & Tips",
        "item": "https://eritageentcare.com/blog"
      }
    ]
  };

  const blogSchemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Eritage ENT Care Health Blog",
    "description": "Expert ENT health articles and tips from Eritage ENT Care specialists.",
    "url": "https://eritageentcare.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Eritage ENT Care",
      "url": "https://eritageentcare.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Health Articles & Tips | Eritage ENT Care</title>
        <meta name="description" content="Expert ENT health articles and tips from Eritage ENT Care specialists. Learn about ear infections, hearing loss prevention, allergies, and voice care." />
        <meta property="og:title" content="Health Articles & Tips | Eritage ENT Care" />
        <meta property="og:description" content="Expert ENT health articles and tips from Eritage ENT Care specialists." />
        <meta property="og:url" content="https://eritageentcare.com/blog" />
        <link rel="canonical" href="https://eritageentcare.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogSchemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Health Articles & Tips</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert advice and insights from our ENT specialists to help you maintain better ear, nose, and throat health
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articles.map((article) => {
                const IconComponent = iconMap[article.icon] || BookOpen;
                
                return (
                  <Card 
                    key={article.slug} 
                    className="hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
                    onClick={() => handleArticleClick(article.slug)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{article.description}</CardDescription>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <span className="text-sm text-primary font-medium">Read more →</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Strategic Ad Placement - After article grid */}
            <div className="max-w-4xl mx-auto mt-12">
              <AdSense adSlot="1122334455" adFormat="auto" />
            </div>

            {/* Related Services Section */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">Related ENT Services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/ent-services" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors text-center">
                  <span className="font-medium text-foreground">All ENT Services</span>
                </a>
                <a href="/hearing-tests" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors text-center">
                  <span className="font-medium text-foreground">Hearing Tests & Audiology</span>
                </a>
                <a href="/urgent-ent-guidance" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors text-center">
                  <span className="font-medium text-foreground">Urgent ENT Guidance</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Blog;
