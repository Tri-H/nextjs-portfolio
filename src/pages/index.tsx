import { Accent, ButtonLink } from "@/components/atoms";
import { Social } from "@/components/molecules";
import Seo from "@/components/Seo";

const Home = () => {
  return (
    <>
      <Seo />
      <section className="container flex min-h-[calc(100vh-152px)] flex-col items-center justify-center gap-4 md:min-h-[calc(100vh-170px)]">
        <div className="flex flex-col items-center gap-24 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="mb-2 text-4xl font-extrabold md:text-6xl">
              Hi, I am Tri
              <br />I build a functional interface for the web.
            </h1>
            <ButtonLink
              href="/about"
              className="mt-4 inline-block border border-black bg-black px-6 py-3 text-white transition-colors duration-500 hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
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
