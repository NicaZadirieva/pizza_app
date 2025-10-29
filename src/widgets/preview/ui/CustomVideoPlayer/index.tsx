'use client';
import { useRef, useState } from 'react';
import styles from './index.module.css';
import { PlayerItem } from './ui/PlayerItem';

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

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;
		video.paused ? video.play() : video.pause();
	};


	return (
		<div style={{ width }} className={styles['video-box']} onClick={togglePlay}>
			<video
				className={styles.video}
				ref={videoRef}
				src={src}
				style={{ width: '100%', display: 'block' }}
				onPlay={() => {setIsPlaying(true);}}
				onPause={() => {setIsPlaying(false);}}
			/>
			
				
			{isPlaying ? '' : <PlayerItem />}
				
			
		</div>
	);
}
