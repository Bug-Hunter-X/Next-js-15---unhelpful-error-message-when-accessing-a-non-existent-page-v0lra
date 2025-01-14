```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}

// pages/nonexistent.js
export default function NonExistent() {
  return (
    <div>
        <h1>This page does not exist.</h1>
    </div>
  );
}
//pages/api/nonexistent.js
export default function handler(req, res) {
  res.status(404).json({ message: 'Page not found' });
}
```