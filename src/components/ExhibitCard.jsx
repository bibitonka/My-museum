export default function ExhibitCard({ exhibit }) {
  return (
    <article className="card">
      <img src={exhibit.image} alt={exhibit.title} className="card-image" />

      <div className="card-content">
        <div>
          <p className="card-category">{exhibit.category}</p>
          <h3>{exhibit.title}</h3>
          <p>{exhibit.description}</p>
        </div>

        <button className="card-arrow" aria-label={`View ${exhibit.title}`}>
          →
        </button>
      </div>
    </article>
  );
}