
// Menu mobile


const openbtn = document.querySelector(".resp-ico");
const closebtn = document.querySelector(".clo-ico");

const ulc = document.querySelector('.NV');

let btn = document.querySelectorAll(".select");

openbtn.addEventListener("click",()=>{
    ulc.style.right = "0"; 
})
closebtn.addEventListener("click",()=>{
    ulc.style.right = "-100%"; 
})





// incrumentation de numero panier

const btnorder = document.querySelectorAll(".btn");
const numord = document.querySelector(".num");
let count = 0;
btnorder.forEach((element) => {
  element.addEventListener("click", () => {
  count++;
  numord.innerText = count;

  })

})



// Selection des categories


const all = document.querySelector(".all");
const salades = document.querySelector(".salades");
const obento = document.querySelector(".obento");
const plat = document.querySelector(".plat");
let main = document.querySelectorAll(".main");







salades.addEventListener('click',function(){
    
    main.forEach(element => {
        element.style.display = "block"
       if(!element.classList.contains("salade")){
        element.style.display = "none";
        console.log("rr")

       }

    })
})

obento.addEventListener('click',function(){
    
    main.forEach(element => {
        element.style.display = "block"
       if(!element.classList.contains("obento")){
        element.style.display = "none";
        console.log("rr")

       }

    })
})


plat.addEventListener('click',function(){
    
    main.forEach(element => {
        element.style.display = "block"
       if(!element.classList.contains("plat")){
        element.style.display = "none";
        console.log("rr")

       }

    })
})

all.addEventListener('click', function(){
    main.forEach(element => {
    element.style.display = "block"
})
})



// =============== panier


let carte = document.querySelector("#cart");
let panier = document.querySelector(".carte");

carte.addEventListener('click', function() {
    // khalifa
    panier.classList.toggle("show")                     
    console.log("panier")
})


let order = document.querySelectorAll(".btn");

order.forEach(element => {
   element.addEventListener("click", function(){
      const pa = element.parentElement ;
      const prod = pa.querySelector(".product_name").innerHTML;
      const price = pa.querySelector(".price").innerHTML;


    //   console.log(prod ,price ,pa)
      let panier = document.querySelector(".carte");

      let a = `<div class="product">
      <p class="product_name">${prod}</p>
      <input type="number" class="num_product" value = "1" min="1">
      <p class="price">${price}</p></div>`

      panier.insertAdjacentHTML("beforeend", a );

   })

})


let calculate = document.querySelector("#calc");
        calculate.addEventListener("click",function(){
            let pannier = document.getElementsByClassName("carte")[0];
            let calculateArray = [];
            let command = pannier.querySelectorAll(".product");
            console.log(pannier)
 
            command.forEach(element=>{
                let prix = element.querySelector(".price").innerHTML.replace("$","");

                let quantity = element.querySelector(".num_product");
                console.log(prix ,quantity.value)
                
                calculateArray.push(Number(prix)*quantity.value);
                

            })
            
            let total = calculateArray.reduce( (pre,curr) => pre+curr);
          
            alert(`Your Total is : ${total} $
Thank you for you trust`);
                  window.location.reload();


 

        })

        
        
              






