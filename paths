
function monitorPathElement(pathElement) {
  let oldD = pathElement.getAttribute('d');

  // Create a MutationObserver instance to watch for changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'd') {
        const newD = pathElement.getAttribute('d');
        if (newD !== oldD) {
          const modifiedD = modifyDIfDownwards(newD);
          pathElement.setAttribute('d', modifiedD);
          oldD = modifiedD;
        }
      }
    });
  });

  observer.observe(pathElement, {
    attributes: true, 
    attributeFilter: ['d']
  });
}

function modifyDIfDownwards(d) {
  const commands = d.split(' ');

  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd === 'L' || cmd === 'l') {
      const x = parseFloat(commands[i + 1]);
      let y = parseFloat(commands[i + 2]);
      
      if ((cmd === 'L' && y > parseFloat(commands[i - 2])) || 
          (cmd === 'l' && y > 0)) {
        const downwardMove = y - parseFloat(commands[i - 2]);
        const upwardMove = -23 * downwardMove;
        y = cmd === 'L' ? parseFloat(commands[i - 2]) + upwardMove : upwardMove;
        
        // If y value reaches or surpasses the top of the chart, keep pushing it upwards
        if(y <= 0) {
            y -= 5; // pushing it further up by 5 units. Adjust as needed.
        }

        commands[i + 2] = y.toString();
      }
    }
  }
  
  return commands.join(' ');
}

const pathElement = document.querySelector('path#line#myPath');
monitorPathElement(pathElement);
