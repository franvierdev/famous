import { OurServicesPage } from "@/modules/our-services/our-services-page";
import { NextSeo } from "next-seo";
import { useIntl } from "react-intl";

export default function OurServices() {
  const { formatMessage } = useIntl();

  return (
    <>
      <NextSeo
        title={formatMessage({
          defaultMessage: "Servicios",
          id: "DQj22Z"
        })}
      />
      <OurServicesPage />
    </>
  );
}
