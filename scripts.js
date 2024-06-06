function addComment() {
    // Obtener valores del formulario
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Crear un nuevo elemento para el comentario
    const commentElement = document.createElement("div");
    commentElement.className = "user-comment";

    const nameElement = document.createElement("h4");
    nameElement.textContent = name;

    const commentText = document.createElement("p");
    commentText.textContent = comment;

    commentElement.appendChild(nameElement);
    commentElement.appendChild(commentText);

    // Agregar el nuevo comentario a la sección de comentarios
    const commentSection = document.getElementById("commentSection");
    commentSection.appendChild(commentElement);

    // Limpiar el formulario después de enviar el comentario
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";

    // Evitar que el formulario se envíe de manera tradicional
    return false;

    function toggleRecipe(recipeId) {
        var recipeContent = document.getElementById(recipeId);
        if (recipeContent.style.display === "none") {
            recipeContent.style.display = "block";
        } else {
            recipeContent.style.display = "none";
        }
    }
}

