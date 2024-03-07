import Date from "./date";
import CoverImage from "./cover-image";
import Categories from "./categories";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,

}) {
  return (
    <>
    
    <div className="container mx-auto px-5 mt-10">
    <div className="grid grid-cols-3">
        <div className="col-span-1   p-5 pt-20 border-r-0 bg-white mb-[6px]">
<a href="/" className="block w-[80px] pb-1 mb-7 -mt-5 text-dusk font-medium border-b-2 border-dusk  ">
← Go back
</a>
<span className=" pb-5 inline-block text-dusk">
        Posted <Date dateString={date} />
        </span>
       

         <h1 className="text-4xl text-dusk pb-10 "> {title} </h1>
      
        </div>
     
        <div className="col-span-2 tar " ><CoverImage title={title} coverImage={coverImage} /></div> 
        </div>
  
    </div>
    </>
  );
}

