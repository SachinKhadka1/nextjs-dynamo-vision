import NewsletterInput from "./NewsletterInput";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#727b7d] h-[240px] justify-center flex flex-col gap-8 items-center text-white">
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="text-3xl">Newsletter </div>
        <div>Check this out</div>
      </div>
      <NewsletterInput />
      <div className="flex flex-row gap-5 mb-5">
        <Link href="/">
          <InstagramIcon className="h-8 w-8" />
        </Link>
        <Link href="/">
          <YouTubeIcon className="h-8 w-8" />
        </Link>
        <Link href="/">
          <FacebookIcon className="h-8  w-8 " />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
