import { useEffect, useRef, useState } from 'react';
import { Music2, Volume2, VolumeX } from 'lucide-react';

const AUDIO_SRC = '/audio/interstellar-theme.mp3';

const MusicControl = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = 'none';
    audio.volume = 0;
    audioRef.current = audio;

    const handleError = () => {
      setIsAvailable(false);
      setIsPlaying(false);
    };

    audio.addEventListener('error', handleError);
    return () => {
      if (fadeRef.current !== null) window.clearInterval(fadeRef.current);
      audio.pause();
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, []);

  const fadeTo = (targetVolume: number, onComplete?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current !== null) window.clearInterval(fadeRef.current);

    fadeRef.current = window.setInterval(() => {
      const difference = targetVolume - audio.volume;
      if (Math.abs(difference) < 0.04) {
        audio.volume = targetVolume;
        if (fadeRef.current !== null) window.clearInterval(fadeRef.current);
        fadeRef.current = null;
        onComplete?.();
        return;
      }
      audio.volume = Math.max(0, Math.min(0.35, audio.volume + Math.sign(difference) * 0.04));
    }, 45);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || !isAvailable) return;

    if (isPlaying) {
      setIsPlaying(false);
      fadeTo(0, () => audio.pause());
      sessionStorage.setItem('portfolio-music', 'off');
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      fadeTo(0.35);
      sessionStorage.setItem('portfolio-music', 'on');
    } catch {
      setIsAvailable(false);
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      disabled={!isAvailable}
      aria-label={!isAvailable ? 'Ambient music unavailable' : isPlaying ? 'Turn ambient music off' : 'Turn ambient music on'}
      title={!isAvailable ? 'Add the licensed ambient track to enable music' : isPlaying ? 'Turn music off' : 'Turn music on'}
      className={`music-control ${isPlaying ? 'music-control-active' : ''} ${!isAvailable ? 'music-control-unavailable' : ''}`}
    >
      {isPlaying ? <Volume2 aria-hidden="true" /> : isAvailable ? <Music2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
      <span className="sr-only">{isPlaying ? 'Music on' : 'Music off'}</span>
    </button>
  );
};

export default MusicControl;