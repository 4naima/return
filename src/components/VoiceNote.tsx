import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function VoiceNote() {
  const [isCdOut, setIsCdOut] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const bgIMG = 'https://i.ibb.co.com/273zjZsn/Whats-App-Image-2026-03-02-at-8-32-40-PM.jpg';
  const cdImg = 'https://raw.githubusercontent.com/4naima/gift/main/new%20cd11.png';
  const cdCaseImg = 'https://raw.githubusercontent.com/4naima/gift/main/new%20cd%20case11.png';

  useEffect(() => {
    const audio = new Audio("https://files.catbox.moe/0g63rd.mp3");
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleCaseClick = (e: React.PointerEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isCdOut) setIsCdOut(true);
  };

  const handlePressStart = (e: React.PointerEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isCdOut || !audioRef.current) return;

    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handlePressEnd = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div
      className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onSelectStart={(e) => e.preventDefault()}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        touchAction: 'manipulation'
      }}
    >
      {/* Music Box */}
      <div
        className="rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden flex justify-center items-center"
        style={{
          width: '100%',
          maxWidth: '760px',
          aspectRatio: '1 / 1',
          backgroundImage: `url(${bgIMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h3
            className="text-2xl md:text-3xl text-white/90 text-center mb-7 md:mb-9 drop-shadow-lg tracking-wide"
            style={{ fontFamily: "'Cinzel Decorative', cursive" }}
          >
            A Voice Message for the Prettiest Girl
          </h3>

          <div className="relative flex flex-row items-center justify-center gap-2 md:gap-8 pointer-events-auto">
            
            {/* CD Case */}
            <div className="relative w-36 md:w-80 flex-shrink-0 z-10">
              <img
                src={cdCaseImg}
                alt="CD Case"
                className="w-full h-auto drop-shadow-2xl pointer-events-none"
                draggable={false}
              />
              <button
                onPointerDown={handleCaseClick}
                className="absolute inset-0 w-full h-full top-0 left-0 z-20 cursor-pointer bg-transparent"
              />
            </div>

            {/* CD */}
            <motion.div
              className="relative cursor-pointer flex-shrink-0 z-0"
              onPointerDown={handlePressStart}
              onPointerUp={handlePressEnd}
              onPointerLeave={handlePressEnd}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: isCdOut ? 0 : -60, opacity: isCdOut ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              <motion.img
                src={cdImg}
                alt="CD"
                className="w-36 md:w-80 h-auto drop-shadow-2xl pointer-events-none"
                draggable={false}
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 4, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Instructions Box */}
      <div className="w-full max-w-md h-36 bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-4 flex flex-col items-center justify-center text-center">
        {!isCdOut ? (
          <>
            <p className="font-semibold text-sm md:text-base" style={{ fontFamily: 'Georgia, serif' }}>
              How to Listen:
            </p>
            <p className="text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <strong>Step 1:</strong> Click on the CD case to open it and reveal the CD.
            </p>
          </>
        ) : isPlaying ? (
          <p className="font-semibold text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Playing... Keep holding to continue listening.
          </p>
        ) : (
          <>
            <p className="font-semibold text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              How to Listen:
            </p>
            <p className="text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <strong>Step 2:</strong> Click and hold the CD to play the voice message. Release to pause.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
