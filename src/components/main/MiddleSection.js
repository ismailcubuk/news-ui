import React, { useState, useEffect } from "react";
import Divider from "../Dividers";
import abdipp from '../../images/profilePictures/abdipp.png';
import thumb3 from '../../images/thumbs/thumb3.jpg';
import thumb4 from '../../images/thumbs/thumb4.jpg';

const articles = [
  {
    imgSrc: thumb3,
    header: "Ethiopia's needless war",
    customText:
      "The war in Ethiopia can still be stopped before it gets out of control and potentially draws in Eritrea.",
    author: "ABDI ISMAIL SAMATAR",
    authorImg: abdipp,
  },
  {
    imgSrc: thumb4,
    header: "The Muslim surveillance-industrial complex",
    customText:
      "The Muslim Pro and Muslim Mingle data harvesting revelations are consistent with the realities of American Muslim surveillance since 9/11.",
    author: "WAQAS MIRZA",
    authorImg: null,
  },
];

export default function MiddleSection() {
  const [isMysm, setIsMysm] = useState(window.innerWidth < 320 || window.innerWidth > 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMysm(window.innerWidth < 320 || window.innerWidth > 576);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col myxs:flex-row mysm:flex-col myxs:w-full mytablet:flex-col items-start">
      {articles.map((article, index) => (
        <div
          className="flex flex-col justify-center items-start gap-3 w-full myxs:w-1/2 mysm:w-full"
          key={index}
        >
          <img src={article.imgSrc} alt={`thumb${index}`} className="w-full" />
          <p className="header">{article.header}</p>
          <p className="custom-text">{article.customText}</p>
          <div className="flex items-center gap-4">
            {article.authorImg && <img src={article.authorImg} alt="author" />}
            <p className="author">{article.author}</p>
          </div>
          {index < articles.length - 1 && isMysm ? <Divider dividerW w/> : null}
        </div>
      ))}
    </div>
  );
}
