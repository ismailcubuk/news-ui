import React from "react";

const articles = [
  {
    imgSrc: "/images/thumb3.jpg",
    header: "Ethiopia's needless war",
    customText:
      "The war in Ethiopia can still be stopped before it gets out of control and potentially draws in Eritrea.",
    author: "ABDI ISMAIL SAMATAR",
    authorImg: "/images/abdipp.png",
  },
  {
    imgSrc: "/images/thumb4.jpeg",
    header: "The Muslim surveillance-industrial complex",
    customText:
      "The Muslim Pro and Muslim Mingle data harvesting revelations are consistent with the realities of American Muslim surveillance since 9/11.",
    author: "WAQAS MIRZA",
    authorImg: null,
  },
];

export default function MiddleSection() {
  return (
    <div className="grid grid-rows-2 divide-y-2 mx-6">
      {articles.map((article, index) => (
        <div className="grid grid-rows-2" key={index}>
          <img src={article.imgSrc} alt={`thumb${index}`} />
          <div className="grid gap-3">
            <p className="header">{article.header}</p>
            <p className="custom-text">{article.customText}</p>
            <div className="flex items-center gap-4">
              {article.authorImg && <img src={article.authorImg} alt="author" />}
              <p className="author">{article.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
