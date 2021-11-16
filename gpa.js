var gpaBtn = document.querySelector("#gpabtn");
gpaBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var select = document.querySelector("#subj1");
    var select2 = document.querySelector("#subj2");
    var select3 = document.querySelector("#subj3");
    var select4 = document.querySelector("#subj4");
    var select5 = document.querySelector("#subj5");
    var crdt = document.getElementsByName("crdt[]");
    var result = document.querySelector(".result");
    var value = Number(select.options[select.selectedIndex].value);
    var value2 = Number(select2.options[select2.selectedIndex].value);
    var value3 = Number(select3.options[select3.selectedIndex].value);
    var value4 = Number(select4.options[select4.selectedIndex].value);
    var value5 = Number(select5.options[select5.selectedIndex].value);
    var sum = 0;
    var arr = [];
    var count = 0;
    for (var i = 0; i < crdt.length; i++) {
        sum = sum + Number(crdt[i].value);
        arr.push(Number(crdt[i].value));
        count += 1;
    }
    console.log(arr);
    var res = (arr[0] * value +
        arr[1] * value2 +
        arr[2] * value3 +
        arr[3] * value4 +
        arr[4] * value5) /
        sum;
    if (isNaN(res))
        result.textContent = "Wrong Input";
    else
        result.textContent = res.toFixed(2);
});
