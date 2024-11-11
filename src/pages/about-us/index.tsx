import { AboutUsPage } from "@/modules/about-us/about-us-page";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useIntl } from "react-intl";

export default function AboutUs() {
  const { formatMessage } = useIntl();

  return (
    <>
      <NextSeo
        title={formatMessage({
          defaultMessage: "Nosotros",
          id: "G3TUL4"
        })}
      />
      <AboutUsPage />
    </>
  );
}
