import Link from "next/link";
import { FormattedMessage } from "react-intl";
import classes from "clsx";

interface FooterNavigationProps {
  className?: string;
}

export function FooterNavigation({ className }: FooterNavigationProps) {
  return (
    <div className={classes("flex", className)}>
      {/* // TODO: Implementar vista.  */}
      {/* <Link
        href="/"
        className="max-lg:py-2 text-lg hover:text-primary transition-colors duration-200"
      >
        <FormattedMessage defaultMessage="Blog" id="tv5FG3" />
      </Link> */}
      <Link
        href="/terms-and-conditions"
        className="max-lg:py-2 text-lg hover:text-primary transition-colors duration-200"
      >
        <FormattedMessage defaultMessage="Términos y condiciones" id="o24Y39" />
      </Link>
      <Link
        href="/"
        className="max-lg:py-2 text-lg hover:text-primary transition-colors duration-200"
      >
        <FormattedMessage defaultMessage="Políticas y privacidad" id="HWNAO5" />
      </Link>
    </div>
  );
}
