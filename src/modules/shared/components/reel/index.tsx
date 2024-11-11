import { ReactNode, useRef } from "react";
import classes from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import useScrollAvailability from "../../hooks/use-scroll-availability";

export type ReelProps = {
  className?: string;
  itemSize: number;
  itemCount: number;
  scrollByOffset?: number;
  children: ReactNode;
  buttonsClassName?: string;
};

function Reel({
  className,
  buttonsClassName,
  itemSize,
  itemCount,
  children,
  scrollByOffset = 0
}: ReelProps) {
  const listRef = useRef<HTMLDivElement>(null!);
  const [setScrollAvailability, canScrollLeft, canScrollRight] =
    useScrollAvailability(listRef, "horizontal");

  function scrollTo(direction: "right" | "left") {
    const listElement = listRef.current;
    const scrollAmount =
      (itemSize + scrollByOffset) * Math.floor(itemCount / 3);
    const maxScrollAmount = listElement.offsetWidth + scrollByOffset;
    const finalScrollByAmount =
      scrollAmount < maxScrollAmount ? scrollAmount : maxScrollAmount;

    listElement.scrollBy({
      left:
        direction === "right" ? finalScrollByAmount : finalScrollByAmount * -1,
      behavior: "smooth"
    });
  }

  return (
    <div className="relative">
      <div
        className={classes("overflow-x-auto flex [&_>_*]:shrink-0", className)}
        ref={listRef}
        onScroll={setScrollAvailability}
      >
        {children}
      </div>
      {canScrollLeft && (
        <button
          type="button"
          className={classes(
            "btn btn-circle absolute top-1/2 !-translate-y-1/2 left-0 md:!-translate-x-1/2 no-animation transition-none",
            buttonsClassName
          )}
          onClick={() => scrollTo("left")}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          className={classes(
            "btn btn-circle absolute top-1/2 !-translate-y-1/2 right-0 md:!translate-x-1/2 no-animation transition-none",
            buttonsClassName
          )}
          onClick={() => scrollTo("right")}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
}

export { Reel };
