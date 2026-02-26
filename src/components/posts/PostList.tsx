// TODO : replace 'unknown' type with a 'Post' type.

export function PostList({ data }: { data: Array<unknown> }) {
  if (data.length === 0) {
    return;
  }

  return (
    <div>
      <h2>Posts</h2>
      {data?.length > 0 ? (
        <ul>
          {data.map((post) => (
            <article key={post.id}>{post.title}</article>
          ))}
        </ul>
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}
