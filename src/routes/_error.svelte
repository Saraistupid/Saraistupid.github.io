<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';

    import Navbar from '../components/Navbar.svelte'
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <div class="contenttitle" style="background-image:url('https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg')">
            <h1>{status}</h1>
        </div>
        <div class="contentpad">
            <div class="article">
                <div class="articlebody">
					{#if status == 404}
					<p>I have no idea what you were looking for but if there is meant to be something here please message me.</p>
					{:else}
						<p>this is probably a bad thing you should message me about this.</p>
                    	{error.message}
					{/if}

					<h1>Saraistupid#5127</h1>
                </div>
            </div>
        </div>
    </div>
</div>
