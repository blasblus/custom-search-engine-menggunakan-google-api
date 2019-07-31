// OH NO, NOW YOU SEE MY CODES :_);

//ganti nilai dari kedua variabel di bawah dengan key dan id cse
const key   = 'AIzaSyBq2mZbnqfdC9A0UXXXXjK7Ekpc-LZCiM', //
	  cse   = '017013931142901265813:pXXXimwi4s';

let   s_url = window.location.href,
	  url   = new URL(s_url),
	  kwd   = url.searchParams.get("search").toLowerCase(); 

$(document).ready(function(){
	if (kwd !== null) {
		$('.snipme').append('<div id="content"><div class="contents"><div class="gSearch"></div></div><div>');
		$.ajax({
			url : `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cse}&q=${kwd}`,
			method : 'GET',
			dataType : 'JSON',
			success : function (data) {
				for (i = 0; i < data.items.length; i++) {
					$('.gSearch').append(`
						<div class="listitems">
							<header>
							<h2 class="sRtitle">
								<a href="${data.items[i].link}" target="_blank">${data.items[i].htmlTitle}</a>
								</h2>
							</header>
							<div>
								<span class="sLink">${data.items[i].formattedUrl}</span>
								<span class="sDescr">${data.items[i].snippet}</span>
							</div>
						</div>
					`);
				}
			}
		});
	}
});
