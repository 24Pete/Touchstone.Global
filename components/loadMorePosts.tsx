import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import CoverImage from "./cover-image";
import Image from 'next/image'
 

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
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const BATCH_SIZE = 4;

export default function LoadMorePost(
  coverImage,
) {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <p>Sorry, an error happened. Reload Please</p>;
  }

  if (!data && loading) {
    return <p>Loading...</p>;
  }

  if (!data?.posts.edges.length) {
    return <p>no posts have been published</p>;
  }

  const posts = data.posts.edges.map((edge) => edge.node);
  const haveMorePosts = Boolean(data?.posts?.pageInfo?.hasNextPage);


  return (
    <>
      <div style={{ padding: "0" }} className="grid grid-cols-4 gap-4">
        {posts.map((post) => {
          const { databaseId, title, slug, excerpt, featuredImage } = post;
          return (
            <div
              key={databaseId}
              className="col-span-1 bg-white "
          >  
       
   
      

          
<div style={{ backgroundImage: `url(${post.featuredImage?.node.sourceUrl})`}} className="featured-image">

  </div>
           

          <span className="p-5">
             <h3 className="text-xl  leading-snug p-3 pb-0 text-dusk font-medium"  dangerouslySetInnerHTML={{ __html: title }}>
    
    </h3>
              <div
        className="text-md leading-snug  p-3 pt-0 font-light text-dusk"
        dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 100) }}
      />
  <Link
          href={`/insights/${slug}`}
          className="hover:underline pl-3 mb-4 block font-medium text-dusk"
          
        >Read more...</Link>
        </span>

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
          <button type="submit" className="bg-azure pt-3 pb-3 pl-6 pr-6 font-bold text-dusk text-lg uppercase mt-6 " >
            {loading ? "Loading..." : "View More Insights"}
          </button>
        </form>
      ) : (
        <p className="bg-azure pt-3 pb-3 pl-6 pr-6 font-bold text-dusk text-lg uppercase mt-6 inline-block bg-opacity-50	 ">All Insights loaded</p>
      )}
    </>
  );
}