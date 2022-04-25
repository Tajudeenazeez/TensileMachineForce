//BRASS

const formField = document.querySelector("#formField");

//getting input from form
const aluminum = document.querySelector("#aluminum");
const brass = document.querySelector("#brass")
const metal = document.querySelector("#metal")

const materialLength = document.querySelector("#length")

const materialDiameter = document.querySelector("#diameter")
//setting the force to the screen
const force = document.querySelector("#force")
//getting the button
const seeResult = document.querySelector("#btn-result")
const seeGraph = document.querySelector("#btn-graph")
const seeSimulation = document.querySelector("#btn-simulator")

//setting the result for the stress n strain on screen
const strainF = document.querySelector("#strain")
const stressF = document.querySelector("#stress")

//working variables 
const elongationMetal = .25;
const constOneMetal = 14.29125;
const constTwoMetal = 68.43;
const forceArr = [];
const lengthArr = [];
const stressArr = [];
const strainArr = [];


formField.addEventListener("submit", onSubmitResult)

// seeResult.addEventListener("click", seeMyResult)
// seeGraph.addEventListener("click", onSubmitResult)
// seeSimulation.addEventListener("click", onSubmitResult)




const force0 = (len) => {
    let fe0 = 0 * len
    forceArr.push(fe0)
    lengthArr.push(len)
}
const force1 = (len, kimConstant) => {
    let len1 = len + 1
    let fe1 = kimConstant * len1
    lengthArr.push(len1)
    forceArr.push(fe1)
}

const force2 = (len, kimConstant) => {
    let len2 = len + 2 
    let fe2 = kimConstant * len2
    lengthArr.push(len2)
    forceArr.push(fe2)
}

const force3 = (len) => {
   let fe3 = forceArr[2] * 1.2082
   let len3 = len + 3
    lengthArr.push(len3)
    forceArr.push(fe3)
}

const force4 = (len) => {
    let fe4 = forceArr[3] * 1.0534
    let len4 = len + 4
     lengthArr.push(len4)
     forceArr.push(fe4)
 }
 const force5 = (len) => {
    let fe5 = forceArr[4] * 0.9844
    let len5 = len + 5
     lengthArr.push(len5)
     forceArr.push(fe5)
 }
 const force6 = (len) => {
    let fe6 = forceArr[5] * 0.9579
    let len6 = len + 6
     lengthArr.push(len6)
     forceArr.push(fe6)
 }
 const force7 = (len) => {
    let fe7 = forceArr[6] * 0.8912
    let len7 = len + 7
     lengthArr.push(len7)
     forceArr.push(fe7)
 }
 const force8 = (len) => {
    let fe8 = forceArr[7] * 0.7060
    let len8 = len + 8
     lengthArr.push(len8)
     forceArr.push(fe8)
 }
 
 const stressFromForceByArea = (force, areaConst) =>
  force.map( val => stressArr.push(val / areaConst))

  const strainFromLength = (lenArr, initial) => {
      lenArr.map(len => {  strainArr.push((len - initial) / initial)

      })

  }

function onSubmitResult(e) {
    e.preventDefault()
    const initialLength = Number(materialLength.value);
    const initialDiameter = Number(materialDiameter.value);

    materialLength.value = '';
    materialDiameter.value = '';
  
    const radius = initialDiameter / 2
    const area = 3.142 * radius**2

    //finalLength
    const finalLength = (elongationMetal * initialLength) + initialLength

    //To get kia for alu (kia)
    const kIM = (initialLength * constOneMetal) + constTwoMetal
    
    force0(initialLength)
    force1(initialLength, kIM)
    force2(initialLength, kIM)
    force3(initialLength)
    force4(initialLength)
    force5(initialLength)
    force6(initialLength)
    force7(initialLength)
    force8(initialLength)
    stressFromForceByArea(forceArr, area)
    strainFromLength(lengthArr, initialLength) 
    console.log(forceArr, stressArr)
}



