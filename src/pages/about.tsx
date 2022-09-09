import { NextImage, Accent } from "@/components/atoms";
import { Social, Timeline } from "@/components/molecules";
import Seo from "@/components/Seo";
import { timeline } from "data";

const About = () => {
  return (
    <>
      <Seo title="About" />
      <section className="container py-8">
        <h1 className="text-center">About Me</h1>
        <div className="my-8 flex flex-col-reverse items-center gap-8 md:flex-row">
          <div className="w-full space-y-2 text-left md:w-2/3">
            <p>
              Hi, my name is <Accent>Tri Hartanto</Accent>,
            </p>
            <p>
              I am a freelancer and build an elegant and functional interface
              for the web. I like to learn something about art. Now I am
              studying to be a Front-End Web Developer.
            </p>
            <p>Find me on social media.</p>
            <Social />
          </div>
          <div className="w-full md:w-1/3">
            <NextImage
              src="/images/profile.jpg"
              alt="Tri Hartanto"
              className="aspect-[4/2] rounded-lg md:aspect-square"
            />
          </div>
        </div>
        <div>
          <h2 className="uppercase">Timeline</h2>
          <p className="my-4 inline-block">This is my journey</p>
          <Timeline timeline={timeline} />
        </div>
      </section>
    </>
  );
};

export default About;
