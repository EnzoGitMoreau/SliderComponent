var firstId;
var secondId;
var dragable = false;
const onMouseUp = (e) => {
	  dragable = false;
	  };
const onMouseMove = (e) => {
	  if(dragable)
	  {
	  deltaX = e.clientX - currentX;
	  deltaY = e.clientY - currentY;
	  firstDivSize += deltaX;
	  secondDivSize -= deltaX;
	  currentX = e.clientX;
	  currentY = e.clientY;
	  updateWidths(firstId, secondId, firstDivSize, secondDivSize);
	  }
	  };

const onMouseDown = (e) => {
	  
	  dragable = true;
	  var splitted = e.target.id.split('-');
	  secondId = splitted[0]+"-"+splitted[1];
	  firstId = splitted[2]+"-"+splitted[3];//Slider ID must be firstId - secondId for the moment

	  currentX = e.clientX;
	  currentY = e.clientY;
	  [firstDivSize, secondDivSize] = retrieveWidths(firstId, secondId);
	  window.addEventListener('pointermove', onMouseMove);
	  window.addEventListener('pointerup', onMouseUp);
	  if(dragable == false)
	  {
		  return;
	  }};

window.retrieveWidths = (firstId, secondId) => {
  const firstElement = document.getElementById(firstId);
  const secondElement = document.getElementById(secondId);

  if (firstElement && secondElement) {
	  const firstWidth = firstElement.offsetWidth;
	  const secondWidth = secondElement.offsetWidth;
	  return [firstWidth, secondWidth];
  } else {
	  if(firstElement)
	  {
		const firstWidth = firstElement.offsetWidth;
	  
	
	  return [firstWidth, 0]; 
	  }
	  else
	  {
		console.log("Couldn't find the elements to be slided");
		return [0,0];
	  }
  }
};

window.updateWidths = (firstId, secondId, firstWidth, secondWidth) => {
  
  var element1 = document.getElementById(firstId);
  var element2 = document.getElementById(secondId);
  console.log("Updating width");
  if (element1) {
	  element1.style.width = firstWidth + 'px';
  }

  if (element2) {
	  element2.style.width = secondWidth + 'px';
  }

  dotNetHelper.invokeMethodAsync('UpdateWidthJS',firstId, secondId, firstWidth, secondWidth);
};