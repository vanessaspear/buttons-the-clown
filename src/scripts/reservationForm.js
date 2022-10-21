import { sendReservation } from "./dataAccess.js"

document.addEventListener("click", e => {
    if (e.target.id === "submitButton") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").vaule
        const userAddress = document.querySelector("input[name='address']").value
        const userResDate = document.querySelector("input[name='resDate']").value
        const userResLength = document.querySelector("input[name='resLength']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            address: userAddress,
            resDate: userResDate,
            resLength: userResLength
        }

        sendReservation(dataToSendToAPI)
    }
})


export const reservationForm = () => {
    return `
        <div class="field">
            <label for="parentName">Parent Name</label>
            <input type="text" name="parentName">
        </div>
        <div class="field">
            <label for="childName">Child Name</label>
            <input type="text" name="childName">
        </div>
        <div class="field">
            <label for="address">Address</label>
            <input type="text" name="address">
        </div>
        <div class="field">
            <label for="resDate">Reservation Date</label>
            <input type="date" name="resDate">
        </div
        <div class="field">
            <label for="resLength">Reservation Length (Hours)</label>
            <input type="number" name="resLength">
        </div>

        <button id="submitButton">Submit Reservation</button>
    `
}

