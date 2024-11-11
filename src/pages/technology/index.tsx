import { TechnologyPage } from "@/modules/technology/technology-page";
import { NextSeo } from "next-seo";
import { useIntl } from "react-intl";

export default function Technology() {
  const { formatMessage } = useIntl();
  return (
    <>
      <NextSeo
        title={formatMessage({
          defaultMessage: "Tecnología",
          id: "DPWnvm"
        })}
      />
      <TechnologyPage />
    </>
  );
}
