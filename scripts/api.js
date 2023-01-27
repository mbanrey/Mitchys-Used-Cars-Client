import{ store } from './store.js'

export const signUp = (data) => {
    return fetch('http://localhost:8000/sign-up',{
        method: 'POST',
        headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const signIn = (data) => {
        return fetch('http://localhost:8000/sign-in',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application',
            },
            body: JSON.stringify(data),
        })
}

export const indexCar = () =>{
    return fetch('http://localhost:8000/cars',{
        headers: {
            'Authorization': `Bearer ${store.userToken}`,
        },
    })
    
}

export const createCar = (data) =>{
    return fetch(`http://localhost:8000/cars`,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authirization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const showCar = (id) =>{
    return fetch(`http://localhost:8000/cars/${id}`,{
        headers:{
            'Authorization': `Bearer ${store.userToken}`
        },
    })
}

export const updateCar = (data, id) => {
    return fetch(`http://localhost:8000/cars/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authirization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const deleteCar = (id) => {
    return fetch(`http://localhost:8000/cars/${id}`, {
        method: 'DELETE',
        headers: {
            'Authirization': `Bearer ${store.userToken}`,
        },
    })
}


// export const indexDescription = () =>{
//     return fetch('http://localhost:8000/descriptions',{
//         headers: {
// 			'Authorization': `Bearer ${store.userToken}`
// 		},
//     })
    
// }

export const createDescription = (data) =>{
    return fetch(`http://localhost:8000/descriptions`,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`

        },
        body: JSON.stringify(data)
    })
}

export const showDescription = (id) =>{
    return fetch(`http://localhost:8000/description/${id}`,{
        headers: {
			'Authorization': `Bearer ${store.userToken}`
		},
    })
}

export const updateDescription = (data, id) => {
    return fetch(`http://localhost:8000/description/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteDescription = (id) => {
    return fetch(`http://localhost:8000/description/${id}`, {
        method: 'DELETE',
        headers: {
			'Authorization': `Bearer ${store.userToken}`
		},
    })
}
