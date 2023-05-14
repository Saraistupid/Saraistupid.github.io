<script context="module">
    export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
import { onMount } from 'svelte';

    import Navbar from '../components/Navbar.svelte'
    export let posts;
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <div class="contenttitle" style="background-image:url('assets/bannerHome.gif')">
            <h1>Saraistupid</h1>
        </div>
        <div class="contentpad">

            {#each posts as post}
            <div class="article">
                <div class="articledate">
                    <div class="articleday">{post.date}</div>
                </div>
                <div class="articletitle">
                    <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
                </div>
                <div class="articlebody">
                    {@html post.html}
                </div>
            </div>
            {/each}
            <p style="visibility: hidden;">a</p>
    </div>
</div>
<p style="margin-left: 247px;">Last Updated: May 14th, 2023</p>
</div>
