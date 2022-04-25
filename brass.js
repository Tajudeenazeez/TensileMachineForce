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
const elongationBrass = 0.4;
const constOneBrass = 1.24625;
const constTwoBrass = 219.93;
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
const force1 = (len, kibConstant) => {
    let len1 = len + 2 
    let fe1 = kibConstant * len1
    lengthArr.push(len1)
    forceArr.push(fe1)
}

const force2 = (len, kibConstant) => {
    let len2 = len + 4 
    let fe2 = kibConstant * len2
    lengthArr.push(len2)
    forceArr.push(fe2)
}

const force3 = (len) => {
   let fe3 = forceArr[2] * 1.2444
   let len3 = len + 6
    lengthArr.push(len3)
    forceArr.push(fe3)
}

const force4 = (len) => {
    let fe4 = forceArr[3] * 1.082
    let len4 = len + 8
     lengthArr.push(len4)
     forceArr.push(fe4)
 }
 const force5 = (len) => {
    let fe5 = forceArr[4] * 0.989
    let len5 = len + 10
     lengthArr.push(len5)
     forceArr.push(fe5)
 }
 const force6 = (len) => {
    let fe6 = forceArr[5] * 0.925
    let len6 = len + 12
     lengthArr.push(len6)
     forceArr.push(fe6)
 }
 const force7 = (len) => {
    let fe7 = forceArr[6] * 0.937
    let len7 = len + 14
     lengthArr.push(len7)
     forceArr.push(fe7)
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
    const finalLength = (elongationBrass * initialLength) + initialLength

    //To get kia for alu (kia)
    const kIB = (initialLength * constOneBrass) + constTwoBrass
    
    force0(initialLength)
    force1(initialLength, kIB)
    force2(initialLength, kIB)
    force3(initialLength)
    force4(initialLength)
    force5(initialLength)
    force6(initialLength)
    force7(initialLength)
    stressFromForceByArea(forceArr, area)
    strainFromLength(lengthArr, initialLength) 
    console.log(forceArr, stressArr)
}



