import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();
    function handleNewMeetup(meetupData) {
        fetch(
            "https://react-getting-started-7db11-default-rtdb.firebaseio.com/meetups.json/",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "content-type": "application/json",
                }
            }
        ).then(() => {
            navigate("/");
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={handleNewMeetup} />
        </section>
    )
}

export default NewMeetupPage;