document.addEventListener('alpine:init', () => {
	window.Alpine = Alpine;

	Alpine.store('tabs', {
		current: 'projects',
		items: ['home', 'about', 'projects', 'contact'],
	});
});