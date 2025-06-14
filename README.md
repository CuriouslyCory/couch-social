# Couch Social

## Requirements

A simple webapp that has basic social capabilities

- A user centric view where they can see their profile
- Screen for listing mock posts from friends and a detail view of the posts
- Placeholders for what good data structures for users and posts and friends
- Mock API calls and data as needed

## Process

- Bootstrapped the app with create-t3-app - Save time to spend on the actual app features

  - couch-social - name of the app
  - Typescript
  - Tailwind CSS - Good default styles
  - tRPC - Typesafe API calls
  - ESLint & Prettier - Guardrails for best practices and standardized formatting
  - Pnpm - Good caching mechanisms than vanilla npm, shared library space locally to save drive space
  - App router - React server components, integrated data fetching, streaming and suspense, etc.

- Created layout including responsive elements (ran out of time time to build the mobile navbar)
- Applied basic page styling
- Added shadcn/ui components for quick accessable ui components with good default styles
- Added API routers for posts and profiles
- Added a post detail page linked from the comment button
- Added a user profile page with the user's bio and posts
- Added a basic user feed page with the user's friend's posts along with their own
- Added mock data for posts and profiles
- Reviewed and documented the data structures
  - I notated a few of my thoughts in the /src/types/[posts,profiles].ts files about the data, but I'm certain I would have a lot of refinements given a) meeting with the product owner to understand the user needs b) time to do a deep dive on read vs write data and other limitations which would heavily influenced based on product discussion
- Cleaned up mock data (/src/data/\*.ts) to be more realistic
- Added mock images for the users

## Out of time/scope, but wish I had here (main items)

- Proper error handling
- E2e tests
- Ci/cd pipelines to automate testing
- Inline docs, usually tsdocs for each function at minimum

## Features

- React server component based architecture for first class support of new features like the react compiler
- Navbar (Home and Profile are the working links)
- Home page feed features recent posts from friends and self
- Post detail page features post content, comments, and likes (accessed by clicking on the post comment count)
- User profile page features user profile information, posts, and followers (accessed by clicking any avatar or "profile" link in the navbar)
- Like button is highlighted when the user has liked the post

## Challenges

- What is a user centric view?
  - Assumed something similar to the profile view of an app like x or bsky
- Loading state deforms on load, need time to adjust CSS
- So many things I want to add but must resist and limit scope!
- Ran into an issue with the eslint config when I was running the final build test, but was able to fix it by switching to mjs and using the flatConfig from the next plugin
