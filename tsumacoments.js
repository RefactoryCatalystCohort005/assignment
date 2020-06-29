//function tests is declared and has parameters test1 and test2.
function tests(test1, test2) {
  // greater is declared as avariable and we are definining an if statement "if test1 is greater than test2 then the value of test1 is assigned to variable greater"

    let greater = test1 > test1 ? test1 : test2;
   
    return greater;// required to return the value of the valuable greater
  }
  
  // function course work is declared with a parameter 'cswork'
  function coursework(cswork) { 
  
    let coursework = cswork + tests(80, 80);//assigning the valuable coursework with the value of function test with arguements 80,80 
    
    console.log(coursework); // printing the value of coursework in console
    
    return coursework;//returning the value of the valuable course work
  }
  
  
  function avg(a) { // function avg is declare with parameter 'a'.
   
    let avg = coursework(90) / a;// assigning function avg to a value coursework with '90' as an arguement divided by 'a' arguement
   
    return avg;//returning the value of avg valuable
  }
  
  
  function crsmark(a) { // function crsmark is declared with 'a' as a parameter
   
    let exm = avg(2) * (a / 100);// declaring variable 'exm'with a value avg with 2 as arguement multiplied by 'a' divided by '100'
    
    return exm;// returning the value of the variable exm
  }
  
  function exam(a) { // function exam is declared with a as a parameter
    
    let fexam = (60 / 100) * a;//declare variable 'fexam' with a value 60/100 multiplied by arguement a
  
    return fexam;// return the value of fexam varible
  }
  
  function fnalCrsMrk() { // function 'fnalmrk' is declared
  
    let fmark = exam(75) + crsmark(40);// declaring variable fnalmrk with a value of exam wth an arguement 75 plus function crmark with 40 as an arguement

  
    console.log(fmark);//printing the value of the variable fmark into console
  }
  fnalCrsMrk();// Invocking the function fnalcrsmrk