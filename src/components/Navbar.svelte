<script>
    import { onMount } from 'svelte'

    onMount(async () => {
        choosePic();
    })

    let pic;

    var myPix = new Array("https://cdn.discordapp.com/emojis/1064217837377429574.webp?size=256&quality=lossless", "https://cdn.discordapp.com/emojis/1103841251658309743.webp?size=256&quality=lossless", "assets/Images/funnypics/konatamultiple.gif", "https://cdn.discordapp.com/attachments/1013458981110435950/1096439420908998777/5F6AC068-B1E7-43AB-B2A8-AAA0C0A30C33.gif", "assets/Images/funnypics/osakatable.gif", "https://media.discordapp.net/attachments/1088247236711952426/1102020688480583852/I73Kl36.gif", "https://media.discordapp.net/attachments/1085975662306799618/1095354450668961913/mp4.gif", "https://media.discordapp.net/attachments/1100169366152171621/1100924936069054515/1682287855784373.gif", "assets/Images/funnypics/miku-hi.gif", "assets/Images/funnypics/rumia-fish.gif", "https://cdn.discordapp.com/attachments/862760859318485032/1107323932371067050/YUN4Ff1.png", "https://cdn.discordapp.com/attachments/862760859318485032/1103301056265474078/IMG_3242.jpg", "https://cdn.discordapp.com/attachments/862760859318485032/1102317069258735727/image.png", "https://cdn.discordapp.com/attachments/862760859318485032/1100176216205570149/58858195-9563-4AC2-8A10-F3E54E057A35.png", "https://cdn.discordapp.com/attachments/862760859318485032/1099507837685747803/FuXCLqtXgAAC8PW.png", "https://cdn.discordapp.com/attachments/862760859318485032/1098793536016625714/20230420_135238.png", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjgxYWQwNzJmNjA1ZWE5ODIxY2ExYjdmYmNhNGFjN2VjZTllYjgzOCZjdD1n/7swI8UqW1zxnO6alD5/giphy.gif", "https://cdn.discordapp.com/attachments/862760859318485032/1095720914311716894/image.png", "https://cdn.discordapp.com/attachments/862760859318485032/1094256161475285012/image1.png", "https://cdn.discordapp.com/attachments/862760859318485032/1087332923176386560/unknown-24-1.png", "https://cdn.discordapp.com/attachments/862760859318485032/1086393521524715520/292115369_1014164495952002_7667198934088117272_n.png", "https://media.discordapp.net/attachments/779632949988687873/936860504272535602/image0-39.gif", "assets/Images/funnypics/bleh.gif", "https://cdn.discordapp.com/attachments/859838955947163668/1107350427709739130/marisad.gif", "https://cdn.discordapp.com/attachments/862760859318485032/1107354516673790003/IMG_1735.png", "assets/Images/funnypics/incelracism.gif", "assets/Images/funnypics/konata-callout.gif", "https://media.discordapp.net/attachments/708513901033029682/892939700707426374/imageedit_567_6354689660.gif", "assets/Images/funnypics/drum.gif", "https://cdn.discordapp.com/emojis/1093988580751310859.webp?size=256&quality=lossless", "https://cdn.discordapp.com/emojis/1098420256671793293.webp?size=256&quality=lossless", "https://cdn.discordapp.com/attachments/1141188893778120765/1143869503667712091/nya_im_a_kitty_cat.gif", "https://cdn.discordapp.com/attachments/1141188893778120765/1143869542758617188/mario.gif", "https://cdn.discordapp.com/attachments/1141188893778120765/1143869260360335412/download_2.jpg", "https://cdn.discordapp.com/attachments/1141188893778120765/1143869260934938724/fgovs.png","assets/Images/funnypics/cat.gif","https://media.discordapp.net/attachments/884099943353176104/1027607778732294164/1010106752156586014.gif", "https://mitskimash.neocities.org/AS003772_02.gif"); /* i'll add more eventually  */

    function choosePic() {
        let randomNum = Math.floor((Math.random() * myPix.length));
        pic = myPix[randomNum];
    }
</script>

<div class="navbarwrap">
    <img src="assets/mayo.gif" style="margin-left: 2px; margin-bottom: -2px;" alt="">
    <div id="logocnt">
        <a href="/">
            <img class="bruh" id="myPicture" alt="" src="{pic}" />
        </a>
    </div>
    <div class="grid_1">
        <div class="pad2">
            <div>
                <a class="sociallink" style="background-image:url('assets/Images/social/youtube32.png');" title="YouTube" target="_blank" href="https://youtube.com/@saraistupid" alt=""> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/github32.png');" title="Github" target="_blank" href="https://github.com/Saraistupid"> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/twitter32.png');" title="Twitter" target="_blank" href="https://twitter.com/sarafuckindumb"> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/lastfm32.png');" title="Last.FM" target="_blank" href="https://www.last.fm/user/Saraistupid"> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/spacehey32.png');" title="Spacehey" target="_blank" href="https://spacehey.com/saraistupid"> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/myanimelist32.png');" title="MyAnimeList" target="_blank" href="https://myanimelist.net/profile/Saraistupid"> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/kofi32.png');" title="Ko-fi (I NEED MONEY 😭)" target="_blank" href="https://ko-fi.com/saraistupid"> </a>
            </div>
        </div>
    </div>

    <div class="grid_1">
        <div class="pad2">
            <a class="links" href="about" style="color: white">About Me</a>
            <a class="links" href="frens" style="color: white">Friends!!</a>
            <a class="links" href="dni" style="color: white">DNI List</a>
            <br>
        </div>
    </div>
<!--
    <div class="grid_1">
        <div class="pad2">
            <a class="links" href="videos" style="color: white">Videos</a>
            <br>
            <a class="links" href="files" style="color: white">Project Files</a>
            <br>
            <a class="links" href="about-after-effects" style="color: white">About After Effects</a>
            <br>
     </div>
    </div>
-->
    <div class="grid_1">
        <div class="pad2">  
            <a class="menulink" href="/" style="background-image:url('../assets/Images/tabs/homepage.gif')">
            </a>
            <a class="menulink" href="https://rheavenstudio.github.io/" title='i did things for Heaven Studio i guess.' style="background-image:url('assets/Images/tabs/heavenstudio.png')">
            </a>
            <a class="menulink" href="https://starpelly.com" title='fuck you pelly for putting me above the hacka doll tab on your website, you caused total tranny death by doing that.' style="background-image:url('assets/Images/tabs/starpelly.gif')">
            </a>
            <a class="menulink" href="https://myanimelist.net/anime/1887/Lucky%E2%98%86Star" title='i jacked off to futanari konata porn at least 2000 times at this point' style="background-image:url('assets/Images/tabs/luckystar.png')">
            </a>
            <a class="menulink" href="https://lmaguire101.neocities.org/" style="background-image:url('assets/Images/tabs/d2lta.png')">
            </a>
            <a class="menulink" href="https://awesomeville.neocities.org/" style="background-image:url('assets/Images/tabs/h4xxor.png')">
            </a>
            <a class="menulink" href="https://mitskimash.neocities.org/" style="background-image:url('assets/Images/tabs/beppit.gif')">
            </a>
            <a class="menulink" href="https://jakanz.github.io/" style="background-image:url('assets/Images/tabs/jakanz.gif')">
            </a>
            <a class="menulink" href="https://www.nicovideo.jp/" style="background-image:url('assets/Images/tabs/niconico.gif')">
            </a>
            <a class="menulink" href="https://www.youtube.com/watch?v=ddWJatRxfz8" style="background-image:url('assets/Images/tabs/octagon.gif')">
            </a>
            <a class="menulink" href="https://www.reddit.com/r/unixporn" style="background-image:url('assets/Images/tabs/unixporn.png')">
            </a>
            <a class="menulink" href="https://knowyourmeme.com/" style="background-image:url('assets/Images/tabs/kym.png')">
            </a>
            <a class="menulink" href="https://rhythmheaven.fandom.com/wiki/Rhythm_Heaven_Fever" style="background-image:url('assets/Images/tabs/rhf.gif')">
            </a>
            <a class="menulink" href="https://3ds.hacks.guide/" style="background-image:url('assets/Images/tabs/3ds.png')">
            </a>
            <a class="menulink" href="https://hshop.erista.me/t/1983/" style="background-image:url('assets/Images/tabs/miku.gif')">
            </a>
            <a class="menulink" href="https://genderdysphoria.fyi/" title="i don't fully believe in everything this site says, but it has most information needed to start your research on gender dysphoria." style="background-image:url('assets/Images/tabs/gdfyi.png')">
            </a>
            <a class="menulink" href="/blog/win-81" style="background-image:url('assets/Images/tabs/windows9.png')">
            </a>
     </div>
    </div>
</div>
