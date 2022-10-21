//This module will create the HTML to show reservations in a list.  It will allow the admin to select the clown who performed at the party and to delete reservation items as needed.  It will have an event listener that listens to see if a reservation should be deleted.  It has a second event listener that listens to see if a clown was selected, and then saves the reservation to the completed database once a clown is selected. 

import { getReservations, getClowns, deleteReservation, saveCompletion } from "./dataAccess.js";

export const reservationsList = () => {
    const reservations = getReservations()

    return `<ul>
        ${reservations.map(res => reservationsHTML(res))}
        </ul>
    `
}


const reservationsHTML = (reservation) => {
    const clowns = getClowns()

    return `
    <li>
        ${reservation.parentName} requested a clown for their party which is scheduled for ${reservation.resDate}
        <button class="res_delete" id="res--${reservation.id}">
            Deny
        </button>
    </li>
        <select class="clowns" id="clowns">
        <option value="0">Choose a Clown</option>
        ${
            clowns.map(clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }
            ).join("")

        }
        </select>
    `
}

document.addEventListener("click", e => {
    if (e.target.id.startsWith("res--")) {
        //find the reservation id 
        const [, reservationId] = e.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

document.addEventListener("change", e => {
    if(e.target.id === "clowns") {
        const [resId, clown] = e.target.value.split("--")

        const completion = {
            reservationId: resId,
            clownId: clown,
            dateCreated: e.timeStamp
        }

        saveCompletion(completion)
    }
})