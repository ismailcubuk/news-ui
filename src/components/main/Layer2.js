import { DividerW, DividerH } from '../Divider';
import React, { useEffect, useState } from "react";

const articles = [
  {
    imgSrc: "/images/thumbs/thumb5.jpg",
    hoursAgo: "20 hours ago",
    bottomHeader: "How Hafez al Assad hijacked the Baath Party – and the state – 50 years ago",
    description: "Hafez al Assad’s ominous capture of power on 13 November 1970, as chronicled by a former student activist and left-wing Baathist from the Alawi heartland.",
    author: "FAYSAL MOHAMAD",
    authorImg: "/images/profilePictures/faysalpp.png",
  },
  {
    imgSrc: "/images/thumbs/thumb6.jpg",
    hoursAgo: "21 hours ago",
    bottomHeader: "Who was the real target of Pakistan's dossier on Indian terror sponsorship?",
    description: "Last week, decision-makers decided it was time to raise the stakes in the India-Pakistan rivalry.",
    author: "TOM HUSSAIN",
    authorImg: "/images/profilePictures/tompp.png",
  },
  {
    imgSrc: "/images/thumbs/thumb7.jpg",
    hoursAgo: "21 hours ago",
    bottomHeader: "US President-elect Biden's priority is not Turkey",
    description: "Joe Biden will first have to deal with controlling a spiralling pandemic and recovering the economy.",
    author: "ALİ ÇINAR",
    authorImg: "/images/profilePictures/alipp.png",
  },
  {
    imgSrc: "/images/thumbs/thumb8.jpg",
    hoursAgo: "2 DAYS AGO",
    bottomHeader: "Pakistani dossier on Indian terror sponsorship has big implications",
    description: "The evidence presented by Pakistan should be examined seriously by the international community.",
    author: "CJ WERLEMAN",
    authorImg: "/images/profilePictures/cjpp.png",
  },
  {
    imgSrc: "/images/thumbs/thumb9.jpg",
    hoursAgo: "5 DAYS AGO",
    bottomHeader: "A Biden administration will contend with a vastly changed South Asia",
    description: "The US will need to focus on bilateral relationships in the Indian Subcontinent rather than relying on India as its guide.",
    author: "ARİF RAFİQ",
    authorImg: "/images/profilePictures/arifpp.png",
  },
];

export default function Layer2() {
  const [hoursSm, setHoursSm] = useState(window.innerWidth < 576);
  const [hoursMd, setHoursMd] = useState(window.innerWidth >= 576);
  const [editorsSm, setEditorsSm] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => {
      setHoursSm(window.innerWidth < 576);
      setHoursMd(window.innerWidth >= 576);
      setEditorsSm(window.innerWidth > 768)
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex mx-8">
      <div className="flex flex-col items-start">
        {articles.map((article, index) => (
          <div key={index}>
            <div className={`flex flex-col mysm:flex-row gap-6 ${index === 2 ? 'row-span-2 flex-col' : ''}`}>
            <div className="flex flex-row items-center">
              <img src={article.imgSrc} alt={`thumb${index + 5}`}  className="w-20 h-11 mysm:h-fit mysm:w-fit"/>
              {hoursSm ? <p className="hours ml-3">{article.hoursAgo}</p> : null}
            </div>
            <div className="flex flex-col gap-2 mysm:gap-3 ">
            {hoursMd ? <p className="hours">{article.hoursAgo}</p> : null}
              <p className="text-[16px] leading-[24px] mysm:text-[20px] mysm:leading-[28px] mymd:text-[24px] mymd:leading-[32px] font-bold ">{article.bottomHeader}</p>
              <p className="text-[14px] leading-[20px] mymd:text-[16px] mymd:leading-[24px]">{article.description}</p>
            </div>
          </div>
          {index < articles.length - 1 && <DividerW />}
          </div>
        ))}
      </div>
      {editorsSm? <DividerH/>:null}
     {editorsSm ?
      <div className="flex flex-col gap-3">
        <p className="editors-pick">Edıtor’s Pıck</p>
        <img src="/images/thumbs/thumb10.jpg" alt="thumb10" />
        <p className="header">What lies beneath the stigmatisation of redheads in the UK?</p>
        <p className="custom-text">Given the suicides of bullied redhead children, there have been calls from rights groups to identify verbal abuse of red hair as a hate crime.</p>
        <p className="author">Nafees Mahmud</p>
      </div>
     :null}
    </div>
  );
}
