document.addEventListener('alpine:init', () => {
	window.Alpine = Alpine;
	Alpine.store('tabs', {
		current: 'home',
		items: ['home', 'about', 'projects', 'contact', 'login'],
	});
});