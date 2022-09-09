import { FC, useState } from "react";
import Image from "next/image";

type NextImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

const NextImage: FC<NextImageProps> = ({
  src,
  alt,
  className,
  imgClassName,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        placeholder="blur"
        blurDataURL={src}
        priority
        className={`h-full w-full object-cover duration-700 ease-in-out ${
          isLoading ? "blur-xl grayscale" : "blur-0 grayscale-0"
        } ${imgClassName}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </figure>
  );
};

export default NextImage;
