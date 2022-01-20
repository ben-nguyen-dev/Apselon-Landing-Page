function showHideWork() {
    let btn = document.getElementById("see-more");
    let moreWork = document.getElementById("portfolio-second-half");

    if (moreWork.classList.contains("hide-half")) {
        moreWork.classList.remove("hide-half");
        btn.innerHTML = "See less work";
    }
    else {
        moreWork.classList.add("hide-half");
        btn.innerHTML = "See more work";
    }
}

function showHideFAQ(id) {
    let faq1  = document.getElementById("faq1");
    let q1 = faq1.querySelector('.answer-area');
    let faq2  = document.getElementById("faq2");
    let faq3  = document.getElementById("faq3");
    let faq4  = document.getElementById("faq4");
    let faq5  = document.getElementById("faq5");
    let faq6  = document.getElementById("faq6");

    let question = document.getElementById(id);
    let answer = question.querySelector('.answer-area');

    if (answer.classList.contains("collapsed")) {
        answer.classList.remove("collapsed");
    }
    else {
        answer.classList.add("collapsed");
    }
}