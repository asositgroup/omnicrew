import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-paper text-ink">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}
