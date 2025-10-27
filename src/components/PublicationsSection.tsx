import { Card } from "@/components/ui/card";
import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const PublicationsSection = () => {
  const publications = [
    {
      title: "EasyE-Waste: A Novel Approach Toward Efficient and Sustainable E-Waste Management",
      authors: "Shawpnil, K., Nayeem, S., Hossain, F., Dayan, A., & Islam, M. M.",
      venue: "International Conference on Intelligent Sustainable Systems",
      publisher: "Springer Nature Singapore",
      year: "2023",
      pages: "pp. 557-571",
      link: "https://link.springer.com/chapter/10.1007/978-981-99-1726-6_43",
      type: "Conference",
    },
    {
      title: "A statistical synopsis of COVID-19 components and descriptive analysis of their socio-economic and healthcare aspects in Bangladesh perspective",
      authors: "Uddin, M., Shawpnil, K., Mugdha, S. B. S., & Ahmed, A.",
      venue: "Journal of Environmental and Public Health",
      year: "2023",
      link: "https://onlinelibrary.wiley.com/doi/full/10.1155/2023/9738094",
      type: "Journal",
    },
  ];

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
              <FileText className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Publications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Research contributions in sustainable technology and healthcare
            </p>
          </div>
          
          <div className="space-y-6 mb-12">
            {publications.map((pub, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-500 hover:shadow-elegant"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-7 h-7 text-secondary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Badge className="mb-2 bg-secondary/10 text-secondary border-secondary/20">
                            {pub.type}
                          </Badge>
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-secondary transition-colors leading-tight">
                            {pub.title}
                          </h3>
                        </div>
                        {pub.link && (
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="flex-shrink-0 hover:bg-secondary/10" 
                            asChild
                          >
                            <a href={pub.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {pub.authors}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 text-sm pt-2">
                        <span className="text-secondary font-semibold">{pub.venue}</span>
                        {pub.publisher && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{pub.publisher}</span>
                          </>
                        )}
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground font-medium">{pub.year}</span>
                        {pub.pages && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{pub.pages}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://scholar.google.com/citations?user=BEm3vG0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View Google Scholar Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
