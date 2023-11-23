<div class="grid grid-cols-12 gap-x-16 bg-slate-200 min-h-screen">
	<header class="col-span-3 text-center bg-violet-900">
		<div>
			<a href="/invoices">
				<img src="/images/logo.svg" alt="The Dollar Board" class="mx-auto" />
			</a>
		</div>
		<nav>
			<ul class="list-none text-2xl font-bold">
				<li class="mb-6">
					<a href="/invoices" class="font-bold text-white hover:text-yellow-500">Invoices</a>
				</li>
				<li><a href="/clients">Clients</a></li>
				<li><a href="#">Settings</a></li>
				<li><a href="#">Logout</a></li>
			</ul>
		</nav>
	</header>
	<main><slot /></main>
</div>

<!-- <style lang="postcss">
	nav ul li {
		@apply;
	}
</style> -->
