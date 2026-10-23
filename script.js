const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", function(){
    alert("SYSTEM INITIALIZED. SECURITY CHECK REQUIRED.");
});




const questions = [
{
        question: "DECODE THE MESSAGE Uifsf jt b tfdsfu",
        hint: "EVERY LETTER HAS BEEN SHIFTED FORWARD BY ONE",
        answer: "there is a secret"
},
{
    question:"A password is hidden in this sequence:2,6,12,20,30,?",
    answer:"42"
},
{
    question:"FINAL SECURITY CHECK: Identify the color the subject wears most frequently.",
    hint:"No hint.👀",
    answer:"white"
}
];

const terminal=document.querySelector(".terminal");
function showQuestion(index) {
    let hint="";
    if (index<2) {
        hint=`
        <button id="hint-btn" onclick="showHint(${index})">REVEAL HINT</button>
        <p id="hint-text"></p>
    `;  
    }
    terminal.innerHTML = `
        <p class="status">● SYSTEM ONLINE</p>
        <p class="classification">CLASSIFIED // RESTRICTED ACCESS</p>
        <h1>SECURITY CHECK <span>${index + 1}/3</span></h1>

        <p>${questions[index].question}</p>
        ${hint}

        <input id="answer" placeholder="ENTER ANSWER">
        <button onclick="checkAnswer(${index})">VERIFY →</button>
        <p id="message"></p>
        <p class="footer">_ UNAUTHORIZED ACCESS PROHIBITED</p>
    `;
}


function showHint(index) {
    document.getElementById("hint-text").textContent =
        "HINT: " + questions[index].hint;
}

function checkAnswer(index) {
    let answer = document.getElementById("answer").value.trim().toLowerCase();

    if (answer === questions[index].answer) {
        if (index === 2) {
            showSecret();
        } else {
            showQuestion(index + 1);
        }
    } else {
        document.getElementById("message").textContent =
            "ACCESS DENIED. TRY AGAIN.";
    }
}




function showSecret(){
    terminal.innerHTML=`
        <p class="status"> ACCESS GRANTED</p>
        <h1>SECRET <span>FILE</span></h1>
        <div class="file">
            <p>STATUS:<span>DECRYPTED</span></p>
            <p>MESSAGE:The truth was hidden in plain sight.</p>
            </div>
            <p class="footer">_END OF TRANSMISSION</p>
    `;
}

document.getElementById("start-btn").onclick= function(){
    alert("Button clicked!");
    showQuestion(0);
};