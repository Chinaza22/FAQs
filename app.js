const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

//FIRST ATTEMPT

//const buttons = document.querySelectorAll('.question-btn');

//buttons.forEach(function(button){

 //button.addEventListener('click', function(e){

   // const question =e.currentTarget.parentElement.parentElement;

   // buttons.forEach(function(item){
       //if(item!== question){
          // item.classList.remove("show-text");
      // }
    //})
    //question.classList.toggle//("show-text")

 //});
//});
