/**
 * @description
 * about us 페이지 각오 멘트 컴포넌트
 * @component AboutusMind
 * @returns {JSX.Element} AboutusMind
 * @since 2024.09.29
 */
/**
 * Renders the mind text component for the aboutus section.
 * @returns The rendered mind text component.
 */

const AboutusMind = () => {
  return (
    <section className="flex justify-center items-center bg-light_green py-[6.25rem] px-[9rem]">
      <p className="text-5xl leading-[3.6rem] font-bold text-deep_gray text-center">
        <span className="text-primary">우리의 코드 한 줄 한 줄</span>이 <br />
        세상을 조금씩 바꿔나갈 수 있다고 믿습니다.
      </p>
    </section>
  );
};

export default AboutusMind;
