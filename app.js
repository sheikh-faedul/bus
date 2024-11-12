function scrolDiv (){
    const scrol = document.getElementById('seatPart');
    scrol.scrollIntoView();
}

const allseat = document.getElementsByClassName('allseat');
for(seat of allseat){
    seat.addEventListener("click",function(event){
        const seatName = event.target.parentNode.childNodes[1].innerText;

        const price = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[3].childNodes[0].innerText;
        
        
        const selectedSeatContainer = document.getElementById("Selected-seat-container");

        const div = document.createElement('div');

        div.classList.add("flex");
        div.classList.add("justify-around");
        
         
        
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = seatName;
        p2.innerText = ("economy");
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        
        selectedSeatContainer.appendChild(div);

        updateTotalCost(price);
         
        updateGrandTotal();

        if(getConvertedValue('seat-selected')+1 > 4){
          alert("limit ses");
          return;
        }
        event.target.parentNode.style.backgroundColor="rgb(45, 210, 45)";

        const seatSelected = getConvertedValue('seat-selected');
        document.getElementById("seat-selected").innerText =  seatSelected + 1;

        const seatLeft = getConvertedValue('seat-left');
        document.getElementById('seat-left').innerText = seatLeft - 1;
    })
}

function updateGrandTotal(status){
    const totalCost = getConvertedValue('total-cost');
   if(status == undefined){
    document.getElementById('grand-total').innerText=totalCost;
   }
   else{
    const coponCode = document.getElementById('copon-code').value;
    if(coponCode == "NEW15"){
        const discount = totalCost *.15;
        document.getElementById('grand-total').innerText = totalCost- discount;
    }
     else{
        alert('enter valid copoune code')
     }   
    
   } 
}

function updateTotalCost (value){
  const totalCost = getConvertedValue("total-cost");
  document.getElementById('total-cost').innerText = totalCost + parseInt(value);
}




function getConvertedValue(id){
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseInt(price);
  return convertedPrice;
}