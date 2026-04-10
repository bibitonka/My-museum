import Header from "./components/Header";
import Footer from "./components/Footer";
import ExhibitCard from "./components/ExhibitCard";
import museumData from "./data/museum.json";

export default function App() {
  const featuredItems = museumData.slice(0, 5);

  return (
    <div className="page">
      <Header />

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Discover the Botanical Garden</h1>
            <p>
              Explore beautiful houses, unique plant collections, and inspiring
              natural habitats from around the world.
            </p>
            <button className="cta-button">Explore the Houses</button>
          </div>
        </div>
      </section>

      <div className="divider" />

      <main className="home-content">
        <section className="featured-grid">
          {featuredItems.map((item) => (
            <ExhibitCard key={item.id} exhibit={item} />
          ))}
        </section>

        <aside className="side-links">
          <button className="side-link">
            OPENING HOURS <span>›</span>
          </button>
          <button className="side-link">
            PRACTICAL INFORMATION <span>›</span>
          </button>
          <button className="side-link">
            PLAN YOUR VISIT <span>›</span>
          </button>
        </aside>
      </main>

      <Footer />
    </div>
  );
}