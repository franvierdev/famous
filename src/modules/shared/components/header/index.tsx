import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import { ReactNode, useEffect, useState } from "react";
import classes from "clsx";
import { CLIENT_ONBOARDING_PATH } from "../../constants/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "../nav-link";
import Link from "next/link";
import { useRouter } from "next/router";
import { Locale } from "nextjs-routes";

export function Header() {
  const { formatMessage, locale: currentLocale } = useIntl();
  const [displayStickyHeader, setDisplayStickyHeader] = useState(false);
  const [menuIsCollapsed, setMenuIsCollapsed] = useState(true);
  const router = useRouter();
  const { pathname, query, asPath } = router;

  const localesData: Record<Locale, { flagSrc: string; name: string }> = {
    "es-MX": {
      flagSrc:
        "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f2-1f1fd.svg",
      name: formatMessage({
        defaultMessage: "Español",
        id: "dX8jTq",
      }),
    },
    "en-US": {
      flagSrc:
        "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1fa-1f1f8.svg",
      name: formatMessage({
        defaultMessage: "Inglés",
        id: "NDZDj1",
      }),
    },
  };

  useEffect(() => {
    function toggleStickyHeader() {
      const scrollYPosition = window.scrollY;
      setDisplayStickyHeader(scrollYPosition > 300);
    }

    toggleStickyHeader();
    window.addEventListener("scroll", toggleStickyHeader);

    return () => {
      window.removeEventListener("scroll", toggleStickyHeader);
    };
  }, []);

  return (
    <header id="header" className="h-28">
      <nav
        aria-label={formatMessage({
          defaultMessage: "Navegación global",
          id: "jQkYvd",
        })}
        className={classes(
          "transition-all duration-200 inset-x-0 top-0 z-40",
          displayStickyHeader ? "fixed bg-base-100 shadow-lg" : "absolute"
        )}
      >
        <div className="container-lg">
          <div
            className={classes(
              "flex items-center transition-all duration-200",
              displayStickyHeader ? "py-4" : "py-8"
            )}
          >
            <Link href="/">
              <Image
                src={require("public/assets/images/famosos-ads-logo-dark.svg")}
                className="w-32 lg:w-64"
                alt={formatMessage({
                  defaultMessage: "Logo de Famosos Ads",
                  id: "++TixU",
                })}
              />
            </Link>
            <div
              className={classes(
                "ml-auto max-lg:fixed max-lg:pt-20 max-lg:bg-base-100 inset-0 left-1/3 transition-transform duration-200",
                menuIsCollapsed && "max-lg:translate-x-full"
              )}
            >
              <div className="flex max-lg:flex-col lg:items-center lg:space-x-10">
                <NavLink
                  href="/"
                  activeClassName="text-primary"
                  className={classes(
                    "max-lg:px-10 max-lg:py-3 text-lg hover:text-primary transition-colors duration-200 font-bold lg:animate-none",
                    !menuIsCollapsed &&
                      "animate__faster customAnimate__fadeInRight animate__animated"
                  )}
                >
                  <FormattedMessage defaultMessage="Inicio" id="6O+PLI" />
                </NavLink>
                <NavLink
                  href="/about-us"
                  activeClassName="text-primary"
                  className={classes(
                    "max-lg:px-10 max-lg:py-3 text-lg hover:text-primary transition-colors duration-200 font-bold lg:animate-none [animation-delay:25ms]",
                    !menuIsCollapsed &&
                      "animate__faster customAnimate__fadeInRight animate__animated"
                  )}
                >
                  <FormattedMessage defaultMessage="Nosotros" id="G3TUL4" />
                </NavLink>
                <NavLink
                  href="/technology"
                  activeClassName="text-primary"
                  className={classes(
                    "max-lg:px-10 max-lg:py-3 text-lg hover:text-primary transition-colors duration-200 font-bold lg:animate-none [animation-delay:50ms]",
                    !menuIsCollapsed &&
                      "animate__faster customAnimate__fadeInRight animate__animated"
                  )}
                >
                  <FormattedMessage defaultMessage="Tecnología" id="DPWnvm" />
                </NavLink>
                <NavLink
                  href="/our-services"
                  activeClassName="text-primary"
                  className={classes(
                    "max-lg:px-10 max-lg:py-3 text-lg hover:text-primary transition-colors duration-200 font-bold lg:animate-none [animation-delay:75ms]",
                    !menuIsCollapsed &&
                      "animate__faster customAnimate__fadeInRight animate__animated"
                  )}
                >
                  <FormattedMessage defaultMessage="Servicios" id="DQj22Z" />
                </NavLink>
                <NavLink
                  href="/success-cases"
                  activeClassName="text-primary"
                  className={classes(
                    "max-lg:px-10 max-lg:py-3 text-lg hover:text-primary transition-colors duration-200 font-bold lg:animate-none [animation-delay:100ms]",
                    !menuIsCollapsed &&
                      "animate__faster customAnimate__fadeInRight animate__animated"
                  )}
                >
                  <FormattedMessage
                    defaultMessage="Casos de éxito"
                    id="fWPJBy"
                  />
                </NavLink>
                <div
                  className={classes(
                    "[animation-delay:125ms] lg:animate-none",
                    !menuIsCollapsed &&
                      "animate__faster customAnimate__fadeInRight animate__animated"
                  )}
                >
                  <div
                    title={formatMessage({
                      defaultMessage: "Cambiar idioma",
                      id: "1tabNN",
                    })}
                    className={classes(
                      "lg:dropdown lg:dropdown-end max-lg:mx-10 [animation-delay:125ms] lg:animate-none group",
                      !menuIsCollapsed &&
                        "animate__faster customAnimate__fadeInRight animate__animated"
                    )}
                  >
                    <button tabIndex={0} className="btn btn-ghost gap-2">
                      <Image
                        unoptimized
                        width={24}
                        height={24}
                        alt={localesData[currentLocale]?.name}
                        src={localesData[currentLocale]?.flagSrc}
                      />
                      <svg
                        width="12px"
                        height="12px"
                        className="ml-1 h-3 w-3 fill-current opacity-60 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048"
                      >
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
                      </svg>
                    </button>
                    <div className="dropdown-content lg:bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-2 lg:mt-16 lg:w-56 overflow-y-auto shadow-2xl max-lg:hidden max-lg:group-focus-within:block">
                      <ul
                        className="menu menu-compact gap-1 lg:p-3 p-px"
                        tabIndex={0}
                      >
                        {Object.entries(localesData).map(
                          ([locale, { flagSrc, name }]) => (
                            <li key={locale}>
                              <Link
                                className={classes(
                                  "flex",
                                  currentLocale === locale && "active"
                                )}
                                href={{ pathname, query }}
                                as={asPath}
                                locale={locale}
                              >
                                <Image
                                  unoptimized
                                  width={20}
                                  height={20}
                                  alt={name}
                                  src={flagSrc}
                                />
                                <span className="flex flex-1 justify-between">
                                  {name}
                                </span>
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={classes(
                    "[animation-delay:150ms] lg:animate-none",
                    !menuIsCollapsed &&
                      "animate__faster customAnimate__fadeInRight animate__animated"
                  )}
                >
                  <a
                    href={CLIENT_ONBOARDING_PATH}
                    className={classes(
                      "btn btn-gradient btn-primary 2xl:btn-lg max-lg:mx-10 max-lg:mt-4 lg:w-[8.25rem] 2xl:w-44"
                    )}
                  >
                    <FormattedMessage
                      defaultMessage="Empezar ahora"
                      id="tpFUnm"
                      description="Call-to-action a agendar una reunión"
                    />
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              className={classes(
                "btn btn-ghost ml-auto lg:hidden relative swap swap-rotate",
                !menuIsCollapsed && "swap-active"
              )}
              onClick={() =>
                setMenuIsCollapsed((previousValue) => !previousValue)
              }
            >
              <FontAwesomeIcon icon={faBars} className="swap-off" />
              <FontAwesomeIcon icon={faTimes} className="swap-on" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
