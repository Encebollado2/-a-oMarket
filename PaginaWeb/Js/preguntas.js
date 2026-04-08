document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.question__padding');

    questions.forEach(question => {
        question.addEventListener('click', () => {

            // Cierra las que no son esta
            questions.forEach(q => {
                if (q !== question) q.classList.remove('active');
            });

            // Toggle de la actual
            question.classList.toggle('active');
        });
    });
});
