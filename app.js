let tweetlist = document.getElementById("tweet-list");

eventlistener();
function eventlistener() {
    
document.getElementById('form').addEventListener('submit',newTweet);

tweetlist.addEventListener('click',removeTweet);
document.addEventListener('DOMContentLoaded',onLoadStorage);
}

function newTweet(e) {
    e.preventDefault();
    //store tweet in a variable
    let tweet = document.getElementById('tweet').value;
    
    //add an element to tweetlist to display tweet

    const li = document.createElement('li');
    li.textContent = tweet;

    //add an remove element
    const remove = document.createElement('a');
    remove.classList = "tweetClass";
    remove.textContent = "X";
    li.appendChild(remove);
    tweetlist.appendChild(li);

    addtoLocalStorage(tweet);

    this.reset();
}
function removeTweet(e) {
    if(e.target.classList.textContent = "tweetClass"){
    e.target.parentElement.remove();
    }

    removeFromStorage(e.target.parentElement.textContent)
}

function  addtoLocalStorage(tweet) {
    
    // console.log(tweet);
    let tweets = getFromLS();
    console.log(tweets);
    tweets.push(tweet);
    localStorage.setItem('tweets',JSON.stringify(tweets));
}
function getFromLS() {
    
    let tweets;
    const tweetsLs = localStorage.getItem('tweets');
    if(tweetsLs === null){
        tweets = []
    }else {
        tweets = JSON.parse(tweetsLs);
    }
    return tweets;
}

function onLoadStorage() {
   let tweet = getFromLS();
//    console.log(tweet);

   tweet.forEach((weet)=>{
    const li = document.createElement('li');
    li.textContent = weet;

    //add an remove element
    const remove = document.createElement('a');
    remove.classList = "tweetClass";
    remove.textContent = "X";
    li.appendChild(remove);
    tweetlist.appendChild(li);

   })
}
function removeFromStorage(wsd) {
    let tweeet = getFromLS();
    let tweetDel = wsd.substring(0,wsd.length-1);
    // console.log(tweetDel);
    
    tweeet.forEach((sds,index) => {
        if(sds === tweetDel){
        tweeet.splice(index,1);
        }
    });

    localStorage.setItem('tweets',JSON.stringify(tweeet));

}