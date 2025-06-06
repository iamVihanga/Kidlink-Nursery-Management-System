export type MediaType = "image" | "video" | "document";

export interface MediaFile {
  id: string;
  url: string;
  type: MediaType;
  filename: string;
  size: number;
  createdAt: Date;
}

export interface UploadParams {
  file: File;
  type?: MediaType;
  path?: string;
}

export enum MediaUploadPaths {
  ORGANIZATIONS = "organizations",
  PROFILE_IMAGES = "profile_images",
  BADGES = "badges",
  PAYMENTS = "payments",
  FEEDBACKS = "feedbacks",
  LESSONS = "lessons"
}
