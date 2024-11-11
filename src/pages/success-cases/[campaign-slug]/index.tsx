import { PageLayout } from "@/modules/shared/components/page-layout";
import { Campaign } from "@/modules/success-stories/models/campaign";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FormattedMessage, useIntl } from "react-intl";
import CountUp from "react-countup";
import { useCallback } from "react";
import Link from "next/link";
import { CLIENT_ONBOARDING_PATH } from "@/modules/shared/constants/paths";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from "clsx";
import { useRouter } from "next/router";
import { useGetCampaigns } from "../../../modules/success-stories/hooks/use-get-campaigns";
import { Carousel } from "@/modules/shared/components/carousel";

function MoreSuccessCasesCampaignLink({ campaign }: { campaign: Campaign }) {
  return (
    <Link
      href={{
        pathname: "/success-cases/[campaign-slug]",
        query: {
          "campaign-slug": campaign.slug,
        },
      }}
      className="bg-gradient-to-t from-transparent to-white/20 relative group overflow-hidden"
    >
      <Image
        src={campaign.bannersUrls.square}
        alt=""
        width={779}
        height={388}
        className="mix-blend-overlay absolute w-full h-full object-cover group-hover:scale-110 transition-transform"
      />
      <div className="p-6 lg:px-12 lg:py-16 flex flex-col items-center justify-center relative z-10">
        <div className="[&>*]:h-8 lg:[&>*]:h-16 [&>*]:w-auto">
          {campaign.brand.logo}
        </div>
        <p className="text-2xl lg:text-4xl font-bold text-center mt-6 lg:mt-12">
          {campaign.name}
        </p>
        <span className="link text-lg lg:text-2xl font-bold mt-10 lg:mt-20 capitalize">
          <FormattedMessage defaultMessage="Ver caso de éxito" id="wZ+/MR" />
          <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
        </span>
      </div>
    </Link>
  );
}

export default function SuccessCaseDetails() {
  const router = useRouter<"/success-cases/[campaign-slug]">();
  const { formatMessage, formatNumber } = useIntl();
  const campaigns = useGetCampaigns();
  const campaign = campaigns.find(
    ({ slug }) => slug === router.query["campaign-slug"]
  );

  const percentageFormattingFn = useCallback(
    (value: number | bigint) =>
      formatNumber(value, {
        style: "percent",
        maximumFractionDigits: 2,
      }),
    [formatNumber]
  );

  if (!campaign) return null; // 404.

  const contentsElements = campaign.contents.map(({ type, id }) => (
    <AnimationOnScroll
      key={id}
      animateIn="customAnimate__fadeInUp"
      animateOnce
      className="aspect-[9/16] lg:rounded-lg overflow-hidden w-full"
    >
      <iframe
        src={
          type === "tiktok"
            ? `https://www.tiktok.com/player/v1/${id}?description=1&loop=1`
            : `https://www.instagram.com/reel/${id}/embed`
        }
        className="w-full h-full"
      ></iframe>
    </AnimationOnScroll>
  ));

  return (
    <>
      <NextSeo title={campaign.name} />
      <PageLayout>
        <div id="hero">
          <div className="lg:container container-padding">
            <div className="bg-gradient-to-b from-[#BEBFDC] to-[#7D40FF] relative">
              <Image
                src={campaign.bannersUrls.wide}
                alt=""
                width={1597}
                height={338}
                className="mix-blend-overlay absolute w-full h-full object-cover opacity-50"
              />
              <div className="py-6 max-lg:container lg:p-12 flex flex-col items-center justify-center gap-3 lg:gap-6">
                <div className="[&>*]:h-10 lg:[&>*]:h-16 [&>*]:w-auto">
                  {campaign.brand.logo}
                </div>
                <h1 className="text-3xl lg:text-6xl font-bold text-center lg:px-24">
                  {campaign.name}
                </h1>
                <div className="lg:absolute lg:self-end flex lg:flex-col gap-2 lg:gap-6">
                  {campaign.socialNetworks.map((socialNetwork) => (
                    <div
                      key={socialNetwork}
                      className="bg-base-100 rounded-full w-10 lg:w-20 h-10 lg:h-20 flex items-center justify-center"
                    >
                      <FontAwesomeIcon
                        icon={
                          socialNetwork === "instagram" ? faInstagram : faTiktok
                        }
                        className="text-lg lg:text-4xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-base-content text-base-100 py-6 lg:py-14 lg:px-20">
              <h2 className="text-xl lg:text-5xl font-bold lg:max-w-5xl mx-auto text-center max-lg:container">
                {campaign.summary}
              </h2>
            </div>
          </div>
        </div>
        <div id="the-challenge">
          <div className="container container-padding">
            <div className="lg:flex items-center">
              <div className="lg:max-w-[38.75rem] space-y-8 lg:space-y-16">
                <section className="space-y-4 lg:space-y-8">
                  <h2 className="text-6xl font-bold capitalize">
                    <FormattedMessage defaultMessage="El desafío" id="UlbbCt" />
                  </h2>
                  <p className="text-xl">{campaign.challenge}</p>
                </section>
                <section className="space-y-4 lg:space-y-8">
                  <h2 className="text-6xl font-bold capitalize">
                    <FormattedMessage
                      defaultMessage="La solución creativa"
                      id="aQPDMb"
                    />
                  </h2>
                  <p className="text-xl">{campaign.solution}</p>
                </section>
              </div>
              <div className="mx-auto max-lg:mt-8">
                <div className="mockup-phone">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo">
                      {campaign.slug === "telcel-torneo-gaming-puebla" ? (
                        <iframe
                          src="https://www.instagram.com/reel/C6UmHnIOuKT/embed"
                          width={376}
                          height={704}
                        ></iframe>
                      ) : (
                        <Image
                          src={campaign.cover.image}
                          width={376}
                          height={704}
                          className="object-cover"
                          alt={formatMessage(
                            {
                              defaultMessage:
                                "Imagen de portada de {campaignName}",
                              id: "4dYnaK",
                            },
                            {
                              campaignName: campaign.name,
                            }
                          )}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {campaign.cover.video && (
          <div id="cover-video">
            <div className="lg:container container-padding">
              <iframe
                className="w-full h-auto aspect-video lg:rounded-lg"
                src={campaign.cover.video}
                width="1280"
                height="720"
                allow="autoplay"
                ref={(element) =>
                  element?.contentDocument &&
                  (element.contentDocument.body.style.backgroundColor =
                    "#121420")
                }
              ></iframe>
            </div>
          </div>
        )}
        {campaign.contents.length > 0 && (
          <div id="the-content">
            <div className="lg:container container-padding">
              <h2 className="text-6xl font-bold capitalize text-center">
                <FormattedMessage defaultMessage="El contenido" id="5C42Rg" />
              </h2>
              <div
                className={classes(
                  "grid mx-auto gap-6 xl:gap-10 mt-12 lg:mt-24 max-lg:hidden",
                  campaign.contents.length % 3 === 0
                    ? "grid-cols-3"
                    : "grid-cols-2 max-w-4xl"
                )}
              >
                {contentsElements}
              </div>
              <Carousel
                className="gap-8"
                containerClassName="lg:hidden mt-12"
                indicatorButtons
                arrowButtons
              >
                {contentsElements}
              </Carousel>
            </div>
          </div>
        )}
        <div id="the-results">
          <div className="container container-padding">
            <h2 className="text-6xl font-bold capitalize text-center">
              <FormattedMessage defaultMessage="Los resultados" id="i5RgA+" />
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              <div className="bg-primary p-2 lg:py-6 lg:px-2 text-center space-y-2">
                <p className="text-3xl lg:text-6xl font-bold">
                  <CountUp
                    end={campaign.results.views}
                    formattingFn={formatNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-2xl lg:text-4xl font-bold">Views</p>
              </div>
              <div className="bg-primary p-2 lg:py-6 lg:px-2 text-center space-y-2">
                <p className="text-3xl lg:text-6xl font-bold">
                  <CountUp
                    end={campaign.results.likes}
                    formattingFn={formatNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-2xl lg:text-4xl font-bold">Likes</p>
              </div>
              <div className="bg-primary p-2 lg:py-6 lg:px-2 text-center space-y-2">
                <p className="text-3xl lg:text-6xl font-bold">
                  <CountUp
                    end={campaign.results.comments}
                    formattingFn={formatNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-2xl lg:text-4xl font-bold">Comments</p>
              </div>
              <div className="bg-primary p-2 lg:py-6 lg:px-2 text-center space-y-2">
                <p className="text-3xl lg:text-6xl font-bold">
                  <CountUp
                    end={campaign.results.shares}
                    formattingFn={formatNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-2xl lg:text-4xl font-bold">Shares</p>
              </div>
              <div className="bg-primary p-2 lg:py-6 lg:px-2 text-center space-y-2">
                <p className="text-3xl lg:text-6xl font-bold">
                  <CountUp
                    end={campaign.results.saves}
                    formattingFn={formatNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-2xl lg:text-4xl font-bold">Saved</p>
              </div>
              <div className="bg-primary p-2 lg:py-6 lg:px-2 text-center space-y-2">
                <p className="text-3xl lg:text-6xl font-bold">
                  <CountUp
                    end={campaign.results.averageEngagementRate}
                    formattingFn={percentageFormattingFn}
                    decimals={4}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-2xl lg:text-4xl font-bold">
                  Average Engagement Rate
                </p>
              </div>
            </div>
            <p className="text-xl text-center container-padding pb-0">
              {campaign.results.description}
            </p>
          </div>
        </div>
        <div
          id="testimonials"
          className="[&>*]:hover:scale-105 [&>*]:transition-transform"
        >
          {campaign.testimonials}
        </div>
        <div id="more-cases">
          <div className="container container-padding">
            <h2 className="text-4xl font-bold text-center capitalize">
              <Link
                href="/success-cases"
                className="link hover:text-primary transition-colors"
              >
                <FormattedMessage
                  defaultMessage="Ver más casos de éxito"
                  id="Emkr7K"
                />
              </Link>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 container-padding pb-0">
              <MoreSuccessCasesCampaignLink campaign={campaigns[0]} />
              <MoreSuccessCasesCampaignLink campaign={campaigns[1]} />
            </div>
          </div>
        </div>
        <div id="call-to-action">
          <div className="container container-padding text-center space-y-8">
            <h2 className="text-4xl font-bold">
              <FormattedMessage
                defaultMessage="¿Quieres construir una marca icónica?"
                id="pYuO5I"
              />
            </h2>
            <a
              href={CLIENT_ONBOARDING_PATH}
              className="btn btn-gradient btn-primary btn-lg btn-wide text-2xl"
            >
              <FormattedMessage
                defaultMessage="Charlemos"
                id="djjEf0"
                description="Call-to-action a agendar una reunión"
              />
            </a>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
