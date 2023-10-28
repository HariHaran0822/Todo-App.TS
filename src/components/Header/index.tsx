import { PropsWithChildren } from "react";

export const Header = ({
  image: { src, alt },
  children,
}: PropsWithChildren<{ image: { src: string; alt: string } }>) => {
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
};
