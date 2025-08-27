//heart btn click
const loveBtn = document.getElementById("card_section");
loveBtn.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    const totalHeart = document.getElementById("total_heart").innerText;
    

    const totalHeartCount = Number(totalHeart) + 1;
     document.getElementById("total_heart").innerText = totalHeartCount
    console.log(totalHeartCount);
  }
});


// copy btn click
const copyBtn = document.getElementById("card_section");
copyBtn.addEventListener("click", function(e){
     if (e.target.className.includes("copy_btn") || e.target.className.includes("fa-copy") ) {

      //copy paste task
      const card = e.target.closest(".card_container");
      const callingNumber = card.querySelector(".call_number").innerText;
      navigator.clipboard.writeText(callingNumber);
      alert(`Calling Number ${callingNumber} is copied`)

      
    //copy count increase  
    const totalCopyCount = document.getElementById("total_copy_count").innerText; //fixed count copy
    const updatedCopyCount = Number(totalCopyCount) + 1;
     document.getElementById("total_copy_count").innerText = updatedCopyCount
    console.log(updatedCopyCount);
  }
})






//call button
const callBtn = document.getElementById("heart_btn");
callBtn.addEventListener("click", function(e){
     if (e.target.className.includes("call_btn") || e.target.className.includes("fa-phone")) {
        alert("call for:  ")
    const totalCopyCount = document.getElementById("total_copy_count").innerText;
    


    const updatedCopyCount = Number(totalCopyCount) + 1;
     document.getElementById("total_copy_count").innerText = updatedCopyCount
    console.log(updatedCopyCount);
  }
})
