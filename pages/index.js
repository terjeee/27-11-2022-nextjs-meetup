import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "1",
    title: "1",
    address: "1",
    image:
      "https://www.snow-forecast.com/system/images/36932/original/Crystal-Mountain.jpg?1619614348",
  },
  {
    id: "2",
    title: "2",
    address: "2",
    image:
      "https://www.snow-forecast.com/system/images/36932/original/Crystal-Mountain.jpg?1619614348",
  },
  {
    id: "3",
    title: "3",
    address: "2",
    image:
      "https://www.snow-forecast.com/system/images/36932/original/Crystal-Mountain.jpg?1619614348",
  },
  {
    id: "4",
    title: "4",
    address: "2",
    image:
      "https://www.snow-forecast.com/system/images/36932/original/Crystal-Mountain.jpg?1619614348",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
