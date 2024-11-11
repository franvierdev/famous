import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import {
  faArrowRight,
  faBell,
  faEye,
  faMagicWandSparkles,
  faSquarePollVertical,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { HeroGridCard } from "../hero-grid-card";
import { InfluencerCard } from "../influencer-card";
import { ProjectCard } from "../project-card";
import { ReactNode, useState } from "react";
import { PageLayout } from "@/modules/shared/components/page-layout";
import { CLIENT_ONBOARDING_PATH } from "@/modules/shared/constants/paths";
import { Carousel } from "../../../shared/components/carousel";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "clsx";

const textEmphasis = (chunks: any) => (
  <span className="text-primary">{chunks}</span>
);

const bigText = (chunks: ReactNode[]) => (
  <span className="text-3xl font-bold block text-primary group-hover:text-primary-content transition-colors duration-200">
    {chunks}
  </span>
);

const techBenefits = [
  {
    faIcon: faBell,
    text: (
      <FormattedMessage
        defaultMessage="<bigText>Gestionar</bigText> tus campañas y recibir notificaciones en los momentos importantes."
        values={{ bigText }}
        id="n86AV1"
      />
    ),
  },
  {
    faIcon: faUser,
    text: (
      <FormattedMessage
        defaultMessage="<bigText>Analizar</bigText> los perfiles de influencers para elegir a los mejores."
        id="KACdkc"
        values={{ bigText }}
      />
    ),
  },
  {
    faIcon: faMagicWandSparkles,
    text: (
      <FormattedMessage
        defaultMessage="<bigText>Predecir</bigText> resultados del alcance mediante nuestros algoritmos."
        values={{ bigText }}
        id="3ZGboD"
      />
    ),
  },
  {
    faIcon: faStopwatch,
    text: (
      <FormattedMessage
        defaultMessage="<bigText>Hacer seguimientos</bigText> en tiempo real de las métricas de todas las campañas activas."
        values={{ bigText }}
        id="7YBaVm"
      />
    ),
  },
  {
    faIcon: faEye,
    text: (
      <FormattedMessage
        defaultMessage="<bigText>Supervisar</bigText> el calendario con las fechas y detalles de cada publicación."
        values={{ bigText }}
        id="qdJDP0"
      />
    ),
  },
  {
    faIcon: faSquarePollVertical,
    text: (
      <FormattedMessage
        defaultMessage="<bigText>Generar reportes</bigText> con los resultados de la campaña para compartir con tu equipo."
        values={{ bigText }}
        id="TxhiWB"
      />
    ),
  },
];

const celebrities = [
  {
    fullName: "Rayito",
    followers: 6_900_000,
    socialNetwork: "Instagram",
    imageSrc: "/assets/images/home/celebrity-1.png",
  },
  {
    fullName: "Sensillo con S",
    followers: 7_700_000,
    socialNetwork: "TikTok",
    imageSrc: "/assets/images/home/celebrity-2.png",
  },
  {
    fullName: "Michelle Rodriguez",
    followers: 5_800_000,
    socialNetwork: "TikTok",
    imageSrc: "/assets/images/home/celebrity-3.png",
  },
  {
    fullName: "Bárbara de Regil",
    followers: 8600000,
    socialNetwork: "Instagram",
    imageSrc: "/assets/images/home/celebrity-4.png",
  },
];

const testimonials = [
  {
    text: (
      <FormattedMessage
        defaultMessage="Trabajar con Famosos ha sido increíble. Tienen un talento impresionante para elegir los perfiles más alineados a tu marca, utilizan datos para tomar las decisiones correctas, te acompañan en cada parte del proceso y se aseguran de lanzar una campaña impecable. El profesionalismo y las ganas que tienen te llevan al siguiente nivel."
        id="paN+0b"
      />
    ),
    authorName: "Camila",
    authorRol: "Félix Pago",
  },
  {
    text: (
      <FormattedMessage
        defaultMessage="Tuvimos el feeling, desde las primeras reuniones, que habíamos encontrado los partners perfectos para romperla con campañas de Influencer Marketing. {br} Crean contenido, gestionan las publicaciones, contratan a los talentos, realizan la pauta… En fin, nos dan soluciones personalizadas para nuestros clientes con resultados súper positivos."
        values={{ br: <br /> }}
        id="CZN18N"
      />
    ),
    authorName: "Jacky Korn",
    authorRol: (
      <FormattedMessage defaultMessage="CEO de Agencia K2" id="ZDVCRa" />
    ),
  },
  {
    text: (
      <FormattedMessage
        defaultMessage="Tienen una gestión excelente, me gusta la familiaridad y cercanía que transmiten y son muy ordenados en los procesos. {br} Tienen una mirada a colaborar a largo plazo en donde siempre prime un beneficio mutuo."
        values={{ br: <br /> }}
        id="8xsup7"
      />
    ),
    authorName: "David Otálora",
    authorRol: (
      <FormattedMessage defaultMessage="Creador de contenido" id="zSN4s7" />
    ),
  },
];

const testimonialsCards = testimonials.map((testimonial, index) => (
  <AnimationOnScroll
    className="bg-base-200 flex-1 flex flex-col rounded-md p-6 lg:p-12"
    animateIn="animate__fadeInRight"
    delay={index * 100}
    animateOnce
    key={index}
  >
    <Image
      src="/assets/images/quotes-icon.png"
      alt=""
      className="w-10 lg:w-14 object-contain"
      width={111}
      height={82.6}
    />
    <p className="text-lg leading-relaxed lg:leading-loose mt-6 mb-6 lg:mb-10">
      {testimonial.text}
    </p>
    <div className="flex items-center mt-auto">
      {/* <div className="avatar">
        <div className="rounded-full">
          <Image
            src="/assets/images/avatar-blank.png"
            alt=""
            width={60}
            height={60}
          />
        </div>
      </div> */}
      <div>
        <p className="font-bold text-xl">{testimonial.authorName}</p>
        <p className="font-semibold mt-2">{testimonial.authorRol}</p>
      </div>
    </div>
  </AnimationOnScroll>
));

export function HomePage() {
  const [heroImagesLoaded, setHeroImagesLoaded] = useState(0);
  const totalHeroImages = celebrities.length;
  const heroImagesHasLoaded = heroImagesLoaded >= totalHeroImages;

  function increaseHeroImagesLoaded() {
    setHeroImagesLoaded((heroImagesLoaded) => heroImagesLoaded + 1);
  }

  return (
    <PageLayout>
      <div id="hero">
        <div className="lg:container-lg lg:flex items-center lg:pt-8 lg:pb-16">
          <section
            className={classes(
              "max-lg:container-lg max-lg:flex flex-col items-center max-w-2xl flex-shrink max-lg:text-center animate__animated [animation-delay:200ms] lg:[animation-delay:600ms] opacity-0 max-lg:[animation-name:fadeInUp]",
              heroImagesHasLoaded && "lg:[animation-name:fadeInUp]"
            )}
          >
            <h1 className="font-extrabold text-7xl leading-tight max-w-[14ch]">
              <FormattedMessage
                defaultMessage="Influencer Marketing + <textEmphasis>Tecnología Inteligente</textEmphasis>"
                values={{ textEmphasis }}
                id="yYMHNw"
              />
            </h1>
            <p className="text-xl mt-5 max-w-lg font-extrabold">
              <FormattedMessage
                defaultMessage="Conectamos tu marca con más de 250 millones de latinos."
                id="plRIBW"
              />
            </p>
            <p className="mt-4 max-w-lg text-lg">
              <FormattedMessage
                defaultMessage="El Influencer Marketing es la mejor manera de hacer crecer tu negocio al colaborar con los talentos más populares en redes sociales."
                id="wEhBya"
              />
            </p>
            <div className="flex items-center max-lg:justify-center mt-6 lg:mt-14 space-x-5">
              <a
                href={CLIENT_ONBOARDING_PATH}
                className="btn btn-primary btn-lg text-xl"
              >
                <FormattedMessage
                  defaultMessage="Empezar ahora"
                  id="tpFUnm"
                  description="Call-to-action a agendar una reunión"
                />
              </a>
              {/* <label
                htmlFor="know-more-video-modal"
                className="btn btn-lg btn-circle btn-white max-lg:hidden cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </label>
              <label
                htmlFor="know-more-video-modal"
                className="font-bold text-xl text-base-content hover:text-primary transition-colors duration-200 max-lg:hidden cursor-pointer"
              >
                <FormattedMessage
                  defaultMessage="Conoce {br} más"
                  values={{ br: <br /> }}
                  id="XxrN//"
                />
              </label> */}
            </div>
          </section>
          <div
            className={classes(
              "grow grid grid-cols-3 grid-rows-2 gap-6 ml-14 max-lg:hidden animate__animated opacity-0",
              heroImagesHasLoaded && "animate__fadeIn"
            )}
          >
            <div className="flex items-end">
              <HeroGridCard
                className="w-full"
                influencer={celebrities[0]}
                imageProps={{
                  src: celebrities[0].imageSrc,
                  alt: celebrities[0].fullName,
                  height: 280.5,
                  width: 313,
                  onLoad: increaseHeroImagesLoaded,
                }}
              />
            </div>
            <div>
              <HeroGridCard
                className="w-full"
                influencer={celebrities[1]}
                imageProps={{
                  src: celebrities[1].imageSrc,
                  alt: celebrities[1].fullName,
                  height: 375.5,
                  width: 302.5,
                  onLoad: increaseHeroImagesLoaded,
                }}
              />
            </div>
            <div className="row-start-1 row-end-3 col-start-3 col-end-4 flex items-center">
              <HeroGridCard
                className="w-full"
                influencer={celebrities[2]}
                imageProps={{
                  src: celebrities[2].imageSrc,
                  alt: celebrities[2].fullName,
                  height: 375,
                  width: 302,
                  onLoad: increaseHeroImagesLoaded,
                }}
              />
            </div>
            <div className="col-span-2 row-start-2 row-end-3">
              <HeroGridCard
                className="w-full"
                contentCardPosition="end"
                influencer={celebrities[3]}
                imageProps={{
                  src: celebrities[3].imageSrc,
                  alt: celebrities[3].fullName,
                  height: 297.5,
                  width: 650.5,
                  onLoad: increaseHeroImagesLoaded,
                }}
              />
            </div>
          </div>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
            <Carousel className="w-full mt-10 lg:hidden" arrowButtons>
              {celebrities.map((celebrity, index) => (
                <HeroGridCard
                  className="w-full rounded-none"
                  contentCardPosition={index % 2 ? "end" : "start"}
                  influencer={celebrity}
                  imageProps={{
                    src: celebrity.imageSrc,
                    alt: celebrity.fullName,
                    height: 450,
                    width: 360,
                  }}
                  key={index}
                />
              ))}
            </Carousel>
          </AnimationOnScroll>
        </div>
      </div>
      <div id="our-clients" className="bg-primary">
        <div className="lg:container container-padding">
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <h2 className="max-lg:container text-5xl font-extrabold text-center">
              <FormattedMessage
                defaultMessage="Marcas que hemos impulsado"
                id="wAjZsS"
              />
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <div className="mt-5 lg:mt-10 overflow-x-auto overflow-y-hidden max-lg:px-2">
              <Image
                src="/assets/images/home/clients-logos.png"
                alt=""
                width={1624}
                height={144.58}
                className="w-auto lg:w-full max-lg:max-w-none max-lg:object-cover h-28 lg:h-auto"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div id="we-are-your-partners">
        <div className="container container-padding">
          <div className="text-center">
            <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
              <h2 className="text-4xl font-extrabold">
                <FormattedMessage
                  defaultMessage="Somos tus partners de Influencer Marketing"
                  id="kFpssC"
                />
              </h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
              <p className="text-xl font-bold mt-6 text-primary">
                <FormattedMessage
                  defaultMessage="¡Tenemos la red de talento latino más grande del mundo!"
                  id="xiWTy9"
                />
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
              <p className="text-xl mt-10 max-w-[70ch] mx-auto">
                <FormattedMessage
                  defaultMessage="Con + 15.000 de los Famosos más reconocidos y un equipo multidisciplinario te ayudamos a lograr cada una de las metas que te propongas para expandir la presencia de tu marca."
                  id="KMD2n6"
                />
              </p>
            </AnimationOnScroll>
          </div>
          <div className="flex items-center gap-6 xl:gap-10 mt-12 lg:mt-24">
            <AnimationOnScroll
              animateIn="customAnimate__fadeInUp"
              animateOnce
              className="flex-[40] aspect-[9/16] rounded-lg overflow-hidden max-lg:hidden"
            >
              <iframe
                src="https://www.tiktok.com/player/v1/7256591590054055174?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="customAnimate__fadeInUp"
              animateOnce
              className="flex-[46] aspect-[9/16] rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.tiktok.com/player/v1/7255498981755604230?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="customAnimate__fadeInUp"
              animateOnce
              className="flex-[40] aspect-[9/16] rounded-lg overflow-hidden max-lg:hidden"
            >
              <iframe
                src="https://www.tiktok.com/player/v1/7258740115655183622?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </AnimationOnScroll>
          </div>
          <div className="flex items-center gap-6 xl:gap-10 mt-6 lg:mt-12">
            <AnimationOnScroll
              animateIn="customAnimate__fadeInUp"
              animateOnce
              className="flex-[40] aspect-[9/16] rounded-lg overflow-hidden max-lg:hidden"
            >
              <iframe
                src="https://www.tiktok.com/player/v1/7340473133796691205?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="customAnimate__fadeInUp"
              animateOnce
              className="flex-[46] aspect-[9/16] rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.tiktok.com/player/v1/7261039854002212101?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="customAnimate__fadeInUp"
              animateOnce
              className="flex-[40] aspect-[9/16] rounded-lg overflow-hidden max-lg:hidden"
            >
              <iframe
                src="https://www.tiktok.com/player/v1/7348606245277945094?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </AnimationOnScroll>
          </div>
          {/* <div className="flex flex-col flex-wrap mt-12 lg:mt-24 md:h-[80rem] xl:h-[100rem] 2xl:h-[120rem] gap-6 xl:gap-10 md:[&_>_*]:w-[calc(calc(100%_/_3)_-_calc(theme(gap.6)_/_1.5))] xl:[&_>_*]:w-[calc(calc(100%_/_3)_-_calc(theme(gap.10)_/_1.5))] max-md:[&_>_*]:flex-[60vh] [&_>_*_img]:object-top">
            <InfluencerCard
              className="flex-[calc(36%-40px)]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-5.png",
                width: 505,
                height: 694,
              }}
              influencer={{
                fullName: "Jorge Raush",
                followers: 1_400_000,
                socialNetwork: "Instagram",
              }}
            />
            <InfluencerCard
              className="flex-[calc(36%-40px)]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-6.png",
                width: 505,
                height: 624,
              }}
              influencer={{
                fullName: "Ninel Conde",
                followers: 5_500_000,
                socialNetwork: "Instagram",
              }}
            />
            <InfluencerCard
              className="flex-[calc(28%-40px)]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-7.png",
                width: 505,
                height: 505,
              }}
              influencer={{
                fullName: "Jorge Enrique Abello",
                followers: 1_700_000,
                socialNetwork: "Instagram",
              }}
            />
            <InfluencerCard
              className="flex-[calc(29%-40px)] md:[animation-delay:200ms]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-8.png",
                width: 505,
                height: 503,
              }}
              influencer={{
                fullName: "Daniel Barona",
                followers: 1_900_000,
                socialNetwork: "TikTok",
              }}
            />
            <InfluencerCard
              className="flex-[calc(33%-40px)] md:[animation-delay:200ms]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-9.png",
                width: 505,
                height: 693,
              }}
              influencer={{
                fullName: "Mariazel",
                followers: 8_500_000,
                socialNetwork: "TikTok",
              }}
            />
            <InfluencerCard
              className="flex-[calc(33%-40px)] md:[animation-delay:200ms]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-10.png",
                width: 505,
                height: 632,
              }}
              influencer={{
                fullName: "Fonseca",
                followers: 1_300_000,
                socialNetwork: "TikTok",
              }}
            />
            <InfluencerCard
              className="flex-[calc(35%-40px)] md:[animation-delay:400ms]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-11.png",
                width: 505,
                height: 630,
              }}
              influencer={{
                fullName: "Faisy",
                followers: 1_800_000,
                socialNetwork: "Instagram",
              }}
            />
            <InfluencerCard
              className="flex-[calc(27%-40px)] md:[animation-delay:400ms]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-12.png",
                width: 505,
                height: 505,
              }}
              influencer={{
                fullName: "Carlos Baute",
                followers: 799_000,
                socialNetwork: "Instagram",
              }}
            />
            <InfluencerCard
              className="flex-[calc(38%-40px)] md:[animation-delay:400ms]"
              imageProps={{
                alt: "",
                src: "/assets/images/home/celebrity-13.png",
                width: 505,
                height: 687,
              }}
              influencer={{
                fullName: "Jürgen Damm",
                followers: 2_300_000,
                socialNetwork: "TikTok",
              }}
            />
          </div> */}
        </div>
      </div>
      <div id="insights">
        <div className="container container-padding">
          <div className="lg:flex max-xl:items-center">
            <div className="flex-1 flex flex-col justify-center">
              <section className="lg:pr-20">
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <h2 className="text-4xl font-extrabold text-secondary">
                    <FormattedMessage
                      defaultMessage="Insights {br} + Resultados"
                      id="Gq+Z2p"
                      values={{ br: <br /> }}
                    />
                  </h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-lg mt-10">
                    <FormattedMessage
                      defaultMessage="Con nuestra innovadora tecnología, sabrás exactamente lo que funciona o no."
                      id="gm/lTR"
                    />
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-lg">
                    <FormattedMessage
                      defaultMessage="En Famosos Ads te mostramos el rendimiento de cada US$ dólar que inviertes en una campaña de Influencer Marketing para que logres tus objetivos y tu negocio crezca en toda Latinoamérica."
                      id="06I4xu"
                    />
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-xl">
                    <FormattedMessage
                      defaultMessage="Además, tenemos una relación directa con los Famosos a través de nuestra propia app, por lo que sabemos antes su disponibilidad para cualquier campaña."
                      id="MDmO8H"
                    />
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <div className="mt-8">
                    <a
                      href={CLIENT_ONBOARDING_PATH}
                      className="btn btn-primary btn-lg"
                    >
                      <FormattedMessage
                        defaultMessage="Conocer más"
                        id="RgsMF5"
                        description="Call-to-action a agendar una reunión"
                      />
                    </a>
                  </div>
                </AnimationOnScroll>
              </section>
            </div>
            <div className="flex-1 max-lg:mt-10">
              <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <Image
                  className="w-full object-cover"
                  src="/assets/images/home/insights-1.png"
                  alt=""
                  width={796.5}
                  height={632.61}
                />
              </AnimationOnScroll>
            </div>
          </div>
          <div className="lg:flex max-xl:items-center max-lg:mt-10">
            <div className="flex-1">
              <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <Image
                  className="w-full object-cover"
                  src="/assets/images/home/insights-2.png"
                  alt=""
                  width={796.5}
                  height={632.61}
                />
              </AnimationOnScroll>
            </div>
            <div className="flex-1 max-lg:mt-10 flex flex-col justify-center">
              <section className="lg:pl-20">
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <h2 className="text-4xl font-extrabold text-secondary max-w-[12ch]">
                    <FormattedMessage
                      defaultMessage="Una inversión inteligente"
                      id="rjh3cx"
                    />
                  </h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-xl mt-10">
                    <FormattedMessage
                      defaultMessage="Nos dedicamos a idear soluciones a tu medida que dejan huella en mentes y corazones, aún después de los 30 segundos del reel."
                      id="Xwqs1k"
                    />
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-xl">
                    <FormattedMessage
                      defaultMessage="Diseñamos, producimos y ejecutamos campañas exitosas con un cost per view inferior a $0.01."
                      id="/o/50M"
                    />
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-xl">
                    <FormattedMessage
                      defaultMessage="Hemos llegado a más de 200 millones de personas solamente en el ultimo año ¡y seguimos creciendo!"
                      id="uVsB3p"
                    />
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <div className="mt-12">
                    <a
                      href={CLIENT_ONBOARDING_PATH}
                      className="btn btn-primary btn-lg"
                    >
                      <FormattedMessage
                        defaultMessage="Me interesa"
                        id="xv+D45"
                        description="Call-to-action a agendar una reunión"
                      />
                    </a>
                  </div>
                </AnimationOnScroll>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div id="end-to-end-solutions">
        <div className="container container-padding">
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <h2 className="text-4xl font-extrabold text-center">
              <FormattedMessage
                defaultMessage="Soluciones end-to-end para tu negocio"
                id="nS+JCR"
              />
            </h2>
          </AnimationOnScroll>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8 lg:mt-16">
            <div className="flex-1 flex flex-wrap gap-[inherit]">
              <ProjectCard
                className="flex-[100%] md:flex-1"
                imageProps={{
                  src: "/assets/images/home/end-to-end-1.png",
                  alt: "",
                  width: 742,
                  height: 742,
                }}
              >
                <h3 className="font-extrabold text-2xl">
                  <FormattedMessage
                    defaultMessage="Ahorra tiempo"
                    id="m0gUkR"
                  />
                </h3>
                <p className="text-base mt-4">
                  <FormattedMessage
                    defaultMessage="Hacemos más fácil y rápido el Influencer Marketing con soluciones de principio a fin para tu marca."
                    id="iW6j6w"
                  />
                </p>
                <a
                  href={CLIENT_ONBOARDING_PATH}
                  className="btn btn-circle btn-white mt-auto md:mt-4 -translate-x-full group-hover:translate-x-0 max-md:group-[.is-hover]:translate-x-0"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </ProjectCard>
              <ProjectCard
                className="flex-[100%] md:flex-1"
                imageProps={{
                  src: "/assets/images/home/end-to-end-2.png",
                  alt: "",
                  width: 742,
                  height: 742,
                }}
              >
                <h3 className="font-extrabold text-2xl">
                  <FormattedMessage defaultMessage="Viralización" id="ez0CLs" />
                </h3>
                <p className="text-base mt-4">
                  <FormattedMessage
                    defaultMessage="Somos expertos en crear campañas exitosas con más de 50M de visualizaciones."
                    id="Ag9Nmn"
                  />
                </p>
                <a
                  href={CLIENT_ONBOARDING_PATH}
                  className="btn btn-circle btn-white mt-auto md:mt-4 -translate-x-full group-hover:translate-x-0 max-md:group-[.is-hover]:translate-x-0"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </ProjectCard>
              <ProjectCard
                className="flex-[100%]"
                imageProps={{
                  src: "/assets/images/home/end-to-end-3.png",
                  alt: "",
                  width: 1564,
                  height: 1552,
                }}
              >
                <h3 className="font-extrabold text-2xl md:text-4xl">
                  <FormattedMessage defaultMessage="Crecimiento" id="NSG8Ud" />
                </h3>
                <p className="text-base md:text-3xl mt-8">
                  <FormattedMessage
                    defaultMessage="Contamos con la mayor red de talentos y creadores de contenido en Latinoamérica."
                    id="1b+FBA"
                  />
                </p>
                <a
                  href={CLIENT_ONBOARDING_PATH}
                  className="btn btn-lg btn-circle btn-white mt-auto md:mt-8 -translate-x-full group-hover:translate-x-0 max-md:group-[.is-hover]:translate-x-0"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </ProjectCard>
            </div>
            <div className="flex-1 flex flex-wrap gap-[inherit]">
              <ProjectCard
                className="flex-[100%]"
                imageProps={{
                  src: "/assets/images/home/end-to-end-4.png",
                  alt: "",
                  width: 1552,
                  height: 1544,
                }}
              >
                <h3 className="font-extrabold text-2xl md:text-4xl">
                  <FormattedMessage
                    defaultMessage="Estrategia 360"
                    id="nPRE99"
                  />
                </h3>
                <p className="text-base md:text-3xl mt-8">
                  <FormattedMessage
                    defaultMessage="Potenciamos el contenido y tu inversión, al desplegarlo en múltiples canales de pauta digital."
                    id="V8BELO"
                  />
                </p>
                <a
                  href={CLIENT_ONBOARDING_PATH}
                  className="btn btn-lg btn-circle btn-white mt-auto md:mt-8 -translate-x-full group-hover:translate-x-0 max-md:group-[.is-hover]:translate-x-0"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </ProjectCard>
              <ProjectCard
                className="flex-[100%] md:flex-1"
                imageProps={{
                  src: "/assets/images/home/end-to-end-5.png",
                  alt: "",
                  width: 742,
                  height: 742,
                }}
              >
                <h3 className="font-extrabold text-2xl md:text-xl">
                  <FormattedMessage
                    defaultMessage="Software de perfilamiento"
                    id="Pvk2qb"
                  />
                </h3>
                <p className="text-base mt-4">
                  <FormattedMessage
                    defaultMessage="Analizamos con detalle miles de perfiles para presentarte las mejores opciones para tu campaña."
                    id="b0bIHt"
                  />
                </p>
                <a
                  href={CLIENT_ONBOARDING_PATH}
                  className="btn btn-circle btn-white mt-auto md:mt-4 -translate-x-full group-hover:translate-x-0 max-md:group-[.is-hover]:translate-x-0"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </ProjectCard>
              <ProjectCard
                className="flex-[100%] md:flex-1"
                imageProps={{
                  src: "/assets/images/home/end-to-end-6.png",
                  alt: "",
                  width: 742,
                  height: 742,
                }}
              >
                <h3 className="font-extrabold text-2xl md:text-xl">
                  <FormattedMessage
                    defaultMessage="Reportes detallados"
                    id="QDCEHr"
                  />
                </h3>
                <p className="text-base mt-4">
                  <FormattedMessage
                    defaultMessage="Nuestro software te muestra los resultados obtenidos, alcance de las publicaciones, costos y más."
                    id="ca8eI+"
                  />
                </p>
                <a
                  href={CLIENT_ONBOARDING_PATH}
                  className="btn btn-circle btn-white mt-auto md:mt-4 -translate-x-full group-hover:translate-x-0 max-md:group-[.is-hover]:translate-x-0"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </ProjectCard>
            </div>
          </div>
        </div>
      </div>
      <div id="technology">
        <div className="relative">
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
            <Image
              src="/assets/images/home/technology-1.png"
              className="w-full h-[26.25rem] lg:h-auto object-cover lg:object-contain"
              alt=""
              width={1881}
              height={1374}
              quality={50}
            />
          </AnimationOnScroll>
          <div className="absolute inset-0">
            <div className="container h-full pt-6 pb-8 lg:pt-12 lg:pb-24 flex flex-col text-center justify-between">
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
                delay={400}
              >
                <h2 className="text-4xl font-bold">
                  <FormattedMessage
                    defaultMessage="Tecnología Famosos Ads"
                    id="T2bCyz"
                  />
                </h2>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
              >
                <p className="text-5xl lg:text-7xl font-bold">
                  <FormattedMessage
                    defaultMessage="Fácil, Intuitiva, En tiempo real"
                    id="pk4fOd"
                  />
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      <div id="our-tech-allows-you">
        <div className="container container-padding">
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <h2 className="text-3xl font-extrabold text-center">
              <FormattedMessage
                defaultMessage="Nuestra tecnología inteligente te permite"
                id="QYzEP+"
              />
            </h2>
          </AnimationOnScroll>
          <div className="mt-10 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(80px,_350px))] gap-5 lg:gap-10 justify-center">
            {techBenefits.map((item, index) => {
              return (
                <AnimationOnScroll
                  className="bg-base-content text-base-100 py-12 px-16 rounded-2xl group hover:bg-primary transition-colors text-center"
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                  key={index}
                >
                  <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                    <div className="rounded-full bg-primary text-primary-content text-5xl lg:text-3xl w-[2.66em] h-[2.66em] flex items-center justify-center mx-auto group-hover:bg-primary-content group-hover:text-primary transition-colors duration-200">
                      <FontAwesomeIcon icon={item.faIcon} />
                    </div>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                    <p className="text-xl group-hover:text-primary-content transition-colors duration-200 mt-4 lg:mt-8">
                      {item.text}
                    </p>
                  </AnimationOnScroll>
                </AnimationOnScroll>
              );
            })}
          </div>
        </div>
      </div>
      <div id="where-you-want-to-be">
        <div className="container container-padding">
          <div className="flex max-lg:flex-col items-center max-lg:text-center">
            <section className="flex-shrink-0 lg:mr-auto">
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
              >
                <h2 className="font-extrabold text-4xl lg:max-w-[14ch]">
                  <FormattedMessage
                    defaultMessage="¿Dónde quieres estar?"
                    id="N8EIXa"
                  />
                </h2>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
              >
                <div className="mt-6 text-xl max-w-[42ch]">
                  <p>
                    <FormattedMessage
                      defaultMessage="Aumenta la visibilidad de tu marca en TikTok, Facebook, Instagram o YouTube a través de contenido auténtico, alianzas con los creadores más TOP y pauta digital."
                      id="/cuErz"
                    />
                  </p>
                  <br />
                  <p>
                    <FormattedMessage
                      defaultMessage="Nos encargamos de todo, desde la contratación de Famosos hasta la gestión de las publicaciones."
                      id="+1ZeAv"
                    />
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
              >
                <div className="mt-12">
                  <a
                    href={CLIENT_ONBOARDING_PATH}
                    className="btn btn-lg btn-primary"
                  >
                    <FormattedMessage
                      defaultMessage="Me interesa"
                      id="xv+D45"
                      description="Call-to-action a agendar una reunión"
                    />
                  </a>
                </div>
              </AnimationOnScroll>
            </section>
            <AnimationOnScroll
              animateIn="customAnimate__fadeInUp"
              animateOnce
              className="lg:ml-16 max-lg:mt-8 flex-shrink flex-grow-0"
            >
              <Image
                src="/assets/images/home/where-you-want-to-be.png"
                alt=""
                width={784}
                height={803.5}
                className="object-cover w-full max-w-4xl"
              />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div id="testimonials">
        <div className="container container-padding">
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <h2 className="font-extrabold text-4xl text-center">
              <FormattedMessage
                defaultMessage="Nuestros clientes dicen"
                id="+bi0Hb"
              />
            </h2>
          </AnimationOnScroll>
          <div className="hidden lg:flex gap-10 mt-16">{testimonialsCards}</div>
          <Carousel
            className="gap-8"
            containerClassName="lg:hidden mt-8"
            indicatorButtons
          >
            {testimonialsCards}
          </Carousel>
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <div className="text-center mt-8 lg:mt-16">
              <a
                href={CLIENT_ONBOARDING_PATH}
                className="btn btn-primary btn-lg text-xl font-extrabold"
              >
                <FormattedMessage
                  defaultMessage="Empezar ahora"
                  id="tpFUnm"
                  description="Call-to-action a agendar una reunión"
                />
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </PageLayout>
  );
}
