import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function handleAddMeetup(dataMeetup) {
    fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataMeetup),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}
