import "./styles.css";
import { useEffect, useState } from "react";
import EmojiCard from "./EmojiCard";
import SearchResult from "./SearchResult";

export default function App() {
  const [allRecords, setAllRecords] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://emojihub.yurace.pro/api/all")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setAllRecords(json);
      });
  }, []);

  const massageString = (string) => {
    if (string) return string.trim().toLowerCase();
    return "";
  };
  const filterData = (query) => {
    if (!query) {
      setData(allRecords);
      return;
    }

    const filteredData = allRecords.filter((x) => {
      if (massageString(x.name).includes(massageString(query))) return true;
    });
    setData(filteredData);
  };

  return (
    <div className="App">
      <span
        style={{
          color: "#ccc",
          position: "absolute",
          top: "10px",
          right: "10px"
        }}
      >
        Project by Tejus
      </span>
      <h1 className="header">Emoticons 😎</h1>
      <div className="search-container">
        <SearchResult searchQuery={(query) => filterData(query)} />
      </div>
      <div className="emoji-container">
        <div className="emoji-wrapper">
          {data.map((card, index) => (
            <EmojiCard key={`${index}_${card.unicode[0]}`} emojiData={card} />
          ))}
        </div>
      </div>
      {data.length === 0 ? (
        <div style={{ color: "#ccc" }}>No result found!</div>
      ) : (
        ""
      )}
    </div>
  );
}
