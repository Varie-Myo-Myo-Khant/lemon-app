import React, { useState } from "react";

const BookingForm = (props) =>{
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [guest,setGuest]=useState("");
    const [occasion,setOccas]=useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange =(e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
            
                <form onSubmit={handleSubmit}>
                <h3 >Table Reservation</h3>
                    <fieldset className="formField">
                        
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" type="date" value={date} onChange={(e)=> handleChange(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e)=>setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return
                                        <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }

                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" type="number" min='1' value={guest} onChange={(e)=>setGuest(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e)=>setOccas(e.target.value)} >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;