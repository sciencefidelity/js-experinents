"use strict"

const square0: Element = document.querySelector(".color-0")
const square1: Element = document.querySelector(".color-1")
const square2: Element = document.querySelector(".color-2")
const square3: Element = document.querySelector(".color-3")
const square4: Element = document.querySelector(".color-4")
const square5: Element = document.querySelector(".color-5")
const square6: Element = document.querySelector(".color-6")
const square7: Element = document.querySelector(".color-7")
const square8: Element = document.querySelector(".color-8")
const square9: Element = document.querySelector(".color-9")

let i: number = 0

// split the digits into an array, 
// reverse it and select the first number

function splitToDigit(n: number) {
  return [...n + ''].map(Number).reverse()[0]
}

// counter timed to change the color number 
// of each square

const colorChange = setInterval(() => {
  if (i === 10) {
    i = 0
  }
  console.log(i)
  square0.className = "color-" + splitToDigit(i + 0)
  square1.className = "color-" + splitToDigit(i + 1)
  square2.className = "color-" + splitToDigit(i + 2)
  square3.className = "color-" + splitToDigit(i + 3)
  square4.className = "color-" + splitToDigit(i + 4)
  square5.className = "color-" + splitToDigit(i + 5)
  square6.className = "color-" + splitToDigit(i + 6)
  square7.className = "color-" + splitToDigit(i + 7)
  square8.className = "color-" + splitToDigit(i + 8)
  square9.className = "color-" + splitToDigit(i + 9)
  i++
}, 50)
