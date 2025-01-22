import Header from "@/modules/shared/components/header-new/header";
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
      <div className="bg-[#EFDEC6] text-black">
        <Header />
        <div id="terms-and-conditions">
          <div className="container mx-auto py-16">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vQ5nwJP8LkWqx80wL3vLr0EKds1zC6Wp7XyIeAD8KW9mnuyWzTY76-_9YX-3debycgadtgCOPPVHVo4/pub?embedded=true"
              className="w-full h-screen bg-base-100 max-w-[calc(596pt_+_16px)] mx-auto"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
