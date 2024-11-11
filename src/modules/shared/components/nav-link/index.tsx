// Inspired by https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx

import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState, useEffect } from "react";
import classes from "clsx";
import { UrlObject } from "url";

const getPathname = (url: string | URL) =>
  new URL(url, location.href)?.pathname;
interface NavLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
}

function NavLink({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<NavLinkProps>) {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const asPathname =
        typeof props.as === "string"
          ? getPathname(props.as)
          : props.as?.pathname;
      const hrefPathName =
        typeof props.href === "string"
          ? getPathname(props.href)
          : // Se utiliza / como fallback debido a que el <Link /> de NextJS acepta también un objeto con solamente el objeto query, lo cual resuelve como / más los query params.
            // TODO?: Manejar caso donde se quiera hacer match con los query params.
            (props.href as UrlObject)?.pathname || "/";
      const linkPathname = asPathname || hrefPathName;

      // Using URL().pathname to get rid of query and hash
      const activePathname = getPathname(asPath);

      const newClassName = classes(
        className,
        linkPathname === activePathname && activeClassName
      );

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
}

export { NavLink };
