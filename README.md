# Couch Social

## Requirements

A simple webapp that has basic social capabilities

- A user centric view where they can see their profile
- Screen for listing mock posts from friends and a detail view of the posts
- Placeholders for what good data structures for users and posts and friends
- Mock API calls and data as needed

## Process

- Bootstrapped the app with create-t3-app
  - couch-social
  - Typescript
  - Tailwind CSS
  - tRPC - Typesafe API calls
  - ESLint & Prettier - Guardrails for best practices and standardized formatting
  - pnpm - Good caching mechanisms than vanilla npm, shared library space locally to save drive space
  - app router - React server components, integrated data fetching, streaming and suspense, etc.
- applied basic page styling
- added shadcn/ui components for quick accessable components with good default styles
- created layout including responsive elements (ran out of time time to build the mobile navbar)
- added API calls for posts and profiles
- added a basic post detail page
- added a basic user profile page
- added a basic user feed page
- added mock data for posts and profiles
- review and document the data structures
- cleaned up mock data to be more realistic

## Features

- Navbar (Home and Profile are the working links)
- Home page feed features recent posts from friends and self
- Post detail page features post content, comments, and likes (accessed by clicking on the post comment count)
- User profile page features user profile information, posts, and followers (accessed by clicking any avatar or "profile" link in the navbar)
- Like button is highlighted when the user has liked the post

## Challenges

- What is a user centric view?
  - Assumed something similar to the profile view of an app like x or bsky
- Loading state deforms on load, not enough time to add proper fix
- So much more I want to do, but not enough time~!
