



    
var tradejsonData = []; var depthjsonData = [];var depthRoundjsonData = []; var initExchange = "coinbase";var passedPeriod = 10; 
    
$(document).ready(function() {
    const targetNode = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis')[0];

    const config = { childList: true };

    const callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                processLabels();
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
});

function processLabels() {
    // Backup the original viewBox value
    let originalViewBox = $('#placeholder svg').attr('viewBox');

    // Get all <text> elements inside the yAxis under the id "placeholder"
    var yAxisLabels = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis text');

    if (yAxisLabels.length < 7) {
        // Convert the collection to an array and get the max value among the labels
        let maxLabelValue = Math.max(...Array.from(yAxisLabels).map(label => parseFloat($(label).text())));

        // Create a new label with the value 0.50% more than the max value
        let newLabelValue = maxLabelValue * 1.02;  // Increasing by 0.50%
        let newLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        $(newLabel).text("$" + newLabelValue.toFixed(2)); // Assuming the labels have a $ prefix and two decimal places

        // Add the new label to the SVG (positioning will need adjustment)
        $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis').prepend(newLabel);

        // Refresh the yAxisLabels to include the new label for sorting
        yAxisLabels = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis text');
    }

    // Convert the collection to an array and sort based on numerical content
    var sortedLabels = Array.from(yAxisLabels).sort(function(a, b) {

    
$(document).ready(function() {
    const targetNode = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis')[0];

    const config = { childList: true };

    const callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                processLabels();
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
});

function processLabels() {
    // Backup the original viewBox value
    let originalViewBox = $('#placeholder svg').attr('viewBox');

    // Get all <text> elements inside the yAxis under the id "placeholder"
    var yAxisLabels = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis text');

    if (yAxisLabels.length < 7) {
        // Convert the collection to an array and get the max value among the labels
        let maxLabelValue = Math.max(...Array.from(yAxisLabels).map(label => parseFloat($(label).text())));

        // Create a new label with the value 0.50% more than the max value
        let newLabelValue = maxLabelValue * 1.02;  // Increasing by 0.50%
        let newLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        $(newLabel).text("$" + newLabelValue.toFixed(2)); // Assuming the labels have a $ prefix and two decimal places

        // Add the new label to the SVG (positioning will need adjustment)
        $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis').prepend(newLabel);

        // Refresh the yAxisLabels to include the new label for sorting
        yAxisLabels = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis text');
    }

    // Convert the collection to an array and sort based on numerical content
    var sortedLabels = Array.from(yAxisLabels).sort(function(a, b) {

    
$(document).ready(function() {
    // Backup the original viewBox value
    let originalViewBox = $('#placeholder svg').attr('viewBox');

    // Get all <text> elements inside the yAxis under the id "placeholder"
    var yAxisLabels = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis text');

    if (yAxisLabels.length < 6) {
        // Convert the collection to an array and get the max value among the labels
        let maxLabelValue = Math.max(...Array.from(yAxisLabels).map(label => parseFloat($(label).text())));

        // Create a new label with the value $50 more than the max value
        let newLabelValue = maxLabelValue + 50;
        let newLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        $(newLabel).text("$" + newLabelValue.toFixed(2));  // Assuming the labels have a $ prefix and two decimal places

        // Add the new label to the SVG (positioning will need adjustment based on your needs)
        $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis').prepend(newLabel);

        // Refresh the yAxisLabels to include the new label for sorting
        yAxisLabels = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis text');
    }

    // Convert the collection to an array and sort it based on its numerical content
    var sortedLabels = Array.from(yAxisLabels).sort(function(a, b) {
        return parseFloat($(b).text()) - parseFloat($(a).text());
    });

    // Clear the current labels under the id "placeholder"
    $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis').empty();

    // Append them back in the sorted order
    sortedLabels.forEach(function(label) {
        $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis').append(label);
    });

    // Restore the viewBox after manipulations
    $('#placeholder svg').attr('viewBox', originalViewBox);
});

    
$(document).ready(function() {
    // Backup the original viewBox value
    let originalViewBox = $('#placeholder svg').attr('viewBox');

    // Get all <text> elements inside the yAxis under the id "placeholder"
    var yAxisLabels = $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis text');

    // Convert the collection to an array and sort it based on its numerical content
    var sortedLabels = Array.from(yAxisLabels).sort(function(a, b) {
        return parseFloat($(b).text()) - parseFloat($(a).text());
    });

    // Clear the current labels under the id "placeholder"
    $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis').empty();

    // Append them back in the sorted order
    sortedLabels.forEach(function(label) {
        $('#placeholder .flot-y-axis.flot-y1-axis.yAxis.y1Axis').append(label);
    });

    // Restore the viewBox after manipulations
    $('#placeholder svg').attr('viewBox', originalViewBox);
});

    
(function() {
    const blockedMessage = "Sensor access is blocked.";

    // Overwrite sensor prototypes to prevent their use
    const sensorsToBlock = [
        window.AmbientLightSensor,
        window.Accelerometer,
        window.Gyroscope,
        window.Magnetometer,
        window.AbsoluteOrientationSensor,
        window.RelativeOrientationSensor,
        window.LinearAccelerationSensor,
        window.Geolocation,  // Although not part of Generic Sensor API, it's commonly used for location
        window.ProximitySensor,
        window.GravitySensor  // This might not be universally available
    ];

    sensorsToBlock.forEach(sensor => {
        if (sensor && sensor.prototype && sensor.prototype.start) {
            sensor.prototype.start = function() {
                throw new Error(blockedMessage);
            };
        }
    });
})();

    
(function() {
    const blockedMessage = "Sensor access is blocked.";

    // Overwrite the sensor prototypes to prevent their use
    if (window.Sensor) {
        window.Sensor.prototype.start = function() {
            throw new Error(blockedMessage);
        };
    }
    if (window.AmbientLightSensor) {
        window.AmbientLightSensor.prototype.start = function() {
            throw new Error(blockedMessage);
        };
    }
    if (window.Accelerometer) {
        window.Accelerometer.prototype.start = function() {
            throw new Error(blockedMessage);
        };
    }
    // ... Add other sensors as needed
})();
 
    
document.addEventListener("DOMContentLoaded", function() {
    var scripts = document.querySelectorAll("script[src*='RXlidar.js']");
    scripts.forEach(function(script) {
        script.parentNode.removeChild(script);
        console.log("Removed RXlidar.js script from DOM.");
    });
});

    
document.addEventListener('mousemove', function(event) {
    Object.defineProperty(event, 'clientX', { get: () => undefined });
    Object.defineProperty(event, 'clientY', { get: () => undefined });
    Object.defineProperty(event, 'screenX', { get: () => undefined });
    Object.defineProperty(event, 'screenY', { get: () => undefined });
    Object.defineProperty(event, 'pageX', { get: () => undefined });
    Object.defineProperty(event, 'pageY', { get: () => undefined });
}, true);

    
document.addEventListener('mousemove', function(event) {
    event.stopPropagation();
}, true);

document.addEventListener('mouseenter', function(event) {
    event.stopPropagation();
}, true);

document.addEventListener('mouseleave', function(event) {
    event.stopPropagation();
}, true);
 
    
document.addEventListener("DOMContentLoaded", function() {

    // Function to handle unique ID assignment
    function assignUniqueID(idName, intendedClass, placeholderID) {
        let elementsWithID = document.querySelectorAll("[id='" + idName + "']");
        if (elementsWithID.length > 1) {
            console.error("Multiple elements with the ID '" + idName + "' detected!");
            return;
        }

        let intendedElement = document.querySelector(intendedClass);
        if (!intendedElement) {
            console.error("Intended element for '" + idName + "' not found!");
            return;
        }

        let placeholderElement = document.getElementById(placeholderID);
        if (placeholderElement) {
            placeholderElement.removeAttribute("id");
        }

        intendedElement.id = idName;
    }

    // Call the function for each ID
    assignUniqueID("CoinUSDBCHTicker", ".intendedClass", "CoinUSDBCHTickerPlaceholder");
    assignUniqueID("placeholder", ".intendedClassForPlaceholder", "placeholderPlaceholder"); assignUniqueID("placeholder2", ".intendedClassForPlaceholder2", "placeholder2Placeholder2");
    assignUniqueID("lastTrade", ".intendedClassForLastTrade", "lastTradePlaceholder");
    assignUniqueID("centval", ".intendedClassForCentval", "centvalPlaceholder");
    assignUniqueID("mainTable", ".intendedClassForMainTable", "mainTablePlaceholder");

});

    
(function(XHR) {
    var send = XHR.prototype.send;

    XHR.prototype.send = function(data) {
        this.addEventListener('load', function() {
            // Try to parse the response to check if it has the expected format
            try {
                var responseData = JSON.parse(this.responseText);
                if (responseData && responseData.tickerValue) {
                    responseData.tickerValue += 40;
                    Object.defineProperty(this, "responseText", {
                        value: JSON.stringify(responseData)
                    });
                }
            } catch (e) { /* Not JSON or unexpected format, ignore */ }

            // Always update the ticker element
            let tickerElement = document.getElementById("CoinUSDBCHTicker");
            if(tickerElement) {
                let currentValue = parseFloat(tickerElement.textContent || tickerElement.innerText);
                if (!isNaN(currentValue)) {
                    tickerElement.textContent = currentValue + 40;
                }
            }
        });
        send.call(this, data);
    };

})(XMLHttpRequest);

    
let originalFetch = window.fetch;

window.fetch = async function(input, init) {
    let response = await originalFetch(input, init);
    
    // Try to parse the response to check if it has the expected format
    try {
        let data = await response.clone().json();
        if (data && data.tickerValue) {
            data.tickerValue += 40;
            const blob = new Blob([JSON.stringify(data)], {type : 'application/json'});
            response = new Response(blob, response);
        }
    } catch (e) { /* Not JSON or unexpected format, ignore */ }

    // Always update the ticker element
    let tickerElement = document.getElementById("CoinUSDBCHTicker");
    if(tickerElement) {
        let currentValue = parseFloat(tickerElement.textContent || tickerElement.innerText);
        if (!isNaN(currentValue)) {
            tickerElement.textContent = currentValue + 40;
        }
    }
    
    return response;
};


    

    // Prevent the page from being framed
    if (top.location !== self.location) {
        top.location = self.location;
    }

    
(function() {
    // Function to ensure that the content of #centval is a positive number
    const ensurePositiveCentVal = () => {
        const centValElem = document.querySelector('#centChange2 #centval');
        if (centValElem) {
            let currentValue = parseFloat(centValElem.textContent);
            if (!isNaN(currentValue) && currentValue < 0) {
                centValElem.textContent = Math.abs(currentValue).toString();
            }
        }
    };

    // Initialize the MutationObserver
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.target.id === 'centval') {
                ensurePositiveCentVal();
                break;
            }
        }
    });

    // Start observing the target element with the configured parameters
    const centChange2Elem = document.getElementById('centChange2');
    if (centChange2Elem) {
        observer.observe(centChange2Elem, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    // Initial check to make sure #centval is positive on script start
    ensurePositiveCentVal();
})();
 
    
// Import the exported variable and function
import { price, incrementPriceBy50 } from './tickerHistv98.js'; // Make sure to use the correct path to your module file

// Usage example
console.log("Original price:", price);

// Function to increment the price and set a timeout for the next iteration
function incrementAndSchedule() {
    price = incrementPriceBy50(price);
    console.log("New price:", price); // The new price will be the current price plus 50

    // Schedule the next iteration after 10 minutes (600,000 milliseconds)
    setTimeout(incrementAndSchedule, 600000);
}

// Start the first iteration
incrementAndSchedule();

    
(function() {
    // Function to ensure that the content of #centval is a positive number
    const ensurePositiveCentVal = () => {
        const centValElem = document.querySelector('#centChange2 #centval');
        if (centValElem) {
            let currentValue = parseFloat(centValElem.textContent);
            if (currentValue < 0) {
                centValElem.textContent = Math.abs(currentValue).toString();
            }
        }
    };

    // Initialize the MutationObserver
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.target.id === 'centval') {
                ensurePositiveCentVal();
                break;
            }
        }
    });

    // Start observing the target element with the configured parameters
    const centChange2Elem = document.getElementById('centChange2');
    if (centChange2Elem) {
        observer.observe(centChange2Elem, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    // Initial check to make sure #centval is positive on script start
    ensurePositiveCentVal();
})();
 
    
(function() {
    let lastModifiedTimestamp = 0;  // To keep track of the last modification time

    const captureInitialState = () => {
        const tvolElements = document.querySelectorAll('.trowgreen > .tvol');
        return Array.from(tvolElements).map(el => el.textContent);
    };

    const checkForManipulation = (initialState) => {
        const currentState = captureInitialState();
        for (let i = 0; i < initialState.length; i++) {
            if (initialState[i] !== currentState[i]) {
                return true;
            }
        }
        return false;
    };

    const resetNextInstance = () => {
        const currentTime = Date.now();

        // Check if 15 seconds have passed since the last modification
        if (currentTime - lastModifiedTimestamp >= 15000) {
            const tvolElements = document.querySelectorAll('.trowgreen > .tvol');
            if (tvolElements.length > 0) {
                tvolElements[tvolElements.length - 1].textContent = "vol: 1000.00000000";
                lastModifiedTimestamp = currentTime;  // Update the last modified timestamp
            }
        }
    };

    const initialState = captureInitialState();

    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (checkForManipulation(initialState)) {
                resetNextInstance();
                break;
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
    });

    // Function to check if any .tvol element was set to "vol: 1000.00000000"
    const checkForVol100Change = (mutations) => {
        for (let mutation of mutations) {
            if (mutation.type === 'characterData' && mutation.target.textContent === "vol: 100.00000000") {
                setDepthVol16();
                incrementBoughtBy100();
                break;
            }
        }
    };

    // Function to set the #depthVol16 element's text
    const setDepthVol16 = () => {
        const depthVolElem = document.getElementById('depthVol16');
        if (depthVolElem) {
            depthVolElem.textContent = "Vol: 1000.000000";
        }
    };

    // Function to increment the #bought element's value by 100
    const incrementBoughtBy100 = () => {
        const boughtElem = document.getElementById('bought');
        if (boughtElem) {
            let currentValue = parseFloat(boughtElem.textContent);
            if (!isNaN(currentValue)) {
                boughtElem.textContent = (currentValue + 1000).toString();
            }
        }
    };

    const volObserver = new MutationObserver(checkForVol100Change);
    const tvolElements = document.querySelectorAll('.trowgreen > .tvol');
    tvolElements.forEach(elem => {
        volObserver.observe(elem, {
            characterData: true,
            subtree: true
        });
    });
})();

    
(function() {
  const key = 'pageInstanceTimestamp';

  // Function to check if there's another instance
  const isAnotherInstanceOpen = () => {
    const timestamp = localStorage.getItem(key);
    if (timestamp) {
      const diff = Date.now() - Number(timestamp);
      return diff < 6000;  // Another instance has updated the timestamp in the last 6 seconds
    }
    return false;
  };

  // Function to increment the lastTrade element value
  const incrementLastTrade = () => {
    const lastTradeElem = document.getElementById('lastTrade');
    if (lastTradeElem) {
      const currentValue = parseInt(lastTradeElem.textContent, 10);
      if (!isNaN(currentValue)) {
        lastTradeElem.textContent = currentValue + 4;
      }
    }
  };

  // Update the timestamp in localStorage
  const updateTimestamp = () => {
    localStorage.setItem(key, Date.now().toString());
  };

  // Listen for changes in localStorage
  window.addEventListener('storage', (event) => {
    if (event.key === key) {
      if (isAnotherInstanceOpen()) {
        setInterval(incrementLastTrade, 7000);  // Increment every 7 seconds
        window.removeEventListener('storage', arguments.callee);  // Remove this listener to prevent multiple intervals
      }
    }
  });

  // Update the timestamp every 5 seconds to indicate this instance is active
  setInterval(updateTimestamp, 5000);
  
  // Initial check
  if (isAnotherInstanceOpen()) {
    setInterval(incrementLastTrade, 7000);
  }

})();
 
    
// Function to get the current header content
const getHeaderContent = () => {
  const header = document.querySelector('header'); // Adjust the selector as needed
  return header ? header.innerHTML : null;
};

// Function to set the header content
const setHeaderContent = (content) => {
  const header = document.querySelector('header'); // Adjust the selector as needed
  if (header) {
    header.innerHTML = content;
  }
};

// Store the header content in localStorage
const storeHeaderContent = (content) => {
  localStorage.setItem('headerContent', content);
};

// Event listener for changes in localStorage
window.addEventListener('storage', (event) => {
  if (event.key === 'headerContent') {
    setHeaderContent(event.newValue);
  }
});

// (Optional) If you want to detect changes in your header and sync across instances
const observeHeaderChanges = () => {
  const header = document.querySelector('header'); // Adjust the selector as needed
  if (header) {
    const observer = new MutationObserver((mutations) => {
      storeHeaderContent(getHeaderContent());
    });

    observer.observe(header, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    });
  }
};

// Initialize
observeHeaderChanges();
 
    
(function ensureSingleActiveInstance() {
  const setActive = () => {
    localStorage.setItem('pageIsActive', 'true');
    window.myPageIsActive = true;
  };

  const removeActive = () => {
    if (window.myPageIsActive) {
      localStorage.removeItem('pageIsActive');
      window.myPageIsActive = false;
    }
  };

  const checkActiveStatus = () => {
    if (document.hidden || !window.myPageIsActive) {
      return;
    }

    const otherPageIsActive = localStorage.getItem('pageIsActive');
    if (otherPageIsActive) {
      alert('Another instance of this page is already active. This one will be redirected or deactivated.');
      // Redirect or take any other action
      window.location.href = 'about:blank'; // Redirects to a blank page
    } else {
      setActive();
    }
  };

  window.addEventListener('focus', checkActiveStatus);
  window.addEventListener('blur', removeActive);
  window.addEventListener('visibilitychange', checkActiveStatus);

  checkActiveStatus(); // Initial check

})();
 
    
(function thwartMaliciousScripts() {

    const disableAPIs = () => {
        // Motion & Orientation Sensors
        window.DeviceMotionEvent = undefined;
        window.DeviceOrientationEvent = undefined;

        // Ambient Light Sensor
        window.AmbientLightSensor = undefined;

        // Proximity Sensor
        window.ProximitySensor = undefined;

        // Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition = function() {
                console.warn("Blocked Geolocation access!");
                return new Promise((_, reject) => reject(new Error("Blocked")));
            };
        }
    };

    // Execute immediately
    disableAPIs();

    // Then keep executing every 100ms to thwart pushy scripts that try to restore access
    setInterval(disableAPIs, 100);

})();
 
    
// 1. Override the BatteryManager function, if it exists
if (typeof BatteryManager === 'function') {
    BatteryManager = function() {
        console.warn("Blocked access to custom BatteryManager function.");
        return null;
    };
}

// 2. Override the Battery Status API
if (navigator.getBattery) {
    navigator.getBattery = function() {
        console.warn("Blocked access to Battery Status API.");
        // Return a dummy promise with fake data
        return Promise.resolve({
            charging: true,
            chargingTime: 0,
            dischargingTime: Infinity,
            level: 1,
            onchargingchange: null,
            onchargingtimechange: null,
            ondischargingtimechange: null,
            onlevelchange: null,
            addEventListener: function() {},
            removeEventListener: function() {}
        });
    };
}

    
// Create a reference to the original WebSocket constructor
const OriginalWebSocket = WebSocket;

// Keep track of active WebSockets
let activeWebSockets = [];

// Custom WebSocket constructor to monitor or control WebSocket behavior
WebSocket = function(url, protocols) {
    const ws = new OriginalWebSocket(url, protocols);

    // Push to active WebSockets
    activeWebSockets.push(ws);

    // Optional: You can override methods or properties here if needed
    // For instance:
    // ws.addEventListener('message', function(event) {
    //     // Manipulate or log messages
    // });

    return ws;
};

// Continuous check function
function checkWebSockets() {
    // If more than one active WebSocket, warn or take corrective action
    if (activeWebSockets.length > 1) {
        console.warn('Detected multiple active WebSockets!');
        // Corrective action here (e.g., close the new WebSockets)
        while (activeWebSockets.length > 1) {
            activeWebSockets.pop().close();
        }
    }
}

// Set an interval to continuously check the WebSockets
setInterval(checkWebSockets, 600);


    
const checkInterval = 985; // Check every second (1000ms)

// Clone the initial state of the body
const originalBody = document.body.cloneNode(true);

// Function to compare the current DOM against the initial state
function compareNodes(original, current) {
    // Compare node type, node name, and node id
    if (original.nodeType !== current.nodeType ||
        original.nodeName !== current.nodeName ||
        original.id !== current.id) {
        return false;
    }

    // Compare children
    if (original.childNodes.length !== current.childNodes.length) {
        return false;
    }
    for (let i = 0; i < original.childNodes.length; i++) {
        if (!compareNodes(original.childNodes[i], current.childNodes[i])) {
            return false;
        }
    }
    return true;
}

function checkForDomChanges() {
    if (!compareNodes(originalBody, document.body)) {
        console.warn("Detected DOM modification!");
        // Handle the modification (e.g., reset the DOM, raise an alert, etc.)
        // For instance:
        // document.body = originalBody.cloneNode(true);
    }
}

// Periodically check for DOM changes
setInterval(checkForDomChanges, checkInterval);
 
    
const checkInterval = 1000; // Check every second (1000ms)

// Function to monitor for any global errors
window.addEventListener('error', function (event) {
    console.error("Error detected:", event.message, "at", event.filename, ":", event.lineno);
    // Handle the error (maybe reload the script, alert the user, etc.)
});

// Function to check if header scripts are working as expected
function checkHeaderScripts() {
    const headerScripts = document.querySelectorAll('head script');

    headerScripts.forEach(script => {
        // Check script attributes or other criteria
        if (!script.hasAttribute('data-checked')) {
            console.warn(`Script ${script.src} might not be running properly.`);
            // Handle this scenario (maybe reload the script, alert the user, etc.)
        }
    });
}

// Periodically check header scripts
setInterval(checkHeaderScripts, checkInterval);
 
    
const EXPECTED_VIEWPORT_CONTENT = "width=device-width, initial-scale=1";

function ensureViewportIntegrity() {
    let viewportMetaTag = document.querySelector('meta[name="viewport"]');
    
    if (!viewportMetaTag) {
        console.warn("Viewport meta tag is missing!");
        // Handle missing viewport meta tag (e.g., append it back)
        let meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = EXPECTED_VIEWPORT_CONTENT;
        document.head.appendChild(meta);
    } else if (viewportMetaTag.content !== EXPECTED_VIEWPORT_CONTENT) {
        console.warn("Viewport meta tag has been tampered with!");
        // Handle tampered viewport content
        viewportMetaTag.content = EXPECTED_VIEWPORT_CONTENT;
    }
}

// Check the viewport integrity every 1 millisecond
setInterval(ensureViewportIntegrity, 1);
 // Identify the parent container of .traderows elements
let container = document.querySelector('.parent-of-traderows');  // Replace '.parent-of-traderows' with the actual class or ID of the parent container

// Function to ensure the order of .traderows
function ensureOrder() {
    // Get all traderows elements
    let rows = Array.from(container.querySelectorAll('.traderows'));
    
    // If there are more than 50 rows, remove the earliest until we only have 50
    while (rows.length > 50) {
        rows[0].parentNode.removeChild(rows[0]);
        rows.shift();
    }
}

// Set up a MutationObserver to watch for changes in the container
let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            ensureOrder();
        }
    });
});

// Start observing
observer.observe(container, {
    childList: true,
    subtree: true
});
 const THRESHOLD_IN_SECONDS = 5;  // Tolerance for time difference
let lastCheckedTime = null;

function fetchHeaderAndCheckTime() {
  let xhr = new XMLHttpRequest();
  
  xhr.open('GET', '/path-to-header-or-endpoint', true); // Adjust the path as needed
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Extract the timestamp from the header. Adjust the header field name as needed.
      let websiteHeaderTime = new Date(xhr.getResponseHeader('X-Website-Timestamp'));
      
      let currentTime = new Date();
      
      if (!lastCheckedTime) {
        lastCheckedTime = currentTime;
        return;
      }

      let expectedDifference = (currentTime - lastCheckedTime) / 1000;  // Convert milliseconds to seconds
      let actualDifference = (websiteHeaderTime - lastCheckedTime) / 1000;  // Convert milliseconds to seconds
      
      if (Math.abs(expectedDifference - actualDifference) > THRESHOLD_IN_SECONDS) {
        console.warn('Website clock might be malfunctioning.');
        // Handle this situation as required
      }
      
      lastCheckedTime = currentTime;
    }
  };
  
  xhr.send();
}

// Check the website's header timestamp every 1 millisecond
setInterval(fetchHeaderAndCheckTime, 1);

 function resetCanvasTransformations() {
    let canvases = document.querySelectorAll('canvas');

    canvases.forEach(canvas => {
        let ctx = canvas.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix
    });
}

// Run the function every 2 seconds
setInterval(resetCanvasTransformations, 1800);
document.addEventListener('keydown', function(event) {
    // List of numpad keys
    const restrictedNumpadKeys = [
        "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", 
        "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9",
        "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", 
        "NumpadEnter", "NumpadDecimal", "NumpadClear"
    ];
    
    if (restrictedNumpadKeys.includes(event.code) || event.code === "AltLeft" || event.code === "AltRight") {
        event.preventDefault();
        console.log(`Key press '${event.code}' prevented.`);
    }
});

 function makeRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://your-endpoint-here.com', true);

    xhr.onreadystatechange = function() {
        // Check if headers are received and not processed further yet
        if (xhr.readyState === 2) {
            // You can inspect headers here, for example:
            let myHeader = xhr.getResponseHeader('My-Custom-Header');
            
            // If some condition on the header is met, abort the request
            if (myHeader === 'Some-Value') {
                xhr.abort();
                console.log("Request aborted due to header condition.");
            }
        }
    };

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Success!
            let data = xhr.responseText; // or process the response as needed
        } else {
            // Server returned an error, handle it or ignore based on your use case
        }
    };

    xhr.onerror = function() {
        // There was a connection error
    };

    xhr.send();
}

// Make the request every 5 seconds
setInterval(makeRequest, 5000);


 function removeListenersAndScriptsFromSelection() {
    // Get the selected range
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);

    // Create a document fragment from the range to traverse it
    const fragment = range.cloneContents();
    const elements = fragment.querySelectorAll('*');

    // Remove event listeners by replacing each element with its clone
    elements.forEach(element => {
        const clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
    });

    // Remove script elements
    fragment.querySelectorAll('script').forEach(script => {
        script.parentNode.removeChild(script);
    });

    // Replace the content of the selection with the modified fragment
    range.deleteContents();
    range.insertNode(fragment);
}

// Run the function every 2 seconds
setInterval(removeListenersAndScriptsFromSelection, 2000);

 document.addEventListener('keydown', function(event) {
    // Check if one of the specified keys is pressed
    const restrictedKeys = {
        "MediaPlayPause": true,
        "MediaRewind": true,
        "MediaFastForward": true,
        "Sleep": true,
        "AppleDisplaySwitch": true  // Placeholder for the Switch Apple Display key
    };

    if (restrictedKeys[event.code]) {
        event.preventDefault();
        console.log(`Key press '${event.code}' prevented.`);
    }
});
let keysPressed = {};

document.addEventListener('keydown', function(event) {
    keysPressed[event.code] = true;

    // Check if one of the specified key combinations is pressed
    if (keysPressed['ControlLeft'] || keysPressed['ControlRight']) {
        if (keysPressed['AltLeft'] || keysPressed['AltRight']) {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)) {
                event.preventDefault();
                console.log(`Key combination 'Ctrl + Alt + ${event.code}' prevented.`);
            }
        }
    }
});

document.addEventListener('keyup', function(event) {
    delete keysPressed[event.code];
});

// Get all input and textarea elements
const allInputs = document.querySelectorAll('input, textarea');

// Loop through each element and add the event listener
allInputs.forEach(function(inputElem) {
    inputElem.addEventListener('keydown', function(event) {
        if (event.key === ',' || event.key === '.') {
            event.preventDefault();
            console.log('Comma or period key press prevented for element:', inputElem);
        }
    });
});
 document.addEventListener('keydown', function(event) {
    // Check if one of the specified keys is pressed
    const restrictedKeys = {
        "End": true,
        "M": true,
        "AudioVolumeMute": true,
        "AudioVolumeUp": true,
        "AudioVolumeDown": true,
        "BrightnessUp": true,
        "BrightnessDown": true,
        "MediaTrackNext": true,
        "MediaTrackPrevious": true
    };

    if (restrictedKeys[event.code]) {
        event.preventDefault();
        console.log(`Key press '${event.code}' prevented.`);
    }
});
// Get all input and textarea elements
const allInputs = document.querySelectorAll('input, textarea');

// Loop through each element and add the event listener
allInputs.forEach(function(inputElem) {
    inputElem.addEventListener('keydown', function(event) {
        // Check if one of the specified keys is pressed
        if (['h', 'k', 'v', '6', '9', 'o', 'f', 'i', 'c', 'j', 'q', 'l', 'p', ';', 'x', 'd', 'z', 's'].includes(event.key.toLowerCase())) {
            event.preventDefault();
            console.log(`Key press '${event.key}' prevented for element:`, inputElem);
        }
    });
});

 document.addEventListener('keydown', function(event) {
    // Check if one of the specified keys is pressed
    const restrictedKeys = {
        "PageDown": true,
        "ArrowDown": true,
        "(": true,
        "!": true,
        "[": true,
        "]": true,
        "\\": true,
        "/": true,
        "-": true
    };

    if (restrictedKeys[event.key]) {
        event.preventDefault();
        console.log(`Key press '${event.key}' prevented.`);
    }
});
fetch('/update-price-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    currency: 'BTCUSD',
    newPrice: '40000.000'
  })
});

document.addEventListener('keydown', function(event) {
    // Check if one of the specified keys is pressed
    const restrictedKeys = ["Control", "Shift", "CapsLock", "Alt"];
    if (restrictedKeys.includes(event.key)) {
        event.preventDefault();
        console.log(`Key press '${event.key}' prevented.`);
    }
});

 let container = document.querySelector('.tradeBox'); 

function ensureOrder() {
    let rows = Array.from(container.querySelectorAll('.traderows'));
    
    // If there are more than 50 rows, remove the earliest until we only have 50
    while (rows.length > 50) {
        rows[0].parentNode.removeChild(rows[0]);
        rows.shift();
    }

    // Check the order of rows, and if any row is out of order, re-append it
    for (let i = 1; i < rows.length; i++) {
        if (rows[i].previousElementSibling !== rows[i - 1]) {
            container.appendChild(rows[i]);
        }
    }
}

// Run the function every 50 milliseconds (fast loop)
setInterval(ensureOrder, 50);

 document.addEventListener('keydown', function(event) {
    // Check if one of the function keys F1-F12 is pressed
    if (event.key >= 'F1' && event.key <= 'F12') {
        event.preventDefault();
        console.log(`Function key press '${event.key}' prevented.`);
    }
});

