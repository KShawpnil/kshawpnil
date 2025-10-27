import { Card } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PublicationsSection = () => {
  const publications = [
    {
      title: "Easye-waste: A novel approach toward efficient and sustainable e-waste management",
      authors: "Shawpnil, K., Nayeem, S., Hossain, F., Dayan, A., & Islam, M. M.",
      venue: "International Conference on Intelligent Sustainable Systems",
      publisher: "Springer Nature Singapore",
      year: "2023",
      pages: "pp. 557-571",
      link: "https://link.springer.com/chapter/10.1007/978-981-99-1726-6_43",
    },
    {
      title: "A statistical synopsis of COVID-19 components and descriptive analysis of their socio-economic and healthcare aspects in Bangladesh perspective",
      authors: "Uddin, M., Shawpnil, K., Mugdha, S. B. S., & Ahmed, A.",
      venue: "Journal of Environmental and Public Health",
      year: "2023",
    },
  ];

  return (
    <section id="publications" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Publications
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-secondary font-medium">{pub.venue}</span>
                      {pub.publisher && (
                        <>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{pub.publisher}</span>
                        </>
                      )}
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{pub.year}</span>
                      {pub.pages && (
                        <>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{pub.pages}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {pub.link ? (
                    <Button variant="ghost" size="icon" className="flex-shrink-0" asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://scholar.google.com/citations?user=BEm3vG0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Google Scholar Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
