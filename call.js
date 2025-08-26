const loveBtn = document.getElementById("heart_btn");
loveBtn.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    const totalHeart = document.getElementById("total_heart").innerText;
    console.log(totalHeart);



    

    const totalHeartCount = Number(totalHeart) + 1;
     document.getElementById("total_heart").innerText = totalHeartCount
    console.log(totalHeartCount);
  }
});

const copyBtn = document.getElementById("heart_btn");
copyBtn.addEventListener("click", function(e){
     if (e.target.className.includes("copy_btn") || e.target.className.includes("fa-copy")) {
    const totalCopyCount = document.getElementById("total_copy_count").innerText;
    console.log(e.target.parentNode);



    

    const updatedCopyCount = Number(totalCopyCount) + 1;
     document.getElementById("total_copy_count").innerText = updatedCopyCount
    console.log(updatedCopyCount);
  }
})
