import { HiHome, HiArchive, HiPlusCircle } from "react-icons/hi";

const menus = [
  {
    id: 1,
    name: { en: "Active Notes", id: "Catatan Aktif" },
    icon: HiHome,
    path: "/active-notes",
    active: true,
  },
  {
    id: 2,
    name: { en: "Archived Notes", id: "Catatan Arsip" },
    icon: HiArchive,
    path: "/archived-notes",
    active: false,
  },
  {
    id: 3,
    name: { en: "Add Notes", id: "Tambahkan Catatan" },
    icon: HiPlusCircle,
    path: "/add-notes",
    active: false,
  },
];

const buttonLang = {
  back: { en: "Back", id: "Kembali" },
  logout: { en: "Log out", id: "Keluar" },
  save: { en: "Save", id: "Simpan" },
};

const modalLang = {
  modalConfirm: {
    title: { en: "Are you sure?", id: "Apakah kamu yakin?" },
    text: {
      en: "You won't be able to revert this!",
      id: "Kamu tidak akan dapat mengembalikannya nanti!",
    },
    button: {
      yes: { en: "Yup, absolutely", id: "Iyalah yakin" },
      no: { en: "Nope!", id: "Masih Ragu sih" },
    },
  },
};

const data = [
  {
    id: "note-01",
    titleNote: "Tester",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
  {
    id: "note-02",
    titleNote: "Explore Design System",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
  {
    id: "note-03",
    titleNote: "Explore Design System",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
  {
    id: "note-04",
    titleNote: "Explore Design System",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
  {
    id: "note-05",
    titleNote: "Explore Design System",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
  {
    id: "note-06",
    titleNote: "Explore Design System",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
  {
    id: "note-07",
    titleNote: "Explore Design System",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
  {
    id: "note-08",
    titleNote: "Explore Design System",
    textNote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ante, dignissim et tempor id, porta rhoncus justo. Donec consequat est a imperdiet blandit. Nunc condimentum nunc vitae",
    dateNote: "Sunday, 24 March 2023",
  },
];

export { menus, data, buttonLang, modalLang };
