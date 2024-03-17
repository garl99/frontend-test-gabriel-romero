import Header from "./sections/01-header";
import Integrations from "./sections/02-integrations";

export default function Home() {
  return (
    <main className="p-0 md:px-16 md:py-3">
      <Header />
      <Integrations />
    </main>
  );
}
