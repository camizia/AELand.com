$(document).ready(function(){
    console.log("ready");

    const test = document.getElementById('bt')
    const test2 = document.getElementById('bt2')
    const test3 = document.getElementById('bt3')
    const test4 = document.getElementById('bt4')
    const test5 = document.getElementById('bt5')
    const test6 = document.getElementById('bt6')

    var colortext ="rgb(197, 229, 233)"

    test.addEventListener('mouseenter', ()=>{
        test.style.backgroundColor = "rgb(59, 59, 59)";
    });

    test.addEventListener('mouseleave', ()=>{
        test.style.backgroundColor = "rgb(29, 29, 29)";
    });

    ////////////////////

    test2.addEventListener('mouseenter', ()=>{
        test2.style.color = colortext;
    });

    test2.addEventListener('mouseleave', ()=>{
        test2.style.color = "black";
    });

    ///////////////////

    test3.addEventListener('mouseenter', ()=>{
        test3.style.color = colortext;
    });

    test3.addEventListener('mouseleave', ()=>{
        test3.style.color = "black";
    });

    ///////////////////

    test4.addEventListener('mouseenter', ()=>{
        test4.style.color = colortext;
    });

    test4.addEventListener('mouseleave', ()=>{
        test4.style.color = "black";
    });

    ///////////////////

    test5.addEventListener('mouseenter', ()=>{
        test5.style.color = colortext;
    });

    test5.addEventListener('mouseleave', ()=>{
        test5.style.color = "black";
    });

    ///////////////////

    test6.addEventListener('mouseenter', ()=>{
        test6.style.color = colortext;
    });

    test6.addEventListener('mouseleave', ()=>{
        test6.style.color = "black";
    });

var navv = document.getElementById("nana");


    /*
$("div2").mouseenter(function(){
    console.log("mouse")
    $(this).css("background-color", "lightBlue")
})
*/




/*
    let randomNumber = Math.floor(Math.random() * 10)

    console.log(randomNumber)

    $("#formUser").on("submit", function(e){
        e.preventDefault()
        //console.log("Submit")
        let input = $("input[type=text]")

        let userValue = parseInt(input.val())
        
            console.log(userValue)

            if(randomNumber !== userValue){
                //alert("perdu la solution c'était : " + randomNumber)
                input.val("")
                input.addClass("error", function(){
                    Animate(".demo", 'bounce');
                })
            }
            else{
                //alert("gagner")
                input.val("")
            }

        
    })
*/

})//ready