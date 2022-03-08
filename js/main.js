$('.p-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: true,
});
// Header-fix
function headerFix(){
  var headBot = document.querySelector("header .header-bottom")
  if(window.scrollY >= 240){
    headBot.classList.add("stick-bottom-header")
  }
  else{
    headBot.classList.remove("stick-bottom-header")

  }
  
}
window.onscroll = function(){
  headerFix();
}
// Basket
var addButtons = document.querySelectorAll(".add-prod-basket");
for(let btn of addButtons){
  btn.parentElement.addEventListener("click",function(e){
    e.preventDefault();
    if(JSON.parse(localStorage.getItem("basket"))===null){
      localStorage.setItem("basket",JSON.stringify([]))
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let prodImage = this.parentElement.parentElement.previousElementSibling.querySelector(".first").getAttribute("src");;
    let prodName = this.parentElement.previousElementSibling.querySelector(".name").innerText;
    let prodId = this.parentElement.parentElement.parentElement.getAttribute("data-id");
    let proPrice = Number(this.previousElementSibling.querySelector(".price-value").innerText);
    let exist = basket.find(n =>n.id==prodId);

    if(exist===undefined){
      basket.push({
        id: prodId,
        name: prodName,
        image: prodImage,
        price: proPrice,
        count: 1
      })
    }
    else{
      exist.count+=1;
    }
    localStorage.setItem("basket",JSON.stringify(basket));
  })
}

// Input count
// if(JSON.parse(localStorage.getItem("basket")).length != 0){
//   var myInp = document.querySelector(".inp-num .inp-value");
//   var increaseBtn = document.querySelector(".inp-num .up");
//   var decreaseBtn = document.querySelector(".inp-num .down");
//   var count = 1;
//   increaseBtn.addEventListener("click",function(e){
//     e.preventDefault()
//     count+=1;
//     myInp.innerText = count;
//   })
//   decreaseBtn.addEventListener("click",function(e){
//     e.preventDefault()
//     if(count != 0){
//       count-=1;
//       myInp.innerText = count;
//     }
//   })
//   console.log("nese vr")
// }

// Day hour minute second


// Countdown time
function getDays(){
var deals = document.querySelectorAll("#deals .time");
  for(let time of deals){
    var setDay = time.querySelector(" .day span")
    var setHr = time.querySelector(" .hour span")
    var setMn = time.querySelector(" .minute span")
    var setSc = time.querySelector(" .second span")
    var new2 = new Date();
    var dy = Math.floor((new Date(time.getAttribute("data-countdown")) - new2)/1000/60/60/24);
    var hr = Math.floor((new Date(time.getAttribute("data-countdown")) - new2)/1000/60/60)%24;
    var mn = Math.floor((new Date(time.getAttribute("data-countdown")) - new2)/1000/60)%60;
    var sc = Math.floor((new Date(time.getAttribute("data-countdown")) - new2)/1000)%60;

    if(dy.length < 2){
      dy = "0"+dy;
    }
    if(hr.length < 2){
      hr = "0"+hr;
    }
    if(mn.length < 2){
      mn = "0"+mn;
    }
    if(sc.length < 2){
      sc = "0"+sc;
    }
    setDay.innerText = dy;
    setHr.innerText = hr;
    setMn.innerText = mn;
    setSc.innerText = sc;
  }
}

setInterval(getDays,1000);
