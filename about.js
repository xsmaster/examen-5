document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn2');

    btn.addEventListener('click', () => {
        const question = prompt('Savol yozing va savolingizda a) b) d) variantlar bolishi shart', '');

        if (question !== null && question.trim() !== '') {
            const answer = document.createElement('p');
            answer.textContent = `sizning javobingiz: ${question}`;
            document.body.appendChild(answer)

            answer.style.textAlign = "center"
            answer.style.fontSize = "30px"
        }
    });
});