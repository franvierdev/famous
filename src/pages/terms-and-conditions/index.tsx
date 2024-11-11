import { TermsAndConditionsPage } from "@/modules/terms-and-conditions/terms-and-conditions-page";
import { NextSeo } from "next-seo";
import { useIntl } from "react-intl";

export default function TermsAndConditions() {
  const { formatMessage } = useIntl();

  return (
    <>
      <NextSeo
        title={formatMessage({
          defaultMessage: "Términos y condiciones",
          id: "o24Y39",
        })}
      />
      <TermsAndConditionsPage />
    </>
  );
}
