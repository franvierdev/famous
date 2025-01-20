import { useRef } from "react";
import { useIsClient } from "usehooks-ts";
import Header from "@/modules/shared/components/header-new/header";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { motion, useMotionValue, useTransform } from "motion/react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel } from "swiper/modules";

const br = <br />;

const ourTeamMember = [
  {
    name: "Stefany",
    role: "Finance Guardian",
    bio: (
      <FormattedMessage
        defaultMessage="Stefany protege la estabilidad financiera de Famosos Management, supervisando presupuestos, pagos y previsiones. Su atención al detalle es clave para el éxito de cada campaña."
        id="Rnyde/"
      />
    ),
    imageUrl: require("public/assets/images/new/our-team/stefany.png"),
    color: "#9C76E3",
  },
  {
    name: "Danea",
    role: "Partnership Strategist",
    bio: (
      <FormattedMessage
        defaultMessage="Danea crea conexiones auténticas entre influencers y marcas, asegurando que cada colaboración sea un éxito. Su intuición y habilidades de negociación generan alianzas impactantes."
        id="wRb4K3"
      />
    ),
    imageUrl: require("public/assets/images/new/our-team/danea.png"),
    color: "#9C76E3",
  },
  {
    name: "KEVIN",
    role: "Tech Wizard",
    bio: (
      <FormattedMessage
        defaultMessage="Crea soluciones tecnológicas innovadoras que impulsan la eficiencia de la agencia. {br} Su conocimiento mantiene nuestras plataformas a la vanguardia de la industria digital."
        values={{ br }}
        id="eKV+Qk"
      />
    ),
    imageUrl: require("public/assets/images/new/our-team/kevin.png"),
    color: "#9C76E3",
  },
  {
    name: "Eri",
    role: "Visual Alchemist",
    bio: (
      <FormattedMessage
        defaultMessage="Eri transforma ideas en arte visual, diseñando con precisión y magia para dar vida a la esencia de Famosos Management. Su trabajo asegura que cada elemento gráfico cuente una historia poderosa."
        id="MaO36L"
      />
    ),
    imageUrl: require("public/assets/images/new/our-team/eri.png"),
    color: "#9C76E3",
  },
  {
    name: "Andrés",
    role: "Impact Visionary",
    bio: (
      <FormattedMessage
        defaultMessage="Como CEO, Andrés teje la estrategia y el crecimiento de Famosos Management, guiando a la agencia para que sea líder en conectar talentos y marcas con propósito e impacto."
        id="mQWNPy"
      />
    ),
    imageUrl: require("public/assets/images/new/our-team/andres.png"),
    color: "#9C76E3",
  },
  {
    name: "Diego",
    role: "Workflow Wizard",
    bio: (
      <FormattedMessage
        defaultMessage="Diego coordina la operación diaria, asegurando que todo funcione como un reloj. Desde logística hasta relaciones con los talentos, su enfoque mantiene la fluidez en la agencia."
        id="DzjetV"
      />
    ),
    imageUrl: require("public/assets/images/new/our-team/diego.png"),
    color: "#9C76E3",
  },
  {
    name: "Juliana",
    role: "Clause Crafter",
    bio: (
      <FormattedMessage
        defaultMessage="Juliana domina el arte de los contratos y la protección legal. Su experiencia asegura que cada acuerdo y colaboración sea clara, justa y segura."
        id="9r434w"
      />
    ),
    imageUrl: require("public/assets/images/new/our-team/juliana.png"),
    color: "#9C76E3",
  },
];

export default function OurTeam() {
  const isClient = useIsClient();

  if (!isClient) return;

  return <_OurTeam />;
}

function _OurTeam() {
  const swiperProgress = useMotionValue(0.5);
  const swiperRef = useRef<SwiperClass>(null!);

  return (
    <main className="bg-[#EFDEC6] text-base-100 flex flex-col min-h-screen [&>*]:w-screen">
      <Header></Header>
      <Swiper
        slidesPerView={5}
        spaceBetween={32}
        initialSlide={2}
        centeredSlides
        mousewheel={{
          thresholdDelta: 10,
        }}
        modules={[Mousewheel]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onProgress={(_, progress) => {
          return swiperProgress.set(progress);
        }}
      >
        {ourTeamMember.map((member, index) => {
          return (
            <SwiperSlide key={member.name}>
              {({ isActive }) => (
                <SwiperItem
                  isActive={isActive}
                  member={member}
                  index={index}
                  swiperProgress={swiperProgress}
                  onClickImage={() => swiperRef.current.slideTo(index)}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}

function SwiperItem({
  swiperProgress,
  member: { imageUrl, name, bio, role, color },
  index,
  isActive,
  onClickImage,
}: any) {
  const percentageByItem = 1 / (ourTeamMember.length - 1);
  const progress = useTransform(
    swiperProgress,
    [
      percentageByItem * (index - 1),
      percentageByItem * index,
      percentageByItem * (index + 1),
    ],
    [0, 1, 0]
  );

  const scale = useTransform(progress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      className="flex flex-col items-center gap-6 origin-[center_30%] py-4"
      key={name}
      initial={{ scale: 0.7 }}
      style={{ scale }}
    >
      <Image
        src={imageUrl}
        alt={name}
        onClick={onClickImage}
        className="cursor-pointer"
      />
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        style={{ opacity: progress }}
      >
        <motion.h2 className="uppercase text-7xl font-bold italic">
          {name}
        </motion.h2>
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
        >
          <div
            className="text-5xl font-bold italic py-4 px-8 rounded-full whitespace-nowrap"
            style={{ backgroundColor: color }}
          >
            {role}
          </div>
          <p className="text-2xl font-bold w-[34rem] text-center">{bio}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
