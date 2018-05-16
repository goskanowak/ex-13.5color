let OSinfo = require('./modules/OSinfo');
//let calcTime = require('./modules/timeFormat');

process.stdin.setEncoding('utf-8'); 

process.stdin.on('readable', function() {
   let input = process.stdin.read();
    if (!input) return;
        
    let instruction = input.toString().trim();
    switch (instruction) {
        case '\info':
            console.log(process.env);
            break;
        case '\hi':
            process.stdout.write('Hello\n');
            break;
        case '\getOSinfo':
            OSinfo.print();
            break;
        case '\getTime':
            calcTime.print();
            break;
        case '\exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        default:
             process.stderr.write('Wrong instruction!\n');
            break;
    }
}); 

// nasłuchujemy zdarzenie odczytu i wtedy wykonuje funkcje, zmienna z metodą .read() ma za zadanie odczytać co użytkownik podał na wejściu, medtoda if jeżeli wartość jest inna niż null, ma wyświetlić. warunek sprawdza czy komenda podana przez użytkownika jest poprawna. metoda trim - usuwa białe znaki.