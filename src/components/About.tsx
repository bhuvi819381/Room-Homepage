const About = () => {
  return (
    <section className="flex flex-col md:flex-row md:h-[16.625rem]">
      <img src="/images/image-about-dark.jpg" alt="" />
      <div className="flex flex-col justify-center items-center p-8 md:p-12 md:w-[36.25rem]">
        <h2 className="mb-3 text-xl font-bold tracking-[.3em] uppercase">
          About our furniture
        </h2>
        <p className="text-md text-gray-500">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src="/images/image-about-light.jpg" alt="" />
    </section>
  );
};
export default About;
