const formField = document.querySelector("#formField");
const getOption = document.querySelector("#formField #material")
//getting input from form
 const forceText = document.querySelector("#force");

const materialLength = document.querySelector("#length")
const materialDiameter = document.querySelector("#diameter")

//getting the button
const seeResult = document.querySelector("#btn-result")
const seeGraph = document.querySelector("#btn-graph")
const seeSimulation = document.querySelector("#btn-simulator")

//setting the force to the screen
const force = document.querySelector("#force")
//setting the result for the stress n strain on screen
const strainResult = document.querySelector("#strainText")
const stressResult = document.querySelector("#stressText")
const areaResult = document.querySelector("#areaText")
const changeLength = document.querySelector("#changeLength")
const Flength = document.querySelector("#finalLength")
const tensileStress = document.querySelector("#tensileStress")
const elongationResult = document.querySelector("#elongationText")
const diameterResult = document.querySelector("#diameterText")
const simulator = document.getElementById("simulate")

//working variables for Aluminum
const elongationAlu = 0.18;
const constOneAlu = 5.24875;
const constTwoAlu = 41.402;
//Working variable for Brass
const elongationBrass = 0.4;
const constOneBrass = 1.24625;
const constTwoBrass = 219.93;
//working variables for MILD METAL
const elongationMetal = .25;
const constOneMetal = 14.29125;
const constTwoMetal = 68.43;

formField.addEventListener("submit", onSubmitResult)

function onSubmitResult(e) {
    e.preventDefault()
    const initialLength = Number(materialLength.value);
    const initialDiameter = Number(materialDiameter.value);

    materialLength.value = '';
    materialDiameter.value = '';
  
    const radius = initialDiameter / 2
    const area = 3.142 * radius**2
    areaResult.innerHTML = `Area: ${area}mm<sup>2</sup>`
    diameterResult.textContent = `Diameter: ${initialDiameter}mm`
    const forceArr = [];
    const lengthArr = [];
    const stressArr = [];
    const strainArr = [];

  if(getOption.value === "Aluminum" || getOption.value ===  getOption.value ===  "Brass" || "Mild Metal"){
      seeSimulation.classList.remove("hidden")
  }
    if (getOption.value === "Aluminum") {
        //finalLength
        elongationResult.textContent = `% elongation : ${elongationAlu}`
        const finalLength = (elongationAlu * initialLength) + initialLength
        changeLength.textContent = `change in Length: ${finalLength - initialLength}mm`
        Flength.textContent = `final length: ${finalLength}mm`
        //To get kia for alu (kia)
        const kIA = (initialLength * constOneAlu) + constTwoAlu
        const force0 = (len) => {
            let fe0 = 0 * len
            forceArr.push(fe0)
            lengthArr.push(len)
        }
        const force1 = (len, kiaConstant) => {
            let len1 = len + 1 
            let fe1 = kiaConstant * len1
            lengthArr.push(len1)
            forceArr.push(fe1)
        }

        const force2 = (len, kiaConstant) => {
            let len2 = len + 2 
            let fe2 = kiaConstant * len2
            lengthArr.push(len2)
            forceArr.push(fe2)
        }

        const force3 = (len) => {
        let fe3 = forceArr[2] * 1.236
        let len3 = len + 3
            lengthArr.push(len3)
            forceArr.push(fe3)
        }

        const force4 = (len) => {
            let fe4 = forceArr[3] * 1.1101
            let len4 = len + 4
            lengthArr.push(len4)
            forceArr.push(fe4)
        }
        const force5 = (len) => {
            let fe5 = forceArr[4] / 1.2
            let len5 = len + 5
            lengthArr.push(len5)
            forceArr.push(fe5)
        }
        const force6 = (len) => {
            let fe6 = forceArr[5] / 1.66
            let len6 = len + 6
            lengthArr.push(len6)
            forceArr.push(fe6)
        }
        const stressFromForceByArea = (force, areaConst) =>
        force.map(val => stressArr.push(val / areaConst))

        const strainFromLength = (lenArr, initial) => {
            lenArr.map(len => {  strainArr.push((len - initial) / initial)

            })

        }
        
        force0(initialLength)
        force1(initialLength, kIA)
        force2(initialLength, kIA)
        force3(initialLength)
        force4(initialLength)
        force5(initialLength)
        force6(initialLength)
        stressFromForceByArea(forceArr, area)
        strainFromLength(lengthArr, initialLength) 
    } 
    if (getOption.value === "Brass") {
        elongationResult.textContent = `% elongation : ${elongationBrass}`
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
        //finalLength
        const finalLength = (elongationBrass * initialLength) + initialLength
        changeLength.textContent = `change in Length: ${finalLength - initialLength}mm`
        Flength.textContent = `final length: ${finalLength}mm`
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
         
    } 
    if (getOption.value === "Mild Metal") {
        elongationResult.textContent = `% elongation : ${elongationMetal}`
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

    //finalLength
    const finalLength = (elongationMetal * initialLength) + initialLength
    changeLength.textContent = `change in Length: ${finalLength - initialLength}mm`
    Flength.textContent = `final length: ${finalLength}mm`
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
    

    } 

    forceText.textContent = `Force @break: ${forceArr[forceArr.length-1]} N`
    let averageStress = (stressArr[2] - stressArr[1]) /2
    stressResult.textContent = `stress @yield: ${averageStress} N/mm`
    strainResult.textContent = `strain: ${strainArr[strainArr.length-1]}`
    tensileStress.textContent = `ultimate Tensile Strength: ${stressArr[4]} N/mm`
    simulator.textContent = `force @yield:
    ${(forceArr[1]  + forceArr[2])/2}N
    force @break:
    ${forceArr[forceArr.length-1]}N
    force @peak:
    ${forceArr[4]}N 
    stress: 
    ${stressArr[stressArr.length-1]}N/mm
    and 
    strain: 
    ${strainArr[strainArr.length-1]}
    `

    //generateGraph()
     
    new Chart("myChart", {
        type: "line",
        data: {
          labels: strainArr,
          datasets: [{
            fill: false,
            lineTension: .4,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,0,1)",
            data: stressArr
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Engineering stress",
            fontSize: 16
          },
          scales: {
            yAxes: [{ticks: {min: 0, max:stressArr[stressArr.length-1] * 2}}],
          }
        }
      });

}
