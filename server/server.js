var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/simple-stories');

app.get('/api/stories', function (req, res) {
    res.json(
        {
            "featuredPosts": [
                {
                    "title": "Anxious fans crawl out of a portal in a tree on a ham radio",
                    "author": "Gustavo Teodoro",
                    "cover": "will.gif",
                    "summary": "A flashlight deciphers Christmas lights despite the fact that Terry Ives has to explain unwitting neighbors nearby. Netflix subscribers flip a van using telekinesis under Lucas' slingshot."
                },
                {
                    "title": "In a world where James hides around a Millennium Falcon model",
                    "author": "Gustavo Teodoro",
                    "cover": "ghostbusters.jpg",
                    "summary": "Unbeknownst to some, Baby Holly casts a Spell of Protection with waffles on a walkie talkie. Unbeknownst to some, Lucas wears a wig over bananas on Jonathan's camera."
                },
                {
                    "title": "Apples use psychic powers under an Eggo",
                    "author": "Gustavo Teodoro",
                    "cover": "madmax.jpg",
                    "summary": "In a world where skeptics sneak food downstairs on a walkie talkie. Scientists question the sanity of Jonathan, ingorning that Officer Callahan hides."
                },
                {
                    "title": "Unbeknownst to some, Benny Hammond casts a Spell of Protection on skeptics",
                    "author": "Gustavo Teodoro",
                    "cover": "et.jpg",
                    "summary": "An Eggo demands justice for Barb while Mike runs from scientists. In a world where Bazooka Bubble Gum secretly leave Eggos in the woods in a Millennium Falcon model."
                },
                {
                    "title": "Will, Dr. Brenner, Eleven, and Lonnie Byers demand justice for Barb",
                    "author": "Gustavo Teodoro",
                    "cover": "contatos.jpg",
                    "summary": "Steve casts a fireball spell while across a blanket fort, Bazooka Bubble Gum decipher Christmas lights under an Eggo. Chocolate pudding uses psychic powers despite the fact that Hopper thinks about police station donuts nearby."
                },
                {
                    "title": "Supermarket patrons decipher Christmas lights over a copy of X-men #143",
                    "author": "Gustavo Teodoro",
                    "cover": "dragon.jpg",
                    "summary": "Lonnie Byers wears a wig while across the junkyard, skeptics sneak food downstairs around a walkie talkie. A copy of X-men #143 casts a Spell of Protection while Joyce hunts down Bazooka Bubble Gum."
                }
            ]
        }
    );
});

app.listen(3001, function () {
    console.log('Server running on port 3001');
});