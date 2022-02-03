let TweetText = document.querySelector(".tweet");
let packet = document.querySelector(".packet");
let items;



addEventListener();


function packetinside(){
    packet.innerHTML=`
    <div class="packetcss">
    <div class="packetJS">
        <img src="icons/Adsız-2.png">
            <p class="world">Everyone can reply</p>
            </div>
            </div>
    <hr class="line">
    `;
}


function addEventListener() {

    TweetText.addEventListener("click",function()
    {
    packetinside();
    packet.style.display="flex";

    });


    TweetText.addEventListener("input",function()
    {
        TweetText.style.height=`${TweetText.scrollHeight}px`;
        TweetText.style.height="30px";
        this.style.height=` ${ this.scrollHeight}px` ; 
        progressiveFunction();
        TweetText.style.transition="none";
    });
    
    
}




//  PROGRESSİVE BAR
let circlegray = document.querySelector("#circleone");
let circleBlue = document.querySelector("#circletwo");
let numbertext=document.querySelector(".number-text");
let box = document.querySelector(".box");
let progressiveBar  = document.querySelector(".progressive-bar");
let tweetButton = document.querySelector("#tweet-button");

let up;
let kalantweet;

progressiveBar.style.display="none";
tweetButton.style.opacity=".4";
tweetButton.style.cursor="auto";


function progressiveFunction (){

// controller

    let MaxTweet=280;
    
    up = TweetText.value.length;
    
    circleBlue.style.cssText=` stroke-dashoffset: calc(440px - (840px * ${up} ) / 4718 )`;
    
    kalantweet = MaxTweet - up;


// progresive bar css style

if(kalantweet<=20){
    numbertext.textContent= kalantweet;
}

if(kalantweet<=20 && kalantweet>=1){   
    box.style.transform="scale(1.6)";
    circleBlue.style.stroke= "#C9A90A";
}
else if (kalantweet<=-10){
    circlegray.style.stroke="none";
    circleBlue.style.stroke= "none";
}
else if (kalantweet<=0) {
    circleBlue.style.stroke= "#DA222E";
    numbertext.style.color="#DA222E";   
}

else {
numbertext.textContent="";
box.style.transform="";
circlegray.style.stroke="#333";
}

// show - hidden progressive bar 

if(up>=1) {
progressiveBar.style.display="flex";
tweetButton.style.opacity="1";

}
else {
progressiveBar.style.display="none";
tweetButton.style.opacity=".4";
}


if (kalantweet<0 || kalantweet==280){
tweetButton.style.cursor="auto";
tweetButton.style.opacity=".4";
}
else{
    tweetButton.style.cursor="pointer";
}
console.log(up);
console.log(TweetText.value);
}








let last = document.querySelector(".last");
let footer = document.querySelector(".footer");

tweetButton.addEventListener("click",add);

loadItems();
function add(){

    if(kalantweet>=0 && kalantweet<280){

        createItem(TweetText.value);
        setItemtoLS(TweetText.value);
        kalantweet=0;
        console.log(TweetText.value);

        TweetText.value="";
        TweetText.style.height="30px";
        tweetButton.style.opacity=".4";
        tweetButton.style.cursor="auto";
        console.log(last);
        TweetText.style.transition="all .5s ease";
        packet.style.display="none";
        footer.style.opacity="0";

        setTimeout(function(){
            progressiveBar.style.display="none";
            footer.style.display="none";
            
        },1000);
        setTimeout(function(){
            footer.style.opacity="1";
            footer.style.display="flex";
        },1000);

    }



}








function loadItems(){
    items = getItemsFromLS();
    items.forEach(function(item) {
       
        createItem(item);
    })
}

function getItemsFromLS(){

    if(localStorage.getItem("items")===null) {
        items=[];
    }
    else {

        items=JSON.parse(localStorage.getItem("items"));
    }
    return items;
}


function setItemtoLS(text){

items = getItemsFromLS();
items.push(text);
localStorage.setItem("items",JSON.stringify(items));
}



function createItem(text){
    let out = document.createElement("div");
    out.classList.add("output");
    
    out.innerHTML=`
    <div class="output-body">
    <div class="output-profile">
                    <div class="output-fake-photo">
                        <p> a</p>
                    </div>
                </div>
    
                <div class="output-next">
    
                    <div class="output-username">
                        <p class="user">noname</p>
                        <p class="id">@noname</p>
                        <p class="time">0h</p>
    
                        <div class="threedot">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                       
                        
                    </div>
    
                    <div class="tweet-output">
                        <p class="tweet-inside-output">${text}</p>
                    </div>
    
    
                    <div class="footer-output">
                        <div class="footer-icon-output">
                            <i class="far fa-comment"></i>
                            </div>
    
                            <div class="footer-icon-output">
                            <i class="fas fa-retweet"></i>
                            </div>
    
                            <div class="footer-icon-output">
                            <i class="far fa-heart"></i>
                            </div>
    
                            <div class="footer-icon-output">
                            <i class="far fa-share-square"></i>
                            </div>
    
                            <div class="footer-icon-output">
                            <i class="far 
                            fa-chart-bar"></i>
                            </div>
    
                        </div>
    
                    </div>
                    </div>
    
    
    
    `;
    
    last.appendChild(out);
    out.style.animation="tweet 1s ease 0s 1 forwards";


}

function deleteItemLS(text) {
    items = getItemsFromLS();
    items.forEach(function(item,index) {
        if(item === text) {
            items.splice(index,1); 
            console.log("a");
        }
        console.log(item.length);

    });
    console.log(text.length);
    localStorage.setItem("items",JSON.stringify(items));
}


last.addEventListener("click",function(e){
console.log(e.target);
if(e.target.classList=="fas fa-ellipsis-h") {
e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
deleteItemLS(
e.target.parentElement.parentElement.parentElement.children[1].children[0].textContent);
console.log(e.target.parentElement.parentElement.parentElement.children[1].children[0]);
}
});





