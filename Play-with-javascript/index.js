
"use strict"

function func() {
  console.log(this);
}


func() // scope owned by 'undefined

let o1 = { name: "A" }
o1.func = func

o1.func() // scope owned by 'o1'

let o2 = { name: "B" }
Object.preventExtensions(o2) // no extension

func.call(o2) // scope owned by 'o2'

//----------------------------------------------------------------
let trainer = {
  name: "John",
  doTeach: function () {
    console.log(this);
    function learn() {
      console.log(this);
    }
    return learn
  }
}
const doLearn = trainer.doTeach() // scope owned by 'trainer'
const e = { name: "Emp" }
doLearn.call(e) // scope owned by 'e'

//------------------------------
