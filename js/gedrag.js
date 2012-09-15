$('document').ready(function(){





var codeA = '<li title="&amp;#',
  codeB = ';">&#',
  codeC = ';</li>',
  ixx,
  ijump,
  ixz,
  wW,
  wH,
  allPaddingHoriz = 30*2,
  olTopOffset = 103,
  cellSize = 49,
  innerSpaceWidth,
  innerSpaceHeight,
  cellsX,
  cellsY,
  rT,
  urlPath = window.location.href,
  urlTest = /#\d+/.test(urlPath),
  getNumRegex = /^[^#]*#(\d*).*$/;



if (urlTest){
  var getNum = urlPath.replace(getNumRegex, '$1');
  ixx = parseInt(getNum, 10);
} else {
  ixx = 1;
}
window.location.hash = ixx


var jumpCalc = function(){
  wW = $(window).width();
  wH = $(window).height();

  innerSpaceWidth = wW - allPaddingHoriz;
  cellsX = Math.floor(innerSpaceWidth / cellSize);

  innerSpaceHeight = wH - olTopOffset;
  cellsY = Math.floor(innerSpaceHeight / cellSize);

  ijump = cellsX * cellsY - 1;
}

var textify = function(){
  ixz = ixx + ijump;
  $('.xx').text(ixx);
  $('.xy').text(ixz);
  $('.xzx').text(ixx-ijump);
  $('.xzy').text(ixz+ijump);
  if(ixx-ijump >= 0) {
    $('a[rel="prev"]').show();
  } else {
    $('a[rel="prev"]').hide();
  }
}

var utf = function(){
  var codeF = '';
  for (var i = ixx; i <= ixx+ijump; i++){
    codeF += codeA + i + codeB + i + codeC;
  }
  textify();
  $('ol').empty().append(codeF);
}

var linkBehavior = function(i, wut){
  i.preventDefault();
  ixx = ixx + (wut ? ijump : -ijump);
  window.location.hash = ixx;
  utf();
}

$('a[rel="next"]').click(function(i){
  linkBehavior(i, true);
});

$('a[rel="prev"]').click(function(i){
  linkBehavior(i, false);
});


$(window).resize(function(){
  clearTimeout(rT);
  rT = setTimeout(function(){
    jumpCalc();
    utf();
  }, 100)
});

/*
$(window).bind('hashchange', function() {
  alert('lala');
});
*/

jumpCalc();
utf();





});
