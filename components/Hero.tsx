import Image from "next/image";
import Link from "next/link";
import devImage from "./devSvg.svg";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center space-y-10 mt-12 sm:mt-24  ">
      <div className=" flex-1 px-4 ">
        <h1 className="text-2xl sm:text-4xl mb-1"> Hello, 🖐 </h1>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 ">
          I{"'"}m Oubani Ayoub
        </h1>
        <h1 className="text-2xl sm:text-xl mb-8">
          I am a full stack web developer (react || NodeJs) ,with knowledge of
          software development and design. You can check my projects below or on
          my Github account
        </h1>
        <div className="flex flex-col md:flex-row">
          <a
            href="
            https://drive.google.com/file/d/15fX3oftYQfbOtfpLOliO0rV4CB0YIgrz/view?usp=sharing"
            rel="noopener noreferrer "
            target="_blank"
            className="bg-blue-600 sm:inline-block mt-2 mr-2 hover:bg-blue-700 text-white shadow-inner px-8 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap "
          >
            View Resume
          </a>
          <a
            href="mailto:oubaniayoub@gmail.com"
            className="bg-gray-600 sm:inline-block mt-2 mr-2 hover:bg-gray-400 text-white px-8 py-3 rounded-md border-0 text-lg sm:text-xl "
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex-1 md:px-4">
        <Image src={devImage} alt="Landscape picture" loading="lazy" />
      </div>
    </section>
  );
};
export default Hero;
