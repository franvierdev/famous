import { Carousel } from "@/modules/shared/components/carousel";
import { PageLayout } from "@/modules/shared/components/page-layout";
import {
  CLIENT_ONBOARDING_PATH,
  INFLUENCER_ONBOARDING_PATH
} from "@/modules/shared/constants/paths";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FormattedMessage } from "react-intl";

const testimonialsCards = Array(3)
  .fill(null)
  .map((_, index) => (
    <AnimationOnScroll
      className="bg-base-200 flex-1 rounded-md p-6 lg:p-12"
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
      <p className="text-xl leading-relaxed lg:leading-loose mt-6">
        There are many variations from into passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomized words which dont look even slightly believable.
      </p>
      <div className="mt-6 lg:mt-10 flex items-center">
        <div className="avatar">
          <div className="rounded-full">
            <Image
              src="/assets/images/avatar-blank.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="ml-6">
          <p className="font-bold text-xl">Mr John</p>
          <p className="font-semibold mt-2">Web Developer</p>
        </div>
      </div>
    </AnimationOnScroll>
  ));

export function OnboardingPage() {
  return (
    <PageLayout>
      <div id="onboarding-hero">
        <div className="container container-padding !pt-4 lg:!pt-8">
          <section className="text-center">
            <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
              <h1 className="font-extrabold max-w-[11em] mx-auto text-5xl">
                <FormattedMessage
                  defaultMessage="Vamos a romperla en tu próxima campaña"
                  id="+WNkYT"
                />
              </h1>
            </AnimationOnScroll>
            <div className="max-w-[22em] mx-auto text-xl mt-8">
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
                delay={400}
              >
                <p>
                  <FormattedMessage
                    defaultMessage="¿Quieres trabajar con los #1 en Influencer Marketing de Latinoamérica?"
                    id="w0iRTp"
                  />
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
                delay={600}
              >
                <p>
                  <FormattedMessage
                    defaultMessage="Haz clic en uno de los botones y muy pronto estaremos en contacto contigo."
                    id="4KOOum"
                  />
                </p>
              </AnimationOnScroll>
            </div>
            <div className="flex space-x-4 mt-8 max-w-2xl mx-auto">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                className="flex-1"
                animateOnce
                delay={1000}
              >
                <a
                  href={CLIENT_ONBOARDING_PATH}
                  className="btn btn-primary w-full"
                >
                  <FormattedMessage defaultMessage="Soy Empresa" id="BnNgKk" />
                </a>
              </AnimationOnScroll>
              <AnimationOnScroll
                className="flex-1"
                animateIn="animate__fadeInRight"
                animateOnce
                delay={1000}
              >
                <a
                  href={INFLUENCER_ONBOARDING_PATH}
                  className="btn btn-secondary w-full"
                >
                  <FormattedMessage defaultMessage="Soy creador" id="Z88M6i" />
                </a>
              </AnimationOnScroll>
            </div>
          </section>
        </div>
      </div>
      <div
        id="onboarding-our-clients"
        className="bg-base-content text-base-100"
      >
        <div className="lg:container container-padding">
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <h2 className="max-lg:container text-2xl font-extrabold text-center">
              <FormattedMessage
                defaultMessage="Clientes con los que hemos trabajado"
                id="bDtBwL"
              />
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <div className="lg:mt-10 overflow-x-auto overflow-y-hidden">
              <Image
                src="/assets/images/home/clients-logos.png"
                alt=""
                width={1624}
                height={144.58}
                className="w-auto lg:w-full max-lg:max-w-none max-lg:object-cover h-40 lg:h-auto lg:-ml-2 max-lg:-mb-10 invert"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div id="onboarding-testimonials">
        <div className="container container-padding">
          <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
            <h2 className="font-extrabold text-4xl text-center max-w-[19em] mx-auto text-primary text-opacity-90">
              <FormattedMessage
                defaultMessage="Los creadores de contenido nos aman y nosotros a ellos"
                id="LVnMaJ"
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
              <button
                type="button"
                onClick={() => scrollTo({ behavior: "smooth", top: 0 })}
                className="btn btn-primary btn-lg text-xl font-extrabold"
              >
                <FormattedMessage defaultMessage="Empezar ahora" id="Qxz68v" />
              </button>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </PageLayout>
  );
}
