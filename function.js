

  let startDate = new Date(2023, 7, 26); // August is month 7 (0-indexed)
  let currentDate = new Date();
  // Calculate the difference in days
  let daysElapsed = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  
  // Convertir el número en una cadena
  var numberStr = daysElapsed.toString();
  
  let numberOfDigits = numberStr.toString().length;
  if (numberOfDigits <= 2) {
      if (numberOfDigits <= 1) {
          var digit1 = 0;
          var digit2 = 0;
          var digit3 = parseInt(numberStr.charAt(0));
      }else{
          var digit1 = 0;
          var digit2 = parseInt(numberStr.charAt(0));
          var digit3 = parseInt(numberStr.charAt(1)); 
      }
    } else {
      var digit1 = parseInt(numberStr.charAt(0));
      var digit2 = parseInt(numberStr.charAt(1));
      var digit3 = parseInt(numberStr.charAt(2));
    }

  var cday = digit1, cday2 = digit2, cday3 = digit3;
  console.log("Digit 1:", cday);
console.log("Digit 2:", cday2);
console.log("Digit 3:", cday3);

  setInterval(function() {
    dayPlay();
  }, 1.8e+6);
  setInterval(function() {
    day2Play();
  }, 1.8e+6);
  setInterval(function() {
    day3Play();
  }, 1.8e+6);
  function dayPlay() {
    $('body').addClass('play');
    $('.dayPlay li').toggleClass('active before');
    
    
      
      $('.dayPlay .active .inn').text(cday);
  }
  
  function day2Play() {
    $('.day2Play li').toggleClass('active before');
   
      
      $('.day2Play .active .inn').text(cday2);
  }
  function day3Play() {
    $('.day3Play li').toggleClass('active before');
      
      $('.day3Play .active .inn').text(cday3);
  }

  