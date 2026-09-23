import React, { useEffect, useRef, useState } from "react";

import Envelope from "./components/Envelope";
import GrandReveal from "./components/GrandReveal";
import CoupleSection from "./components/CoupleSection";
import Engagement from "./components/Engagement";
import Celebration from "./components/Celebration";
import Venue from "./components/Venue";
import FinalMessage from "./components/FinalMessage";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // =====================================================
  // START MUSIC
  // =====================================================

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      console.warn("Audio element not found.");
      return;
    }

    try {
      // Make sure the browser has loaded the audio
      audio.volume = 0.7;

      await audio.play();

      setIsPlaying(true);

      console.log("Wedding music started.");
    } catch (error) {
      console.error("Unable to play wedding music:", error);

      setIsPlaying(false);
    }
  };

  // =====================================================
  // PAUSE MUSIC
  // =====================================================

  const pauseMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    setIsPlaying(false);

    console.log("Wedding music paused.");
  };

  // =====================================================
  // OPEN INVITATION
  // =====================================================

  const openInvitation = async () => {
    setIsOpened(true);

    // -----------------------------------------------------
    // Start music directly from the user click.
    // This is important because browsers block autoplay
    // until the user interacts with the page.
    // -----------------------------------------------------

    await playMusic();

    // -----------------------------------------------------
    // Scroll to invitation content
    // -----------------------------------------------------

    setTimeout(() => {
      document.getElementById("invitation-content")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 700);
  };

  // =====================================================
  // MUSIC TOGGLE
  // =====================================================

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await playMusic();
    } else {
      pauseMusic();
    }
  };

  // =====================================================
  // AUDIO EVENT LISTENERS
  // =====================================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
      console.log("Audio playing.");
    };

    const handlePause = () => {
      setIsPlaying(false);
      console.log("Audio paused.");
    };

    const handleEnded = () => {
      setIsPlaying(false);
      console.log("Audio ended.");
    };

    const handleError = () => {
      setIsPlaying(false);

      console.error(
        "Wedding music could not be loaded. Check /public/wedding-music.mp3",
      );
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // =====================================================
  // CLEANUP AUDIO WHEN APP UNMOUNTS
  // =====================================================

  useEffect(() => {
    return () => {
      const audio = audioRef.current;

      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div className="invitation-app">
      {/* =================================================
          WEDDING MUSIC
      ================================================= */}

      <audio
        ref={audioRef}
        src="/wedding-music.crdownload"
        loop
        preload="auto"
      />

      {/* =================================================
          MUSIC BUTTON
      ================================================= */}

      <button
        type="button"
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
          FIRST PAGE / INVITATION CONTENT
      ================================================= */}

      {!isOpened ? (
        <Envelope onOpen={openInvitation} />
      ) : (
        <main id="invitation-content">
          <GrandReveal />

          <CoupleSection />

          <Engagement />

          <Celebration />

          <Venue />

          <FinalMessage />
        </main>
      )}
    </div>
  );
}

export default App;
