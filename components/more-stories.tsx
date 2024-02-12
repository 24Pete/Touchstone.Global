import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-[38px] font-medium tracking-tighter leading-tight text-azure">
      Insights
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-4 md:gap-x-4 lg:gap-x-4 gap-y-10 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
        <button className="bg-azure pt-3 pb-3 pl-6 pr-6 font-bold text-dusk text-lg uppercase text-center"> Load More Insights</button>
      </div>
    </section>
  );
}
