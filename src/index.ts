import "./styles.css";

let base: number = 0;
let altura: number = 0;

function handleClick() {
  console.log("ay");
}

const inputBase = document.getElementById("inputBase");
const inputAltura = document.getElementById("inputAltura");
const BtnCalc = document.getElementById("BtnCalc");
const resultado = document.getElementById("resultado") as HTMLElement;

BtnCalc.addEventListener("click", function () {
  base = Number(inputBase.value);
  altura = Number(inputAltura.value);
  const area: number = base * altura;
  resultado.innerText = area;
});
