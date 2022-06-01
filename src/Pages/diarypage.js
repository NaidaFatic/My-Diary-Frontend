import Calendar from 'react-awesome-calendar';
import "./diarypage.css"
import React from 'react';

const events = [{
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


function DiaryPage(props) {
    props.setCurrentPage("DIARY");
    function read(e) {
        console.log('nn');
    }

    return (
        <main className='pt:20 px-4 px:md:0'>
            <Calendar
                onclick={read()}
                events={events}
            />
        </main>
    );
}

export default DiaryPage;