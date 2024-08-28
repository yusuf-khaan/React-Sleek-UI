import React, { useRef } from "react";
import Card from "./Card";
function Foreground() {
  const myref = useRef(null);
    const data = [
    {
      desc: "Lorem ipsum",
      size: ".6mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
        desc: "Lorem ipsum",
        size: ".6mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Upload",
          tagColor: "gray",
        },
      },
      {
        desc: "Lorem ipsum",
        size: ".6mb",
        close: false,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "green",
        },
      },
  ];

  return (
    <div ref ={myref} className="p-4 gap-10 flex flex-wrap justify-center absolute fixed top-0 h-screen w-screen z-[0] bg-sky-200/50 overflow-hidden">
      {data.map((item, index) => (
        <Card data={item} reference = {myref} />
      ))}

    </div>
  );
}

export default Foreground;
