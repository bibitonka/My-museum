import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExhibitCard from "../components/ExhibitCard";
import museumData from "../data/museum.json";

function HomePage() {
  const featuredItems = museumData.filter((item) => item.featured).slice(0, 5);

  return (
    <div className="page">
      <Header />

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Welcome to Botanical Garden</h1>
            <p>
              Discover new plants, biomes and observe colorful butterflies along the way.           the museum.
            </p>
            <Link to="/exhibitions" className="cta-button">
              Explore all houses
            </Link>
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
          <Link to="/visit" className="side-link">
            OPENING HOURS <span>›</span>
          </Link>
          <Link to="/visit" className="side-link">
            PRACTICAL INFORMATION <span>›</span>
          </Link>
          <Link to="/visit" className="side-link">
            PLAN YOUR VISIT <span>›</span>
          </Link>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;