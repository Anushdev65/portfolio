import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-15">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent">System Developer · Backend Lead</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Anush Malhotra</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I build reliable ERP platforms, business APIs, and full-stack
              systems with TypeScript, NestJS, PostgreSQL, React, Docker, and AWS.
              Based in Trollhättan, Sweden.
            </p>
            <div>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href="/Anush_Malhotra_System_Developer_CV.docx"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-lg font-medium border border-transparent rounded-md shadow-sm text-primary bg-accent"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
                <Link
                  href="/work"
                  className="text-white/80 underline decoration-accent underline-offset-8 hover:text-accent transition-colors"
                >
                  Explore selected work
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
