import { store } from './store.js'

const indexCarContainer = document.querySelector('#index-car-container')
const messageContainer = document.querySelector('#message-container')
const showCarContainer = document.querySelector('#show-car-container')
const descriptionContainer = document.querySelector('#description-container')
const createDescriptionContainer = document.querySelector('#create-description-container')
const authContainer = document.querySelector('#auth-container')
const carCreateButton = document.querySelector('.cCB')
const browse = document.querySelector('.browse')
 

export const onIndexCarSuccess = (car) => {
    indexCarContainer.innerText = 'Used Cars:'
    car.forEach(car =>{
        
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${car.make} ${car.model}</h3>
        <button type="button" class="btn btn-primary" data-id="${car._id}">Show Car</button>
        `
        // indexCarContainer.classList.remove('hide')
        indexCarContainer.appendChild(div)
    })
}

export const onFailure = (error) =>{
    messageContainer.innerHTML = `
    <h3>Youve got an error! :(</h3>
    <p>${error}</p>`
}

export const onCreateCarSuccess = () =>{
    messageContainer.classList.remove('hide')
    messageContainer.innerText = 'You have created a car!! :)'
}

export const onShowCarSuccess = (car => {

    while(showCarContainer.firstChild){
        showCarContainer.removeChild(showCarContainer.lastChild)
    }
    while(descriptionContainer.firstChild){
        descriptionContainer.removeChild(descriptionContainer.lastChild)
    }
    while(createDescriptionContainer.firstChild){
        createDescriptionContainer.removeChild(createDescriptionContainer.lastChild)
    }
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${car.make}  ${car.model}</h3>
        <p>${car.class}</p>
        <p>${car.drive}</p>
        <p>${car.miles}</p>
        <p>${car._id}</p>


        <form data-id="${car._id}">
            <input type="text" name="make" value="${car.make}" />
            <input type="text" name="model" value="${car.model}" />
            <input type="text" name="class" value="${car.class}" />
            <input type="number" name="drive" value="${car.drive}" />
            <input type="number" name="miles" value="${car.miles}" />
            <input type="submit" value="Update Car" id="update"/>
        </form>

        <button type="button" data-id="${car._id}">Delete Car</button>
    `
    showCarContainer.appendChild(div)

    if(car.description.length >= 2){
        
    } else if(car.description.length === 1){
        car.description.forEach(description =>{
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${description.content}</p>

            
            `
            descriptionContainer.appendChild(div)
        })
    }
    else{
  
    const divCreateDescription = document.createElement('div')
    divCreateDescription.innerHTML = `
    <form data-createId="${car._id}">
    <div class="mb-1 form-outline">
    <label for="content" class="form-label">Add A Description</label>
    <input type="text" class"form-control" name="content">
    </div>
    <button data-createId="${car._id}" type="submit" class="btn btn-success">Create</button>
    </form>
    `
    
    createDescriptionContainer.appendChild(divCreateDescription)
   
    }
     indexCarContainer.classList.add('hide')
     descriptionContainer.classList.remove('hide')
     createDescriptionContainer.classList.remove('hide')
     showCarContainer.classList.remove('hide')
     
})

export const onUpdateCarSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteCarSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}

export const onSignUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = ''
    store.userToken = userToken
    authContainer.classList.add('hide')
    indexCarContainer.classList.remove('hide')
    browse.classList.remove('hide')
    carCreateButton.classList.remove('hide')
}