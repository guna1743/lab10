const gpaBtn = document.querySelector("#gpabtn");
gpaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let select = document.querySelector("#subj1") as HTMLSelectElement;
  let select2 = document.querySelector("#subj2") as HTMLSelectElement;
  let select3 = document.querySelector("#subj3") as HTMLSelectElement;
  let select4 = document.querySelector("#subj4") as HTMLSelectElement;
  let select5 = document.querySelector("#subj5") as HTMLSelectElement;
  const crdt = document.getElementsByName("crdt[]");
  const result = document.querySelector(".result");
  let value: number = Number(select.options[select.selectedIndex].value);
  let value2: number = Number(select2.options[select2.selectedIndex].value);
  let value3: number = Number(select3.options[select3.selectedIndex].value);
  let value4: number = Number(select4.options[select4.selectedIndex].value);
  let value5: number = Number(select5.options[select5.selectedIndex].value);
  let sum: number = 0;
  let arr = [];
  let count: number = 0;
  for (let i = 0; i < crdt.length; i++) {
    sum = sum + Number((<HTMLInputElement>crdt[i]).value);
    arr.push(Number((<HTMLInputElement>crdt[i]).value));
    count += 1;
  }
  console.log(arr);
  const res =
    (arr[0] * value +
      arr[1] * value2 +
      arr[2] * value3 +
      arr[3] * value4 +
      arr[4] * value5) /
    sum;
  if (isNaN(res)) result.textContent = "Wrong Input";
  else result.textContent = res.toFixed(2);
});
