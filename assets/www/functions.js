function resizeElementHeight(element) {
  var height = 0;
  var body = window.document.body;
  if (window.innerHeight) {
	  height = window.innerHeight;
  } else if (body.parentElement.clientHeight) {
	  height = body.parentElement.clientHeight;
  } else if (body && body.clientHeight) {
	  height = body.clientHeight;
  }
  document.getElementById(element).style.height = (height - 52 + "px");
}