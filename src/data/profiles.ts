import type { ProfileData } from "~/types/profiles";

// Mock user and a few friends
export const profiles: ProfileData[] = [
  {
    id: 1,
    name: "CuriousUser",
    profilePicture: "/user-images/user1.jpg",
    bannerPicture: "/banners/user1.jpg",
    bio: "I'm a curious user who loves to explore new things.",
    followers: [2, 3],
    followerCount: 2,
    following: [2, 3],
    followingCount: 2,
    postCount: 4,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "CuriousFriend1",
    profilePicture: "/user-images/user2.png",
    bannerPicture: "/banners/user2.png",
    bio: "I'm a friendly user who loves to explore new things.",
    followers: [1, 3],
    followerCount: 2,
    following: [1, 3],
    followingCount: 2,
    postCount: 4,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "CuriousFriend2",
    profilePicture: "/user-images/user3.png",
    bannerPicture: "/banners/user3.png",
    bio: "I'm another friendly user who loves to explore new things.",
    followers: [1, 2],
    followerCount: 2,
    following: [1, 2],
    followingCount: 2,
    postCount: 4,
    createdAt: new Date(),
  },
];
