//I didn't spend a long time on the styling for this one but weirdly couldn't get my ternary operator
// of the "?" to work for true but it would display for false?? Couldn't figure it out but I had to
//move on to the other exercises.

function renderTweets(tweets) {

    return tweets.map(tweets =>`
        <div style= 'border-style: solid; border-width: 1px; width: 500px; padding: 15px; margin: 15px'>
            <div class="d-flex">
                <img src='${tweets.user.profilePic}' style="width: 60px;height: 60px;"/>
            <div class="my-1 mx-3 d-flex-column">
                <h1 style= "font-weight: 600; font-size:20px">${tweets.user.username}</h1>

                <div> ${tweets.isVerified ? `<img src="/verified.png" style="width: 20px;height: 20px">` : "" } </div>
                
                <h2 style="font-size:10px">${tweets.user.handle} </h2>
                
            </div>
            </div>
        <p class="mx-0; my-2">${tweets.text}</p>
        <hr>
            <div class="d-flex justify-content-left align-items-ce ter">
                <img style="height:25px" src="/replies.png"/>
                <p>${tweets.replies}</p>
                <img style="height:25px" src="/retweets.png"/>
                <p>${tweets.retweets}</p>
                <img style="height:25px" src="/likes.png"/>
                <p>${tweets.likes}</p>
                <img style="height:25px" src="/mail.png"/>
            </div>
        </div>
    `).join("");
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}