// Section 2
const title = document.getElementById('judul')
console.log(title)
const subtitle = document.getElementsByClassName('subjudul')
console.log(subtitle)
const p = document.getElementsByTagName('p')
console.log(p.length)

// Section 3
let paren = document.querySelector('.menu')
console.log(paren.parentNode);

let first = document.getElementById('list');
console.log(first.firstElementChild);

let sibling = document.querySelector('.list1')
console.log(sibling.nextElementSibling);

// Section 4
let paragraph = document.createElement('p')
paragraph.innerHTML = '<p>Teks ini di dalam paragraph</p>'
document.body.appendChild(paragraph)

// Section 5
const btn = document.getElementById('btn')
btn.setAttribute('class', 'setBtn')
console.log(btn.getAttribute('type'))
console.log(btn.hasAttribute('onclick'))

// Section 6
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
subtitle[0].style.color = 'red'

// Section 7
btn.addEventListener('click', () =>{
    alert('Hello')
})

btn.addEventListener('focus', () => {
    btn.style.backgroundColor = 'navy'
})

// Section 8
const radioBtn = document.querySelectorAll('input[name="gender"]')
const submitg = document.getElementById('submitg')
const submith = document.getElementById('submith')
const outputg = document.getElementById('outputg')
const outputh = document.getElementById('outputh')

submitg.addEventListener('click', () => {
    let gender
    for(const radioButton of radioBtn){
        if (radioButton.checked){
            gender = radioButton.value
            break
        }
    }
    outputg.innerHTML = gender ? `Your gender is ${gender}` : `please choose your gender`
})

submith.addEventListener('click', () => {
    const checkboxBtn = document.querySelectorAll('input[name="hobby"]:checked')
    let hobby = []
    checkboxBtn.forEach((checkbox) => {
        hobby.push(checkbox.value);
    });
    alert(hobby)
})