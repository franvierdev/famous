import Header from "@/modules/shared/components/header-new/header";
import { NextSeo } from "next-seo";
import { useIntl } from "react-intl";

export default function TermsAndConditions() {
  const { formatMessage } = useIntl();

  return (
    <>
      <NextSeo
        title={formatMessage({
          defaultMessage: "Politicas de privacidad",
          id: "dcTUhK",
        })}
      />
      <div className="bg-[#EFDEC6] text-black">
        <Header />
        <div id="terms-and-conditions">
          <div className="container mx-auto py-16">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vQFSTKkteHa4t7dAEc2kfgiOTWMKOWSHvQbeoRa0IoI3iXojvL3ZXxACjwLwthYQ1WYP4XcjxKteryW/pub?embedded=true"
              className="w-full h-screen bg-base-100 max-w-[calc(596pt_+_16px)] mx-auto"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
