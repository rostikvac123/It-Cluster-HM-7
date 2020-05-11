//                                                        HM 1
document.addEventListener("keydown", function (event) {
  let span = document.getElementById(`span`);
  let input = document.getElementById(`input`);
  if (event.altKey && event.code == `KeyA`) {
    span.style.display = `none`;
    input.style.display = `block`;
  } else if (event.shiftKey && event.code == "KeyS") {
    span.innerHTML = input.value;
    span.style.display = `block`;
    input.style.display = `none`;
  }
});

//                                                  HM 2
/*Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити 
 лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.*/

let size = () => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  document.getElementById(
    "WidthHeight"
  ).innerHTML = `Width: ${width},  Height: ${height}`;
  let result =
    width > 600
      ? "Ви використовуєте версія для ПК"
      : "Ви використовуєте версію для телефона";
  console.log(result);
};
WidthHeight.addEventListener("resize", size);
size();

//                                                  HM 3
// Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено
let change = function (value) {
  alert(value);
};

//                                                   HM 4
// При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.
let modal = document.getElementById("myModal");
window.addEventListener("keydown", function (event) {
  let modal = document.getElementById(`myModal`);
  if (event.altKey && event.code == `KeyO`) {
    modal.style.display = "block";
  }
  if (event.altKey && event.code == `KeyC`) {
    modal.style.display = "none";
  }
});
