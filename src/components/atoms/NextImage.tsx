import Image from "next/image";

type NextImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

const NextImage = ({ src, alt, className, imgClassName }: NextImageProps) => {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        placeholder="blur"
        blurDataURL={src}
        objectFit="cover"
        priority
        className={`h-full w-full ${imgClassName}`}
      />
    </figure>
  );
};

export default NextImage;
