<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	let chartValues = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	let ctx;
	let chartCanvas: any;

	onMount(() => {
		ctx = chartCanvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: chartLabels,
				datasets: [
					{
						label: 'Revenue',
						borderColor: 'rgb(114, 32, 168)',
						backgroundColor: 'rgb(181, 90, 242)',
						pointBackgroundColor: 'rgb(114, 32, 168)',
						pointRadius: 3,
						data: chartValues,
						fill: true
					}
				]
			}
		});
	});
</script>

<canvas bind:this={chartCanvas} id="myChart"></canvas>
