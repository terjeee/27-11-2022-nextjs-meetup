import { useRouter } from "next/router";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: "1" } },
      { params: { meetupId: "2" } },
      { params: { meetupId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log(params.meetupId);

  return { props: { meetupData: { meetupId: params.meetupId } }, revalidate: 10 };
}

export default function MeetUpId(props) {
  return <div>{props.meetupData.meetupId}</div>;
}
//
