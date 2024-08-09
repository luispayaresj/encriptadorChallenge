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



