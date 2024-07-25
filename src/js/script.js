const buttonDice = document.querySelector(".advice-update");
const numberId = document.querySelector(".advice-id");
const descriptionDice = document.querySelector(".advice-description");

async function getAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const adviceContent = await response.json();
        const adviceId = `Advice #${adviceContent.slip.id}`;
        const adviceText = `"${adviceContent.slip.advice}"`;

        numberId.innerText = adviceId;
        descriptionDice.innerText = adviceText;

    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }

}

buttonDice.addEventListener("click", getAdvice);

getAdvice();
