# Next.js 15 - Unhelpful Error Message on Non-Existent Page

This repository demonstrates a bug in Next.js 15 where accessing a non-existent page results in an unhelpful error message. The error does not clearly indicate the missing page, making debugging difficult.

## Bug

The `pages/index.js` file contains a simple Next.js app.  However, if you try to navigate to a route that doesn't have a corresponding page file (e.g., `/nonexistent`), the error message is not specific enough to pinpoint the problem.

## Solution

The provided solution demonstrates improved error handling using `next/navigation`'s `notFound` functionality. This provides a better user experience by gracefully handling non-existent routes.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to a non-existent route (e.g., `/nonexistent`) in your browser.  Observe the generic and unhelpful error message.
5. Then, examine the improved `bugSolution.js` example to see how to handle this more effectively.