const screen = document.getElementById('screen');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.target.innerText;

        switch (btnText) {
            case '=':
                try {
                    screen.value = eval(screen.value);
                } catch (error) {
                    screen.value = 'Error';
                }
                break;
            case 'AC':
                screen.value = '';
                break;
            case 'sin':
                screen.value = Math.sin(parseFloat(screen.value));
                break;
            case 'tan':
                screen.value = Math.tan(parseFloat(screen.value));
                break;
            case 'cos':
                screen.value = Math.cos(parseFloat(screen.value));
                break;
            case 'log':
                screen.value = Math.log(parseFloat(screen.value));
                break;
            case 'pi':
                screen.value = 3.14159265359;
                break;
            case 'e':
                screen.value = 2.718281828459045;
                break;
            case 'root':
                screen.value = Math.sqrt(screen.value);
                break;
            case 'x^y':
                screen.value += '^';
                break;
            case 'CE':
                screen.value = screen.value.slice(0, -1);
                break;
            case 'fact':
                var i, num, f;
                num = parseInt(screen.value);
                f = 1;
                for (i = 1; i <= num; i++) {
                    f *= i;
                }
                screen.value = f;
                break;
            default:
                screen.value += btnText;
                break;
        }
    });
});
