$(document).ready(function(){

    //Agregamos clase active al primer enlace
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    //Filtramos
    $('.category_item').click(function(){
        var catProject  = $(this).attr('category');
        console.log(catProject);

        $('.category_item').removeClass('ct-item-active');
        $(this).addClass('ct_item-active');

        $('.proyectos-item').css('transform', 'scale(0)');
        function hideProject(){
            $('.proyectos-item').hide();
        } setTimeout(hideProject,400);

        function showProject() {
            $('.proyectos-item[category="'+catProject+'"]').show();
            $('.proyectos-item[category="'+catProject+'"]').css('transform', 'scale(1)');
        } setTimeout(showProject,400);
    });

    //Mostramos todos los productos

    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.proyectos-item').show();
            $('.proyectos-item').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
    });


});


//ANIMACION

// function([string1, string2],target id,[color1,color2])    
consoleText(['Eduardo Salinas.', 'Web Developer.'], 'text',['tomato','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

