import React, { useEffect, useRef, useState } from "react";

import Envelope from "./components/Envelope";
import GrandReveal from "./components/GrandReveal";
import CoupleSection from "./components/CoupleSection";
import Engagement from "./components/Engagement";
import Celebration from "./components/Celebration";
import Reception from "./components/Reception";
import Venue from "./components/Venue";
import FinalMessage from "./components/FinalMessage";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // =====================================================
  // OPEN INVITATION
  // =====================================================

  const openInvitation = () => {
    setIsOpened(true);

    // Start music when user clicks the wax seal
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Music playback failed:", error);
        });
    }

    // Scroll to invitation content
    setTimeout(() => {
      document.getElementById("invitation-content")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 700);
  };

  // =====================================================
  // MUSIC TOGGLE
  // =====================================================

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Unable to play music:", error);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // =====================================================
  // KEEP MUSIC STATE IN SYNC
  // =====================================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="invitation-app">
      {/* =================================================
          WEDDING MUSIC
          IMPORTANT:
          Keep audio OUTSIDE isOpened condition
      ================================================= */}

      <audio ref={audioRef} src="/wedding-music.crdownload" loop preload="auto" />

      {/* =================================================
          FIRST PAGE MUSIC BUTTON
          This will now appear on the envelope screen
      ================================================= */}

      <button
        className={`music-button ${
          isPlaying ? "music-playing" : ""
        } ${!isOpened ? "music-button-first-page" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <span className="music-icon">{isPlaying ? "♫" : "♪"}</span>

        <span className="music-text">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </button>

      {/* =================================================
          ENVELOPE
      ================================================= */}

      {!isOpened ? (
        <Envelope onOpen={openInvitation} />
      ) : (
        <>
          {/* =================================================
              INVITATION CONTENT
          ================================================= */}

          <main id="invitation-content">
            <GrandReveal />

            <CoupleSection />

            <Engagement />

            <Celebration />

            <Reception />

            <Venue />

            <FinalMessage />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
