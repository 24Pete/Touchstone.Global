import cn from "classnames";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={2000}
      height={1030}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
     
    />
  );
  return (
    <span >
      {slug ? (
        <Link href={`/insights/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </span>
  );
}
