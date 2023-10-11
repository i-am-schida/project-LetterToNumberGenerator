function convertText() {
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");

  if (inputText) {
      const convertedText = inputText.replace(/(stfu|of)|[esaoif]/gi, function(match, stfu) {
          if (stfu) {
              return stfu; // Preserve 'stfu' and 'of' if matched
          } else {
              switch (match.toLowerCase()) {
                  case 'e':
                      return '3';
                  case 'a':
                      return '4';
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
      }).replace(/B/g, '8'); // Convert all uppercase 'B' to '8'

      outputText.textContent = convertedText;
  } else {
      outputText.textContent = "";
  }
}
