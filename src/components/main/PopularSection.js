import React from "react";

export default function PopularSection() {
  const items = [
    {
      number: "1",
      text: "Cricket — India's only effective weapon against Pakistan",
      author: "AHSAN BUTT",
    },
    {
      number: "2",
      text: "Pakistani dossier on Indian terror sponsorship has big implications",
      author: "CJ WERLEMAN",
    },
    {
      number: "3",
      text: "This is how a Trump constitutional coup would unfold",
      author: "ALFONS LOPEZ TENA",
    },
    {
      number: "4",
      text: "A Biden administration will contend with a vastly changed South Asia",
      author: "ARIF RAFIQ",
    },
    {
      number: "5",
      text: "How an Afghanistan settlement could affect militant groups globally",
      author: "ABDUL BASIT",
    },
  ];

  return (
    <div className="flex relative px-6">
        <div className="absolute top-0 left-6">
            POPULAR
        </div>
        <div className="grid grid-rows-5 divide-y-2 pt-8 ">
      {items.map((item, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <p className="number">{item.number}</p>
          <div>
            <p className="description">{item.text}</p>
            <p className="author">{item.author}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
