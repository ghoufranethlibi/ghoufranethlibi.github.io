function pages(){
    const select=document.getElementById("menu_selection");
     if(select.value){
     window.location.href=select.value;
     
 }
 }
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); 
  
   
    const correctAnswers = {
      css: "css",
      fc: "fc_js",
      id: "non",
      role: "espace",
      diff: "rep_vrai",
      inter: ",",
      float: "vrai",
      word: "coupe",
      radius: "cercle",
      titre: "correct",
    };
  
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length; 
    let feedback = "";
  

    for (const question in correctAnswers) {
      const options = document.getElementsByName(question);
      let selected = null;
  
 
      for (const option of options) {
        if (option.checked) {
          selected = option.value;
          break;
        }
      }
  

      if (selected === correctAnswers[question]) {
        score++; 
      } else {
        feedback += `❌ Question "${question}": Bonne réponse => "${correctAnswers[question]}"\n`;
      }
    }

    feedback = `✅ Votre score est de ${score}/${totalQuestions}\n\n` + feedback;
  

    alert(feedback);
  });
  