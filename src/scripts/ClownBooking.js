import { reservationForm } from "./reservationForm.js"
import { reservationsList } from "./Reservations.js"

export const ClownBooking = () => {
    return `
    <h1>Buttons the Clown</h1>
    <section class="reservationForm">
        <h2>Make a Reservation</h2>
            ${reservationForm()}
    </section>
    <section class="reservationRequests">
        <h2>Reservations</h2>
            ${reservationsList()}
    </section>
`
}