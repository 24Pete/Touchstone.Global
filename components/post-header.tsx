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
        <div className="col-span-1   p-5 pt-20 border-r-0 bg-white">

<span className=" pb-5 inline-block text-dusk">
        Posted <Date dateString={date} />
        </span>
        <span className="pb-5 inline-block text-dusk">
          <Categories categories={categories} />
          </span>

         <h1 className="text-4xl text-dusk pb-10 "> {title} </h1>
      
        </div>
     
        <div className="col-span-2 tar " >
        <CoverImage title={title} coverImage={coverImage} />
         </div> 
        </div>
  
    </div>
    </>
  );
}

