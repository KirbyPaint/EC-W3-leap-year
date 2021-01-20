
  // The year is evenly divisible by 4; DONE
  // If the year can be evenly divided by 100, it is NOT a leap year, unless;
  // The year is also evenly divisible by 400. Then it is a leap year.

$(document).ready(function() {
  // event.preventDefault();
  $("button#start").click(function() {
    const inputValue = parseInt($("#formResponse").val());
    
    if ((inputValue % 4) === 0) {
      if ((inputValue % 100) === 0) {
        if ((inputValue % 400) === 0) {
          alert("Leap year");
        }
        else {
          alert("Not a leap year");
        }
      }
      else {
        alert("Leap year");
      }
    }
    else {
      alert("Not a leap year");
    }
  });
});