import Image, { ImageProps } from "next/image";
import { FormattedMessage } from "react-intl";
import classes from "clsx";

interface HeroGridCardProps {
  className?: string;
  influencer: {
    fullName: string;
    followers: number;
    socialNetwork: string;
  };
  imageProps: ImageProps;
  contentCardPosition?: "start" | "center" | "end";
}

const roundedClassByContentPosition = {
  start: "rounded-bl-2xl",
  end: "rounded-br-2xl",
  center: "rounded-b-2xl"
};

export function HeroGridCard({
  className,
  influencer,
  imageProps,
  contentCardPosition = "start"
}: HeroGridCardProps) {
  return (
    <div
      className={classes(
        "bg-base-200 rounded-2xl overflow-hidden relative group",
        className
      )}
    >
      <div className="overlay-gradient-container w-full h-full">
        <Image
          {...imageProps}
          alt={imageProps.alt || ""}
          className={classes(
            "w-full h-full object-cover group-hover:scale-110 transition-transform duration-200",
            imageProps.className
          )}
        />
      </div>
      <div
        className={classes(
          "absolute inset-0 z-10 p-5 flex items-end",
          `justify-${contentCardPosition}`
        )}
      >
        <div
          className={classes(
            "bg-base-100 rounded-md pl-4 pr-9 py-3",
            roundedClassByContentPosition[contentCardPosition]
          )}
        >
          <h3 className="text-xl font-semibold">{influencer?.fullName}</h3>
          <p>
            <FormattedMessage
              defaultMessage="{followers, number, ::compact-short .0} Seguidores"
              values={{
                followers: influencer?.followers || 0
              }}
              id="rBn2BN"
            />
          </p>
          <p>{influencer?.socialNetwork}</p>
        </div>
      </div>
    </div>
  );
}
