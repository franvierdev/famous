import { ReactNode, useEffect } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

interface PageLayoutProps {
  children?: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

function PageLayout({
  children,
  showHeader = true,
  showFooter = true
}: PageLayoutProps) {
  useEffect(() => {
    if (!showHeader) return;

    // Para que al hacer snap scrolling no se considere el height del header.
    document.documentElement.classList.add("scroll-pt-24");

    return () => {
      document.documentElement.classList.remove("scroll-pt-24");
    };
  }, [showHeader]);

  return (
    <>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}

export { PageLayout };
