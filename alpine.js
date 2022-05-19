document.addEventListener('alpine:init', () => {
	window.Alpine = Alpine;

	Alpine.store('tabs', {
		current: 'about',
		items: ['home', 'about', 'projects', 'contact'],
	});
});