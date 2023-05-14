window.onload = choosePic;

var myPix = new Array("assets/pfpcrop.png","assets/otherpelly.jpg","https://i.redd.it/hsrm38mlf2o41.jpg","https://i.pinimg.com/originals/d7/57/22/d7572276e80bd31449710f6a28c3b6b1.jpg","https://emoji.gg/assets/emoji/JackBlackStop.png"
,"https://i1.sndcdn.com/artworks-000205278199-77zuj6-t500x500.jpg","https://pbs.twimg.com/profile_images/997268877636550656/x0qmi5nO_400x400.jpg","https://steamuserimages-a.akamaihd.net/ugc/449582555676740346/108CA9A47F1B19C7655DA67935ED03944DFBD41F/"
,"https://i.ytimg.com/vi/sDzmXF2SQf4/maxresdefault.jpg", "https://i.imgur.com/OBg0cHi.gif","https://i.makeagif.com/media/4-11-2017/Apquga.gif","https://wiki.nerd.nu/images/thumb/c/ca/OoOOooer.gif/500px-OoOOooer.gif"
,"https://preview.redd.it/9hlskc5c6nc41.gif?width=640&crop=smart&s=8211a5a62294612779e8b7fef222fb22b3e69dc1","https://media.tenor.com/images/7219604c50d8c562f2848bf0ffc626f6/tenor.gif","https://i.ytimg.com/vi/i6wUBD5vBeo/hqdefault.jpg"
,"https://media.suthlbr.com/products/images/30001/2967891_ep_1514387985_2.jpg","https://i.ytimg.com/vi/qbcnIenjKWg/hqdefault.jpg","https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/05/Xbox-Series-X-Fridge-Meme.jpg?q=50&fit=crop&w=740&h=389"); /* i'll add more eventually  */

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}