import { Accent, ButtonLink } from "@/components/atoms";
import { Social } from "@/components/molecules";
import Seo from "@/components/Seo";

const Home = () => {
  return (
    <>
      <Seo />
      <section className="container flex min-h-[calc(100vh-152px)] flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-24 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="mb-2 leading-normal">
              Hi, I am <Accent>Tri</Accent> <br />a junior
              <Accent> Front-End Web Developer</Accent> based in West Java,
              Indonesia. <br />I build an elegant and functional interface for
              the web.
            </h1>
            <ButtonLink
              href="/about"
              className="button--primary mt-4 inline-block px-6 py-3"
            >
              Learn more about me
            </ButtonLink>
          </div>
          <Social className="md:flex-col" />
        </div>
      </section>
    </>
  );
};

export default Home;
