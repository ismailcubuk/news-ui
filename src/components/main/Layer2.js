import React from "react";

const articles = [
  {
    imgSrc: "/images/thumb5.jpg",
    hoursAgo: "20 hours ago",
    bottomHeader: "How Hafez al Assad hijacked the Baath Party – and the state – 50 years ago",
    description: "Hafez al Assad’s ominous capture of power on 13 November 1970, as chronicled by a former student activist and left-wing Baathist from the Alawi heartland.",
    author: "FAYSAL MOHAMAD",
    authorImg: "/images/faysalpp.png",
  },
  {
    imgSrc: "/images/thumb6.jpg",
    hoursAgo: "21 hours ago",
    bottomHeader: "Who was the real target of Pakistan's dossier on Indian terror sponsorship?",
    description: "Last week, decision-makers decided it was time to raise the stakes in the India-Pakistan rivalry.",
    author: "TOM HUSSAIN",
    authorImg: "/images/tompp.png",
  },
  {
    imgSrc: "/images/thumb7.jpg",
    hoursAgo: "21 hours ago",
    bottomHeader: "US President-elect Biden's priority is not Turkey",
    description: "Joe Biden will first have to deal with controlling a spiralling pandemic and recovering the economy.",
    author: "ALİ ÇINAR",
    authorImg: "/images/alipp.png",
  },
  {
    imgSrc: "/images/thumb8.jpg",
    hoursAgo: "2 DAYS AGO",
    bottomHeader: "Pakistani dossier on Indian terror sponsorship has big implications",
    description: "The evidence presented by Pakistan should be examined seriously by the international community.",
    author: "CJ WERLEMAN",
    authorImg: "/images/cjpp.png",
  },
  {
    imgSrc: "/images/thumb9.jpg",
    hoursAgo: "5 DAYS AGO",
    bottomHeader: "A Biden administration will contend with a vastly changed South Asia",
    description: "The US will need to focus on bilateral relationships in the Indian Subcontinent rather than relying on India as its guide.",
    author: "ARİF RAFİQ",
    authorImg: "/images/arifpp.png",
  },
];

export default function Layer2() {
  return (
    <div className="grid pt-6 grid-cols-4">
      <div className="grid grid-rows-6 col-span-3 gap-6 divide-y-2">
        {articles.map((article, index) => (
          <div className={`flex ${index === 2 ? 'row-span-2 flex-col' : ''}`} key={index}>
            <img src={article.imgSrc} className={`w-[424px] h-[240px] mr-6 ${index === 2 ? 'w-[984px] h-[400px]' : ''}`} alt={`thumb${index + 5}`} />
            <div className="py-4">
              <p className="hours pb-3">{article.hoursAgo}</p>
              <p className="bottom-header pb-3">{article.bottomHeader}</p>
              <p className="description pb-3">{article.description}</p>
              <div className="flex items-center gap-4">
                <img src={article.authorImg} alt={`${article.author.split(' ')[0].toLowerCase()}pp`} />
                <p className="author">{article.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
