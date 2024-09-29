import LogoIcon from "@/images/inglo_logo.svg";
import LogoTextIcon from "@/images/inglo_logo_text.svg";
import InstagramIcon from "@/icons/instagram_icon.svg";
import BlogIcon from "@/icons/blog_icon.svg";

/**
 * @description
 * 공통 푸터 컴포넌트
 * @component Footer
 * @returns {JSX.Element} Footer
 * @since 2024.09.29
 */
/**
 * Renders the footer component
 * @returns The rendered footer component.
 */

const Footer = () => {
  return (
    <footer className="p-[3rem] flex flex-col gap-[1.5rem]">
      <div className="flex gap-[13.25rem]">
        <section>
          <div className="flex gap-[1.25rem] pb-[2.125rem]">
            <LogoIcon width={42} height={42} />
            <LogoTextIcon width={96} height={42} />
          </div>
          <p className="pb-[0.875rem] text-light_gray text-base font-semibold">
            작은 꿈에서 시작된 우리의 여정, <br />
            이제는 세상을 변화시키는 큰 꿈으로
          </p>
        </section>
        <section>
          <p className="pb-[0.875rem] text-light_gray text-base font-semibold">
            Contact Us
          </p>
          <div className="flex gap-[1.25rem]">
            <p className="pb-[0.875rem] text-primary text-base font-semibold">
              Email
            </p>
            <p className="pb-[0.875rem] text-light_gray text-base font-semibold">
              teaminglo236@gmail.com
            </p>
          </div>
        </section>
        <section>
          <p className="pb-[0.875rem] text-light_gray text-base font-semibold">
            Follow Us
          </p>
          <div className="flex gap-[1.25rem]">
            <BlogIcon />
            <InstagramIcon />
          </div>
        </section>
      </div>
      <div className="w-full h-[0.063rem] bg-gray"></div>
      <p className="self-end text-primary text-base font-semibold">
        © 2024 Inglo. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
