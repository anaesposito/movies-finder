import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  return (
    <footer className=" w-screen h-auto text-white text-center mt-24 pb-9 border-gray-50 border-solid border-t border-l-0 border-b-0 border-r-0">
      <p className="pt-6 ">
        {" "}
        Hecho por
        <span>
          <a
            href="https://anaesposito.github.io/portfolio/"
            className="text-pink-600 transition duration-500 ease-in-out  hover:text-purple-400 transform hover:-translate-y-1 hover:scale-110"
          >
            {" "}
            Ana Esposito{" "}
          </a>
        </span>
      </p>
      <div className="flex flex-row justify-center">
        <a href="https://www.linkedin.com/in/ana-esposito-5a875184/">
          <div className="m-9">
            <LinkedInIcon
              className="text-white hover:text-gray-500"
              style={{
                transform: "scale(3)",
              }}
            />
          </div>
        </a>
        <a href="https://github.com/anaesposito">
          <div className="m-9">
            <GitHubIcon
              className="text-white hover:text-gray-500"
              style={{
                transform: "scale(3)",
              }}
            />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
