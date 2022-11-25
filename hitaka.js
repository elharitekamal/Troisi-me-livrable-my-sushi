
// Menu mobile


const openbtn = document.querySelector(".resp-ico");
const closebtn = document.querySelector(".clo-ico");

const ulc = document.querySelector('.NV');

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

// btns
const all = document.querySelector(".all");
const salades = document.querySelector(".salades");
const obento = document.querySelector(".obento");
const plat = document.querySelector(".plat");

// plat container
let main = document.querySelectorAll(".main");




salades.addEventListener('click',function(){
    
    main.forEach(element => {
        element.style.display = "block"
       if(!element.classList.contains("salade")){
        element.style.display = "none";
       

       }

    })
})

obento.addEventListener('click',function(){
    
    main.forEach(element => {
        element.style.display = "block"
       if(!element.classList.contains("obento")){
        element.style.display = "none";
      

       }

    })
})


plat.addEventListener('click',function(){
    
    main.forEach(element => {
        element.style.display = "block"
       if(!element.classList.contains("plat")){
        element.style.display = "none";
      

       }

    })
})

all.addEventListener('click', function(){
    main.forEach(element => {
    element.style.display = "block"
})
})



// =============== panier

// icon
let carte = document.querySelector("#cart");


let panier = document.querySelector(".carte");

carte.addEventListener('click', function() {
    panier.classList.toggle("show")                     
    
})


let order = document.querySelectorAll(".btn");

order.forEach(element => {
   element.addEventListener("click", function(){
      const pa = element.parentElement ;
      const prod = pa.querySelector(".product_name").innerHTML;
      const price = pa.querySelector(".price").innerHTML;


    
      let panier = document.querySelector(".carte");

      let a = `<div class="product">
      <p class="product_name">${prod}</p>
      <input type="number" class="num_product" value = "1" min="1">
      <p class="price">${price}</p></div>`

      panier.insertAdjacentHTML("beforeend", a );

   })

})



// calcul

let calculate = document.querySelector("#calc");
        calculate.addEventListener("click",function(){
            let pannier = document.querySelector(".carte");
            let calculateArray = [];
            let command = pannier.querySelectorAll(".product");
          
 
            command.forEach(element=>{
                let prix = element.querySelector(".price").innerHTML.replace("$","");

                let quantity = element.querySelector(".num_product");
               
                calculateArray.push(Number(prix)*quantity.value);
                

            })
            
            let total = calculateArray.reduce( (pre,curr) => pre+curr);
          
            alert(`Your Total is : ${total} $
Thank you for you trust`);
                  window.location.reload();


 

        })

        
        
              






