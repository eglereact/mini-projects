import { ImAttachment, ImFeed, ImCalendar } from "react-icons/im";

const buttons = [
  { id: 1, icon: <ImAttachment />, text: "Source Files" },
  { id: 2, icon: <ImFeed />, text: " Live Streams" },
  { id: 3, icon: <ImCalendar />, text: " Meetup" },
];

const people = [
  {
    id: 1,
    name: "Antonio Jenkins",
    job: "Designer",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Layla Baker",
    job: "Illustrator",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 3,
    name: "Christopher Evans",
    job: "Programmer",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 4,
    name: "Luis Allen",
    job: "Designer",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Brennan Reed",
    job: "Illustrator",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    name: "Mark Doe",
    job: "Programmer",
    img: "https://randomuser.me/api/portraits/men/95.jpg",
  },
];

export { buttons, people };
