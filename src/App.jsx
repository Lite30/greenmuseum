import React from "react";
import "./styles.css";

// Hardcoded artworks (10 images)
const artworks = [
  {
    title: "Dreamscape",
    description: "A surreal digital painting of a dream world.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    artist: "Jane Doe",
    contact: "jane.doe@example.com",
  },
  {
    title: "Neon City",
    description: "Futuristic cityscape glowing in neon lights.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    artist: "John Smith",
    contact: "john.smith@example.com",
  },
  {
    title: "Abstract Flow",
    description: "Colorful abstract digital art with flowing shapes.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    artist: "Alice Johnson",
    contact: "alice.johnson@example.com",
  },
  {
    title: "Mountain Serenity",
    description: "Peaceful mountain landscape in digital art.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    artist: "Bob Wilson",
    contact: "bob.wilson@example.com",
  },
  {
    title: "Ocean Waves",
    description: "Dynamic digital art of ocean waves.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    artist: "Carol Brown",
    contact: "carol.brown@example.com",
  },
  {
    title: "Urban Jungle",
    description: "City life captured in digital art.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
    artist: "David Lee",
    contact: "david.lee@example.com",
  },
  {
    title: "Cosmic Journey",
    description: "Space-themed digital artwork.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    artist: "Eve Davis",
    contact: "eve.davis@example.com",
  },
  {
    title: "Forest Whispers",
    description: "Mystical forest scene in digital art.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    artist: "Frank Miller",
    contact: "frank.miller@example.com",
  },
  {
    title: "Desert Mirage",
    description: "Illusionary desert landscape in digital art.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    artist: "Grace Taylor",
    contact: "grace.taylor@example.com",
  },
  {
    title: "Winter Wonderland",
    description: "Snowy digital art scene.",
    image: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=600&q=80",
    artist: "Henry White",
    contact: "henry.white@example.com",
  },
];

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>GreenMuseum</h1>
        <p>A curated collection of digital artworks. Enjoy exploring!</p>
      </header>

      {/* Gallery */}
      <main className="gallery">
        <div className="gallery-grid">
          {artworks.map((art, idx) => (
            <div key={idx} className="artwork-card">
              <img
                src={art.image}
                alt={art.title}
                className="artwork-image"
                loading="lazy"
              />
              <div className="artwork-content">
                <h2 className="artwork-title">{art.title}</h2>
                <p className="artwork-description">{art.description}</p>
                <p className="artwork-artist">Artist: {art.artist}</p>
                <p className="artwork-contact">Contact: {art.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} GreenMuseum
      </footer>
    </div>
  );
}
