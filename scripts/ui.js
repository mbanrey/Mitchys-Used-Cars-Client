import { store } from './store.js'

const indexCarContainer = document.querySelector('#index-car-container')
const messageContainer = document.querySelector('#message-container')
const showCarContainer = document.querySelector('#show-car-container')
const descriptionContainer = document.querySelector('#description-container')
const createDescriptionContainer = document.querySelector('#create-description-container')
const authContainer = document.querySelector('#auth-container')
const carCreateButton = document.querySelector('.cCB')
const browse = document.querySelector('.browse')
const nav = document.querySelector('.navbar')
const design = document.querySelector('.design')
const carform = document.querySelector('.carform')

export const onIndexCarSuccess = (car) => {
    indexCarContainer.innerHTML = '<h2>Used Cars:</h2>'
    car.forEach(car =>{
        
        const div = document.createElement('div')
        div.classList.add('cars-design')
        div.innerHTML = `
        <h3>${car.year} ${car.make.toUpperCase()} ${car.model.toUpperCase()}</h3>
        <button type="button" class="btn btn-primary" data-id="${car._id}">Show Car</button>
        `
        
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
 design.classList.remove('hide')
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
    div.classList.add('cars-design2')
    div.innerHTML = `
        <h3>${car.year}  ${car.make.toUpperCase()}  ${car.model.toUpperCase()}</h3>
        <p>Class: ${car.class.toUpperCase()}</p>
        <p>Drive: ${car.drive}</p>
        <p>Miles: ${car.miles}</p>
        <p>ID: ${car._id}</p>


        <form data-id="${car._id}">
        <input type="number" name="year" value="${car.year}" />
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
    nav.classList.remove('hide')
    
}

export const onUpdateFailure = (error)=>{
    if(error === 401){
    messageContainer.innerHTML = `
    <h3>Unauthorized Update</h3>
    <p>${error}</p>
    `
    }
}

export const onDeleteFailure = (error)=>{
    
    messageContainer.innerHTML = `
    <h3>Unauthorized Delete</h3>
    <p>${error}</p>
    `
    
}

