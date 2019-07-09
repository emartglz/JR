// const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser())
// /* Fetch URLs from JSON */
// fetch('urls.json').then((res) => {
// 	res.text().then((data) => {
// 		var frag = document.createDocumentFragment()
// 		var hasBegun = true
// 		JSON.parse(data).urls.forEach((u) => {
// 			try {
// 				var url = new URL(u)
// 			}
// 			catch (e) {
// 				console.error('URL invalid');
// 				return
// 			}
// 			fetch(url).then((res) => {
// 				res.text().then((htmlTxt) => {
// 					/* Extract the RSS Feed URL from the website */
// 					try {
// 						let doc = DOMPARSER(htmlTxt, 'text/html')
// 						var feedUrl = doc.querySelector('link[type="application/atom+xml"]').href
// 					} catch (e) {
// 						console.error('Error in parsing the website');
// 						return
// 					}
// 					/* Fetch the RSS Feed */
// 					fetch(feedUrl).then((res) => {
// 						res.text().then((xmlTxt) => {
// 							/* Parse the RSS Feed and display the content */
// 							try {
// 								let doc = DOMPARSER(xmlTxt, "text/xml")
// 								let heading = document.createElement('h1')
// 								heading.textContent = url.hostname
// 								frag.appendChild(heading)
// 								doc.querySelectorAll('item').forEach((item) => {
// 									let temp = document.importNode(document.querySelector('template').content, true);
// 									let i = item.querySelector.bind(item)
// 									let t = temp.querySelector.bind(temp)
// 									t('h2').textContent = !!i('title') ? i('title').textContent : '-'
// 									t('a').textContent = t('a').href = !!i('link') ? i('link').textContent : '#'
// 									t('p').innerHTML = !!i('description') ? i('description').textContent : '-'
// 									t('h3').textContent = url.hostname
// 									frag.appendChild(temp)
// 								})
// 							} catch (e) {
// 								console.error('Error in parsing the feed')
// 							}
// 							if(hasBegun) {
// 								document.querySelector('output').textContent = ''; 
// 								hasBegun = false;
// 							}
// 							document.querySelector('output').appendChild(frag)
// 						})
// 					}).catch(() => console.error('Error in fetching the RSS feed'))
// 				})
// 			}).catch(() => console.error('Error in fetching the website'))
// 		})
// 	})
// }).catch(() => console.error('Error in fetching the URLs json'))


// get(FEED_URL, function (data) {
//     $(data).find("entry").each(function () { // or "item" or whatever suits your feed
//         var el = $(this);

//         console.log("------------------------");
//         console.log("title      : " + el.find("title").text());
//         console.log("author     : " + el.find("author").text());
//         console.log("description: " + el.find("description").text());
//     });
// });



const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser())
/* Fetch URLs from JSON */
fetch('/static/js/urls.json').then((res) => {
	res.text().then((data) => {
		var frag = document.createDocumentFragment()
		var hasBegun = true;
		JSON.parse(data).urls.forEach((u) => {
			try {
                var url = new URL(u);
                console.log(u);
			}
			catch (e) {
				console.error('URL invalid');
				return
            }
            window.location.href = "get_url?my_var=http://www.juventudrebelde.cu/get/rss/suplementos/informatica";
            url_for('get_url', my_var='my_value')
            fetch(url, {mode:'no-cors'}).then((res) => {
                res.text().then((xmlTxt) => {
                    console.log(xmlTxt.text)
                    /* Parse the RSS Feed and display the content */
                    try {
                        let doc = DOMPARSER(xmlTxt, "text/xml")
                        let heading = document.createElement('h1')
                        // heading.textContent = url.hostname
                        // frag.appendChild(heading)
                        doc.querySelectorAll('item').forEach((item) => {
                            let temp = document.importNode(document.querySelector('template').content, true)
                            let i = item.querySelector.bind(item)
                            let t = temp.querySelector.bind(temp)
                            // t('h2').textContent = !!i('title') ? i('title').textContent : '-'
                            console.log(i('title'));
                            // t('a').textContent = t('a').href = !!i('link') ? i('link').textContent : '#'
                            console.log(i('link'));
                            // t('p').innerHTML = !!i('description') ? i('description').textContent : '-'
                            console.log(i('description'));
                            // t('h3').textContent = url.hostname
                            // frag.appendChild(temp)
                        })
                    } catch (e) {
                        console.error('Error in parsing the feed')
                    }
                    // if(hasBegun) {
                    //     document.querySelector('output').textContent = ''; 
                    //     hasBegun = false;
                    // }
                    // document.querySelector('output').appendChild(frag)
                })
            }).catch(() => console.error('Error in fetching the RSS feed'))
        })
    })
}).catch(() => console.error('Error fetching from the URL'))
