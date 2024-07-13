<script>
    import { onMount } from 'svelte'

    onMount(async () => {
        choosePic();
    })

    let pic;

    var myPix = new Array("assets/Images/funnypics/discord/cp.webp", "assets/Images/funnypics/discord/funnyrat.webp", "assets/Images/funnypics/konatamultiple.gif", "assets/Images/funnypics/discord/osakastare.gif", "assets/Images/funnypics/osakatable.gif", "assets/Images/funnypics/discord/awshitnigga.gif", "assets/Images/funnypics/miku-hi.gif", "assets/Images/funnypics/rumia-fish.gif", "assets/Images/funnypics/discord/tomokorapist.png", "assets/Images/funnypics/discord/ليش_احفظ_وانسي.jpg", "assets/Images/funnypics/discord/YOU_MADE_THE_NICE_GIRL_SAD.png", "assets/Images/funnypics/discord/miku_smoke.png", "assets/Images/funnypics/discord/YAY_SUICIDE.jpg", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjgxYWQwNzJmNjA1ZWE5ODIxY2ExYjdmYmNhNGFjN2VjZTllYjgzOCZjdD1n/7swI8UqW1zxnO6alD5/giphy.gif", "assets/Images/funnypics/discord/ashley.png", "assets/Images/funnypics/discord/soy_moko.png", "assets/Images/funnypics/discord/miku_mcnutt.png", "assets/Images/funnypics/discord/god i wanna kiss her so fucking badly i love konata i love her so much.png", "assets/Images/funnypics/discord/racist_cat.gif", "assets/Images/funnypics/bleh.gif", "assets/Images/funnypics/discord/white_warrior_youre_blacker_than_i_thought.png", "assets/Images/funnypics/incelracism.gif", "assets/Images/funnypics/konata-callout.gif", "assets/Images/funnypics/discord/rena_rapist.gif", "assets/Images/funnypics/drum.gif", "assets/Images/funnypics/discord/fed.webp", "assets/Images/funnypics/discord/the_cake.webp","assets/Images/funnypics/cat.gif","assets/Images/funnypics/discord/idk_her_name.gif", "https://mitskimash.neocities.org/AS003772_02.gif", "assets/Images/funnypics/haruhi-suzumiya-suzumiya.gif", "assets/Images/funnypics/catdy.gif", "assets/Images/funnypics/egyptian.gif", "assets/Images/funnypics/IMG_1445.gif"); /* i'll add more eventually  */

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
