/* Share Links button for cards */
const sharedLinks = [
	{
		"title": "FaceBook",
		"icon": "facebook-official",
		"baselink": "https://www.facebook.com/sharer/sharer.php?u=",
		"cardview": true
	},
	{
		"title": "Twitter",
		"icon": "twitter",
		"baselink": "https://twitter.com/intent/tweet?text=",
		"text": 'Look at this cool blog entry I found on NightScript Domain - "$title$": ',
		"cardview": true
	},
	{
		"title": "Pinterest",
		"icon": "pinterest",
		"baselink": "http://pinterest.com/pin/create/button/?description=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "LinkedIn",
		"icon": "linkedin",
		"baselink": "http://www.linkedin.com/shareArticle?mini=true&title=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "WhatsApp",
		"icon": "whatsapp",
		"baselink": "https://wa.me/?text=",
		"text": 'Look at this cool blog entry I found on NightScript Domain - "$title$": ',
		"cardview": true
	},
	{
		"title": "Reddit",
		"icon": "reddit-alien",
		"baselink": "http://www.reddit.com/submit?title=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "Tumblr",
		"icon": "tumblr",
		"baselink": "http://www.tumblr.com/share?v=3&t=''$TEXT$''&u=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
	}
];

export function replaceCardNoShare(cards) {
	if (!cards.length)
		return;

	let entrylink, entrytitle, socialLinksHTML;
	for (let int of cards) {
		entrylink = int.parentElement.firstElementChild.getAttribute("href");
		entrytitle = int.parentElement.firstElementChild.innerHTML;

		socialLinksHTML = '<div class="text-center cardShareLinks">';
		for (let socialEntry of sharedLinks.filter(entry => entry.cardview)) {
			socialLinksHTML += `<a
					class="card-link"
					data-tippy-content="Share this on ${socialEntry.title}!"
					href="${
						socialEntry.baselink.replace("''$TEXT$''", (socialEntry.separateText ? encodeURI(socialEntry.separateText.replace("$title$", entrytitle)) : ''))
							+ (socialEntry.text ? encodeURI(socialEntry.text.replace("$title$", entrytitle)) : '')
							+ encodeURI(window.location.protocol + "//" + window.location.hostname + entrylink)
					}"
				><i class="fa fa-${socialEntry.icon} fa-2x"></i></a>`;
		}
		socialLinksHTML += "</div>";
		int.parentElement.insertAdjacentHTML('beforeend', socialLinksHTML)
	}
}