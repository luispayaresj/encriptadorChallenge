function encriptar(texto){

    let vocales = ['a', 'e', 'i', 'o', 'u']

    let letras = texto.split("");

    for (let i = 0; i < letras.length; i++) {
        if(vocales.includes(letras[i])){
            switch (letras[i]) {
                case 'a':
                    letras[i] = "ai";
                    break;
                case 'e':
                    letras[i] = "enter";
                    break;
                case 'i':
                    letras[i] = "imes"
                    break;
                case 'o':
                    letras[i] = "ober"
                    break;
                case 'u': 
                    letras[i] = "ufat"
                    break;
                default:
                    break;
            }
        }
        
    }

    let textoEncriptado = letras.join('');

    return textoEncriptado;
}

function desencriptar(texto) {

    let palabras = texto.split(" ");
    console.log(palabras)

    
    for (let i = 0; i < palabras.length; i++) {
        
        
        palabras[i] = palabras[i].replace(/ai/g,'a');

        palabras[i] = palabras[i].replace(/enter/g,'e');

        palabras[i] = palabras[i].replace(/imes/g,'i');

        palabras[i] = palabras[i].replace(/ober/g,'o');

        palabras[i] = palabras[i].replace(/ufat/g,'u');

    }

    let textoDesencriptado = palabras.join(" ");

    return textoDesencriptado;
}

//Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID y agrega un listener para el evento de clic
    document.getElementById('encriptarButton').addEventListener('click', function() {
        // Selecciona el textarea por su ID
        const textArea = document.getElementById('cuadro_texto');
        // Obtiene el valor del textarea
        const text = textArea.value;

        

        // Selecciona el div de salida y actualiza su contenido
        const outputDiv = document.getElementById('texto__procesado');
        outputDiv.value = encriptar(text);;
        document.getElementById("desencriptar_1").style.display = "none";
        document.getElementById("desencriptar_2").style.display = "flex";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID y agrega un listener para el evento de clic
    document.getElementById('desencriptarButton').addEventListener('click', function() {
        // Selecciona el textarea por su ID
        const textArea = document.getElementById('cuadro_texto');
        // Obtiene el valor del textarea
        const text = textArea.value;

        

        // Selecciona el div de salida y actualiza su contenido
        const outputDiv = document.getElementById('texto__procesado');
        outputDiv.value = desencriptar(text);;
        document.getElementById("desencriptar_1").style.display = "none";
        document.getElementById("desencriptar_2").style.display = "flex";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID y agrega un listener para el evento de clic
    document.getElementById('resetButton').addEventListener('click', function() {
        // Selecciona el textarea por su ID
        const textArea = document.getElementById('cuadro_texto');
        
        textArea.value = "";

        document.getElementById("desencriptar_1").style.display = "flex";
        document.getElementById("desencriptar_2").style.display = "none";
    });
});





function copyText() {
    const text = document.getElementById('texto__procesado').value;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}



