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
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useIsClient } from "usehooks-ts";

const roster = [
  {
    fullName: "LA FAMILIA GÓMEZ",
    title: "Conflictos cotidianos, risas infinitas",
    bio: `La Familia Gómez es una familia hispana que aborda con humor los conflictos cotidianos. Con contenido divertido, muestran la dinámica de las relaciones de nuera-suegra, matrimonio y padres e hijos. Su estilo cercano y auténtico hace reír a su audiencia, convirtiendo cada situación en una anécdota familiar.`,
    tags: ["Comedia", "Entretenimiento", "Familia"],
    mainMedia: {
      type: "video",
      url: "/assets/images/new/roster/La-Familia-Gomez-Video.mp4",
    },
    imageUrl: require("public/assets/images/new/roster/la-familia-gomez-image.png"),
    profileUrl: "https://july.bio/Losgomez",
    keyword: "Comedia",
    backgroundColor: "#AC4A86",
    profileLinkButtonType: "beige",
  },
  {
    fullName: "LA FAMILIA LÓPEZ",
    title: "Humor auténtico en cada momento familiar",
    bio: `La Familia López es una familia hispana "común" que aborda con humor los conflictos cotidianos y relaciones personales, especialmente entre Orlando y Leduar y su dinámica con Britney y el resto de la familia. Sus videos muestran con autenticidad y comedia las situaciones familiares que todos podemos reconocer y disfrutar.`,
    tags: ["Comedia", "Familia", "Relaciones"],
    mainMedia: {
      type: "video",
      url: "/assets/images/new/roster/La-Familia-Lopez-Video.mp4",
    },
    imageUrl: require("public/assets/images/new/roster/la-familia-lopez-image.png"),
    profileUrl: "https://july.bio/familialopez",
    keyword: "Comedia",
    backgroundColor: "#EFDEC6",
    profileLinkButtonType: "beige",
  },
  {
    fullName: "Mari Gutierrez",
    title: "Holistic health coach-personal trainer",
    bio: `Mari Gutiérrez es una health coach apasionada por un estilo de vida positivo y saludable.  Comparte rutinas de ejercicio accesibles y recetas saludables, siempre enfocada en mejorar la calidad de vida de su comunidad. Mari busca generar un impacto positivo promoviendo cambios simples en los hábitos diarios. 
    `,
    tags: ["Fitness", "Lifestyle", "Cocina"],
    mainMedia: {
      type: "image",
      url: "/assets/images/new/roster/mari-gutierrez-main-media.png",
    },
    imageUrl: require("public/assets/images/new/roster/mari-gutierrez-image.png"),
    keyword: "Fitness",
    backgroundColor: "#9C76E3",
    profileUrl: "https://july.bio/healthylife_bymg",
    profileLinkButtonType: "beige",
  },
  {
    fullName: "SARGENTO CARLOS CORNEJO",
    title: "Transformando comunidades con información",
    bio: `Carlos Cornejo, también conocido como Sargento Cornejo, es un oficial de policía y creador de contenido con una sólida presencia en redes sociales. Con su enfoque en temas de seguridad y bienestar comunitario, ofrece información relevante para comunidades hispanas en EE.UU., buscando mejorar la calidad de vida y crear conciencia.`,
    tags: ["Información", "Seguridad", "Bienestar comunitario"],
    mainMedia: {
      type: "image",
      url: "/assets/images/new/roster/sargento-carlos-cornejo-main-media.png",
    },
    imageUrl: require("public/assets/images/new/roster/sargento-carlos-cornejo-image.png"),
    keyword: "Seguridad",
    backgroundColor: "#AC4A86",
    profileUrl: "https://july.bio/Sargentocornejo",
    profileLinkButtonType: "beige",
  },
  {
    fullName: "STEVEN COHEN",
    title: "Historias únicas, humor salado y mucha inspiración",
    bio: `Steven es un creador latino y anfitrión de Saltypun, un podcast lleno de historias únicas, risas y reflexiones inesperadas. Desde Miami, combina comedia y cultura para conectar con su audiencia de una manera auténtica y divertida.`,
    tags: ["Podcast", "Lifestyle", "Comedia"],
    mainMedia: {
      type: "image",
      url: "/assets/images/new/roster/steven-cohen-main-media.png",
    },
    imageUrl: require("public/assets/images/new/roster/steven-cohen-image.png"),
    keyword: "Podcast",
    backgroundColor: "#EFDEC6",
    profileUrl: "https://july.bio/Stevencohen",
    profileLinkButtonType: "morada",
  },
];

type Roster = (typeof roster)[number];

export default function Roster() {
  const isClient = useIsClient();
  const [snappedItem, setSnappedItem] = useState(roster[0]);
  const containerRef = useRef(null);

  if (!isClient) return;

  return (
    <motion.main
      className="snap-y snap-mandatory overflow-y-auto h-screen bg-[#AC4A86]"
      style={{ backgroundColor: snappedItem.backgroundColor }}
      ref={containerRef}
    >
      {roster.map((roster) => (
        <RosterCard
          key={roster.fullName}
          roster={roster}
          onSnapChange={(isSnapped) => isSnapped && setSnappedItem(roster)}
          containerRef={containerRef}
        />
      ))}
      <div className="flex place-items-center fixed inset-y-0 right-0 text-black font-bold pr-8">
        <motion.span
          className="px-8 text-[5.125rem] rounded-full border border-current italic mt-16 -mr-32 relative z-30"
          style={{ backgroundColor: snappedItem.backgroundColor }}
          key={snappedItem.keyword}
        >
          {snappedItem.keyword}
        </motion.span>
        <Image
          src={snappedItem.imageUrl}
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
              key={snappedItem.mainMedia.url}
            >
              {snappedItem.mainMedia.type === "video" ? (
                <video
                  src={snappedItem.mainMedia.url}
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={snappedItem.mainMedia.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
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
    </motion.main>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function RosterCard({
  roster,
  onSnapChange,
  containerRef,
}: {
  roster: Roster;
  onSnapChange: (isSnapped: boolean) => void;
  containerRef: MutableRefObject<any>;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
  });
  const y = useParallax(scrollYProgress, 150);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const isSnapped = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [false, true, true, true, false]
  );

  useMotionValueEvent(isSnapped, "change", onSnapChange);

  return (
    <div className="text-black font-bold h-screen snap-center [perspective:_500px] flex flex-col justify-center">
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
            <a href={roster.profileUrl} target="_blank">
              <Image
                src={`/assets/images/new/roster/nube-${roster.profileLinkButtonType}.png`}
                alt="/"
                width={374 / 2}
                height={198 / 2}
                className=" "
              />
              <p className="text-[1.6rem] -mt-16 -ml-2">ver más</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
