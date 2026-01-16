export interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
  uploadedAgo: string;
  creatorName: string;
  tags: string[];
  youtubeId: string;
  thumbnailUrl: string;
}

export type ThemeType = 'V1-A' | 'V1-B' | 'V2-A' | 'V2-B' | 'V3';
