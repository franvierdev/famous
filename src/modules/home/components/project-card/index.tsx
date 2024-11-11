import Image, { ImageProps } from "next/image";
import classes from "clsx";
import { ReactNode } from "react";
import { useWindowSize } from "usehooks-ts";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface ProjectCardProps {
  className?: string;
  imageProps: ImageProps;
  children?: ReactNode;
}

export function ProjectCard({
  className,
  imageProps,
  children
}: ProjectCardProps) {
  const { height: windowHeight = 0 } = useWindowSize();

  const cardContent = (
    <div className="relative overflow-hidden group-hover:rounded-lg max-md:group-[.is-hover]:rounded-lg transition-all duration-200">
      <Image
        {...imageProps}
        alt={imageProps?.alt || ""}
        className={classes(
          "w-full object-cover group-hover:scale-110 max-md:group-[.is-hover]:scale-110 transition-transform duration-200",
          imageProps?.className
        )}
      />
      <div className="absolute overlay-gradient inset-0 group-hover:opacity-100 max-md:group-[.is-hover]:opacity-100 opacity-0 transition-opacity duration-200 p-8 flex flex-col">
        {children}
      </div>
    </div>
  );

  return (
    <>
      {/* For mobile animation */}
      <AnimationOnScroll
        className={classes("group md:hidden", className)}
        animateIn="is-hover"
        initiallyVisible
        offset={windowHeight / 2}
        animateOnce
      >
        {cardContent}
      </AnimationOnScroll>
      {/* For desktop animation */}
      <AnimationOnScroll
        className={classes("group max-md:hidden", className)}
        animateIn="customAnimate__fadeInUp"
        animateOnce
      >
        {cardContent}
      </AnimationOnScroll>
    </>
  );
}
