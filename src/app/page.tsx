import Header from "./sections/01-header";
import Integrations from "./sections/02-integrations";
import CTA from "./sections/03-cta";

export default function Home() {
  return (
    <main className="p-0 md:px-16 md:py-3">
      <Header />
      <Integrations />
      <CTA />
    </main>
  );
}
