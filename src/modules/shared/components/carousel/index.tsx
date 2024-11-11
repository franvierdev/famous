import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { Children, ReactNode, useMemo } from "react";
import classes from "clsx";

interface CarouselProps {
  className?: string;
  children?: ReactNode;
  arrowButtons?: boolean;
  indicatorButtons?: boolean;
  containerClassName?: string;
}

export function Carousel({
  className,
  containerClassName,
  children,
  arrowButtons = false,
  indicatorButtons = false
}: CarouselProps) {
  const uniqueId = useMemo(() => Date.now(), []);
  const lastSlideIndex = Children.count(children) - 1;

  if (lastSlideIndex < 0) return null;

  return (
    <div className={containerClassName}>
      <div className={classes("carousel", className)}>
        {Children.map(children, (child, index) => (
          <div
            id={`slide-${uniqueId}-${index}`}
            className="carousel-item relative w-full"
          >
            {child}
            {arrowButtons && (
              <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-70">
                <a
                  href={`#slide-${uniqueId}-${
                    index <= 0 ? lastSlideIndex : index - 1
                  }`}
                  className="btn btn-circle"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </a>
                <a
                  href={`#slide-${uniqueId}-${
                    index >= lastSlideIndex ? 0 : index + 1
                  }`}
                  className="btn btn-circle"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      {indicatorButtons && (
        <div className="flex justify-center w-full mt-4 gap-2">
          {Children.map(children, (_, index) => (
            <a
              href={`#slide-${uniqueId}-${index}`}
              className="btn btn-xs bg-base-200 hover:bg-base-200 hover:bg-opacity-50"
            >
              {index + 1}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
