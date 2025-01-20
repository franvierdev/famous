import "@/styles/globals.css";
import "@/styles/parallax.css";

import type { AppProps } from "next/app";
import { IntlConfig, IntlProvider } from "react-intl";
import { DefaultSeo } from "next-seo";
import { useState } from "react";
import { useRouter } from "next/router";
import { Locale } from "nextjs-routes";
import { QueryClient, QueryClientProvider } from "react-query";
import esMessages from "../../compiled-lang/es.json";
import enMessages from "../../compiled-lang/en.json";

declare global {
  namespace FormatjsIntl {
    interface IntlConfig {
      locale: Locale;
    }
  }
}

const messagesByLocale: Record<Locale, IntlConfig["messages"]> = {
  "en-US": enMessages,
  "es-MX": esMessages,
};

// Para internacionalizar, mover los children del <IntlProvider /> a un componente para poder usar los hooks de Intl.
const defaultTitle = "Famosos Management";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [hasOpenedModal, setHasOpenedModal] = useState(false);
  const [knowMoreVideoModalIsOpen, setKnowMoreVideoModalIsOpen] =
    useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        locale={router.locale}
        defaultLocale={router.defaultLocale}
        messages={messagesByLocale[router.locale]}
      >
        <DefaultSeo
          titleTemplate={`${defaultTitle} | %s`}
          defaultTitle={defaultTitle}
          description="Descubre Famosos Management."
          // openGraph={{
          //   images: [
          //     {
          //       url: "/assets/images/og-image.png",
          //       alt: defaultTitle,
          //       width: 1200,
          //       height: 630,
          //     },
          //   ],
          // }}
        />
        <Component {...pageProps} />
        <input
          type="checkbox"
          id="know-more-video-modal"
          className="modal-toggle"
          onChange={(event) => {
            setHasOpenedModal(true);
            setKnowMoreVideoModalIsOpen(event.target.checked);
          }}
        />
        <label htmlFor="know-more-video-modal" className="modal cursor-pointer">
          <label
            className="modal-box relative w-11/12 max-w-[43rem]"
            htmlFor=""
          >
            <label
              htmlFor="know-more-video-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {(!hasOpenedModal || knowMoreVideoModalIsOpen) && (
              <iframe
                className="mx-auto"
                src="https://drive.google.com/file/d/15TcfVgBk_OcVAypIn14NgqQjEBmEzoAG/preview"
                width="640"
                height="360"
                allow="autoplay"
                ref={(element) =>
                  element?.contentDocument &&
                  (element.contentDocument.body.style.backgroundColor =
                    "#121420")
                }
              ></iframe>
            )}
          </label>
        </label>
      </IntlProvider>
    </QueryClientProvider>
  );
}
