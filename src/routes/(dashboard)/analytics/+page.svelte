<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	let chartValues1 = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	let chartValues2 = [10, 5, 15, 25, 10, 5, 30];
	let chartLabels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	let ctx1;
	let ctx2;
	let ctx3;
	let ctx4;
	let chartCanvas1: any;
	let chartCanvas2: any;
	let chartCanvas3: any;
	let chartCanvas4: any;

	onMount(() => {
		ctx1 = chartCanvas1.getContext('2d');
		let chart1 = new Chart(ctx1, {
			type: 'line',
			data: {
				labels: chartLabels1,
				datasets: [
					{
						label: 'Revenue',
						borderColor: 'rgb(114, 32, 168)',
						backgroundColor: 'rgb(181, 90, 242)',
						pointBackgroundColor: 'rgb(114, 32, 168)',
						pointRadius: 2,
						pointHitRadius: 6,
						data: chartValues1,
						fill: true
					}
				]
			},
			options: {
				maintainAspectRatio: true,
				responsive: true
			}
		});

		ctx2 = chartCanvas2.getContext('2d');
		let chart2 = new Chart(ctx2, {
			type: 'bar',
			data: {
				labels: chartLabels2,
				datasets: [
					{
						label: 'Sales',
						borderColor: 'rgb(32, 114, 168)',
						backgroundColor: 'rgb(90, 181, 242)',
						pointBackgroundColor: 'rgb(32, 114, 168)',
						pointRadius: 2,
						pointHitRadius: 6,
						data: chartValues2,
						fill: true
					}
				]
			},
			options: {
				maintainAspectRatio: true,
				responsive: true
			}
		});

		ctx3 = chartCanvas3.getContext('2d');
		let chart3 = new Chart(ctx3, {
			type: 'line',
			data: {
				labels: chartLabels1,
				datasets: [
					{
						label: 'Sales',
						borderColor: 'rgb(114, 32, 168)',
						backgroundColor: 'rgb(181, 90, 242)',
						pointBackgroundColor: 'rgb(114, 32, 168)',
						pointRadius: 2,
						pointHitRadius: 6,
						data: chartValues1,
						fill: true
					}
				]
			},
			options: {
				maintainAspectRatio: true,
				responsive: true
			}
		});

		ctx4 = chartCanvas4.getContext('2d');
		let chart4 = new Chart(ctx4, {
			type: 'line',
			data: {
				labels: chartLabels2,
				datasets: [
					{
						label: 'Sales',
						borderColor: 'rgb(32, 114, 168)',
						backgroundColor: 'rgb(90, 181, 242)',
						pointBackgroundColor: 'rgb(32, 114, 168)',
						pointRadius: 2,
						pointHitRadius: 6,
						data: chartValues2,
						fill: true
					}
				]
			},
			options: {
				maintainAspectRatio: true,
				responsive: true
			}
		});
	});
</script>

<div
	class="h-full w-full flex flex-col items-center justify-center sm:grid sm:grid-cols-2 sm:gap-2 sm:place-items-center md:flex md:flex-col xl:grid xl:grid-cols-2"
>
	<div class="w-full flex items-center justify-center">
		<canvas bind:this={chartCanvas1}></canvas>
	</div>
	<div class="w-full flex items-center justify-center">
		<canvas bind:this={chartCanvas2}></canvas>
	</div>
	<div class="w-full flex items-center justify-center">
		<canvas bind:this={chartCanvas3}></canvas>
	</div>
	<div class="w-full flex items-center justify-center">
		<canvas bind:this={chartCanvas4}></canvas>
	</div>
</div>
