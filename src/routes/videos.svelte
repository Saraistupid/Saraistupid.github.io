<script>
    import Navbar from '../components/Navbar.svelte'
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <div class="contenttitle" style="background-image:url('assets/bannerHome.png')">
            <h1>Starpelly</h1>
        </div>
        <div class="contentpad">
            <div class="article">
                <div class="articletitle">
                    <a href="videos.html">
                        Videos</a>
                </div>
                <div class="articlebody">
                    <p>Here is a list of most of the videos I've made up to date.
                    </p>
                    <iframe width="600" height="340" src="https://www.youtube.com/embed/+lastest?list=UUtHplARd31KhttOPJXMMlkg" frameborder="0" allowfullscreen></iframe>
                    <p>Please note that the videos are compressed for streaming-format and therefore may look a bit crunchy. I'm working on a workaround for that.</p>
                </div>
            </div>

            <div id="disqus_thread"></div>
        <script>
            (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://starpelly.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
    </div>
</div>