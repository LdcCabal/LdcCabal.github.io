let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('I´m a web programmer, I learned with Tecnolochicas')
  .pauseFor(200)
  .deleteChars(10)
  .start();

