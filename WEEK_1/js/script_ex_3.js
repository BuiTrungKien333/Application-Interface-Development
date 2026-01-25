const avg = (a, b, c) => {
  return (a + b + c) / 3;
};

const val_1 = document.getElementById("score_1");
const val_2 = document.getElementById("score_2");
const val_3 = document.getElementById("score_3");
const val_4 = document.getElementById("score_4");
const val_5 = document.getElementById("score_5");
const val_6 = document.getElementById("score_6");

const btnCalc = document.getElementById("btn_calc");

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();

  const avg_dol = avg(
    parseInt(val_1.value),
    parseInt(val_2.value),
    parseInt(val_3.value)
  );

  const avg_koa = avg(
    parseInt(val_4.value),
    parseInt(val_5.value),
    parseInt(val_6.value)
  );

  if (avg_dol < 100) {
    console.log("Điểm tối thiểu của đội Dolphins phải lớn hơn 100");
    return;
  }

  if (avg_koa < 100) {
    console.log("Điểm tối thiểu của đội Koalas phải lớn hơn 100");
    return;
  }

  console.log(
    avg_dol > avg_koa
      ? `Đội chiến thắng là Dolphins (${avg_dol.toFixed(
          2
        )}) > (${avg_koa.toFixed(2)})`
      : `Đội chiến thắng là Koalas (${avg_koa.toFixed(2)}) > (${avg_dol.toFixed(
          2
        )})`
  );
});
