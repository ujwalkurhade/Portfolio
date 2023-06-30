const btnAboutMe = document.querySelector('#btn-about-me')
const btnEdu = document.querySelector('#btn-edu')
const btnContactMe = document.querySelector('#btn-contact-me')
const goHero = document.querySelectorAll('#go-hero')

const heroSection = document.querySelector('#hero')
const aboutSection = document.querySelector('#about')
const eduSection = document.querySelector('#edu')
const contactSection = document.querySelector('#contact')

const header = document.querySelector('#header')

const sendMsg = document.querySelector('#send-msg')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('#message')

// heroSection.style.transistion = 'display 2s'

btnAboutMe.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('clicked')
	heroSection.classList.add('hidden')
	aboutSection.classList.remove('hidden')
	eduSection.classList.add('hidden')
	contactSection.classList.add('hidden')
})


btnEdu.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('clicked')
	heroSection.classList.add('hidden')
	aboutSection.classList.add('hidden')
	eduSection.classList.remove('hidden')
	contactSection.classList.add('hidden')
})

btnContactMe.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('clicked')
	heroSection.classList.add('hidden')
	aboutSection.classList.add('hidden')
	eduSection.classList.add('hidden')
	contactSection.classList.remove('hidden')
})

goHero.forEach(btn => {
		btn.addEventListener('click', () => {
		heroSection.classList.remove('hidden')
		aboutSection.classList.add('hidden')
		eduSection.classList.add('hidden')
		contactSection.classList.add('hidden')
	})
})

sendMsg.addEventListener('submit', (e) => {
	name.value = email.value = msg.value = ''
})