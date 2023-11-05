import React from "react";
import { DividerW, DividerH } from "../Divider";

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
    <div className="flex flex-col items-start gap-6">
      <div className="popular pb-6">POPULAR</div>
      <div className="flex flex-col items-start">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-center items-center gap-4">
              <p className="number">{item.number}</p>
              <div className="flex flex-col items-start gap-2">
                <p className="description">{item.text}</p>
                <p className="author">{item.author}</p>
              </div>
            </div>
            {index < items.length - 1 && <DividerW />}
          </div>
        ))}
      </div>
    </div>
  );
}
