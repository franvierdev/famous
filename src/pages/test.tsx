// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from "motion/react";
import { useIsClient } from "usehooks-ts";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex justify-center items-center relative snap-center [perspective:_500px]">
      <div
        ref={ref}
        className="w-[300px] h-[400px] relative max-h-[90vh] overflow-hidden m-5"
      >
        <img
          className="absolute w-full h-full inset-0"
          src={`https://examples.motion.dev/photos/cityscape/${id}.jpg`}
          alt="A London skyscraper"
        />
      </div>
      <motion.h2
        style={{ y }}
        className="text-[color:var(--accent)] text-[56px] font-bold tracking-[-3px] leading-[1.2] absolute m-0 left-[calc(50%_+_130px)]"
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

function App() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} key={image} />
      ))}
    </>
  );
}

export default function _App() {
  const isClient = useIsClient();

  return isClient && <App />;
}
