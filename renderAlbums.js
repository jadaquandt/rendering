//This problem almost broke my brain. Just kidding, but it was a huge issue for me at first to wrap
//my head around multiple maps in a row. So I broke them out and ran them that way, it worked and so
//to make them display correctly on the page, I figured out how to put them one after another
//that worked and I almost screamed with joy.

//After attending class on Thursday when we went over the surveys together, I realized
//I could've done it with multiple functions instead but since my code was working, I
//just decided to go ahead and submit.

function renderAlbums(albums) {
    var artistName = albums[0].artist;
    var getFirstAlbum = albums[0].albums; 

    var album1 = getFirstAlbum.map(element => {
        var albumSongs = element.songs.map(song => {
            return `
            <hr style="margin:10px; padding:2px">
            <div style="font-size: 12px;line-height:0" class="d-flex justify-content-between">
            <p class="my-0"><img height: 30px" src="/playarrow.png"</>${song.title}</p>
            <p class="my-auto mx-2">${song.length}</p>
            </div>`
        })
        return `
        <div class="d-flex align-items-end">
        <img style="margin: 20px 20px 0 0; height: 50px" src="${element.albumCover}"</>
        <p style="font-size: 20px">${element.title}</p>
        </div>
        ${albumSongs.join('')}
        `
    })
    return `<div class="mt-0">
    <p style="font-size: 40px">${artistName.toUpperCase()}</p><hr> ${album1.join('')}</div>`
}

/*
function renderAlbums(albums) {
  var getCreed = albums.map(element => `
        <div class="text-center mt-5">
            <h1 style="text-align: left">${element.artist}</h1>
        </div>
    `).join("");

    return getCreed;
} 
*/
/*
function renderAlbums(albums) {
 var i = 0;

    const getAlbums = albums.map(album => 
        {
            return album.albums[i].title
        });
        return `
                <div class="text-center mt-5">
                    <h1 style="text-align: left">${getAlbums}</h1>
                </div>
                `
  } ?*/


function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}