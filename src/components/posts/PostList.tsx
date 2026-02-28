// TODO : replace 'unknown' type with a 'Post' type.

export function PostList({ data }: { data: Array<unknown> }) {
  if (data.length === 0) {
    return;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <article key={post.id}>{post.title}</article>
        ))}
      </ul>
    </div>
  );
}
