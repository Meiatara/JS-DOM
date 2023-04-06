# Challenge DOM Manipulation

## Section 2 (Selecting elements)

**Contoh 1**

index.html

```
...
    <h1 id="judul">Challenge DOM Manipulation</h1>
...
```

script.js

```
const title = document.getElementById('judul')
console.log(title)
```

**Contoh 2**

index.html

```
...
    <h2 class="subjudul">Javascript DOM Method</h2>
...
```

script.js

```
const subtitle = document.getElementsByClassName('subjudul')
console.log(subtitle)
```

**Contoh 3**

index.html

```
...
    <p>Document Object Model (DOM)</p>
...
```

script.js

```
const p = document.getElementsByTagName('p')
console.log(p.length)
```

---

## Section 3 (Traversing elements)

index.html

```
...
    <div class="menu">
      <ul id="list">
        <li class="list1">list 1</li>
        <li class="list2">list 2</li>
        <li class="list3">list 3</li>
    </div>
...
```

**Contoh 1**

script.js

```
let paren = document.getElementById('menu')
console.log(paren.parentNod)
```

**Contoh 2**

script.js

```
let first = document.getElementById('list');
console.log(first.firstElementChild);
```

**Contoh 3**

script.js

```
let sibling = document.querySelector('.list1')
console.log(sibling.nextElementSibling);
```

---

## Section 4 (Manipulating elements)

**Contoh**

script.js

```
let paragraph = document.createElement('p')
paragraph.innerHTML = '<p>Teks ini di dalam paragraph</p>'
document.body.appendChild(paragraph)
```

---

## Section 5 (Working with Attributes)

index.html

```
...
    <button id="btn">Klik Me</button>
...
```

**Contoh**

script.js

```
const btn = document.getElementById('btn')
btn.setAttribute('class', 'setBtn')
console.log(btn.getAttribute('type'))
console.log(btn.hasAttribute('onclick'))
```

---

## Section 6 (Manipulating Element’s Styles)

**Contoh**

script.js

```
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
subtitle[0].style.color = 'red'
```

---

## Section 7 (Working with Events)

**Contoh 1**

script.js

```
btn.addEventListener('click', () =>{
    alert('Hello')
})
```

**Contoh 2**

script.js

```
btn.addEventListener('focus', () => {
    btn.style.backgroundColor = 'navy'
})
```

---

## Section 8 (Scripting Web Forms)

**Contoh 1**

index.html

```
...
    <label for="gender">
      <p>Gender:</p>
          <input type="radio" name="gender" id="male" value="Male"/>
          <span>Male</span>
          <input type="radio" name="gender" id="female" value="Female"/>
          <span>Female</span>
    </label>
    <button id="submitg" type="submit">Submit</button>
    <p id="outputg"></p>
...
```

script.js

```
const radioBtn = document.querySelectorAll('input[name="gender"]')
const submitg = document.getElementById('submitg')
const outputg = document.getElementById('outputg')

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
```

**Contoh 2**

index.html

```
...
    <label for="hobby">
      <p>Hobby:</p>
          <input type="checkbox" name="hobby" id="painting" value="Painting"/>
          <span>Painting</span>
          <input type="checkbox" name="hobby" id="reading" value="Reading"/>
          <span>Reading</span>
    </label>
    <button id="submith" type="submit">Submit</button>
    <p id="outputh"></p>
...
```

script.js

```
const submith = document.getElementById('submith')
const outputh = document.getElementById('outputh')

submith.addEventListener('click', () => {
    const checkboxBtn = document.querySelectorAll('input[name="hobby"]:checked')
    let hobby = []
    checkboxBtn.forEach((checkbox) => {
        hobby.push(checkbox.value);
    });
    alert(hobby)
})
```
