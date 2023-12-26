"use client";
import Youtube from "react-youtube";
import { XCircle, Play } from "@phosphor-icons/react";
import { useState } from "react";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "400",
    height: "300",
  };

  const ButtonClosePlayer = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="float-right text-color-primary"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} />
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={options}
          onError={() => alert("Video is not available")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <>
        <div className="fixed bottom-2 right-2">
          <button
            className="flex flex-row items-center justify-center gap-4 rounded-md bg-color-primary px-4 py-2 transition ease-in-out hover:bg-color-light hover:text-color-primary"
            onClick={handleVideoPlayer}
          >
            <h2 className="font-semibold">Play Trailer</h2>
            <Play size={24} />
          </button>
        </div>
      </>
    );
  };

  return isOpen ? <ButtonClosePlayer /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
