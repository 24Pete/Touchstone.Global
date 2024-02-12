import { useQuery, gql} from "@apollo/client";
import Link from "next/link";


const GET_POSTS = gql`
  query getPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          databaseId
          title
          slug
        }
      }
    }
  }
`;

const BATCH_SIZE = 4;

export default function LoadMorePost() {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <p>Sorry, an error happened. Reload Please</p>;
  }

  if (!data && loading) {
    return <p>Loadding...</p>;
  }

  if (!data?.posts.edges.length) {
    return <p>no posts have been published</p>;
  }

  const posts = data.posts.edges.map((edge) => edge.node);
  const haveMorePosts = Boolean(data?.posts?.pageInfo?.hasNextPage);

  return (
    
    <>

      <div className="grid grid-cols-4 gap-4" style={{ padding: "0" }}>
        {posts.map((post) => {
          const { databaseId, title, slug } = post;
          return (
            <div
              key={databaseId}
              className="col-span-1 p-5 bg-azure"
            
            >
              <Link  href={`/posts/${slug}`}>{title}</Link>
            </div>
          );
        })}
      </div>
      {haveMorePosts ? (
        <form
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            fetchMore({ variables: { after: data.posts.pageInfo.endCursor } });
          }}
        >
          <button type="submit" className="bg-white p-10">
            {loading ? "Loading..." : "Load more"}
          </button>
        </form>
      ) : (
        <p>✅ All posts loaded.</p>
      )}

    </>
  );
}
