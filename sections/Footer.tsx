interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="px-4 sm:px-6 py-6 mt-10  ">
      <div className="text-center text-sm text-gray-500 items-center justify-center flex">
        <p>2020/{new Date().getFullYear()} built with next open sourced on</p>
        <a
          href="https://github.com/oubani/nextjs-portfolio"
          rel="noopener noreferrer "
          target="_blank"
        >
          <i className="icon  ion-logo-github text-xl ml-2"></i>
        </a>
      </div>
    </div>
  );
};
export default Footer;
