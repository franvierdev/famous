import Image from "next/image";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";
import { FooterSocialNetworkButtons } from "../footer-social-network-buttons";
import { FooterNavigation } from "../footer-navigation";

const currentYear = new Date().getFullYear();

export function Footer() {
  const { formatMessage } = useIntl();

  return (
    <footer id="footer" className="bg-base-200">
      <div className="container container-padding">
        <div className="lg:flex">
          <div className="flex flex-col space-y-5 lg:space-y-8 justify-between lg:mr-8">
            <Link href="/">
              <Image
                src="/assets/images/famosos-ads-logo-dark.svg"
                width={193.592344}
                height={45.9330143}
                alt={formatMessage({
                  defaultMessage: "Logo de Famosos Ads",
                  id: "++TixU",
                })}
              />
            </Link>
            <div className="font-semibold text-xl max-w-[42.5ch]">
              <p>
                <FormattedMessage
                  defaultMessage="Somos la mejor solución de extremo a extremo de Influencer Marketing en Latinoamérica."
                  id="P9qlu4"
                />
              </p>
              <p>
                <FormattedMessage
                  defaultMessage="Conectamos talentos con las marcas más importantes para potenciar la visibilidad de sus productos y servicios a gran escala."
                  id="vgSXnO"
                />
              </p>
            </div>
            {/* <div className="flex space-x-4">
              <a
                href={CLIENT_ONBOARDING_PATH}
                className="btn btn-primary flex-1"
              >
                <FormattedMessage defaultMessage="Soy Empresa" id="BnNgKk" />
              </a>
              <a
                href={INFLUENCER_ONBOARDING_PATH}
                className="btn btn-secondary flex-1"
              >
                <FormattedMessage defaultMessage="Soy creador" id="Z88M6i" />
              </a>
            </div> */}
            {/* // TODO: Descomentar al conectar formulario. */}
            {/* <FooterSocialNetworkButtons className="max-lg:hidden" /> */}
          </div>
          <FooterNavigation className="lg:hidden flex-col text-center mt-10" />
          {/* // TODO: Borrar al conectar formulario. */}
          <FooterSocialNetworkButtons className="max-lg:hidden ml-auto self-end" />
          {/* // TODO: Conectar formulario. */}
          {/* <div className="bg-primary py-7 px-8 lg:py-14 lg:px-16 max-w-lg max-lg:mx-auto lg:ml-auto flex-1 max-lg:mt-10">
            <form>
              <p className="font-bold text-3xl">
                <FormattedMessage
                  defaultMessage="Suscríbete para recibir contenido y ofertas exclusivas."
                  id="VKHO6s"
                />
              </p>
              <div className="form-control w-full mt-8">
                <input
                  type="text"
                  placeholder="mail@ejemplo.com"
                  className="input input-bordered w-full text-xl rounded-none h-[3.2em] bg-base-content text-base-100 bg-opacity-40 placeholder:text-primary placeholder:text-opacity-50"
                />
              </div>
              <button className="btn btn-lg btn-white w-full text-xl rounded-none mt-4 h-[3.2em] font-bold">
                <FormattedMessage defaultMessage="Suscribirse" id="EoaCGA" />
              </button>
            </form>
          </div> */}
        </div>
        <div className="mt-10 lg:mt-20 space-y-4 max-lg:hidden">
          <a href="https://famosos.com" target="_blank">
            <Image
              src={require("public/assets/images/famosos-logo.png")}
              alt={formatMessage({
                defaultMessage: "Logo de Famosos",
                id: "VLaKAe",
              })}
              className="w-44"
            />
          </a>
          <p className="text-lg">
            <FormattedMessage
              defaultMessage="Construido sobre la red de participación de celebridades más exitosa."
              id="g0s2jg"
            />
          </p>
        </div>
        <div className="lg:flex max-lg:text-center mt-10 lg:mt-20 justify-between">
          <FooterNavigation className="max-lg:hidden space-x-20" />
          <FooterSocialNetworkButtons className="mt-10 lg:hidden" />
          <p className="text-lg max-lg:mt-5">
            © {currentYear} Famosos, Inc.{" "}
            <FormattedMessage
              defaultMessage="Todos los derechos reservados."
              id="qJ+Mdm"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
