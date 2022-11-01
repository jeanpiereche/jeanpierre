const menu = document.querySelector('#menu_responsive');
const menu_list = document.querySelector('#nav__menu')
const menu_items = document.querySelector('#menu-items')

menu.addEventListener('click', () => {
	menu_list.classList.toggle('menu__displayed')
	menu.classList.toggle('fa-xmark')
})

menu_items.addEventListener('click', (e) => {
	console.log(menu_items.children)
	removeActivate()
	e.target.classList.toggle('activate')
})


const mediaqueryList = window.matchMedia("(max-width: 768px)");
mediaqueryList.addListener(() => {
	menu_list.classList.remove('menu__displayed')
	menu.classList.remove('fa-xmark')
	removeActivate()
});


const contact_shared = document.querySelector('#contact_shared')
const shared_content = document.querySelector('.shared_content')
contact_shared.addEventListener('click', () => {
	shared_content.classList.toggle('shared_content_display')
})


function getDomain() {
	const domain = document.URL.split('/')
	return path = `${domain[0]}//${domain[2]}`
}

function removeActivate() {
	const lists = menu_items.children
	Array.from(lists).forEach(list => {
		list.children[0].removeAttribute("class", 'activate')
	})
}

function copyClipboard(){
	const text = getDomain()
	navigator.clipboard.writeText(text)
	const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + text;
}

document.addEventListener("DOMContentLoaded", function (event) {
	var shareItems = document.querySelectorAll('.social_share');
	var isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
		|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
	var isAndroid = /(android)/i.test(navigator.userAgent);
	var options = {};
	if (isIOS || isAndroid) {
		options.link_telegram = 'tg://msg';
		options.link_whatsapp = 'whatsapp://send';
	}
	for (var i = 0; i < shareItems.length; i += 1) {
		shareItems[i].addEventListener('click', function share(e) {
			//console.log(this);
			return JSShare.go(this, options);
		});
	}
});