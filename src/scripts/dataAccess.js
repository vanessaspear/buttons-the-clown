const applicationState = {
    reservations: [],
    clowns: [],
    completions: []
}

const api = "http://localhost:8088"

//fetch reservations
export const fetchReservations = () => {
    return fetch(`${api}/reservations`)
        .then(res => res.json())
        .then( (data) => {
            applicationState.reservations = data 
        })
}

//get reservations from applicationState copy 
export const getReservations = () => {
    return applicationState.reservations.map(res => ({...res}))
}

//Post reservations to json
export const sendReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }

    return fetch(`${api}/reservations`, fetchOptions)
        .then(res => res.json()) //convert data to json
        .then( 
            () => {
                document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
            }
        ) //let the app know that state has changed 
}

//delete a reservation from permenant state
export const deleteReservation = (id) => {
    return fetch(`${api}/reservations/${id}`, {method: "DELETE"})
        .then(() => {
            document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//fetch clowns

export const fetchClowns = () => {
    return fetch(`${api}/clowns`)
        .then(res => res.json())
        .then( 
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

//POST to completions
export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }


    return fetch(`${api}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//GET completions
export const fetchCompletions = () => {
    return fetch(`${api}/completions`) 
    .then(res => res.json())//parse the data
    .then( (data) => {
        applicationState.completions = data
    })
}