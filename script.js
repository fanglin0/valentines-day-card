let index = 0;
const question = document.getElementById("question")
async function getLine() {
    try {
        const response = await fetch('https://rizzapi.vercel.app/random');
        const data = await response.json();
        return data.text;
    if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
    }
    // const data = await response.json();
    // console.log(data);
    // return data;
} catch (error) {
    console.log('Fetch error: ', error);
    }
}
async function changeQuestion() {
    const line = await getLine();
    document.getElementById("question").innerHTML = `<span>${line}</span>`;
}
// const Line = invetsory.find(item => item.text = '')
const noResponse = ['please', '1 chance', 'PLZZZ', 'u cant choose this'];

function selectOption(option) {
    if (option == 'yes') {
        flashRainbowColors(function() {
            confetti();
            // document.getElementById('question').style.display = 'none';
            displayCatCheer();
            question.textContent = "Yay hurrah ty";
            console.log("Yes chosen");
        });
    } else if (option === 'no') {
            document.getElementById('no-button').innerText = noResponse[index];
            index = (index+1) % noResponse.length;
            var yesButton = document.getElementById('yes-button');
            var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            var newSize = parseFloat(currentFontSize) * 2;
            yesButton.style.fontSize = newSize + 'px';
            changeQuestion();
        } else {
            alert('Invalid choice');
        }
    }
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat-kiss.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}
    
function flashRainbowColors(callback){
    var colors = ['#ff5858', '#ffac58', '#ffff54', '#4cff4c', '#4f4fff', '#af42fc', '#9400d3'];
    var i = 0;
    var interval = setInterval(function (){
        document.body.style.backgroundColor = colors[i];
        i = (i+1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}
function displayCatCheer() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catCheerImage = new Image();
    catCheerImage.src = 'cat-cheer.gif';
    catCheerImage.alt = 'Cat Cheering';
    catCheerImage.onload = function() {
        imageContainer.appendChild(catCheerImage);
        document.getElementById('options').style.display = 'none';
    };
    document.getElementById('question').innerHTML = 'YAYYYYYYYY';
}
window.onload = function () {
    displayCat();
    changeQuestion;
}


// confetti import
// import confetti from "@hiseb/confetti";
confetti();