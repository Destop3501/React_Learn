import './message.css';
import button_click from "./buttonclick.jsx";
import { useState } from 'react';

function Massage() {
    const [search, setSearch] = useState("")

    return (
        <section className="message">
            <section className='WhatsApp'>
                <h1 id='WhatsApp'>WhatsApp</h1>
                <button 
                    id='info'
                    value=":"
                    onClick={() => button_click("Info")}
                    >
                    :
                </button>
                <button 
                    id='newmessage'
                    value="+"
                    onClick={() => button_click("newmessage")}
                >
                    +
                </button>
            </section>
            <section className='Searchbar'>
                <input 
                    type="text" 
                    value={search}
                    placeholder='Search'
                    onChange={(event) => setSearch(event.target.value)}/>
            </section>
            <section className='buttons'>
                <button
                    id='All'
                    value="All"
                    onClick={() => (button_click("All"))}
                    >
                    All
                </button>
                <button
                    id='Unread'
                    value="Unread"
                    onClick={() => (button_click("Unread"))}
                    >
                    Unread
                </button>
            </section>
            <section className='content'>
                <section className='onecontent'>
                    <section className='profilepicture'>

                    </section>
                    <section className='Titles'>
                        
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Massage