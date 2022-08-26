import Calendar from 'react-awesome-calendar';
import "./diarypage.css"
import React, { useState } from "react";
import Modal from '../components/Modal';


function DiaryPage(props) {
    var events = [{
        id: 1,
        color: '#FCC8B2',
        from: '2022-05-02T18:00:00+00:00',
        to: '2022-05-05T19:00:00+00:00',
        title: 'This is an event'
    }, {
        id: 2,
        color: '#C6D8AF',
        from: '2022-05-01T13:00:00+00:00',
        to: '2022-05-05T14:00:00+00:00',
        title: 'This is another event'
    }, {
        id: 3,
        color: '#FCC8B2',
        from: '2022-05-05T13:00:00+00:00',
        to: '2022-05-05T20:00:00+00:00',
        title: 'This is also another event'
    }];

    const [calEvents, setCalEvents] = useState(<Calendar
        onClickTimeLine={(event) => {
            console.log(event)
            /* result
               42
            */
        }}
        events={events}
    />);

    const addEvent = () => {
        events = [...events, {
            id: 4,
            color: '#FCC8B2',
            from: '2022-06-05T13:00:00+00:00',
            to: '2022-06-05T20:00:00+00:00',
            title: 'Memory from today'
        }];
        setCalEvents(<Calendar
            onClickTimeLine={(event) => {
                console.log(event)
                /* result
                   42
                */
            }}
            events={events}
        />)
    }

    props.setCurrentPage("DIARY");
    function read(e) {
        console.log('nn');
    }

    return (
        <main className='pt:20 px-4 px:md:0'>
            {calEvents}
            <Modal addEvent={addEvent} />
        </main>
    );
}

export default DiaryPage;