import Image, { ImageProps } from "next/image";
import { FormattedNumber } from "react-intl";
import classes from "clsx";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface InfluencerCardProps {
  className?: string;
  imageProps: ImageProps;
  influencer: {
    fullName: string;
    followers: number;
    socialNetwork: string;
  };
}
export function InfluencerCard({
  className,
  imageProps,
  influencer
}: InfluencerCardProps) {
  return (
    <AnimationOnScroll
      animateIn="customAnimate__fadeInUp"
      animateOnce
      className={classes(
        "bg-base-content rounded-xl overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="flex-1 overflow-hidden">
        <Image
          {...imageProps}
          alt={imageProps?.alt || ""}
          className={classes(
            "w-full h-full rounded-xl object-cover",
            imageProps?.className
          )}
        />
      </div>
      <div className="text-2xl text-base-100 p-3 md:p-6">
        <h3 className="font-extrabold">{influencer?.fullName}</h3>
        <p className="text-primary">
          <FormattedNumber
            value={influencer?.followers ?? 0}
            maximumFractionDigits={1}
            notation="compact"
            compactDisplay="short"
          />{" "}
          {influencer?.socialNetwork}
        </p>
      </div>
    </AnimationOnScroll>
  );
}
