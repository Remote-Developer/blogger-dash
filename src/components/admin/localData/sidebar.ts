import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineMail,
  AiFillSetting,
} from "react-icons/ai";
import { BsFiletypeDoc, BsFillSignIntersectionFill } from "react-icons/bs";
import { SiReacthookform } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import { FaFileCsv } from "react-icons/fa";

type Sidebar = {
  icon: IconType;
  name: string;
  link: string;
}[];
export const sidebar: Sidebar = [
  {
    icon: AiOutlineHome,
    name: "Admin",
    link: "admin",
  },
  {
    icon: BsFillSignIntersectionFill,
    name: "Sections",
    link: "sections",
  },
  {
    icon: BsFiletypeDoc,
    name: "New Doc",
    link: "new-doc",
  },
  {
    icon: FaFileCsv,
    name: "docs",
    link: "docs",
  },
  {
    icon: AiOutlineBarChart,
    name: "Chart",
    link: "chart",
  },
  {
    icon: SiReacthookform,
    name: "Form",
    link: "form",
  },
  {
    icon: AiOutlineMail,
    name: "Email",
    link: "email",
  },
  {
    icon: CgProfile,
    name: "Profile",
    link: "profile",
  },
  {
    icon: AiFillSetting,
    name: "Setting",
    link: "setting",
  },
];
