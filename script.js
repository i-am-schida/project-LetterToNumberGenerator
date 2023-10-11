function adjustHeight(elementId) {
  const element = document.getElementById(elementId);
  element.style.height = "165px";
  element.style.height = element.scrollHeight + "px"; // Set the height to the scroll height
}

function convertText() {
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");

  if (inputText) {
    const convertedText = inputText.replace(/(tfu|of)|[esaoifb]/gi, function(match, tfu) {
      if (tfu) {
        return tfu; // Preserve 'tfu' and 'of' if matched
      } else {
        switch (match.toLowerCase()) {
          case 'e':
            return '3';
          case 'a':
            return '4';
          case 'b':
            return '8';
          case 'o':
            return '0';
          case 'f':
            return match === 'F' ? 'PH' : 'ph';
          case 'i':
            return '!';
          case 's':
            return Math.random() < 0.5 ? '$' : '5'; // Randomly choose '$' or '5' for 's'
          default:
            return match;
        }
      }
    });

    outputText.value = convertedText; // Set the value for textarea
    adjustHeight('outputText'); // Update the output textarea's height
  } else {
    outputText.value = "";
    adjustHeight('outputText'); // Update the output textarea's height when it's empty
  }
}

function clearText(elementId) { // Clear button
  const element = document.getElementById(elementId);
  element.value = "";
  adjustHeight(elementId);
}

function copyText(elementId) { // Copy button
  const element = document.getElementById(elementId);
  const textToCopy = element.value;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy)
      .then(function () {
        // Text is successfully copied to clipboard, no alert needed
      })
      .catch(function (err) {
        console.error('Copy to clipboard failed:', err);
        // Optionally, you can log an error message to the console
      });
  }
}