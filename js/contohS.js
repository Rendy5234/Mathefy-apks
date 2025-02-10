const questions = [
    { 
        question: "<b><nobr>S= suku |</nobr> <nobr>V = variabel |</nobr> <nobr>Koe = koefisien |</nobr> <nobr>Kon = konstanta</nobr></b> \n Tentukan suku, variabel, koefisien, dan konstanta dari <b>9p + 20</b>!", 
        options: ["S = 9p | V = p | Koe = 9 | Kon = 20", "S = 10p | V = p | Koe = 10 | Kon = 20", "S = 9p | V = p | Koe = 9 | Kon = 10", "S = 9 | V = p | Koe = 9 | Kon = 20"], 
        answer: 0,
        explanation: "\nBentuk aljabar = 9p + 20 \n Suku 9p \n Variabel = p \n Koefisien = 9 \n Konstanta =20"
    },
    { 
        question: 
            "<b><nobr>S= suku |</nobr> <nobr>V = variabel |</nobr> <nobr>Koe = koefisien |</nobr> <nobr>Kon = konstanta</nobr></b>" + 
            "\n Tentukan suku, variabel, koefisien, dan konstanta dari <b>2x<sup>2</sup> - 4</b>!", 
        options: [
            "S = 2x<sup>2</sup> | V = x | Koe = 2 | Kon = -4", 
            "S = 2x<sup>2</sup> | V = x<sup>3</sup> | Koe = 2 | Kon = -4", 
            "S = 2x<sup>2</sup> | V = x<sup>2</sup> | Koe = 2 | Kon = -4", 
            "S = 2x | V = x<sup>2</sup> | Koe = 2 | Kon = -4"], 
        answer: 2,
        explanation:
            "\nBentuk aljabar = 2x<sup>2</sup> - 4 " + 
            "\n Suku = 2x<sup>2</sup> " +
            "\n Variabel = x<sup>2</sup> " + 
            "\n Koefisien = 2 " + 
            "\n Konstanta = -4"
    },
    { 
        question: 
            "<b><nobr>S1= suku 1 |</nobr> <nobr>S2= suku 2 |</nobr> <nobr>V1 = variabel 1 |</nobr> <nobr>V2 = variabel 2 |</nobr> <nobr>Koe = koefisien |</nobr> <nobr>Kon = konstanta</nobr></b>" + 
            "\n Tentukan suku, variabel, koefisien, dan konstanta dari <b>3x<sup>2</sup> - 4x + 8</b>!", 
        options: [
            "S1 = -4x | S2 = 3x<sup>2</sup> | V1 = x<sup>2</sup> | V2 = x <br> Koe_x<sup>2</sup> = 3 | Koe_x = -4 | Kon = 8", 
            "S1 = 4x | S2 = 3x<sup>2</sup> | V1 = x<sup></sup> | V2 = x<sup>2</sup> <br> Koe_x<sup>2</sup> = 3 | Koe_x = 4 | Kon = 8", 
            "S1 = -4x | S2 = 3x<sup>2</sup> | V1 = x<sup></sup> | V2 = x <br> Koe_x<sup>2</sup> = 3 | Koe_x = -4 | Kon = -8", 
            "S1 = 4x | S2 = 3x<sup>2</sup> | V1 = x<sup>2</sup> | V2 = x <br> Koe_x<sup>2</sup> = 3 | Koe_x = 4 | Kon = 8"], 
        answer: 0,
        explanation:
            "\nBentuk aljabar = 3x<sup>2</sup> - 4x + 8" + 
            "\n Suku 1 = 3x<sup>2</sup> " +
            "\n Suku 2 = -4x" +
            "\n Variabel 1 = x<sup>2</sup> " +
            "\n Variabel 2 = x" +  
            "\n Koefisien x<sup>2</sup> = 3 " +
            "\n Koefisien x = -4 " + 
            "\n Konstanta = 8"
    },
    { 
        question: 
            "<b><nobr>S1= suku 1 |</nobr> <nobr>S2= suku 2 |</nobr> <nobr>V1 = variabel 1 |</nobr> <nobr>V2 = variabel 2 |</nobr> <nobr>Koe = koefisien |</nobr> <nobr>Kon = konstanta</nobr></b>" + 
            "\n Tentukan suku, variabel, koefisien, dan konstanta dari <b>4a - ac</b>!", 
        options: [
            "S1 = 4 | S2 = ac | V1 = 4a | V2 = ac <br> Koe_a = -4 | Koe_ac = -1 | Kon = 0", 
            "S1 = 4a | S2 = -ac | V1 = a | V2 = ac <br> Koe_a = 4 | Koe_ac = -1 | Kon = 0", 
            "S1 = 4a | S2 = ac | V1 = 4a | V2 = a <br> Koe_a = -4 | Koe_ac = 1 | Kon = 0", 
            "S1 = 4 | S2 = -ac | V1 = a | V2 = a <br> Koe_a = 4 | Koe_ac = -1 | Kon = 0"], 
        answer: 1,
        explanation:
            "\nBentuk aljabar = 4a - ac" + 
            "\n Suku 1 = 4a " +
            "\n Suku 2 = -ac" +
            "\n Variabel 1 = a " +
            "\n Variabel 2 = ac" +  
            "\n Koefisien a = 4 " +
            "\n Koefisien ac = -1 " + 
            "\n Konstanta = 0"
    },
    { 
        question: 
            "<b><nobr>S1= suku 1 |</nobr> <nobr>S2= suku 2 |</nobr> <nobr>V1 = variabel 1 |</nobr> <nobr>V2 = variabel 2 |</nobr> <nobr>Koe = koefisien |</nobr> <nobr>Kon = konstanta</nobr></b>" + 
            "\n Tentukan suku, variabel, koefisien, dan konstanta dari <b>5y<sup>2</sup> + 5xy - 5</b>!", 
        options: [
            "S1 = 5<sup>2</sup> | S2 = 5 | V1 = y<sup>2</sup> | V2 = 5xy <br> Koe_y<sup>2</sup> = 5 | Koe_xy = 5 | Kon = -5", 
            "S1 = 5y<sup>2</sup> | S2 = 5y | V1 = 5y<sup>2</sup> | V2 = xy <br> Koe_y<sup>2</sup> = 0 | Koe_xy = 5 | Kon = -5", 
            "S1 = 5xy<sup>2</sup> | S2 = 5xy | V1 = y<sup>2</sup> | V2 = xy <br> Koe_y<sup>2</sup> = 5 | Koe_xy = 0 | Kon = -5", 
            "S1 = 5y<sup>2</sup> | S2 = 5xy | V1 = 5y<sup>2</sup> | V2 = 5xy <br> Koe_y<sup>2</sup> = 5 | Koe_xy = 5 | Kon = -5"], 
        answer: 3,
        explanation:
            "\nBentuk aljabar = 3x<sup>2</sup> - 4x + 8" + 
            "\n Suku 1 = 3x<sup>2</sup> " +
            "\n Suku 2 = -4x" +
            "\n Variabel 1 = x<sup>2</sup> " +
            "\n Variabel 2 = x" +  
            "\n Koefisien x<sup>2</sup> = 3 " +
            "\n Koefisien x = -4 " + 
            "\n Konstanta = 8"
    },
    { 
        question: 
            "Anto sudah memiliki pensil sebanyak 5 buah. Satu minggu kemudian Anto dibelikan Ayahnya pensil lagi sebanyak 5 pak pensil. Nyatakan banyak seluruh pensil Anto dalam bentuk Aljabar!", 
        options: [
            "5 - 5a", 
            "5a + 5", 
            "5a + 5a", 
            "5a - 5"], 
        answer: 1,
        explanation:
            "\nPembahasan: " + 
            "\n Mula mula pensil Anto = 5 " +
            "\n Misalkan satu pak pensil adalah a, maka 5 pak pensil = 5 kali a" +
            "\n Banyak pensil anto seluruhnya = ( 5 x a ) + 5 =" +
            "\n = 5a +5"
    },
    { 
        question: 
            "Andi membeli 7 pot bunga. Jika setiap satu pot harganya sama yaitu m rupiah. Maka nyatakan uang yang harus dibayarkan Andi dalam bentuk aljabar!", 
        options: [
            "-7m", 
            "7", 
            "-7", 
            "7m"], 
        answer: 3,
        explanation:
            "\nPembahasan: " + 
            "\n Mula mula Andi membeli 7 pot " +
            "\n Misalkan harga setiap 1 pot adalah m, maka " +
            "\n Total uang yang harus dibayar Andi = 7 x m = 7m"
    },
    { 
        question: 
            "Suatu persegi panjang, panjangnya 6 cm lebih lebar. Jika lebar persegi panjang dinyatakan dalam z cm, maka tentukan bentuk aljavar yang menyatakan keliling persegi panjang tersebut!", 
        options: [
            "4z + 12", 
            "4z - 12", 
            "z + 12", 
            "4 - 12"], 
        answer: 0,
        explanation:
            "\nPembahasan: " + 
            "\n Panjang persegi panjang = 6cm lebih panjang dari lebar" +
            "\n Lebar persegi panjang = z cm " +
            "\n Jika panjang= z + 6 cm" +
            "\n Maka keliling persegi panjang = 2 x ( p + l )" +
            "\n = 2 x (( z + 6 ) + z )"  +
            "\n 2 x ( z + 6 + z)" +
            "\n 2 x ( 2z + 6)" +
            "\n ( 2 x 2z) + (2 x 6)" +
            "\n 4z + 12"
    },
    { 
        question: 
            "Harga satu buah buku adalah Rp5.000,00 dan harga satu buah pensil adalah Rp2000,00. Jika Ana membeli x buku dan y pensil maka tentukan total pembelian Ana dalam bentuk aljabar!", 
        options: [
            "Rp2.000,00x + Rp5.000,00y", 
            "Rp5.000,00x + Rp2.000,00y", 
            "Rp5.000,00x + Rp5.000,00y", 
            "Rp2.000,00x + Rp2.000,00y"], 
        answer: 1,
        explanation:
            "\nPembahasan: " + 
            "\n Harga 1 buah buku = Rp5.000,00" +
            "\n Harga 1 buah pensil = Rp2.000,00" +
            "\n Jika Ana membeli x buku dan y pensil, maka:"+
            "\n Total pembelian = ( x buku x Rp5.000,00 ) + ( y buku x Rp2.000,00)"+
            "\n = Rp5.000,00x + Rp2.000,00y"
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari 7a + 9 + 6b + 8!", 
        options: [
            "7a + b + 17", 
            "7 + 6b + 10", 
            "7a + b + 7", 
            "7a + 6b + 17"], 
        answer: 3,
        explanation:
            "\nPembahasan: " + 
            "\n 7a + 9 + 6b + 8 " +
            "\n = 7a + 6b + ( 8 + 9) " +
            "\n = 7a + 6b + 17"
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari 5ab + a - 5 + 6ab -6!", 
        options: [
            "11a + 11ab + 11", 
            "a + 11ab - 11", 
            "11a + ab - 11", 
            "a + 11ab + 11"], 
        answer: 1,
        explanation:
            "\nPembahasan: " + 
            "\n 5ab + a - 5 + 6ab -6 " +
            "\n = a + ( 5ab + 6ab ) + ( -5 - 6 ) " +
            "\n = a + 11ab - 11"
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari 4x<sup>2</sup> + 8x - 12 + 2y + 9!", 
        options: [
            "4x<sup>2</sup> + 8x + 2y -3", 
            "4x + 8x - 2y -3", 
            "4x<sup>2</sup> + x + 2y -3", 
            "4x + 8x + 2y -3"], 
        answer: 0,
        explanation:
            "\nPembahasan: " + 
            "\n 4x<sup>2</sup> + 8x - 12 + 2y + 9 " +
            "\n = 4x<sup>2</sup> + 8x + 2y + (( -12 ) + 9) " +
            "\n = 4x<sup>2</sup> + 8x + 2y + (-3) " +
            "\n = 4x<sup>2</sup> + 8x + 2y -3 "
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari 7a x 4ab + 4b x 6!", 
        options: [
            "28a<sup>2</sup> + 24b", 
            "28ab + 24b", 
            "28<sup>2</sup>b + 24b", 
            "28a<sup>2</sup>b + 24b"], 
        answer: 3 ,
        explanation:
            "\nPembahasan: " + 
            "\n 7a x 4ab + 4b x 6 " +
            "\n = ( 7a x 4ab ) + ( 4b x 6 ) " +
            "\n = (( 7 x 4 )( a x ab )) + (( 4 x 6 )( b )) " +
            "\n = ( ( 28 )( a<sup>2</sup>b ) ) + (( 24 )( b )) " +
            "\n = 28a<sup>2</sup>b + 24b "
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari a x 9 + 5b - 2 x b!", 
        options: [
            "9a - 3b", 
            "9a + 3", 
            "9a + 3b", 
            "9 + 3b"], 
        answer: 2,
        explanation:
            "\nPembahasan: " + 
            "\n a x 9 + 5b - 2 x b " +
            "\n = ( a x 9) + 5b + (( -2 ) x b ) " +
            "\n = 9a + 5b + ( -2b ) " +
            "\n = 9a + ( 5b - 2b ) " +
            "\n = 9a + 3b "
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari 4( 7y + 4 ) + 6z!", 
        options: [
            "28y + 6z + 16", 
            "28 + 6z + 16", 
            "28y + 6z + 6", 
            "28y + 6 + 16"], 
        answer: 0,
        explanation:
            "\nPembahasan: " + 
            "\n 4( 7y + 4 ) + 6z " +
            "\n = ( 4( 7y + 4 )) + 6z " +
            "\n = (( 4 x 7y ) + ( 4 x 4 )) + 6z " +
            "\n = 28y + 16 + 6z " +
            "\n = 28y + 6z +16 "
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari 4x( 3x + 4 ) - 5y!", 
        options: [
            "12x<sup>2</sup> + 16x - 5y", 
            "12x + 16x - 5y", 
            "12x<sup>2</sup> + 6x - 5y", 
            "12x + 16x - 5y"], 
        answer: 0,
        explanation:
            "\nPembahasan: " + 
            "\n 4x( 3x + 4 ) - 5y " +
            "\n = ( 4x( 3x + 4 )) - 5y " +
            "\n = (( 4x X 3x ) + ( 4x X 4)) - 5y " +
            "\n = 12x<sup>2</sup> + 16x - 5y"
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari ( -12m ) : ( -4 ) + 5m!", 
        options: [
            "-8m", 
            "8", 
            "8m", 
            "-8"], 
        answer: 2,
        explanation:
            "\nPembahasan: " + 
            "\n ( -12m ) : ( -4 ) + 5m " +
            "\n = (( -12m ) : ( -4 )) + 5m " +
            "\n = <sup>-12m</sup>/<sub>-4</sub> + 5m " +
            "\n = 3m + 5m " +
            "\n = 8m"
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari ( 10c + 5c ) : 3 + 5c x 5!", 
        options: [
            "-30", 
            "-30c", 
            "30", 
            "30c"], 
        answer: 3,
        explanation:
            "\nPembahasan: " + 
            "\n ( 10c + 5c ) : 3 + 5c x 5 " +
            "\n = ( 10c + 5c ) : 3 + ( 5c x 5 ) " +
            "\n = (( 15c ) : 3 ) + 25c " +
            "\n = 5c + 25c" +
            "\n = 30c"
    },
    { 
        question: 
            "Sederhanakan bentuk aljabar dari ( 4t<sup>2</sup> x 2 ) + 10 - 15u : 5!", 
        options: [
            "8t<sup>2</sup> - 3u + 10", 
            "8t - 3u + 10", 
            "8<sup>2</sup> - 3u + 10", 
            "8t<sup>2</sup> + 3u + 10"], 
        answer: 0,
        explanation:
            "\nPembahasan: " + 
            "\n ( 4t<sup>2</sup> x 2 ) + 10 - 15u : 5 " +
            "\n = ( 4t<sup>2</sup> x 2 ) + 10 + ( -15u : 5 ) " +
            "\n = 8t<sup>2</sup> + 10 <sup>-15u</sup>/<sub>5</sub> " +
            "\n = 8t<sup>2</sup> + 10 + ( -3u )" +
            "\n = 8t<sup>2</sup - 3u + 10"
    },
    { 
        question: 
            "Sebuah taman berbentuk segitiga mempunyai panjang sisi <norb>( 2x<sup>2</sup> + 4 )m</norb>, <norb>( 4x - 2 )m</norb> dan <norb>( 3x<sup>2</sup> + 3 )m.</norb> Hitunglah keliling taman segitiga tersebut!", 
        options: [
            "( 5x<sup>2</sup> + x + 5 )cm", 
            "( 5x<sup>2</sup> + 4x + 5 )cm", 
            "( 5x + 4x + 5 )cm", 
            "( x<sup>2</sup> + 4x + 5 )cm"], 
        answer: 1,
        explanation:
            "\nPembahasan: " + 
            "\n Panjang sisi 1 = ( 2x<sup>2</sup> + 4 )cm" +
            "\n Panjang sisi 2 = ( 4x - 2 )cm " +
            "\n Panjang sisi 3 = ( 3x<sup>2</sup> + 3 )cm" +
            "\n Keliling taman = panjang sisi 1 + panjang sisi 2 + panjang sisi 3 " +
            "\n = ( 2x<sup>2</sup> + 4 ) + ( 4x - 2 ) + ( 3x<sup>2</sup> + 3 )" +
            "\n = ( 2x<sup>2</sup> + 3x<sup>2</sup> ) + ( 4x ) + ( 3 + 4 - 2 )" +
            "\n = ( 5x<sup>2</sup> + 4x + 5 )cm"
    },
    { 
        question: 
            "Sebuah persegi memiliki panjang sisi ( 5p + 6 )cm. Tentukan panjang keliling tersebut!", 
        options: [
            "( 24p + 20 )cm", 
            "( 20p - 24 )cm", 
            "( 24p - 20 )cm", 
            "( 20p + 24 )cm"], 
        answer: 3,
        explanation:
            "\nPembahasan: " + 
            "\n Panjang sisi ( 5p + 6 )cm" +
            "\n Keliling persegi = 4 x sisi " +
            "\n = 4 x ( 5p + 6 ) " +
            "\n = ( 4 x 5p ) + ( 4 x 6 ) " +
            "\n = ( 20p + 24 )cm"
    },
    { 
        question: 
            "Sebidang tanah memiliki panjang ( x + 6 )m dan lebar ( x - 2)m. Tentukan luas sebidang tanah tersebut!", 
        options: [
            "x<sup>2</sup> + 4x - 12 m<sup>2</sup>", 
            "x + 4x + 12 m<sup>2</sup>", 
            "x<sup>2</sup> + 4x + 12 m<sup>2</sup>", 
            "x + 4x - 12 m<sup>2</sup>"], 
        answer: 0,
        explanation:
            "\nPembahasan: " + 
            "\n Panjang = ( x + 6 )m" +
            "\n Lebar = ( x - 2 )m " +
            "\n Luas sebidang tanah = panjang x lebar  " +
            "\n = ( x + 6 ) x ( x - 2 ) " +
            "\n = x<sup>2</sup> - 2x + 6x -12 " +
            "\n = x<sup>2</sup> + 4x - 12 m<sup>2</sup>"
    },
    { 
        question: 
            "Pak Agus akan memasang keramik berbentuk persegi panjang di ruang tamu dan ruang tidur. Ukuran keramik yang dipasang di ruang tamu dan ruang tidur berbeda. Panjang keramik di ruang tamu dua kali panjang keramik di ruang tidur. Sedangkan lebar keramik di ruang tamu 5 cm kurangnya denganpanjang keramik  ruang tidur. Tentukan luas keramik di ruang tamu Pak Agus!", 
        options: [
            "2x - 10x m<sup>2</sup>", 
            "2x<sup>2</sup> - 10 m<sup>2</sup>", 
            "2x<sup>2</sup> + 10x m<sup>2</sup>", 
            "2x<sup>2</sup> - 10x m<sup>2</sup>"], 
        answer: 3,
        explanation:
            "\nPembahasan: " + 
            "\n Panjang keramik ruang tidur = x" +
            "\n LPanjang keramik ruang tamu = 2 x panjang keramik ruang tidur " +
            "\n = 2 X x " +
            "\n = 2x " +
            "\n Lebar keramik ruang tamu = panjnang keramik ruang tidur - 5cm " +
            "\n = x - 5 " +
            "\n Luas keramik ruang tamu = panjnag x lebar " +
            "\n = 2x X ( x - 5 ) " +
            "\n = ( 2x X x) + ( 2x X ( -5 )) " +
            "\n = 2x<sup>2</sup> - 10x m<sup>2</sup>"
    },
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function shuffleArray(array) {
    return array.map(value => ({ value, sort: Math.random() })) 
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
}

function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    if (shuffledQuestions.length === 0) {
        shuffleQuestions();
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    // Perbarui tampilan nomor pertanyaan
    document.getElementById("questionNumber").textContent = 
        `Pertanyaan ${currentQuestionIndex + 1} dari ${shuffledQuestions.length}`;

    // Acak urutan opsi jawaban
    let originalOptions = [...currentQuestion.options];
    let shuffledOptions = shuffleArray(originalOptions);

    // Tentukan indeks baru dari jawaban yang benar setelah pengacakan
    let newCorrectIndex = shuffledOptions.indexOf(originalOptions[currentQuestion.answer]);

    document.getElementById("question").innerHTML = currentQuestion.question.replace(/\n/g, "<br>");

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-secondary", "w-100", "my-1", "fw-bold");
        button.innerHTML = option;
        button.onclick = () => checkAnswer(index, newCorrectIndex, button);

        optionsDiv.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("nextButton").classList.add("d-none");
}

function checkAnswer(selectedIndex, correctIndex, button) {
    const feedback = document.getElementById("feedback");
    const optionButtons = document.querySelectorAll("#options button");

    // Nonaktifkan semua tombol
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove("btn-secondary");

        if (idx === correctIndex) {
            btn.classList.add("btn-success"); // Jawaban benar hijau
        } else if (idx === selectedIndex) {
            btn.classList.add("btn-danger"); // Jawaban salah merah
        }
    });

    // Tampilkan feedback dan hitung skor
    if (selectedIndex === correctIndex) {
        feedback.textContent = "Benar!";
        feedback.className = "correct";
        correctAnswers++;
    } else {
        feedback.innerHTML = `Salah! Jawaban yang benar adalah: <strong>${optionButtons[correctIndex].innerHTML}</strong>`;
        feedback.className = "incorrect";
        wrongAnswers++;
    }

    // Tampilkan tombol "Next"
    document.getElementById("nextButton").classList.remove("d-none");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("questionNumber").textContent = "Kuis Selesai!";
        document.getElementById("question").textContent = "Hasil Kuis:";
        document.getElementById("options").innerHTML = 
            `<p>Jawaban Benar: ${correctAnswers}</p>
             <p>Jawaban Salah: ${wrongAnswers}</p>`;
        document.getElementById("feedback").textContent = "";
        document.getElementById("nextButton").style.display = "none";
    }
}

// Mulai kuis dengan mengacak pertanyaan
shuffleQuestions();
loadQuestion();



