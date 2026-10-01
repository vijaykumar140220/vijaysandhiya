import React, { useCallback, useEffect, useRef, useState } from "react";

import Envelope from "./components/Envelope";
import GrandReveal from "./components/GrandReveal";
import CoupleSection from "./components/CoupleSection";
import Engagement from "./components/Engagement";
import Celebration from "./components/Celebration";
import Venue from "./components/Venue";
import FinalMessage from "./components/FinalMessage";

import weddingMusic from "./images/music1.mp3";
import "./App.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  /* =========================================================
     PLAY MUSIC
  ========================================================= */
  const playMusic = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0.65;

      await audio.play();

      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  /* =========================================================
     PAUSE MUSIC
  ========================================================= */
  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  }, []);

  /* =========================================================
     OPEN INVITATION
  ========================================================= */
  const openInvitation = useCallback(async () => {
    setIsOpened(true);

    /*
      Music starts directly from the user's click.
      This gives the browser the best chance of allowing playback.
    */
    await playMusic();

    /*
      Scroll after React has mounted the invitation.
    */
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        document.getElementById("invitation-content")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
    });
  }, [playMusic]);

  /* =========================================================
     TOGGLE MUSIC
  ========================================================= */
  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await playMusic();
    } else {
      pauseMusic();
    }
  }, [playMusic, pauseMusic]);

  /* =========================================================
     AUDIO EVENTS
  ========================================================= */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);

      audio.pause();
    };
  }, []);

  return (
    <div className="invitation-app">
      {/* =====================================================
          WEDDING MUSIC
      ====================================================== */}
      <audio ref={audioRef} src={weddingMusic} loop preload="metadata" />

      {/* =====================================================
          MUSIC CONTROL
      ====================================================== */}
      <button
        type="button"
        className={`music-button ${isPlaying ? "music-playing" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
        aria-pressed={isPlaying}
      >
        <span className="music-icon" aria-hidden="true">
          {isPlaying ? "♫" : "♪"}
        </span>

        <span className="music-text">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </button>

      {/* =====================================================
          ENVELOPE
      ====================================================== */}
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
