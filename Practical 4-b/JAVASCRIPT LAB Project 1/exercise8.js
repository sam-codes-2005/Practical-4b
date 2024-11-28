function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
    const choices=document.querySelectorAll(".choice");
    const select=document.getElementById("selected");
    function text(event)
    {
        select.textContent=event.target.style.backgroundColor;
    }
    function background(event)
    {
        select.style.backgroundColor=event.target.style.backgroundColor;
    }
    choices.forEach((choice,index) => {
        choice.style.backgroundColor=colors[index];
        choice.addEventListener("click",function(event){
            text(event);
            background(event);
        //    selected.textContent=event.target.style.backgroundColor;
        })
    });
}

window.onload = function () {
    initGrid();
}
