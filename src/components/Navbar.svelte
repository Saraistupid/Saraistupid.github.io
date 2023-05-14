<script>
    import { onMount } from 'svelte'

    onMount(async () => {
        choosePic();
    })

    let pic;

    var myPix = new Array("https://cdn.discordapp.com/emojis/1064217837377429574.webp?size=256&quality=lossless", "https://cdn.discordapp.com/emojis/1103841251658309743.webp?size=256&quality=lossless", "assets/Images/funnypics/konatamultiple.gif", "https://cdn.discordapp.com/attachments/1013458981110435950/1096439420908998777/5F6AC068-B1E7-43AB-B2A8-AAA0C0A30C33.gif", "assets/Images/funnypics/osakatable.gif", "https://media.discordapp.net/attachments/1088247236711952426/1102020688480583852/I73Kl36.gif", "https://media.discordapp.net/attachments/1085975662306799618/1095354450668961913/mp4.gif", "https://media.discordapp.net/attachments/1100169366152171621/1100924936069054515/1682287855784373.gif", "assets/Images/funnypics/miku-hi.gif", "assets/Images/funnypics/rumia-fish.gif"); /* i'll add more eventually  */

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
            </div>
        </div>
    </div>

    <div class="grid_1">
        <div class="pad2">
            <a class="links" href="about" style="color: white">About Me</a>
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
            <a class="menulink" href="https://www.nicovideo.jp/" style="background-image:url('assets/Images/tabs/niconico.gif')">
            </a>
            <a class="menulink" href="https://rheavenstudio.github.io/" style="background-image:url('assets/Images/tabs/heavenstudio.png')">
            </a>
            <a class="menulink" href="https://www.youtube.com/watch?v=ddWJatRxfz8" style="background-image:url('assets/Images/tabs/octagon.gif')">
            </a>
            <a class="menulink" href="https://www.reddit.com/r/unixporn" style="background-image:url('assets/Images/tabs/unixporn.png')">
            </a>
            <a class="menulink" href="https://starpelly.com" title='fuck you pelly for putting me above the hacka doll tab on your website, you caused total tranny death by doing that.' style="background-image:url('assets/Images/tabs/starpelly.gif')">
            </a>
            <a class="menulink" href="https://myanimelist.net/anime/1887/Lucky%E2%98%86Star" title='i jacked off to futanari konata porn at least 2000 times at this point' style="background-image:url('assets/Images/tabs/luckystar.png')">
            </a>
            <a class="menulink" href="https://knowyourmeme.com/" style="background-image:url('assets/Images/tabs/kym.png')">
            </a>
            <a class="menulink" style="background-image:url('assets/Images/tabs/rhf.gif')">
            </a>
            <a class="menulink" style="background-image:url('assets/Images/tabs/windows9.png')">
            </a>
     </div>
    </div>
</div>
