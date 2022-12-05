import { HiHome, HiArchive, HiPlusCircle } from "react-icons/hi";

export const menus = [
  {
    id: 1,
    name: "Active Notes",
    icon: HiHome,
    active: true,
  },
  {
    id: 2,
    name: "Archive Notes",
    icon: HiArchive,
    active: false,
  },
  {
    id: 3,
    name: "Add Notes",
    icon: HiPlusCircle,
    active: false,
  },
];
