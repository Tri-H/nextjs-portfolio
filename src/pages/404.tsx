import { ButtonLink } from "@/components/atoms";
import { Logo } from "@/components/atoms";
import Seo from "@/components/Seo";

const Custom404 = () => {
  return (
    <>
      <Seo title="Not Found" />
      <section className="container flex min-h-[calc(100vh-152px)] flex-col items-center justify-center gap-4 md:min-h-[calc(100vh-170px)]">
        <Logo className="h-48 w-48" />
        <h3>Page Not Found</h3>
        <ButtonLink
          href="/"
          className="mt-4 inline-block border border-black bg-black px-6 py-3 text-white transition-colors duration-500 hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
        >
          Back to Home
        </ButtonLink>
      </section>
    </>
  );
};

export default Custom404;
