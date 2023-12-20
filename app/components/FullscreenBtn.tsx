"use client";

import { BiFullscreen } from "react-icons/bi";

export default function FullscreenBtn() {
  const toggleFullscreen = () => {
    const countdownElement = document.getElementById("countdownContainer");
    const isFullscreen = document.fullscreenElement;
    if(!isFullscreen){
      countdownElement?.requestFullscreen();
    }else{
      document.exitFullscreen();
    }
  }

  return (
    <button aria-label="Fullscreen Button" className="absolute bottom-12" onClick={toggleFullscreen}>
        <BiFullscreen className="fill-neutral-400 hover:fill-white" size={30} />
    </button>
  )
}