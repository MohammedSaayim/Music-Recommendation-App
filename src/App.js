import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Rap: [
    { name: "Kohinoor", views: "90K views" },
    { name: "Mere Gully Mein", views: "68.3M views" }
  ],

  Classical: [
    {
      name: "Mere Sapnon Ki Raani",
      views: "125M views"
    },
    {
      name: "Jaag Dard-E-Dil Jaag",
      views: "67 Lakh views"
    }
  ],
 Romance: [
    {
      name: "Bol Do Na Zara",
      views: "157M views"
    },
    {
      name: "Agar Tum Saath Ho",
      views: "180M views"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Romance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎶 goodsongs </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite songs. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.views} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}