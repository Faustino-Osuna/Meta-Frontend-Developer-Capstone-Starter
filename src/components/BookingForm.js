import { useState } from "react"

const BookingForm = () => {
    const [date, setDate] = useState('')
    const handleChange = (e) => {
        setDate(e)
    }

    return(
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm