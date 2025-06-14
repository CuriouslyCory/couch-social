import type { Post } from "~/types/posts";

// Mocked DB data
export const simulatedPosts: Post[] = [
  // Posts by User 1
  {
    id: 1,
    content:
      "Just started coding on a really interesting side project. Stay tuned for updates!",
    createdAt: new Date("2025-06-13T10:00:00Z"), // More recent
    authorId: 1,
    likeCount: 2,
    likeIds: [2, 3],
    commentCount: 4,
    commentIds: [],
  },
  {
    id: 2,
    content: "Beautiful sunrise during my run today. Feeling energized!",
    createdAt: new Date("2025-06-12T07:30:00Z"),
    authorId: 1,
    likeCount: 1,
    likeIds: [3],
    commentCount: 7,
    commentIds: [],
  },
  {
    id: 3,
    content:
      "Thinking about a short trip next month. Any recommendations for peaceful getaways?",
    createdAt: new Date("2025-06-11T16:45:00Z"),
    authorId: 1,
    likeCount: 5,
    likeIds: [2, 3],
    commentCount: 3,
    commentIds: [],
  },
  {
    id: 4,
    content:
      "Tried a new pasta recipe last night. Delicious results! Highly recommend adding fresh basil.",
    createdAt: new Date("2025-06-10T19:00:00Z"),
    authorId: 1,
    likeCount: 1,
    likeIds: [3],
    commentCount: 2,
    commentIds: [],
  },

  // Posts by User 2
  {
    id: 5,
    content:
      "Diving deep into the Next.js App Router. It's powerful, but definitely a learning curve!",
    createdAt: new Date("2025-06-13T11:15:00Z"),
    authorId: 2,
    likeCount: 8,
    likeIds: [1, 3],
    commentCount: 1,
    commentIds: [],
  },
  {
    id: 6,
    content:
      "Perfect start to the day: strong coffee and clean code. What are you working on?",
    createdAt: new Date("2025-06-12T08:45:00Z"),
    authorId: 2,
    likeCount: 7,
    likeIds: [1, 3],
    commentCount: 8,
    commentIds: [],
  },
  {
    id: 7,
    content:
      "'Clean Code' by Robert C. Martin is a timeless classic for any developer. Still learning from it!",
    createdAt: new Date("2025-06-11T13:00:00Z"),
    authorId: 2,
    likeCount: 3,
    likeIds: [1, 3],
    commentCount: 99,
    commentIds: [],
  },
  {
    id: 8,
    content:
      "Server Components are truly changing the game. Excited to see what comes next!",
    createdAt: new Date("2025-06-10T21:00:00Z"),
    authorId: 2,
    likeCount: 2,
    likeIds: [1, 3],
    commentCount: 12,
    commentIds: [],
  },

  // Posts by User 3
  {
    id: 9,
    content:
      "Just booked my flights for a trip to Patagonia! So excited for the hiking trails.",
    createdAt: new Date("2025-06-13T09:00:00Z"),
    authorId: 3,
    likeCount: 1,
    likeIds: [1],
    commentCount: 11,
    commentIds: [],
  },
  {
    id: 10,
    content:
      "Trying to capture more candid moments this week. Any tips for street photography?",
    createdAt: new Date("2025-06-12T15:00:00Z"),
    authorId: 3,
    likeCount: 0,
    likeIds: [],
    commentCount: 10,
    commentIds: [],
  },
  {
    id: 11,
    content:
      "Spent the afternoon at the local animal shelter. So rewarding to give back!",
    createdAt: new Date("2025-06-11T09:30:00Z"),
    authorId: 3,
    likeCount: 10,
    likeIds: [1, 2],
    commentCount: 5,
    commentIds: [],
  },
  {
    id: 12,
    content:
      "Watched a fascinating documentary about marine life. Highly recommend 'My Octopus Teacher'.",
    createdAt: new Date("2025-06-10T18:00:00Z"),
    authorId: 3,
    likeCount: 9,
    likeIds: [1, 2],
    commentCount: 1,
    commentIds: [],
  },
];
