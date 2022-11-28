import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUp() {
  function handleAddMeetup(dataMeetup) {
    console.log(dataMeetup);
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}
