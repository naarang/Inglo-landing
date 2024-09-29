import LogoIcon from "@/images/inglo_logo.svg";
import LogoTextIcon from "@/images/inglo_logo_text.svg";
import Link from "next/link";

/**
 * @description
 * about us 페이지 헤더 컴포넌트
 * @component AboutusHeader
 * @returns {JSX.Element} AboutusHeader
 * @since 2024.09.29
 */
/**
 * Renders the header component for the aboutus section.
 * @returns The rendered header component.
 */

const AboutusHeader = () => {
  return (
    <header className="py-[1.125rem] px-[2.5rem] flex justify-between items-center bg-white">
      <div className="flex gap-[0.75rem]">
        <LogoIcon width={24} height={23} />
        <LogoTextIcon width={55} height={24} />
      </div>
      <nav className="flex items-center gap-[4rem]">
        <Link className="text-lg text-primary font-semibold" href="/aboutus">
          About us
        </Link>
        <Link className="text-lg text-black font-semibold" href="/">
          Project
        </Link>
        <Link className="text-lg text-black font-semibold" href="/">
          Blog
        </Link>
      </nav>
      <button className="py-[0.938rem] px-[1.125rem] bg-primary rounded-[1.375rem] text-[0.875rem] font-semibold text-white">
        Contact us
      </button>
    </header>
  );
};

export default AboutusHeader;
