import React from "react";

const EmojiCard = ({ emojiData }) => {
  const { name, category, group, htmlCode, unicode } = emojiData;

  return (
    <div className="emoji-card">
      <div className="emoji-codes">
        {htmlCode.map((code, index) => (
          <span
            key={index}
            className="emoji"
            role="img"
            aria-label={name}
            dangerouslySetInnerHTML={{ __html: code }}
          />
        ))}
      </div>
      <div className="emoji-info">
        <h3 className="two-line-ellipsis">{name}</h3>
        <p>Category: {category}</p>
        <p>Group: {group}</p>
        <p>Unicode: {unicode[0]}</p>
      </div>
    </div>
  );
};

export default EmojiCard;
