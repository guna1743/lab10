"use strict";
var resultBtn = document.querySelector(".sub");
var ele = document.querySelector(".cgpa");
var Marks = /** @class */ (function () {
    function Marks() {
        this.sum = 0;
        this.count = 0;
    }
    Marks.prototype.getValues = function () {
        var gpa = document.getElementsByName("gpa[]");
        for (var i = 0; i < gpa.length; i++) {
            if (Number(gpa[i].value) == 0)
                continue;
            this.sum = this.sum + Number(gpa[i].value);
            this.count += 1;
        }
        var cgpa = this.sum / this.count;
        if (isNaN(cgpa))
            ele.textContent = "Wrong Input";
        else
            ele.textContent = cgpa.toFixed(4);
    };
    return Marks;
}());
var obj = new Marks();
resultBtn.addEventListener("click", function (e) {
    e.preventDefault();
    obj.getValues();
});
