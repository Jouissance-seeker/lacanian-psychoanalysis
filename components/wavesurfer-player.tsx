import { useWavesurfer } from "@wavesurfer/react";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface WavesurferProps {
  voice: File | string | undefined;
  onDelete?: () => void;
}

export const WaveSurferPlayer = (props: WavesurferProps) => {
  console.log("props.voice : ", props.voice);

  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { wavesurfer } = useWavesurfer({
    container: containerRef,
    waveColor: "#cfcfcf",
    progressColor: "#000",
    url: props.voice as string,
    height: 30,
    barGap: 3,
    barWidth: 4,
    normalize: true,
    barRadius: 3,
    cursorColor: "transparent",
  });
  useEffect(() => {
    if (!wavesurfer) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    wavesurfer.on("play", onPlay);
    wavesurfer.on("pause", onPause);
    return () => {
      wavesurfer.un("play", onPlay);
      wavesurfer.un("pause", onPause);
      wavesurfer.destroy();
    };
  }, [wavesurfer]);
  const togglePlay = () => {
    if (!wavesurfer) return;
    if (isPlaying) {
      wavesurfer.pause();
    } else {
      wavesurfer.play();
    }
  };

  return (
    <div className="relative z-20 flex gap-2 border p-3 rounded-2xl w-full">
      <div ref={containerRef} className="w-full" />
      <button type="button" onClick={togglePlay}>
        {isPlaying ? (
          <Pause className="stroke-primary size-6" />
        ) : (
          <Play className="stroke-primary size-6" />
        )}
      </button>
    </div>
  );
};
