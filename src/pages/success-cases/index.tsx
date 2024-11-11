import { SuccessStoriesPage } from "@/modules/success-stories/success-stories-page";
import { NextSeo } from "next-seo";
import { useIntl } from "react-intl";

export default function SuccessCases() {
  const { formatMessage } = useIntl();

  return (
    <>
      <NextSeo
        title={formatMessage({
          defaultMessage: "Casos de éxito",
          id: "fWPJBy",
        })}
      />
      <SuccessStoriesPage />
    </>
  );
}
