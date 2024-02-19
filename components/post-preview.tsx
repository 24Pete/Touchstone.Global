import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";


export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className=" bg-white">
      <div className="mb-5 bg-white">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />


        )}
      </div>
      <h3 className="text-xl  leading-snug p-3 pb-0 text-dusk font-medium"  dangerouslySetInnerHTML={{ __html: title }}>
    
      </h3>
    
    
      <div
        className="text-md leading-snug  p-3 pt-0 font-light text-dusk"
        dangerouslySetInnerHTML={{ __html: featuredImage }}
      />

 

         <Link
          href={`/insights/${slug}`}
          className="hover:underline pl-3 mb-4 block font-medium text-dusk"
          
        >Read more...</Link>
     
    </div>
  );
}
