// -------------------------all eliment id----classname------parsinit----------

const callBtns = document.getElementsByClassName("call-btn");
const clearBtn = document.getElementById("clear-btn");
const historyList = document.getElementById("history-list");
const coin = document.getElementById("coin");
let coinNumbr = parseInt(coin.innerText);

const hearticon = document.getElementById("heart-icon");
const heartBtns = document.getElementsByClassName("heart-btn");
let heartCount = parseInt(hearticon.innerText);

const copyCounter = document.getElementById("copy-counter");
const allCopy = document.getElementsByClassName("copy-btn");

// -----------------------------------------for all Call Button-------------------

for (let btn of callBtns) {
  btn.addEventListener("click", function () {
    const card = btn.closest("div.bg-white");
    const name = card.querySelector("h2").innerText;
    const number = card.querySelector(".text-3xl").innerText;

    // --------------------------------------call alert----------------------------

    alert(`📞calling ${name} ${number}`);

    // ---------------------------------- coin minus -------------------------------------
    if (coinNumbr >= 20) {
      coinNumbr = coinNumbr - 20;
      coin.innerText = coinNumbr;
    } else {
      return alert("Not enough coins, minimum 20 con needed!");
    }

    // ---------------------------------------creat call histoy----------------------------------

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between bg-white items-center rounded-xl w-full">
        <div class="flex justify-between items-center bg-gray-200 w-[100%] mr-5 p-2 mb-2 rounded-xl">
          <div class="text-xl">
            <h1 class="font-bold">${name}</h1>
            <p class="text-gray-500">${number}</p>
          </div>
          <div>
            (${new Date().toLocaleTimeString()})
          </div>
        </div>
      </div>`;

    historyList.appendChild(div);
  });
}

// ------------------- Clear Button -------------------

clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});

// ----------------------------------heart icon--------------------------------

for (let btn of heartBtns) {
  btn.addEventListener("click", function () {
    heartCount = heartCount + 1;
    hearticon.innerText = heartCount;
  });
}

// ---------------------------------------------copy section---------------------------------------

let copyCount = 0;

for (let btn of allCopy) {
  btn.addEventListener("click", function () {
    const card = btn.closest("div.bg-white");
    const number = card.querySelector("p").innerText;

    //
    navigator.clipboard.writeText(number).then(() => {
      alert(`Number Copied: ${number}`);
    });

    copyCount++;
    copyCounter.innerText = copyCount;
  });
}
