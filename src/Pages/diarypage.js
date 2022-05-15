import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import "./diarypage.css"
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
const myEventsList = [
    { start: new Date("2022-05-25"), end: new Date("2022-05-25"), title: "special event" }
];

function DiaryPage(props) {
    props.setCurrentPage("DIARY");

    return (
        <main className='pt:20'>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100vh" }}
                events={myEventsList}
                views={{ month: true }}
            />
        </main>
    );
}

export default DiaryPage;