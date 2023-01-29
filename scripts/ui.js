import { store } from './store.js'

const indexCarContainer = document.querySelector('#index-car-container')
// const indexDescriptionContainer = document.querySelector('#index-description-container')
const messageContainer = document.querySelector('#message-container')
const showCarContainer = document.querySelector('#show-car-container')
const showDescriptionContainer = document.querySelector('#show-description-container')
const authContainer = document.querySelector('#auth-container')
const indexContainer = document.querySelector('#index-container')
 

authContainer.classList.remove('hide')

export const onIndexCarSuccess = (car) => {
    car.forEach(car =>{
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${car.make} ${car.model}</h3>
        <button type="button" class="btn btn-primary" data-id="${car._id}">Show Car</button>
        `


        indexCarContainer.appendChild(div)
    })
}

// export const onIndexDescriptionSuccess = (description) => {
//     description.forEach(description =>{
//                 const div = document.createElement('div')
//                 div.innerHTML = `
//                 <h3>${description.title}<h3>
//                 <button data-id="${description._id}">Show Description</button>
//                 `
    

//                 indexDescriptionContainer.appendChild(div)
                
//             })
// }

export const onFailure = (error) =>{
    messageContainer.innerHTML = `
    <h3>Youve got an error! :(</h3>
    <p>${error}</p>`
}

export const onCreateCarSuccess = () =>{
    messageContainer.innerText = 'You have created a car!! :)'
}

export const onCreateDescriptionSuccess = () =>{
    messageContainer.innerText = 'You have created a description!! :)'
}


export const onShowCarSuccess = (car) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${car.make}  ${car.model}</h3>
        <p>${car.class}</p>
        <p>${car.drive}</p>
        <p>${car.miles}</p>
        <p>${car.description[0].content}</p>
        <p>${car._id}</p>

        <form data-id="${car._id}">
            <input type="text" name="make" value="${car.make}" />
            <input type="text" name="model" value="${car.model}" />
            <input type="text" name="class" value="${car.class}" />
            <input type="number" name="drive" value="${car.drive}" />
            <input type="number" name="miles" value="${car.miles}" />
            <input type="array" name="description" value="${car.description}" />
            <input type="submit" value="Update Car" id="update"/>
        </form>

        <button type="button" data-id="${car._id}">Delete Car</button>
    `
    indexDescriptionContainer.classList.add('hide')
    indexCarContainer.classList.add('hide')
    showCarContainer.appendChild(div)
}

export const onShowDescriptionSuccess = (description) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${description.content}</h3>
        <p>${description._id}</p>
        
        <form data-id="${description._id}">
            <input type="text" name="content" value="${description.content}" />
            <input type="submit" value="Update Description" id="update"/>
        </form>

        <button type="button" data-id="${description._id}">Delete Description</button>
    `
    // indexDescriptionContainer.classList.add('hide')
    indexCarContainer.classList.add('hide')
    showDescriptionContainer.appendChild(div)
}

export const onUpdateCarSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onUpdateDescriptionSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteCarSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}

export const onDeleteDescriptionSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}

export const onSignUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = ''
    store.userToken = userToken
    authContainer.classList.add('hide')
    indexContainer.classList.remove('hide')
}