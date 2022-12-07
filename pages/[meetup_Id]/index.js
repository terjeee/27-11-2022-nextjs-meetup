import { useRouter } from "next/router";

export default function MeetUpId() {
  const router = useRouter();

  return <div>{router.query.meetup_Id}</div>;
}
