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

export type ThemeType = 'V1-P' | 'V2-X' | 'V3';
