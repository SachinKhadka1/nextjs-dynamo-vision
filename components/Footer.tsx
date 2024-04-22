import NewsletterInput from "./NewsletterInput";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#727b7d] py-5 justify-center flex flex-col gap-8 items-center text-white">
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="text-3xl">Newsletter </div>
        <div>Check this out</div>
      </div>
      <NewsletterInput />
      <div className="flex flex-row gap-5 mb-5">
        <a
          style={{ display: "table-cell" }}
          href="https://www.instagram.com/sachin_khadak/"
          target="_blank"
        >
          <InstagramIcon className="h-8 w-8" />
        </a>

        <a
          style={{ display: "table-cell" }}
          href="http://www.youtube.com/@sachin.khadka"
          target="_blank"
        >
          <YouTubeIcon className="h-8 w-8" />
        </a>

        <a
          style={{ display: "table-cell" }}
          href="https://www.facebook.com/sachin.khadka.142"
          target="_blank"
        >
          <FacebookIcon className="h-8  w-8 " />
        </a>
      </div>
      <div className="mt-[-40px] text-xs">
        Copyright © {new Date().getFullYear()} - All right reserved by Sachin
        Khadka
      </div>
    </footer>
  );
};

export default Footer;
