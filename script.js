// Adivinanza
const question = "¿Cuál es el animal que tiene más de 4 patas pero no camina?";
const correctAnswer = "mesa"; // La respuesta correcta

function checkAnswer() {
    // Obtener la respuesta del usuario
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();

    // Verificar si la respuesta es correcta
    const result = document.getElementById("result");
    if (userAnswer === correctAnswer) {
        result.textContent = "¡Correcto! ¡Bien hecho!";
        result.style.color = "green";
    } else {
        result.textContent = "Intenta de nuevo. La respuesta es incorrecta.";
        result.style.color = "red";
    }
}