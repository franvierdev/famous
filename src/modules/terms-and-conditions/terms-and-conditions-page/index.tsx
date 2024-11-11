import { PageLayout } from "@/modules/shared/components/page-layout";

export function TermsAndConditionsPage() {
  return (
    <PageLayout>
      <div id="terms-and-conditions">
        <div className="container py-16">
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vQFSTKkteHa4t7dAEc2kfgiOTWMKOWSHvQbeoRa0IoI3iXojvL3ZXxACjwLwthYQ1WYP4XcjxKteryW/pub?embedded=true"
            className="w-full h-screen bg-base-100 max-w-[calc(596pt_+_16px)] mx-auto"
          ></iframe>
        </div>
      </div>
    </PageLayout>
  );
}
