// this is an annoymous self invoking function
// also called an IIFE (immediately invoked function expression)
//
//also called a module (module programming pattern)
(() => {
  console.log('fired!');

  var infoToggle = document.querySelectorAll('.toggle-bottle-info'),
      infoWrapper = document.querySelector('.info-wrapper'),
      teamImage = document.querySelector('.control');

      info = [
        'Jay - he is this team leader, he is nmaking the website beautifu, and also create more function for the website in order to make the user havinbg a good experience.',
        'Superman - he is our team hero, he always give us many good ideas. when there are many problems, he always solve the problems.',
        'Sipderman - he loves music. And He always play the nice songs when we are working the assignments, which is making us to have motivation to finish all projects.',
  ];

  function toggleInfo(index) {
    infoWrapper.innerHTML = `<p>${info[index]}</p>`
  }

  infoToggle.forEach(function(btn, index) {

    btn.addEventListener("click", function() {
      toggleInfo(index)
    }, false);
  })
})();


  //let theButton = document.querySelector('button'),
      //theHeading = document.querySelector('h1');

  //function sayHello() {
    //console.log('sup?');
  //}

  //get the ID of any element
  //function retrieveId() {
    //console.log(this.id);

  //pass the ID to another function element as an argument
  //displayTheId(this.id);
  //}

  //display the ID of any clicked element on the page
  //function displayTheId(el) {
    //document.querySelector('p').textContent = `You clicked on the element with the ID of ${el}`;
  //}

  //sayHello();

  //theButton.addEventListener("click", retrieveId);
  //heHeading.addEventListener("click", retrieveId);
//})();
