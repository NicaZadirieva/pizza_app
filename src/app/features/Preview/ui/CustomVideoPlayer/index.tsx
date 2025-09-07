'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface CustomVideoPlayerProps {
	src: string;
	width?: number | string;
}

export default function CustomVideoPlayer({
	src,
	width = '100%'
}: CustomVideoPlayerProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);         // 0–100%
	const [currentTime, setCurrentTime] = useState(0);   // seconds
	const [duration, setDuration] = useState(0);         // seconds
	const [volume, setVolume] = useState(1);             // 0–1
	const [isMuted, setIsMuted] = useState(false);

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;
		video.paused ? video.play() : video.pause();
	};

	const handleTimeUpdate = () => {
		const video = videoRef.current;
		if (!video) return;
		setCurrentTime(video.currentTime);
		setProgress((video.currentTime / video.duration) * 100);
	};

	const handleLoadedMetadata = () => {
		const video = videoRef.current;
		if (!video) return;
		setDuration(video.duration);
	};

	const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
		const video = videoRef.current;
		if (!video) return;
		const seekTo = (Number(e.target.value) / 100) * video.duration;
		video.currentTime = seekTo;
	};

	const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const video = videoRef.current;
		if (!video) return;
		const newVol = Number(e.target.value);
		video.volume = newVol;
		setVolume(newVol);
		setIsMuted(video.muted);
	};

	const toggleMute = () => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = !video.muted;
		setIsMuted(video.muted);
	};

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const onPlay = () => setIsPlaying(true);
		const onPause = () => setIsPlaying(false);
		video.addEventListener('play', onPlay);
		video.addEventListener('pause', onPause);
		return () => {
			video.removeEventListener('play', onPlay);
			video.removeEventListener('pause', onPause);
		};
	}, []);

	const formatTime = (sec: number) => {
		const m = Math.floor(sec / 60)
			.toString()
			.padStart(2, '0');
		const s = Math.floor(sec % 60)
			.toString()
			.padStart(2, '0');
		return `${m}:${s}`;
	};

	return (
		<div style={{ width }}>
			<video
				ref={videoRef}
				src={src}
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={handleLoadedMetadata}
				style={{ width: '100%', display: 'block' }}
			/>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '8px',
					background: '#222',
					color: '#fff'
				}}
			>
				<button onClick={togglePlay} style={{ marginRight: 8 }}>
					{isPlaying ? '⏸' : '▶️'}
				</button>
				<span style={{ fontVariantNumeric: 'tabular-nums' }}>
					{formatTime(currentTime)} / {formatTime(duration)}
				</span>
				<input
					type="range"
					min="0"
					max="100"
					value={progress}
					onChange={handleSeek}
					style={{ flex: 1, margin: '0 8px' }}
				/>
				<button onClick={toggleMute} style={{ marginRight: 8 }}>
					{isMuted ? '🔇' : '🔊'}
				</button>
				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={volume}
					onChange={handleVolumeChange}
				/>
			</div>
		</div>
	);
}
