import { PageLayout } from "@/modules/shared/components/page-layout";
import { CLIENT_ONBOARDING_PATH } from "@/modules/shared/constants/paths";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileLines,
  faCalendarCheck,
  faLightbulb as farLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLightbulb,
  faClipboardCheck,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FormattedMessage } from "react-intl";
import classes from "clsx";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={78}
        height={113}
        fill="none"
        className="h-28"
      >
        <path
          stroke="#fff"
          strokeWidth={3}
          d="M55.818 83.75c2.018-6.791 6.202-12.582 10.343-18.351 1.093-1.512 2.187-3.023 3.238-4.556C73.56 54.776 76 47.431 76 39.49 76 18.776 59.434 2 39 2S2 18.776 2 39.469c0 7.94 2.439 15.307 6.601 21.353 1.051 1.532 2.144 3.044 3.238 4.555 4.141 5.791 8.325 11.582 10.343 18.373h33.636ZM39 111c9.292 0 16.818-7.621 16.818-17.031v-3.406H22.182v3.406C22.182 103.379 29.708 111 39 111ZM22.182 39.469c0 1.873-1.514 3.406-3.364 3.406-1.85 0-3.364-1.533-3.364-3.406 0-13.178 10.533-23.844 23.546-23.844 1.85 0 3.364 1.533 3.364 3.406 0 1.874-1.514 3.407-3.364 3.407-9.292 0-16.818 7.621-16.818 17.03Z"
        />
      </svg>
    ),
    title: (
      <FormattedMessage defaultMessage="Creación de contenido" id="yuEoif" />
    ),
    content: (
      <FormattedMessage
        defaultMessage="Trabajamos junto a los Influencers para desarrollar piezas audiovisuales de alto impacto."
        id="TKIfWN"
      />
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={83}
        height={110}
        fill="none"
        className="h-28"
      >
        <g clipPath="url(#a)">
          <path
            stroke="#fff"
            strokeWidth={2}
            d="M21.939 14.75h.707l.236-.667C25.575 6.461 32.897 1 41.5 1c8.603 0 15.925 5.461 18.618 13.083l.236.667h8.813C76.25 14.75 82 20.474 82 27.5v68.75c0 7.026-5.75 12.75-12.833 12.75H13.833C6.75 109 1 103.276 1 96.25V27.5c0-7.026 5.75-12.75 12.833-12.75h8.106Zm44.69 44.612.714-.71-.077-.076c1.744-2.4 1.496-5.773-.654-7.934-2.403-2.414-6.322-2.409-8.741-.004L34.56 73.807l-9.45-9.393-.001-.002c-2.408-2.417-6.322-2.38-8.736-.006-2.432 2.392-2.426 6.297-.003 8.706l13.85 13.746c.002 0 .003.002.003.002 2.404 2.412 6.32 2.406 8.739.002l27.666-27.5ZM47.096 15.054A7.938 7.938 0 0 0 41.5 12.75c-2.098 0-4.11.828-5.596 2.304a7.854 7.854 0 0 0-2.32 5.571c0 2.09.835 4.094 2.32 5.57A7.938 7.938 0 0 0 41.5 28.5c2.098 0 4.11-.828 5.596-2.304a7.854 7.854 0 0 0 2.32-5.571c0-2.09-.835-4.094-2.32-5.57Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h83v110H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: <FormattedMessage defaultMessage="Gestión" id="KocF/P" />,
    content: (
      <FormattedMessage
        defaultMessage="Nos encargamos de la publicación y monitoreo del contenido en las cuentas oficiales de los Famosos."
        id="/CpFOG"
      />
    ),
  },
  {
    icon: (
      <div className="flex items-center gap-2 h-28">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={98}
          height={96}
          fill="none"
        >
          <path
            stroke="#fff"
            strokeWidth={3}
            d="M96 48.28C96 22.714 74.964 2 49 2S2 22.714 2 48.28C2 71.379 19.187 90.525 41.656 94V61.658h-11.94V48.28h11.94V38.083c0-11.598 7.012-18.004 17.752-18.004 5.144 0 10.522.903 10.522.903v11.384h-5.928c-5.837 0-7.658 3.568-7.658 7.227v8.687h13.035l-2.085 13.378h-10.95V94C78.813 90.525 96 71.379 96 48.28Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={91}
          height={92}
          fill="none"
        >
          <path
            fill="#fff"
            d="M56.714 21.693H34.197a13.301 13.301 0 0 0-9.395 3.898 13.327 13.327 0 0 0-3.902 9.4v22.551a13.327 13.327 0 0 0 3.902 9.4 13.301 13.301 0 0 0 9.395 3.899h22.517a13.302 13.302 0 0 0 9.395-3.898 13.328 13.328 0 0 0 3.902-9.401v-22.55a13.328 13.328 0 0 0-3.902-9.401 13.302 13.302 0 0 0-9.395-3.898Zm10.41 35.849a10.437 10.437 0 0 1-3.052 7.365 10.417 10.417 0 0 1-7.358 3.056H34.197a10.417 10.417 0 0 1-7.365-3.052 10.437 10.437 0 0 1-3.057-7.369v-22.55a10.437 10.437 0 0 1 3.057-7.37 10.417 10.417 0 0 1 7.365-3.051h22.517a10.417 10.417 0 0 1 7.358 3.055 10.437 10.437 0 0 1 3.053 7.366v22.55Z"
          />
          <path
            fill="#fff"
            d="M45.45 32.822a13.47 13.47 0 0 0-9.493 3.971 13.497 13.497 0 0 0 0 19.038 13.47 13.47 0 0 0 9.493 3.97 13.47 13.47 0 0 0 9.529-3.95 13.496 13.496 0 0 0 0-19.078 13.47 13.47 0 0 0-9.53-3.95Zm0 24a10.552 10.552 0 0 1-7.454-3.094 10.572 10.572 0 0 1-3.092-7.461 10.572 10.572 0 0 1 3.092-7.46 10.551 10.551 0 0 1 7.454-3.096 10.563 10.563 0 0 1 7.457 3.095 10.583 10.583 0 0 1 3.1 7.46 10.583 10.583 0 0 1-3.1 7.462 10.563 10.563 0 0 1-7.457 3.095ZM59.206 28.056a3.981 3.981 0 0 0-3.976 3.968 3.981 3.981 0 0 0 3.976 3.968 3.974 3.974 0 0 0 3.964-3.968 3.98 3.98 0 0 0-3.964-3.968Zm0 5.058a1.123 1.123 0 0 1-.794-1.919A1.123 1.123 0 1 1 60 32.785c-.21.21-.496.33-.794.33Z"
          />
          <path
            fill="#fff"
            d="M45.45 91.783a45.483 45.483 0 0 1-32.126-13.345A45.573 45.573 0 0 1 0 46.278 45.573 45.573 0 0 1 13.308 14.09 45.483 45.483 0 0 1 45.45.728a45.483 45.483 0 0 1 32.128 13.337A45.573 45.573 0 0 1 90.91 46.222a45.584 45.584 0 0 1-13.312 32.197A45.494 45.494 0 0 1 45.45 91.783Zm0-88.189a42.654 42.654 0 0 0-30.177 12.512 42.739 42.739 0 0 0-12.5 30.206 42.738 42.738 0 0 0 12.5 30.206A42.654 42.654 0 0 0 45.45 89.028c11.318 0 22.172-4.5 30.176-12.511a42.739 42.739 0 0 0 12.499-30.206A42.753 42.753 0 0 0 75.63 16.099 42.64 42.64 0 0 0 45.45 3.583v.011Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={91}
          height={92}
          fill="none"
          className="max-lg:hidden"
        >
          <path
            fill="#fff"
            d="M53.883 43.131 41.799 36.51a2.244 2.244 0 0 0-3.06.807 2.25 2.25 0 0 0-.31 1.104v13.118a2.25 2.25 0 0 0 1.124 1.912 2.155 2.155 0 0 0 2.167.045l12.095-6.498a2.247 2.247 0 0 0 1.123-1.956 2.25 2.25 0 0 0-1.055-1.911ZM41.72 49.876v-9.803l8.985 4.947-8.985 4.856Z"
          />
          <path
            fill="#fff"
            d="M72.413 34.633c-.056-.439-.516-4.362-2.414-6.352a8.98 8.98 0 0 0-5.896-2.777h-.37c-7.233-.528-18.15-.607-18.261-.607-.113 0-11.029.08-18.329.607h-.348a8.667 8.667 0 0 0-5.862 2.856c-1.82 1.967-2.336 5.812-2.392 6.239 0 .18-.404 4.496-.404 8.993v4.092c0 4.384.393 8.757.404 8.993.056.438.517 4.283 2.403 6.284a9.194 9.194 0 0 0 6.098 2.731l.54.068h.134c4.178.405 17.261.596 17.823.607.101 0 11.028-.079 18.26-.596H64.205a8.532 8.532 0 0 0 5.761-2.878c1.82-1.967 2.336-5.811 2.392-6.239 0-.18.404-4.496.404-8.993V43.57c.057-4.384-.337-8.757-.348-8.937ZM69.606 47.66c0 4.058-.349 8.24-.382 8.622a10.224 10.224 0 0 1-1.572 4.497 5.291 5.291 0 0 1-3.785 1.765h-.348c-6.997.506-17.497.584-17.969.584-.471 0-13.476-.202-17.486-.573l-.673-.09a5.994 5.994 0 0 1-4.1-1.72 9.313 9.313 0 0 1-1.55-4.406c0-.293-.381-4.497-.381-8.634V43.57c0-4.058.348-8.228.382-8.622a10.123 10.123 0 0 1 1.572-4.496 5.513 5.513 0 0 1 3.863-1.833h.27c7.097-.506 17.676-.584 18.058-.584.382 0 10.961.078 17.969.584h.292a5.748 5.748 0 0 1 3.92 1.777c.875.899 1.403 3.214 1.55 4.496 0 .27.38 4.497.38 8.633l-.01 4.137Z"
          />
          <path
            fill="#fff"
            d="M45.46 91.087a45.494 45.494 0 0 1-32.129-13.345A45.584 45.584 0 0 1 0 45.582a45.573 45.573 0 0 1 13.332-32.157A45.483 45.483 0 0 1 45.461.088a45.483 45.483 0 0 1 32.128 13.337 45.573 45.573 0 0 1 13.332 32.157 45.584 45.584 0 0 1-13.331 32.16 45.494 45.494 0 0 1-32.13 13.345Zm0-88.19A42.654 42.654 0 0 0 15.286 15.41a42.738 42.738 0 0 0-12.5 30.205 42.739 42.739 0 0 0 12.5 30.206A42.655 42.655 0 0 0 45.46 88.333c11.318 0 22.173-4.5 30.176-12.512a42.738 42.738 0 0 0 12.5-30.206 42.738 42.738 0 0 0-12.5-30.205A42.654 42.654 0 0 0 45.46 2.898Z"
          />
        </svg>
        <svg
          width="91"
          height="91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-lg:hidden"
        >
          <g clip-path="url(#clip0_1409_28)">
            <path
              d="M45.5057 91C33.4414 90.9851 21.8755 86.186 13.3447 77.6553C4.81399 69.1245 0.014874 57.5587 0 45.4944C0.0148797 33.4311 4.81435 21.8664 13.3454 13.3375C21.8765 4.8085 33.4424 0.0118993 45.5057 0C57.5679 0.0119045 69.1326 4.80887 77.6618 13.3381C86.1911 21.8674 90.9881 33.4322 91 45.4944C90.9881 57.5576 86.1915 69.1235 77.6625 77.6546C69.1336 86.1857 57.5689 90.9851 45.5057 91ZM45.5057 2.81038C34.1762 2.81038 23.3108 7.31097 15.2996 15.3221C7.28851 23.3332 2.78791 34.1987 2.78791 45.5281C2.78791 56.8575 7.28851 67.723 15.2996 75.7341C23.3108 83.7452 34.1762 88.2458 45.5057 88.2458C56.8351 88.2458 67.7005 83.7452 75.7117 75.7341C83.7228 67.723 88.2234 56.8575 88.2234 45.5281C88.2234 34.1987 83.7228 23.3332 75.7117 15.3221C67.7005 7.31097 56.8351 2.81038 45.5057 2.81038Z"
              fill="white"
            />
            <path
              d="M41.0645 72.4066C36.2057 72.4006 31.5479 70.4663 28.1143 67.0284C24.6807 63.5906 22.7521 58.9305 22.7521 54.0716C22.744 51.6639 23.2138 49.2785 24.1343 47.0536C25.0547 44.8287 26.4075 42.8086 28.1142 41.1102C29.8145 39.406 31.835 38.0548 34.0594 37.1346C36.2839 36.2143 38.6684 35.7431 41.0757 35.748C41.9184 35.7459 42.76 35.8061 43.5938 35.9279L44.5606 36.0628V48.0799L43.0992 47.619C42.2512 47.3492 41.3582 47.2498 40.4716 47.3267C39.585 47.4035 38.7224 47.655 37.9334 48.0667C37.1445 48.4784 36.4449 49.0422 35.8748 49.7255C35.3047 50.4088 34.8755 51.1982 34.6118 52.0482C34.34 52.8962 34.2389 53.7896 34.3141 54.6769C34.3894 55.5641 34.6396 56.4277 35.0503 57.2178C35.4611 58.0079 36.0242 58.7089 36.7072 59.2802C37.3902 59.8516 38.1796 60.282 39.0298 60.5468C39.8785 60.8183 40.7725 60.919 41.6604 60.843C42.5482 60.767 43.4123 60.5158 44.2025 60.104C44.9927 59.6922 45.6934 59.1278 46.2643 58.4436C46.8351 57.7594 47.2648 56.9688 47.5283 56.1176C47.7341 55.4588 47.8401 54.773 47.8431 54.0829V15.9854H59.4106V17.1096C59.4086 17.8291 59.4688 18.5475 59.5905 19.2567C59.8905 20.8335 60.5075 22.333 61.4041 23.6644C62.3007 24.9957 63.4582 26.1312 64.8065 27.0021C66.7257 28.2751 68.9787 28.9518 71.2817 28.9469H72.4058V40.4469H71.2254C67.0716 40.4537 62.992 39.3474 59.4106 37.2431V54.1054C59.4172 56.5193 58.9435 58.9104 58.0171 61.1395C57.0907 63.3686 55.7302 65.3911 54.0146 67.0893C52.3143 68.7871 50.2944 70.1311 48.0716 71.0437C45.8488 71.9564 43.4673 72.4196 41.0645 72.4066ZM41.0645 37.9963C38.9528 37.9912 36.8611 38.4049 34.9103 39.2134C32.9595 40.0219 31.1883 41.2091 29.6993 42.7065C28.202 44.1955 27.0147 45.9666 26.2062 47.9174C25.3977 49.8682 24.984 51.96 24.9891 54.0716C24.9891 58.3342 26.6809 62.4225 29.6928 65.4386C32.7048 68.4548 36.7907 70.1523 41.0532 70.1582C45.3148 70.1523 49.4002 68.4567 52.4136 65.4433C55.4271 62.4299 57.1226 58.3445 57.1286 54.0829V32.9826L58.9047 34.2529C62.1958 36.6161 66.0994 37.9784 70.1463 38.1762V31.1165C67.7941 30.9435 65.5258 30.1694 63.5587 28.8682C61.9593 27.8286 60.5869 26.4759 59.5243 24.8917C58.4617 23.3074 57.7309 21.5244 57.3759 19.6502C57.2883 19.1782 57.2282 18.7015 57.196 18.2225H50.0801V54.0716C50.0774 54.9904 49.9372 55.9036 49.6642 56.7809C49.3122 57.9129 48.7399 58.9643 47.9802 59.8744C47.2204 60.7844 46.2882 61.5353 45.2372 62.0838C44.1862 62.6323 43.0371 62.9676 41.856 63.0704C40.6749 63.1731 39.4852 63.0414 38.3552 62.6826C37.2206 62.3308 36.1669 61.7577 35.255 60.9964C34.3431 60.2351 33.5911 59.3007 33.0424 58.2471C32.4936 57.1935 32.1591 56.0417 32.058 54.8581C31.9569 53.6745 32.0913 52.4826 32.4535 51.3512C32.8079 50.2225 33.3816 49.1748 34.1416 48.2682C34.9017 47.3615 35.8331 46.6138 36.8826 46.0677C38.5443 45.1904 40.4405 44.86 42.301 45.1234V38.0188C41.8963 38.0188 41.4804 38.0188 41.0645 38.0188V37.9963Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1409_28">
              <rect width="91" height="91" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    title: <FormattedMessage defaultMessage="Pauta digital" id="370+WM" />,
    content: (
      <FormattedMessage
        defaultMessage="Realizamos con los Influencers la promoción de las campañas en redes sociales como Facebook y TikTok."
        id="Ikcsiz"
      />
    ),
  },
];

const servicesDelayClasses = [
  "",
  "md:[animation-delay:calc(200ms)]",
  "md:[animation-delay:calc(400ms)]",
];

const howToSteps = [
  {
    icon: faFileLines,
    title: "Brief",
    content: (
      <FormattedMessage
        defaultMessage="Completa el brief con los detalles sobre el target de tu marca, objetivos y presupuesto para la campaña."
        id="cxXP4F"
      />
    ),
  },
  {
    icon: farLightbulb,
    title: <FormattedMessage defaultMessage="Propuesta" id="1ObWQg" />,
    content: (
      <FormattedMessage
        defaultMessage="Te enviaremos nuestra propuesta con el desarrollo creativo y la presentación detallada de los perfiles de los influencers potenciales."
        id="TT6K1S"
      />
    ),
  },
  {
    icon: faCalendarCheck,
    title: <FormattedMessage defaultMessage="Contenido" id="R9jEED" />,
    content: (
      <FormattedMessage
        defaultMessage="Podrás visualizar el cronograma con las fechas de publicación y aprobar el contenido antes de que sea publicado."
        id="2Db3pn"
      />
    ),
  },
  {
    icon: faTiktok,
    title: <FormattedMessage defaultMessage="Campaña" id="ihlsUF" />,
    content: (
      <FormattedMessage
        defaultMessage="Ejecutaremos la campaña y podrás monitorearla desde la plataforma de Famosos Ads."
        id="pdKFjn"
      />
    ),
  },
  {
    icon: faChartLine,
    title: <FormattedMessage defaultMessage="Reportes" id="JPIpiA" />,
    content: (
      <FormattedMessage
        defaultMessage="Te daremos un reporte detallado sobre los resultados de la campaña, así como un análisis y asesoría sobre qué funciona mejor para tu marca."
        id="SlMO4a"
      />
    ),
  },
];

export function OurServicesPage() {
  return (
    <PageLayout>
      <div id="our-services">
        <div className="container container-padding">
          <div className="text-center">
            <h1 className="font-extrabold text-5xl animate__animated customAnimate__fadeInUp">
              <FormattedMessage
                defaultMessage="Nuestros servicios"
                id="GoKO/C"
              />
            </h1>
            <p className="font-bold text-xl mt-4 lg:mt-8 animate__animated customAnimate__fadeInUp [animation-delay:200ms]">
              <FormattedMessage
                defaultMessage="En Famosos Ads nos especializamos en:"
                id="IfAB0n"
              />
            </p>
          </div>
          <div className="lg:h-[220px] mt-7 lg:mt-14 relative">
            <div className="flex max-md:flex-col lg:items-start gap-4 lg:gap-8 lg:absolute">
              {services.map((service, index) => (
                <AnimationOnScroll
                  className={classes(
                    "card flex-1 bg-primary text-primary-content group hover:bg-secondary hover:text-secondary-content transition-colors duration-300 relative z-20",
                    servicesDelayClasses[index]
                  )}
                  key={index}
                  animateIn="customAnimate__fadeInUp"
                  animateOnce
                >
                  <div className="card-body items-start">
                    {service.icon}
                    <h2 className="font-bold text-xl 2xl:text-3xl mt-4 xl:mt-8">
                      {service.title}
                    </h2>
                    <p className="text-lg lg:h-0 lg:opacity-0 overflow-hidden transition-all duration-300 md:group-hover:mt-4 xl:group-hover:mt-8 lg:group-hover:h-[7.77777778em] xl:group-hover:h-[4.66666667em] group-hover:opacity-100">
                      {service.content}
                    </p>
                  </div>
                </AnimationOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="videos">
        <div className="sm:container container-padding flex justify-center items-center gap-10">
          <AnimationOnScroll
            className="max-lg:hidden"
            delay={200}
            animateIn="animate__fadeIn"
            animateOnce
          >
            <div className="w-64 aspect-[9/16]">
              <iframe
                src="https://www.tiktok.com/player/v1/7275113712212610346?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            className="max-sm:w-full sm:mockup-phone !m-0"
            animateIn="animate__fadeIn"
            animateOnce
          >
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo">
                <div className="w-full sm:w-80 max-md:max-h-[85vh] sm:h-full aspect-[9/16]">
                  <iframe
                    src="https://www.tiktok.com/player/v1/7255069696792202502?description=1&loop=1"
                    className="w-full h-full"
                  ></iframe>
                </div>
                {/* <video
                  src="https://famosos-ads-miscellaneous.s3.us-east-1.amazonaws.com/our-services-video.mp4"
                  width={288}
                  height={640}
                  className="w-full sm:w-72 max-md:max-h-[85vh] sm:h-full object-cover"
                  preload="auto"
                  controls
                /> */}
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            className="max-lg:hidden"
            delay={200}
            animateIn="animate__fadeIn"
            animateOnce
          >
            <div className="w-64 aspect-[9/16]">
              <iframe
                src="https://www.tiktok.com/player/v1/7356790693148331269?description=1&loop=1"
                className="w-full h-full"
              ></iframe>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div id="how-to-steps">
        <div className="container container-padding">
          <div className="text-center">
            <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
              <h1 className="font-bold text-4xl">
                <FormattedMessage
                  defaultMessage="¿Quieres construir una marca icónica?"
                  id="pYuO5I"
                />
              </h1>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-wrap justify-center gap-5 lg:gap-10 mt-7 lg:mt-14">
            {howToSteps.map((step, index) => (
              <AnimationOnScroll
                animateIn="customAnimate__fadeInUp"
                animateOnce
                className="card md:w-[calc(calc(100%_/_2)_-_calc(1.25rem_/_2))] lg:w-[calc(calc(100%_/_3)_-_calc(2.5rem_/_1.5))] bg-base-content text-base-100 group hover:bg-primary hover:text-primary-content transition-colors duration-200"
                key={index}
              >
                <div className="card-body items-start">
                  <div className="flex justify-center items-center w-full">
                    <p className="font-bold text-7xl text-primary group-hover:text-primary-content transition-colors duration-200">
                      {index + 1}
                    </p>
                    <div className="w-16 h-16 bg-primary text-primary-content group-hover:bg-base-content group-hover:text-primary flex items-center justify-center rounded-full transition-colors duration-200">
                      <FontAwesomeIcon icon={step.icon} className="text-4xl" />
                    </div>
                  </div>
                  <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                    <h2 className="font-bold text-2xl mt-2 lg:mt-4 text-primary group-hover:text-primary-content transition-colors duration-200">
                      {step.title}
                    </h2>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                    <p className="text-lg mt-2 lg:mt-4">{step.content}</p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            ))}
          </div>
          <div className="text-center mt-7 lg:mt-14">
            <AnimationOnScroll animateIn="customAnimate__fadeInUp" animateOnce>
              <a
                href={CLIENT_ONBOARDING_PATH}
                className="btn btn-lg btn-primary"
              >
                <FormattedMessage
                  defaultMessage="Empezar ahora"
                  id="tpFUnm"
                  description="Call-to-action a agendar una reunión"
                />
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
