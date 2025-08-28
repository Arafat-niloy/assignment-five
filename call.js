//heart btn click
const loveBtn = document.getElementById("card_section");
loveBtn.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    const totalHeart = document.getElementById("total_heart").innerText;

    const totalHeartCount = Number(totalHeart) + 1;
    document.getElementById("total_heart").innerText = totalHeartCount;
    console.log(totalHeartCount);
  }
});

// copy btn click
const copyBtn = document.getElementById("card_section");
copyBtn.addEventListener("click", function (e) {
  if (
    e.target.className.includes("copy_btn") ||
    e.target.className.includes("fa-copy")
  ) {
    //copy paste task
    const card = e.target.closest(".card_container");
    const callingNumber = card.querySelector(".call_number").innerText;
    navigator.clipboard.writeText(callingNumber);
    alert(`Calling Number ${callingNumber} is copied`);

    //copy count increase
    const totalCopyCount =
      document.getElementById("total_copy_count").innerText; //fixed count copy
    const updatedCopyCount = Number(totalCopyCount) + 1;
    document.getElementById("total_copy_count").innerText = updatedCopyCount;
    console.log(updatedCopyCount);
  }
});

//call button
const callBtn = document.getElementById("card_section");
callBtn.addEventListener("click", function (e) {
  if (
    e.target.className.includes("call_btn") ||
    e.target.className.includes("fa-phone")
  ) {
    //updated coin part
    const availableCoins = document.getElementById("available_coins").innerText;
    const updatedCoins = availableCoins - 20;

    // coin <20
    if (availableCoins < 20) {
      alert("You need atleast 20 coins to call");

      return;
    }

    document.getElementById("available_coins").innerText = updatedCoins;

    //calling alert part
    const callingCard = e.target.closest(".card_container");
    const callingText = callingCard.querySelector("h3").innerText;
    const callNum = callingCard.querySelector(".call_number").innerText;

    alert(`Calling to ${callingText} through ${callNum}`);

    //adding to call history part
    const callHistoryList = document.getElementById("history_list");
    const callTime = new Date().toLocaleTimeString();

    const addedListDiv = document.createElement("div");
    addedListDiv.className =
      "flex justify-between items-center bg-[#FAFAFA] my-4 p-5 rounded-lg gap-6";

    const leftDiv = document.createElement("div");
    leftDiv.innerHTML = `
                    <h3 class=" font-medium md:font-semibold text-[18px] md:text-[22px] text-[#111111] "> ${callingText} </h3>
                    <p class=" text-lg text-[#5C5C5C]  "> ${callNum} </p>
                   `;

    const rightDiv = document.createElement("div");
    rightDiv.innerHTML = `
                     <p class=" text-base md:text-lg text-[#111111] whitespace-nowrap "> ${callTime} </p>
                   `;

    addedListDiv.appendChild(leftDiv);
    addedListDiv.appendChild(rightDiv);

    callHistoryList.appendChild(addedListDiv);

    //clear btn click
    const clearBtn = document.getElementById("clear_history");
    clearBtn.addEventListener("click", function () {
      callHistoryList.innerHTML = "";
    });
  }
});
