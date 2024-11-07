import { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoBanner = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <ReactPlayer
                width='100%'
                height='700px'
                playing={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause}
                muted={true}
                loop={true}
                url="https://www.youtube.com/watch?v=CwXd_uCC9zE" 
            />
            {!isPlaying && (
                <div
                    onClick={handlePlay}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#0000004D',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                 
                </div>
            )}
        </div>
    );
};

export default VideoBanner;
