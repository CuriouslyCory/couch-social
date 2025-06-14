import { z } from "zod";
import { profiles } from "~/data/profiles";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Create a router to return profile data
export const profileRouter = createTRPCRouter({
  getProfile: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      return profiles.find((profile) => profile.id === input.id);
    }),
});
