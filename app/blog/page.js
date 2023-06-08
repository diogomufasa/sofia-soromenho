async function getBlogPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return res.json();
}

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>
        This is an example of a blog page in a Next.js app. You can edit it at{' '}
        <code>app/blog/page.js</code>.
      </p>
    </div>
  );
}
