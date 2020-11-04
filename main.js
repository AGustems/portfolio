/* JQuery Smooth Scrolling */
$('.navbar a, .arrow a')
    .on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash)
                    .offset()
                    .top
            }, 800)
        }
    })

/* JS Form Validation */
const subject = document.getElementById('subject')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('contact-form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = [];
    if(subject.value === '' || subject.value == null || subject.value < 2){
        messages.push('The subject field is required')
    }
    
    if(!email.includes('@') || !email.includes('.')){
        messages.push('Invalid email')
    }

    if(message.length < 10){
        messages.push('The message is too short')
    }
    
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
})