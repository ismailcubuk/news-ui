import React from "react";
import { DividerW, DividerH } from "../Divider";
const articles = [
  {
    imgSrc: "/images/thumbs/thumb3.jpg",
    header: "Ethiopia's needless war",
    customText:
      "The war in Ethiopia can still be stopped before it gets out of control and potentially draws in Eritrea.",
    author: "ABDI ISMAIL SAMATAR",
    authorImg: "/images/profilePictures/abdipp.png",
  },
  {
    imgSrc: "/images/thumbs/thumb4.jpg",
    header: "The Muslim surveillance-industrial complex",
    customText:
      "The Muslim Pro and Muslim Mingle data harvesting revelations are consistent with the realities of American Muslim surveillance since 9/11.",
    author: "WAQAS MIRZA",
    authorImg: null,
  },
];

export default function MiddleSection() {
  const isMysm = window.innerWidth < 320 || window.innerWidth > 576;
  return (
    <div className="flex flex-col myxs:flex-row mysm:flex-col myxs:w-full  mytablet:flex-col items-start ">
      {articles.map((article, index) => (
        <div
          className="flex flex-col justify-center items-start gap-3 "
          key={index}
        >
          <img src={article.imgSrc} alt={`thumb${index}`} className="w-full"/>
          <p className="header">{article.header}</p>
          <p className="custom-text">{article.customText}</p>
          <div className="flex items-center gap-4">
            {article.authorImg && <img src={article.authorImg} alt="author" />}
            <p className="author">{article.author}</p>
          </div>
          {index < articles.length - 1 && isMysm ? <DividerW /> : null}
        </div>
      ))}
    </div>
  );
}
