import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { projects } from "../projects/projects";
import { getCookie, getCookies, setCookie } from "cookies-next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oubani Ayoub | fullstack web Freelancer </title>
        <meta
          name="description"
          content="Oubani ayoub, I web designer and fullstack web developer, Freelancer "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills />
      <Projects projects={projects} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const checkVisit = getCookie("visit", { req, res });
  if (!checkVisit) {
    console.log("new visit");
    setCookie("visit", true, { req, res });
  } else {
    console.log("already visits");
  }

  return { props: {} };
};

export default Home;
// npx browserslist@latest --update-db
