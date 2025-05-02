import { Helmet } from "react-helmet";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Taglines from "@/components/branding/taglines";
import CTASection from "@/components/sections/cta-section";

export default function BrandingPage() {
  return (
    <>
      <Helmet>
        <title>Branding & Taglines | John Doe</title>
        <meta 
          name="description" 
          content="Explore branding taglines for web development services. Find the perfect slogan that communicates your unique value proposition."
        />
        <meta 
          name="keywords" 
          content="web developer branding, taglines, slogans, web development services, branding" 
        />
      </Helmet>
      
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web Developer Branding
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover compelling taglines and branding options for web development services.
              </p>
            </div>
          </div>
        </section>
        
        <Taglines developerName="Your Name" />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2>Choosing the Right Tagline</h2>
              <p>
                A strong tagline communicates your unique value proposition and resonates with your target audience. When selecting a tagline for your web development services, consider these factors:
              </p>
              
              <ul>
                <li><strong>Clarity:</strong> Clearly conveys what you do and the value you provide</li>
                <li><strong>Memorability:</strong> Easy to remember and repeat</li>
                <li><strong>Differentiation:</strong> Sets you apart from competitors</li>
                <li><strong>Authenticity:</strong> Aligns with your actual skills and approach</li>
                <li><strong>Audience Alignment:</strong> Speaks to the needs and desires of your target clients</li>
              </ul>
              
              <p>
                The best taglines strike a balance between being descriptive enough to communicate your services while being creative enough to spark interest and leave a lasting impression.
              </p>
              
              <h2>Using Your Tagline</h2>
              <p>
                Once you've selected a tagline, use it consistently across your brand touchpoints:
              </p>
              
              <ul>
                <li>Website header or footer</li>
                <li>Business cards and stationery</li>
                <li>Social media profiles</li>
                <li>Email signatures</li>
                <li>Proposals and client communications</li>
                <li>Marketing materials</li>
              </ul>
              
              <p>
                A well-implemented tagline becomes an integral part of your professional identity, helping potential clients remember you and understand your unique approach to web development.
              </p>
            </div>
          </div>
        </section>
        
        <CTASection variant="quaternary" />
      </main>
      
      <Footer />
    </>
  );
}