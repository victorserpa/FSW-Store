import Image, { ImageProps } from "next/image";

export default function PromoBanner({src, alt}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vw"
    />
  );
}