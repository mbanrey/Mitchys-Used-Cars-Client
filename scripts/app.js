import { 
	indexCar, 
	createCar, 
	showCar, 
	updateCar, 
	deleteCar, 
	// indexDescription, 
	signUp, 
	signIn, 
	createDescription, 
	showDescription, 
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
	// onIndexDescriptionSuccess,
	onCreateDescriptionSuccess, 
	onShowDescriptionSuccess,
	onUpdateDescriptionSuccess, 
	onDeleteDescriptionSuccess 
} from "./ui.js";

const createCarForm = document.querySelector('#create-car-form')
const createDescriptionForm = document.querySelector('#create-description-form')
const indexCarContainer = document.querySelector('#index-car-container')
// const indexDescriptionContainer = document.querySelector('#index-description-container')
const showCarContainer = document.querySelector('#show-car-container')
const showDescriptionContainer = document.querySelector('#show-description-container')
const descriptionCreateButton = document.querySelector('.createDescriptionHide')
const carCreateButton = document.querySelector('.createCarHide')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')
const authContainer = document.querySelector('#auth-container')


// authContainer.classList.remove('hide')
// // indexDescriptionContainer.classList.remove('hide')
indexCarContainer.classList.remove('hide')
// signInContainer.classList.remove('hide')
// signUpContainer.classList.remove('hide')

signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData).then(onSignUpSuccess).catch(onFailure)
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
		.then(indexDescription)
		.then((res) => res.json())
		.then((res) => onIndexDescriptionSuccess(res.description))
		.catch(onFailure)
})
    indexCar()
	.then((res) => res.json())
	.then(res => {
        console.log(res)
        onIndexCarSuccess(res.cars)
    })
	.catch(onFailure)

	// indexDescription()
	// .then((res)=> res.json())
	// .then(res => {
	// 	console.log(res)
	// 	onIndexDescriptionSuccess(res.description)
	// })
	// .catch(onFailure)

	descriptionCreateButton.addEventListener('click', (event)=>{
		event.preventDefault(

			createDescriptionForm.classList.remove('hide')
		)
		// indexDescriptionContainer.classList.add('hide')
		// indexCarContainer.classList.add('hide')
		// createCarForm.classList.add('hide')

	})

	carCreateButton.addEventListener('click', (event)=>{
		event.preventDefault(
			createCarForm.classList.remove('hide')
			
		)
		// indexDescriptionContainer.classList.add('hide')
		indexCarContainer.classList.add('hide')
		// createDescriptionForm.classList.add('hide')

	})


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

createDescriptionForm.addEventListener('submit', (event)=>{
	event.preventDefault()

	const descriptionData = {
		description:{
			// title: event.target['title'].value,
			content: event.target['content'].value,
			// owner: event.target['owner'].vlaue,
		},
	}
	createDescription(descriptionData)
		.then(onCreateDescriptionSuccess)
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

// indexDescriptionContainer.addEventListener('click',(event)=>{
// 	const id = event.target.getAttribute('data-id')

// 	if(!id) return

// 	showDescription(id)
// 		.then((res)=> res.json())
// 		.then((res)=>onShowDescriptionSuccess(res.description))
// 		.catch(onFailure)
// })

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
			description: event.target['description'].value,
		},
	}

	if (!id) return

	updateCar(carData, id)
		// this function (onUpdateCarSuccess) does not need anything to run. NO params
		.then(onUpdateCarSuccess)
		.catch(onFailure)
})

showDescriptionContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const descriptionData = {
		description: {
			// title: event.target['title'].value,
			content: event.target['content'].value,
			// owner: event.target['owner'].value,
		},
	}

	if (!id) return

	updateDescription(descriptionData, id)
		// this function (onUpdateCarSuccess) does not need anything to run. NO params
		.then(onUpdateDescriptionSuccess)
		.catch(onFailure)
})

showCarContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCar(id)
		.then(onDeleteCarSuccess)
		.catch(onFailure)
})

showDescriptionContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteDescription(id)
		.then(onDeleteDescriptionSuccess)
		.catch(onFailure)
})

