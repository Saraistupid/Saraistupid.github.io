<script>
    import Navbar from '../components/Navbar.svelte'
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <div class="contenttitle" style="background-image:url('assets/bannerHome.gif')">
            <h1>Saraistupid</h1>
        </div>
        <div class="contentpad">
            <div class="article">
                <div class="articletitle">
                    <a href=" ">
                        Frens :3</a>
                </div>
                <div class="articlebody">
                <h2>
                    This is a list of my online friends, if you'd like to be added here contact me.
                </h2>
                <p>
                    <h3>Aradia (AKA. Diana)</h3>
                    <p>My online best friend, she's a really cool person who's almost like me, here's her <a href="https://github.com/AradiaIsStupid/">github</a>!
                    <br>

                </p>
                </div>
            </div>
            <div id="disqus_thread"></div>
        <script>
            (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://saraistupid.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
    </div>
</div>
