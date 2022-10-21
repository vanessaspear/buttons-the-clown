import { ClownBooking } from "./ClownBooking.js"
import { fetchReservations, fetchClowns, fetchCompletions } from "./dataAccess.js"


const render = () => {
   fetchReservations()
   .then(() => fetchClowns())
   .then(() => fetchCompletions())
    .then(
        () => {
            document.querySelector("#container").innerHTML = ClownBooking()
        })
}

render()

document.querySelector("#container").addEventListener("stateChanged", customEvent => {
    render()
})