const boxNum = document.querySelectorAll(".box h3");

// const today = new Date();

// const yesterday = new Date("2022-12-08 14:45:12");
// const yes = new Date(2022, 11, 7, 13, 78, 12);

// console.log(yes.getDay());

// console.log(yesterday);
// console.log(today.getTime());

let diff;

const changeTimer = () => {
  const today = new Date();
  const in7Days = new Date(
    today.getFullYear(),
    today.getMonth(),

    today.getDate() + 7
  );

  diff = in7Days - today;
  console.log(diff);
  console.log(today);
  console.log(in7Days);

  //convert to second
  const s = Math.floor((diff / 1000) % 60);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);

  boxNum[0].innerHTML = String(d).padStart(2, "0");
  boxNum[1].innerHTML = String(h).padStart(2, "0");
  boxNum[2].innerHTML = String(m).padStart(2, "0");
  boxNum[3].innerHTML = String(s).padStart(2, "0");
};

// changeTimer();

setInterval(changeTimer, 1000);
