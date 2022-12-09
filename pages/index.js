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

export async function getStaticProps() {
  // do whatever (user wont see this, code runds on the server, not the client)
  // fetch data from DB = fetchedData

  // return { props: { fetchedData: fetchedData }, revalidate: 10 };
  return { props: { meetups: DUMMY_MEETUPS }, revalidate: 60 };
}

// export async function getServerSideProps(context) {
//   const request = context.req;
//   const response = context.res;

//   // fetch data from an API = fetchedData
//   // do whatever (user wont see this, code runds on the server, not the client)

//   // return { props: { fetchedData: fetchedData } };
//   return { props: { meetups: DUMMY_MEETUPS } };
// }

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
