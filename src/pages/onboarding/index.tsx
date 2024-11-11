import { OnboardingPage } from "@/modules/onboarding/onboarding-page";
import { NextSeo } from "next-seo";
import { useIntl } from "react-intl";

export default function Onboarding() {
  const { formatMessage } = useIntl();

  return (
    <>
      <NextSeo
        title={formatMessage({
          defaultMessage: "Inducción",
          id: "2iL4LE"
        })}
      />
      <OnboardingPage />
    </>
  );
}
