import { PageLayout } from "@/modules/shared/components/page-layout";
import { CLIENT_ONBOARDING_PATH } from "@/modules/shared/constants/paths";
import { useLoad } from "@/modules/shared/hooks/use-load";
import Image from "next/image";
import { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FormattedMessage } from "react-intl";
import classes from "clsx";

export function TechnologyPage() {
  const heroBackgroundImageRef = useRef<HTMLImageElement>(null!);
  const [heroBackgroundImageIsLoaded, onLoadHeroBackgroundImage] = useLoad();

  return (
    <PageLayout>
      <div
        id="technology-hero"
        className="relative top-[calc(theme(spacing.28)_*_-1)] -mb-28"
      >
        <Image
          ref={heroBackgroundImageRef}
          fill
          className={classes(
            "object-center object-cover pointer-events-none animate__animated opacity-0",
            heroBackgroundImageIsLoaded && "animate__fadeIn"
          )}
          src="/assets/images/technology/hero-background.png"
          alt=""
          onLoad={onLoadHeroBackgroundImage}
          quality={50}
        />
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative lg:container-lg lg:flex items-center pt-36 pb-8 lg:pt-28 lg:pb-16 h-full">
          <section
            className={classes(
              "max-lg:container-lg max-lg:flex flex-1 shrink-0 flex-col items-center max-lg:text-center animate__animated opacity-0 [animation-delay:600ms]",
              heroBackgroundImageIsLoaded && "customAnimate__fadeInUp"
            )}
          >
            <h1 className="font-extrabold text-5xl leading-tight max-w-[17ch]">
              <FormattedMessage
                defaultMessage="Impulsa tu marca de la forma más inteligente"
                id="qAdn5c"
              />
            </h1>
            <p className="mt-4 max-w-lg text-lg">
              <FormattedMessage
                defaultMessage="Si buscas una estrategia que combine tecnología, acciones personalizadas de marketing y un equipo 24/7 para realizarlas, la encuentras en Famosos Ads."
                id="n+UBc/"
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
            </div>
          </section>
          <div
            className={classes(
              "flex-1 flex flex-wrap justify-end gap-4 ml-14 max-lg:hidden animate__animated [animation-delay:800ms] opacity-0",
              heroBackgroundImageIsLoaded && "animate__fadeIn"
            )}
          >
            <Image
              width={503}
              height={355}
              alt=""
              src="/assets/images/technology/hero-grid-1.png"
              className="rounded-lg w-[57.5%]"
            />
            <Image
              width={251}
              height={284}
              alt=""
              src="/assets/images/technology/hero-grid-2.png"
              className="rounded-lg self-end w-[28%]"
            />
            <Image
              width={327}
              height={244}
              alt=""
              src="/assets/images/technology/hero-grid-3.png"
              className="rounded-lg self-start w-[36.5%]"
            />
            <Image
              width={334}
              height={291}
              alt=""
              src="/assets/images/technology/hero-grid-4.png"
              className="rounded-lg w-[37.25%]"
            />
          </div>
        </div>
      </div>
      <div id="technology-insights">
        <div className="container container-padding">
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <p className="text-base lg:text-xl text-center max-w-[70ch] mx-auto">
              <FormattedMessage
                defaultMessage="Nuestro software, basado en inteligencia artificial y exclusivo para advertisers, integra la data más compleja relativa a las audiencias e influencers, optimiza los diferentes contenidos en cada fase de la campaña previa a la publicación, al tiempo que muestra las estadísticas clave, como número de visualizaciones o porcentaje de alcance, en tableros comparativos para medir el impacto real."
                id="8WYtKL"
              />
            </p>
          </AnimationOnScroll>
          <div className="flex flex-col lg:flex-row max-lg:gap-y-10 max-xl:items-center mt-12 lg:mt-24">
            <div className="flex-1 flex flex-col justify-center">
              <section className="lg:pr-20">
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <h2 className="text-4xl font-extrabold text-secondary max-w-[14ch]">
                    <FormattedMessage
                      defaultMessage="Selección de influencers"
                      id="+bgKq/"
                    />
                  </h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-lg mt-10">
                    <FormattedMessage
                      defaultMessage="A través de nuestro software, y de acuerdo a los perfiles definidos previamente en el brief, se realiza la selección de los Influencers para la campaña. El listado de prospectos se envía para aprobación o, de ser requeridos, se realizan los ajustes en el grupo para tener a los talentos más relevantes para lograr los objetivos."
                      id="HygQrt"
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
                      className="btn btn-primary btn-lg btn-link px-0"
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
            <div className="flex-1">
              <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <Image
                  className="w-full object-cover"
                  src="/assets/images/technology/insights-1.png"
                  alt=""
                  width={796.5}
                  height={632.61}
                />
              </AnimationOnScroll>
            </div>
          </div>
          <div className="flex flex-col-reverse max-lg:gap-y-10 lg:flex-row max-xl:items-center max-lg:mt-10">
            <div className="flex-1">
              <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <Image
                  className="w-full object-cover"
                  src="/assets/images/technology/insights-2.png"
                  alt=""
                  width={796.5}
                  height={632.61}
                />
              </AnimationOnScroll>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <section className="lg:pl-20">
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <h2 className="text-4xl font-extrabold text-secondary max-w-[12ch]">
                    <FormattedMessage
                      defaultMessage="Aprobación de contenidos"
                      id="RHQwbF"
                    />
                  </h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-xl mt-10">
                    <FormattedMessage
                      defaultMessage="También está integrada en el software la planeación creativa, con la información detallada sobre storytelling, música, etiquetas, llamados a la acción propuestos, localización y cronograma. Adicionalmente, nuestros partners pueden visualizar directamente en su tablero los contenidos en formato borrador desarrollados por los Influencers para aprobación o, de ser necesario, hacer los ajustes finales."
                      id="fa28to"
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
                      className="btn btn-primary btn-lg btn-link px-0"
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
          {/* <div className="flex flex-col lg:flex-row max-xl:items-center max-lg:mt-10 max-lg:gap-y-10">
            <div className="flex-1 flex flex-col justify-center">
              <section className="lg:pr-20">
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <h2 className="text-4xl font-extrabold text-secondary max-w-[14ch]">
                    <FormattedMessage
                      defaultMessage="Manejo de calendario"
                      id="cX2wJ3"
                    />
                  </h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-lg mt-10">
                    <FormattedMessage
                      defaultMessage="En un mismo tablero se muestran las fechas de publicación de cada video, reel, post o historia que realizarán los Influencers contratados. Por mes e incluso por día, el flujo del contenido se estructura fácil y rápidamente, lo que incide en el seguimiento en tiempo real que permite nuestra tecnología inteligente."
                      id="BuFYwY"
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
                      className="btn btn-primary btn-lg btn-link px-0"
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
            <div className="flex-1">
              <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <Image
                  className="w-full object-cover"
                  src="/assets/images/technology/insights-3.png"
                  alt=""
                  width={796.5}
                  height={632.61}
                />
              </AnimationOnScroll>
            </div>
          </div> */}
          <div className="flex flex-col lg:flex-row max-xl:items-center max-lg:mt-10 max-lg:gap-y-10">
            <div className="flex-1 flex flex-col justify-center">
              <section className="lg:pr-20">
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <h2 className="text-4xl font-extrabold text-secondary max-w-[12ch]">
                    <FormattedMessage
                      defaultMessage="Resultados y reporte"
                      id="++18pi"
                    />
                  </h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <p className="text-xl mt-10">
                    <FormattedMessage
                      defaultMessage="Todas las estadísticas de la campaña se despliegan a un clic. Nuestros aliados podrán analizar el alcance obtenido por cada Influencer, así como el total de “Me Gusta”, las impresiones, cuentas alcanzadas, número de reproducciones, hasta los países con mayor índice de viralización, entre otros datos de la campaña."
                      id="cE5UBh"
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
                      className="btn btn-primary btn-lg btn-link px-0"
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
            <div className="flex-1">
              <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <Image
                  className="w-full h-full object-cover"
                  src="/assets/images/technology/insights-4.png"
                  alt=""
                  width={796.5}
                  height={632.61}
                />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials">
        <div className="container container-padding">
          <AnimationOnScroll
            className="bg-base-200 flex-1 flex flex-col rounded-md p-6 lg:p-12"
            animateIn="customAnimate__fadeInUp"
            delay={100}
            animateOnce
          >
            <Image
              src="/assets/images/quotes-icon.png"
              alt=""
              className="w-10 lg:w-14 object-contain"
              width={111}
              height={82.6}
            />
            <p className="text-lg leading-relaxed lg:leading-loose mt-6 mb-6 lg:mb-10">
              <FormattedMessage
                defaultMessage="Actualmente estamos estableciendo una asociación con Famosos Ads. Su tecnología ha transformado nuestro abastecimiento de influencers con su UX. Además, administrar campañas y mantener a nuestro equipo alineado con los estados de actividad ha sido increíblemente beneficioso."
                id="d6//qW"
              />
            </p>
            <div className="flex items-center mt-auto gap-4">
              <div className="avatar">
                <div className="rounded-full w-20 h-20">
                  <Image
                    src={require("public/assets/images/technology/testimonial-avatar.png")}
                    alt="Federico Javier Ortiz"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">
                  {
                    // eslint-disable-next-line formatjs/no-literal-string-in-jsx
                    "Federico Javier Ortiz"
                  }
                </p>
                <p className="font-semibold mt-2">
                  <FormattedMessage
                    defaultMessage="Director de Crecimiento Comercial en TelevisaUnivision"
                    id="phx4v9"
                  />
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </PageLayout>
  );
}
