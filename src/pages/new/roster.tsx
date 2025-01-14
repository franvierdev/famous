import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useIsClient } from "usehooks-ts";

const roster = [
  {
    fullName: "Mari Gutierrez",
    title: "Holistic health coach-personal trainer",
    bio: `Mari Gutiérrez es una health coach apasionada por un estilo de vida positivo y saludable.  Comparte rutinas de ejercicio accesibles y recetas saludables, siempre enfocada en mejorar la calidad de vida de su comunidad. Mari busca generar un impacto positivo promoviendo cambios simples en los hábitos diarios. 
    `,
    tags: ["Coach-personal trainer", "Holistic health"],
    videoUrl: "https://examples.motion.dev/photos/cityscape/1.jpg",
    imageUrl: "https://examples.motion.dev/photos/cityscape/1.jpg",
    keyword: "Healt",
  },
  {
    fullName: "Mari Gutierrez",
    title: "Holistic health coach-personal trainer",
    bio: `Mari Gutiérrez es una health coach apasionada por un estilo de vida positivo y saludable.  Comparte rutinas de ejercicio accesibles y recetas saludables, siempre enfocada en mejorar la calidad de vida de su comunidad. Mari busca generar un impacto positivo promoviendo cambios simples en los hábitos diarios. 
    `,
    tags: ["Coach-personal trainer", "Holistic health"],
    videoUrl: "https://examples.motion.dev/photos/cityscape/2.jpg",
    imageUrl: "https://examples.motion.dev/photos/cityscape/2.jpg",
    keyword: "Health",
  },
];

type Roster = (typeof roster)[number];

export default function Roster() {
  const isClient = useIsClient();
  const [snappedItem, setSnappedItem] = useState(roster[0]);

  useEffect(() => {
    document.documentElement.classList.add("snap-y");
    document.documentElement.classList.add("snap-mandatory");

    return () => {
      document.documentElement.classList.remove("snap-y");
      document.documentElement.classList.remove("snap-mandatory");
    };
  }, []);

  if (!isClient) return;

  return (
    <>
      {roster.map((roster) => (
        <RosterCard
          key={roster.fullName}
          roster={roster}
          onSnapChange={(isSnapped) => isSnapped && setSnappedItem(roster)}
        />
      ))}
      <div className="flex place-items-center fixed inset-y-0 right-0 text-black font-bold pr-8">
        <span
          className="px-8 text-[5.125rem] rounded-full border border-current bg-[#9C76E3] italic mt-16 -mr-32 relative z-30"
          key={snappedItem.keyword}
        >
          {snappedItem.keyword}
        </span>
        <Image
          src={require("public/assets/images/new/roster/mari-gutierrez-image.png")}
          alt={snappedItem.fullName}
          className="w-[437.42px] -mr-44 relative z-20"
        />
        <div className="relative">
          <Image
            src={require("public/assets/images/phone-mockup.png")}
            className="w-[24.5644rem] z-10 relative"
            alt="Mockup Teléfono"
          />
          <AnimatePresence>
            <motion.div
              className="absolute left-6 top-4 right-[1.375rem] bottom-[1.125rem] rounded-[2rem] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={snappedItem.imageUrl}
            >
              <img
                src={snappedItem.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* <div className="w-[768px] h-[898px]">
          <AnimatePresence>
            <motion.div
              key={snappedItem.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <img
                src={snappedItem.imageUrl}
                alt=""
                width={1536 / 2}
                height={1796 / 2}
                className="absolute inset-0"
              />
            </motion.div>
          </AnimatePresence>
        </div> */}
      </div>
    </>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function RosterCard({
  roster,
  onSnapChange,
}: {
  roster: Roster;
  onSnapChange: (isSnapped: boolean) => void;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const isSnapped = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [false, true, true, true, false]
  );

  useMotionValueEvent(isSnapped, "change", onSnapChange);

  return (
    <div className="bg-[#AC4A86] text-black font-bold h-screen snap-center [perspective:_500px] flex flex-col justify-center">
      <div className="flex items-center max-w-[1734px] px-8" ref={ref}>
        <motion.div
          className="flex flex-col gap-4 leading-tight"
          style={{ y, opacity }}
        >
          <h1 className="text-[5rem] italic font-extrabold uppercase">
            {roster.fullName}
          </h1>
          <h2 className="text-[2.75rem] italic ">{roster.title}</h2>
          <p className="text-2xl max-w-[43.125rem]">{roster.bio}</p>
          <div className="flex gap-4">
            {roster.tags.map((tag) => (
              <span
                key={tag}
                className="p-4 text-2xl rounded-full border border-current"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="max-w-max flex text-center mt-4">
            <Link href={"/"}>
              <Image
                src={"/assets/images/new/roster/nube-beige.png"}
                alt="/"
                width={374 / 2}
                height={198 / 2}
                className=" "
              />
              <p className="text-[1.6rem] -mt-16 -ml-2">ver más</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
