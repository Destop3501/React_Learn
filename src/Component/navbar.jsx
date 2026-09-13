import React from "react";
import './navbar.css';
import button_click from "./buttonclick.jsx";

function Navbar(){
    return(
        <>
            <section className="navbar">
                <div className="Block">
                    <section className="Itemlist">
                        <button 
                            onClick={() => button_click("Messages")}
                            id="Messages"
                            value="Messages"
                        >
                            Messages
                        </button>
                        <button 
                            onClick={() => button_click("Status")}
                            id="Status"
                            value="Status"
                        >
                            Status
                        </button>
                        <button 
                            onClick={() => button_click("Calls")}
                            id="Calls"
                            value="Calls"
                        >
                            Calls
                        </button>
                    </section>
                    <section className="Meta">
                        <button 
                            onClick={() => button_click("Meta")}
                            id="Meta"
                            value="Meta"
                        >
                            Meta
                        </button>
                        
                    </section>
                    <section className="Setting">
                        <button 
                            onClick={() => button_click("Settings")}
                            id="Settings"
                            value="Settings"
                        >
                            Settings
                        </button>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Navbar