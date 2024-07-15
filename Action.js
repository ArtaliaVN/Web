let guessEmail;
let guessName;
let guessFaName;
let contentEmail;
let textFile = "text.json";

function popUp(string){
    document.getElementById(string).style.visibility = "visible";
}

function exitPopUp(string){
    document.getElementById(string).style.visibility = "hidden";
}

function openGit(){
    window.open("https://github.com/ArtaliaVN")
}

function downloadCV(){
    switch(localStorage.getItem("lang")){
        case "Vietnamese":
            window.open("image/NguyenMinhThong_CV_VN.pdf"); 
            break;
        case "English":
            window.open("image/NguyenMinhThong_CV_ENG.pdf"); 
            break;
    }
}

function changeLanguage(index){
    switch(index){
        case 1:
            localStorage.setItem("lang", "English")
            break;
        case 2:
            localStorage.setItem("lang", "Vietnamese")
            break;
    }
    setLanguage();
}

function getLanguage(){
    switch(localStorage.getItem("lang")){
        case "Vietnamese":
            return 1;
        case "English":
            return 0;
        default:
            localStorage.setItem("lang", "English")
            return 0;
    }
}

async function fetching(url){
    try{
        const response = await fetch(url);
        if(!response.ok)
            throw new error("Failed");
        const data = await response.json();
        const result = data;
        return result;
    }
    catch(error){
        console.log(error);
    }   
}


function setLanguage(){
    let response = fetching("text.json");
    response.then(function(data){
        document.getElementById("Index").innerText = data.language[0][getLanguage()];
        document.getElementById("About me").innerText = data.language[1][getLanguage()];
        document.getElementById("Achievement").innerText = data.language[2][getLanguage()];
        document.getElementById("Language").innerText = data.language[3][getLanguage()];
        document.getElementById("Control").innerText = data.language[4][getLanguage()];
        document.getElementById("GOODDAY").innerText = data.language[5][getLanguage()];
        document.getElementById("name").innerText = data.language[6][getLanguage()];
        document.getElementById("jobIntro").innerText = data.language[7][getLanguage()];
        document.getElementById("BtnContact").innerText = data.language[8][getLanguage()];
    })
}

function sendEmail() {
    Email.send({
        Host: "Mthong10E@gmail.com",
        Username: "sender@email_address.com",
        Password: "mkGMcNMT",
        To: 'ThongNguyen.Contacts@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}

setLanguage();