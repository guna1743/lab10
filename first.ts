"use strict";
const resultBtn = document.querySelector(".sub");
const ele = document.querySelector(".cgpa");
class Marks {
  sum: number = 0;
  count: number = 0;
  i;
  getValues(): void {
    const gpa = document.getElementsByName("gpa[]");
    for (let i = 0; i < gpa.length; i++) {
      if (Number((<HTMLInputElement>gpa[i]).value) == 0) continue;
      this.sum = this.sum + Number((<HTMLInputElement>gpa[i]).value);
      this.count += 1;
    }
    const cgpa: number = this.sum / this.count;
    if (isNaN(cgpa)) ele.textContent = "Wrong Input";
    else ele.textContent = cgpa.toFixed(4);
  }
}
var obj = new Marks();

resultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  obj.getValues();
});
