# Assignment 6 - Post Dashboard

A React application that loads posts from the JSONPlaceholder API, handles loading,error and empty states with `useReducer`,and lets the user filter posts by title. It was created with Vite.

## File Organization
- `src/api/postsApi.js`:Contains only data fetching (`fetchPosts`). No JSX and no React imports.
- `src/reducer/postsReducer.js`: Initial state and the pure reducer that handles `FETCH_START`, `FETCH_SUCCESS` and `FETCH_ERROR`.
- `src/App.jsx`: Owns the async state with `useReducer`, runs the fetch in `useEffect` on mount, keeps the filter text in state, and derives the filtered posts during render.
- `src/components/Post.jsx`: Presentational component that renders the `title` and `body` of one post.
- `src/components/PostList.jsx`:Renders the list of posts with `.map()` and a stable `key` (`post.id`).
- `src/components/FilterForm.jsx`: Controlled input for filtering posts by title.
- `src/main.jsx`: Entry point that renders `App`.

## Challenges Faced
- **Accidental text in files:** I worked on this project during exam preparation week and had trouble focusing. Twice I accidentally pasted terminal commands (like `git add`) into my source files instead of the terminal. This ended up at the end of `App.jsx` and inside the `<title>` tag in `index.html`. I noticed it through the browser tab title and fixed both in separate commits. I now review `git status` and `git diff` before each commit.
- **Cleanup with AbortController:** Learning to cancel API requests with `AbortController` was tricky. I had to pass the signal correctly and make sure the abort action didn't show up as a real error on the screen.
- **Derived state:** At first, I wasn't sure if I should use a new state for the search results. I realized it's much simpler to just filter the original posts directly during rendering without adding redundant state.
- **Handling all states:** I had to carefully write the conditions to ensure the screen never stays blank, correctly separating the loading, error, and "No posts found." messages.