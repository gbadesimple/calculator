// calculator

const container = document.querySelector("#container");

const div = document.createElement("div")
div.classList.add("main")

screen = document.createElement("div")
screen.classList.add("screen")
screen.textContent = '0'
div.appendChild(screen)
container.appendChild(div)


// buttons
button1 = document.createElement("button")
button1.classList.add("btn_percent")
button1.textContent = '%'
div.appendChild(button1)
container.appendChild(div)


button2 = document.createElement("button")
button2.classList.add("btn_del")
button2.textContent = 'Del'
div.insertBefore(button2, button1)
container.appendChild(div)


button3 = document.createElement("button")
button3.classList.add("btn_plus_minus")
button3.textContent = '+/-'
div.insertBefore(button3, button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn_divide")
button1.textContent = '/'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn1")
button1.textContent = '1'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn2")
button1.textContent = '2'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn3")
button1.textContent = '3'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn_star")
button1.textContent = '*'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn4")
button1.textContent = '4'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn5")
button1.textContent = '5'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn6")
button1.textContent = '6'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn_minus")
button1.textContent = '-'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn7")
button1.textContent = '7'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn8")
button1.textContent = '8'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn9")
button1.textContent = '9'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn_plus")
button1.textContent = '+'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn0")
button1.textContent = '0'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn_dot")
button1.textContent = '.'
div.appendChild(button1)
container.appendChild(div)


button1 = document.createElement("button")
button1.classList.add("btn_equals")
button1.textContent = '='
div.appendChild(button1)
container.appendChild(div)

