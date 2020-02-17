import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";



function Movie({ title, releaseDate, memo }) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
  return (
    <div>
      
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}


const MemoizedMovie = React.memo(Movie);

export default function Movies() {
  const [, setToggle] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setToggle(toggle => !toggle);
    }, 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* <div onClick={{this.setTime}}>click</div> */}
      <MemoizedMovie title="Heat" releaseDate="December 16, 1995" memo={true} />
      <Movie title="Heat" releaseDate="December 16, 1995" memo={false} />
    </>
  );
}
