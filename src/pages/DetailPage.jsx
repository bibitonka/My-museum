import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import museumData from "../data/museum.json";

function DetailPage() {
  const { id } = useParams();
  const exhibit = museumData.find((item) => String(item.id) === id);

  if (!exhibit) {
    return (
      <div className="page">
        <Header />
        <main className="detail-page">
          <h1>Exhibition not found</h1>
          <Link to="/exhibitions" className="back-link">
            ← Back to exhibitions
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="detail-page">
        <Link to="/exhibitions" className="back-link">
          ← Back to exhibitions
        </Link>

        <div className="detail-layout">
          <img src={exhibit.image} alt={exhibit.title} className="detail-image" />

          <div className="detail-content">
            <p className="card-category">{exhibit.category}</p>
            <h1>{exhibit.title}</h1>
            <p className="detail-description">{exhibit.description}</p>

            <div className="tags">
              {exhibit.tags?.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DetailPage;