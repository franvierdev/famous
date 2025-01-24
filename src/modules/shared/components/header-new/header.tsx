import Image from "next/image";
import Link from "next/link";
import { useIntl } from "react-intl";
import { Locale } from "nextjs-routes";
import { useRouter } from "next/router";

const localesData: Record<Locale, { name: string }> = {
  "es-MX": {
    name: "es",
  },
  "en-US": {
    name: "en",
  },
};

export default function Header() {
  const router = useRouter();
  const { pathname, query, asPath } = router;
  const { formatMessage } = useIntl();

  return (
    <header className="  flex  max-sm:pt-6 justify-between text-2xl place-items-center pb-16 max-w-[1734px] px-8  mx-auto ">
      <div className="navbar flex justify-between font-bold">
        <Link href="/" className="">
          <Image
            src={"/assets/images/fm-logo.png"}
            alt="/"
            height={48}
            width={144}
            className="place-self-start w-36 h-12"
          />
        </Link>
        <div className="flex justify-center ml-36 ">
          <Image
            src={"/assets/images/navbar-vector.png"}
            width={482}
            height={171}
            alt="vector-navbar"
            className="absolute mt-8 w-[30.125rem] h-[10.6875rem] "
          />
          <div className="flex  gap-6 z-10 ">
            <Link href="/" className=" text-2xl wave-underline-1">
              nuestra casa
            </Link>
            <div className="dropdown dropdown-end dropdown-hover">
              <label tabIndex={0} className="cursor-pointer text-2xl ">
                nuestra familia
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content  mt-8 items-end w-80 "
              >
                <Image
                  src={"/assets/images/new/pink-cloud.png"}
                  width={355.5}
                  height={216.5}
                  alt="vector-navbar"
                  className=" absolute w-[22.21875rem] h-[13.53125rem] -mt-6 -mr-[5.625rem] "
                />
                <li className="wave-underline-1 mt-1  w-36 ">
                  <Link
                    href={"/our-talent"}
                    className=" self-center  hover:bg-transparent hover:text-[#EFDEC6]"
                  >
                    talentos
                  </Link>
                </li>
                <li className="wave-underline-1 w-36 ">
                  <Link
                    href={"/our-team"}
                    className="self-center hover:bg-transparent hover:text-[#EFDEC6]"
                  >
                    equipo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-6 pt-4">
          <Link href={"/"} className="max-sm:w-36">
            <Image
              src={"/assets/images/new/whatsapp-icon.png"}
              alt="/"
              width={51}
              height={52}
              className="w-[3.1875rem] h-[3.25rem]"
            />
          </Link>
          <Link href={"/contact-us"} className="max-sm:w-36">
            <Image
              src={"/assets/images/new/hablemos-button.png"}
              alt="/"
              width={170}
              height={106}
              className="w-[10.625rem] h-[6.625rem]"
            />
          </Link>
          <div
            title={formatMessage({
              defaultMessage: "Cambiar idioma",
              id: "1tabNN",
            })}
            className="flex gap-2 "
          >
            {Object.entries(localesData).map(([locale, { name }]) => (
              <div key={locale}>
                <Link href={{ pathname, query }} as={asPath} locale={locale}>
                  <span className="flex flex-1 justify-between">
                    {name.substring(0, 2)}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
