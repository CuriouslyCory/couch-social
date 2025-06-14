// Mocked DB
export type ProfileData = {
  id: number;
  name: string; // Display name
  profilePicture: string; // URL to the profile picture
  bannerPicture: string; // URL to the banner picture
  bio: string; // Bio, short description of the user
  followers: number[]; // UserIDs. In practice this would only be returned when needed as it could be a lot of data
  followerCount: number; // Count of followers, updated whenever followers are added or removed as the write events happen much less often than read
  following: number[]; // UserIDs. In practice this would only be returned when needed as it could be a lot of data
  followingCount: number; // Count of following, updated whenever following are added or removed as the write events happen much less often than read
  postCount: number; // Count of posts, updated whenever posts are added or removed as the write events happen much less often than read
  createdAt: Date;
};
