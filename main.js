 

               function appendToDisplay(value) {
                document.getElementById('display').value += value;
            }
            function clearEntry() {
                var currentValue = document.getElementById('display').value;
                document.getElementById('display').value = currentValue.slice(0, -1);
            }
            function calculatePercentage() {
                var currentValue = document.getElementById('display').value;
                document.getElementById('display').value = eval(currentValue) / 100;
            }
            function clearDisplay() {
                document.getElementById('display').value = '';
            }
            function calculateResult() {
                try {
                    document.getElementById('display').value = eval(document.getElementById('display').value);
                } catch (error) {
                    document.getElementById('display').value = 'Error';
                }
            }
            document.addEventListener('keydown', function (event) {
                const key = event.key;
    
                switch (key) {
                    case 'Enter':
                        calculateResult();
                        break;
                    case 'Backspace':
                        clearEntry();
                        break;
                    case 'c':
                        if (event.ctrlKey) {
                            clearDisplay();
                        }
                        break;
                    case '%':
                        calculatePercentage();
                        break;
                    default:
                        if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
                            appendToDisplay(key);
                        }
                        break;
                }
            });
            document.addEventListener('keydown', function (event) {
                const key = event.key;
                const button = document.querySelector(`.buttons button:contains('${key}')`);
                
                if (button) {
                    button.classList.add('active');
                }
            });
            document.addEventListener('keyup', function () {
                document.querySelectorAll('.buttons button').forEach(function (button) {
                    button.classList.remove('active');
                });
            });
            HTMLElement.prototype.containsText = function (text) {
                return this.innerText.includes(text);
            };               