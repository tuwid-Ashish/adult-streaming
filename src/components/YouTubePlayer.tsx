'use client';

import React from 'react';

interface YouTubePlayerProps {
    youtubeId: string;
    className?: string;
}

export function YouTubePlayer({ youtubeId, className }: YouTubePlayerProps) {
    return (
        <div className={`aspect-video w-full overflow-hidden rounded-xl bg-black ${className}`}>
            <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
            />
        </div>
    );
}
