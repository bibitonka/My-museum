import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <header className="topbar">
      <div className="logo">
        <span>SCIENCE</span>
        <span>MUSEUM</span>
      </div>

      <form className="top-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          ⌕
        </button>
      </form>
    </header>
  );
}