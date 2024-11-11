import { PageLayout } from "@/modules/shared/components/page-layout";
import Image from "next/image";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { useGetCampaigns } from "../hooks/use-get-campaigns";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from "clsx";

export function SuccessStoriesPage() {
  const campaigns = useGetCampaigns();

  return (
    <PageLayout>
      <div id="success-stories">
        <div className="container-padding pb-0">
          <div className="text-center">
            {/*  animate__animated customAnimate__fadeInUp */}
            <h1 className="text-5xl font-bold">
              <FormattedMessage
                defaultMessage="Nuestras campañas funcionan"
                id="7lfE0F"
              />
            </h1>
          </div>
          <div className="bg-primary mt-12">
            <div className="container container-padding">
              <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
                {[campaigns[0], campaigns[1], campaigns[2]].map(
                  (campaign, index) => (
                    <Link
                      key={campaign.slug}
                      href={{
                        pathname: "/success-cases/[campaign-slug]",
                        query: {
                          "campaign-slug": campaign.slug,
                        },
                      }}
                      className={classes(
                        "relative group overflow-hidden aspect-square",
                        index === 2 && "lg:hidden"
                      )}
                    >
                      <Image
                        src={campaign.bannersUrls.square}
                        alt=""
                        width={736}
                        height={736}
                        className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform opacity-60"
                      />
                      <div className="p-4 lg:px-12 lg:py-16 flex flex-col items-center relative z-10 h-full bg-gradient-to-b from-black/40 to-black/80 lg:group-hover:opacity-0 transition-opacity">
                        <div className="[&>*]:h-10 lg:[&>*]:h-20 [&>*]:w-auto my-auto">
                          {campaign.brand.logo}
                        </div>
                        <p className="text-2xl lg:text-5xl font-bold text-center mt-6 lg:mt-12">
                          {campaign.name}
                        </p>
                        <div className="bg-primary-content text-primary text-lg lg:text-2xl p-3 lg:p-6 text-center w-full mt-4 lg:mt-9">
                          <p className="max-w-[36rem] mx-auto">
                            {campaign.summary}
                          </p>
                        </div>
                      </div>
                      <div className="px-12 py-16 absolute inset-0 flex flex-col z-20 h-full bg-gradient-to-b from-[#BEBFDC]/50 to-primary/80 opacity-0 lg:group-hover:opacity-100 transition-opacity">
                        <div className="[&>*]:h-16 [&>*]:w-auto">
                          {campaign.brand.logo}
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-16 mt-20 w-full">
                          <div className="space-y-2">
                            <p className="text-5xl font-bold">
                              <FormattedNumber value={campaign.results.views} />
                            </p>
                            <p className="text-3xl font-bold">Views</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-5xl font-bold">
                              <FormattedNumber value={campaign.results.likes} />
                            </p>
                            <p className="text-3xl font-bold">Likes</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-5xl font-bold">
                              <FormattedNumber
                                value={campaign.results.comments}
                              />
                            </p>
                            <p className="text-3xl font-bold">Comments</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-5xl font-bold">
                              <FormattedNumber
                                value={campaign.results.shares}
                              />
                            </p>
                            <p className="text-3xl font-bold">Shares</p>
                          </div>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="link text-4xl font-bold capitalize">
                            <FormattedMessage
                              defaultMessage="Ver caso de éxito"
                              id="wZ+/MR"
                            />
                          </span>
                          <div className="btn btn-lg btn-circle btn-white translate-x-full group-hover:translate-x-0">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                )}
                <Link
                  key={campaigns[2].slug}
                  href={{
                    pathname: "/success-cases/[campaign-slug]",
                    query: {
                      "campaign-slug": campaigns[2].slug,
                    },
                  }}
                  className="relative group overflow-hidden col-span-full max-lg:hidden"
                >
                  <Image
                    src={campaigns[2].bannersUrls.wide}
                    alt=""
                    width={1597}
                    height={388}
                    className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform opacity-60"
                  />
                  <div className="px-12 py-16 flex flex-col items-center justify-between relative z-10 h-full bg-gradient-to-b from-black/40 to-black/80 group-hover:opacity-0 transition-opacity">
                    <div className="[&>*]:h-20 [&>*]:w-auto">
                      {campaigns[2].brand.logo}
                    </div>
                    <p className="text-5xl font-bold text-center mt-4">
                      {campaigns[2].name}
                    </p>
                    <div className="bg-primary-content text-primary text-2xl p-6 text-center w-full max-w-2xl mt-4">
                      <p className="max-w-sm mx-auto">{campaigns[2].summary}</p>
                    </div>
                  </div>
                  <div className="px-12 py-16 absolute inset-0 flex flex-col z-20 h-full bg-gradient-to-b from-[#BEBFDC]/50 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-12">
                      <div className="[&>*]:h-16 [&>*]:w-auto">
                        {campaigns[2].brand.logo}
                      </div>
                      <span className="text-5xl font-bold">
                        {campaigns[2].name}
                      </span>
                      <div className="flex items-center gap-40 ml-auto">
                        <span className="link text-4xl font-bold capitalize">
                          <FormattedMessage
                            defaultMessage="Ver caso de éxito"
                            id="wZ+/MR"
                          />
                        </span>
                        <div className="btn btn-lg btn-circle btn-white translate-x-full group-hover:translate-x-0">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-x-4 gap-y-16 mt-auto w-full">
                      <div className="space-y-4">
                        <p className="text-5xl font-bold">
                          <FormattedNumber value={campaigns[2].results.views} />
                        </p>
                        <p className="text-3xl font-bold">Views</p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-5xl font-bold">
                          <FormattedNumber value={campaigns[2].results.likes} />
                        </p>
                        <p className="text-3xl font-bold">Likes</p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-5xl font-bold">
                          <FormattedNumber
                            value={campaigns[2].results.comments}
                          />
                        </p>
                        <p className="text-3xl font-bold">Comments</p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-5xl font-bold">
                          <FormattedNumber
                            value={campaigns[2].results.shares}
                          />
                        </p>
                        <p className="text-3xl font-bold">Shares</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="showcase-video">
        <div className="lg:container container-padding">
          <iframe
            className="w-full h-auto aspect-video lg:rounded-lg"
            src="https://drive.google.com/file/d/12rQ3YoaTFPcYwz3Y8Ry79Qj6KYjl1-fy/preview"
            width="1280"
            height="720"
            allow="autoplay"
            ref={(element) =>
              element?.contentDocument &&
              (element.contentDocument.body.style.backgroundColor = "#121420")
            }
          ></iframe>
        </div>
      </div>
      <div id="more-success-cases">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
            {campaigns.slice(3).map((campaign) => (
              <Link
                key={campaign.slug}
                href={{
                  pathname: "/success-cases/[campaign-slug]",
                  query: {
                    "campaign-slug": campaign.slug,
                  },
                }}
                className="relative group overflow-hidden"
              >
                <Image
                  src={campaign.bannersUrls.square}
                  alt=""
                  width={736}
                  height={736}
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <div className="p-4 lg:px-12 lg:py-16 flex flex-col items-center relative z-10 h-full bg-gradient-to-b from-black/40 to-black/80 lg:group-hover:opacity-0 transition-opacity">
                  <div className="[&>*]:h-10 lg:[&>*]:h-20 [&>*]:w-auto">
                    {campaign.brand.logo}
                  </div>
                  <p className="text-xl lg:text-4xl font-bold text-center mt-6 lg:mt-12">
                    {campaign.name}
                  </p>
                  <div className="bg-primary-content text-primary lg:text-2xl p-3 lg:p-6 text-center w-full mt-4 lg:mt-9">
                    <p className="max-w-[37rem] mx-auto">{campaign.summary}</p>
                  </div>
                </div>
                <div className="px-12 py-16 absolute inset-0 flex flex-col items-center z-20 h-full bg-gradient-to-b from-[#BEBFDC]/50 to-primary/80 opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <div className="[&>*]:h-20 [&>*]:w-auto">
                    {campaign.brand.logo}
                  </div>
                  <p className="text-4xl font-bold text-center mt-12">
                    {campaign.name}
                  </p>
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="link text-4xl font-bold capitalize">
                      <FormattedMessage
                        defaultMessage="Ver caso de éxito"
                        id="wZ+/MR"
                      />
                    </span>
                    <div className="btn btn-lg btn-circle btn-white translate-x-full group-hover:translate-x-0">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
