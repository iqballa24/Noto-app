import { HiHome, HiArchive, HiPlusCircle } from "react-icons/hi";

export const menus = [
  {
    id: 1,
    name: "Active Notes",
    icon: HiHome,
    path: "/",
    active: true,
  },
  {
    id: 2,
    name: "Archive Notes",
    icon: HiArchive,
    path: "/archive-note",
    active: false,
  },
  {
    id: 3,
    name: "Add Notes",
    icon: HiPlusCircle,
    path: "/add-note",
    active: false,
  },
];
