import Header from "./sections/01-header";
import Integrations from "./sections/02-integrations";
import FirstCTA from "./sections/03-cta";
import SecondCTA from "./sections/05-cta";
import Features from "./sections/04-features";
import Testimonials from "./sections/07-testimonial";
import FAQ from "./sections/06-faq";

export default function Home() {
  return (
    <main className="p-0 md:px-16 md:py-3">
      <Header />
      <Integrations />
      <FirstCTA />
      <Features />
      <SecondCTA />
      <FAQ />
      <Testimonials />
    </main>
  );
}
