import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black pb-10 pt-5 ">
      <div className="max-w-[1734px] justify-between flex mx-auto px-28 text-[#EFDEC6] text-xl font-light">
        <div className="flex   gap-10 ">
          <Link href={"/"}>Términos y condiciones</Link>
          <Link href={"/"}>Políticas de privacidad</Link>
        </div>
        <div>
          <p>© 2025 Famosos, Inc. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
