let adviceUrl = "https://api.adviceslip.com/advice"
const content = document.querySelector('.content');

async function getAdvice() {
    const adviceFetch = await fetch(adviceUrl);
    const adviceJson = await adviceFetch.json();
    console.log(adviceJson);
    return adviceJson;
}

async function showAdvice() {
    const adviceId = document.querySelector('#advice-id');
    const adviceQuote = document.querySelector('#advice-quote');
    let adviceJson = await getAdvice();
    let adviceIdValue = `ADVICE #${adviceJson.slip.id}`;
    let adviceQuoteValue = adviceJson.slip.advice;
    adviceId.innerText = `${adviceIdValue}`
    adviceQuote.innerText = `“${adviceQuoteValue}”`
    if(screen.width <= 540) {
        const adviceDivider = document.querySelector('#advice-divider');
        adviceDivider.src = './images/pattern-divider-mobile.svg'
    }
    content.style.visibility = 'visible';
}

showAdvice();