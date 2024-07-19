import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [loading, setLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(
            "https://react-getting-started-7db11-default-rtdb.firebaseio.com/meetups.json/"
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup)
            }
            setLoading(false)
            setLoadedData(meetups)
        });
    }, []);

    if (loading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedData} />
        </section>
    )
}

export default AllMeetupsPage;