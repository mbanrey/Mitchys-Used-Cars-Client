import { 
	indexCar, 
	createCar, 
	showCar, 
	updateCar, 
	deleteCar, 
	signUp, 
	signIn, 
    createDescription,
    updateDescription,
    deleteDescription
} from "./api.js";
import { 
	onIndexCarSuccess, 
	onFailure, 
	onCreateCarSuccess, 
	onShowCarSuccess,
	onUpdateCarSuccess,
	onDeleteCarSuccess,
	onSignUpSuccess,
	onSignInSuccess, 
} from "./ui.js";

const createCarForm = document.querySelector('#create-car-form')
const indexCarContainer = document.querySelector('#index-car-container')
const showCarContainer = document.querySelector('#show-car-container')
const descriptionContainer = document.querySelector('#description-container')
const createDescriptionContainer = document.querySelector('#create-description-container')
const messageContainer = document.querySelector('#message-container')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')
const authContainer = document.querySelector('#auth-container')
const browse = document.querySelector('.browse')
const carCreateButton = document.querySelector('.cCB')
const carform = document.querySelector('.carform')

authContainer.classList.remove('hide')
indexCarContainer.classList.add('hide')
// carCreateButton.classList.add('hide')
browse.classList.add('hide')
carCreateButton.classList.add('hide')




signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()


	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData)
    .then(onSignUpSuccess)
    .catch(onFailure)
})

signInContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => onSignInSuccess(res.token))
		.then(indexCar)
		.then((res) => res.json())
		.then((res) => onIndexCarSuccess(res.cars))
		.catch(onFailure)
})

    // indexCar()
	// .then((res) => res.json())
	// .then(res => {
    //     console.log(res)
    //     onIndexCarSuccess(res.cars)
    // })
	// .catch(onFailure)

    createCarForm.addEventListener('submit', (event) =>{
        event.preventDefault()
    
        const carData = {
            car: {
                make: event.target['make'].value,
                model: event.target['model'].value,
                class: event.target['class'].value,
                drive: event.target['drive'].value,
                miles: event.target['miles'].value,
                
            },
        }
       createCar(carData)
       .then(onCreateCarSuccess)
       .catch(onFailure)
    })

    indexCarContainer.addEventListener('click', (event) =>{
        const id = event.target.getAttribute('data-id')
        // console.log(id)
        if (!id) return
    
        showCar(id)
            .then((res)=> res.json())
            .then((res)=>onShowCarSuccess(res.car))
            .catch(onFailure)
    })

    showCarContainer.addEventListener('submit', (event) => {
        event.preventDefault()
    
        const id = event.target.getAttribute('data-id')
    
        const carData = {
            car: {
                make: event.target['make'].value,
                model: event.target['model'].value,
                class: event.target['class'].value,
                drive: event.target['drive'].value,
                miles: event.target['miles'].value,
                
            },
        }
    
        if (!id) return
    
        updateCar(carData, id)
            // this function (onUpdateCarSuccess) does not need anything to run. NO params
            .then(onUpdateCarSuccess)
            .catch(onFailure)
    })

    showCarContainer.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id')
    
        if (!id) return
    
        deleteCar(id)
            .then(onDeleteCarSuccess)
            .catch(onFailure)
    })

    createDescriptionContainer.addEventListener('submit', (event) =>{
        event.preventDefault()

        const carId = event.target.getAttribute('data-createId')

        const descriptionData = {
            description:{
                content: event.target['content'].value,
                carId: carId
            }
        }
        createDescription(descriptionData)
            .then(onCreateCarSuccess)
            .catch(onFailure)
    })

    descriptionContainer.addEventListener('submit', (event) => {
        event.preventDefault()

        const id = event.target.getAttribute('data-id')
        const carId = event.target.getAttribute('data-carId')

        const descriptionData={
            description:{
                content:event.target['description'].value,
                carId: carId
            }
        }
        updateDescription(descriptionData, id)
        .then(onUpdateCarSuccess)
        .catch(onFailure)
    })

    descriptionContainer.addEventListener('click', (event)=>{
        event.stopPropagation()

        const descriptionId = event.target.getAttribute('data-descriptionId')
        if(!descriptionId) return
        const carId = event.target.getAttribute('data-carId')

        deleteDescription(carId, descriptionId)
        .then(onDeleteCarSuccess)
        .catch(onFailure)
    })

    carCreateButton.addEventListener('click', (event)=>{
        event.preventDefault()

        carform.classList.remove('hide')
        indexCarContainer.classList.add('hide')
        showCarContainer.classList.add('hide')
        descriptionContainer.classList.add('hide')
        createDescriptionContainer.classList.add('hide')
        messageContainer.classList.add('hide')
    })

    browse.addEventListener('click', (event)=>{
        event.preventDefault()

        while(indexCarContainer.firstChild){
        indexCarContainer.removeChild(indexCarContainer.lastChild)
            }

        indexCarContainer.classList.remove('hide')
        carform.classList.add('hide')
        showCarContainer.classList.add('hide')
        descriptionContainer.classList.add('hide')
        createDescriptionContainer.classList.add('hide')
        messageContainer.classList.add('hide')
        indexCar()
		.then((res) => res.json())
		.then((res) => onIndexCarSuccess(res.cars))
		.catch(onFailure)
    })

