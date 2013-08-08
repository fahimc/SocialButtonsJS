var Facebook = {
	APP_ID : "",
	ids : {
		fbRoot : 'fb-root'
	},
	init : function() {
		window.fbAsyncInit = this.fbAsyncInit; ( function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {
					return;
				}
				js = d.createElement(s);
				js.id = id;
				js.src = "//connect.facebook.net/en_US/all.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

		var fbRoot = document.createElement("div");
		fbRoot.id = this.ids.fbRoot;
		document.body.appendChild(fbRoot);

		//fbRoot.appendChild(e);
	},
	fbAsyncInit : function() {
		FB.init({
			appId : Facebook.APP_ID,
			status : true,
			cookie : true,
			xfbml : true,
			oauth : true
		});

		// run once with current status and whenever the status changes
		//FB.getLoginStatus(Facebook.updateButton);
		//FB.Event.subscribe('auth.statusChange', Facebook.updateButton);

	},
	streamPublish : function( name,caption, description, link, picLink) {

		FB.ui({
			method : 'feed',
			name : name,
			caption : caption,
			description : (description),
			link : link,
			picture : picLink
		}, function(response) {
			if (response && response.post_id) {
				console.log('Post was published.');
			} else {
				console.log('Post was not published.');
			}
		});

	},
	share : function(url) {
		var share = {
			method : 'stream.share',
			u : url
		};

		FB.ui(share, function(response) {
			console.log(response);
		});
	},
	logout : function(response) {
		FB.logout(function(response) {
			console.log(response);
		});
	},
	login : function(response, info) {
		FB.login(function(response) {
			if (response.authResponse) {
				FB.api('/me', function(info) {
					console.log(response, info);
				});
			}
		}, {
			scope : 'email,user_birthday,status_update,publish_stream,user_about_me'
		});
	},
	post : function(message, name, desc, link, pictureURL) {
		var obj = {
			method : 'feed',
			message : message,
			link : link ? link : "",
			picture : pictureURL ? pictureURL : "",
			name : name ? name : "",
			description : desc ? desc : ""

		};
		// FB.api('/me/feed', 'post',
		// {
		// method: 'feed',
		// message     :message,
		// link        : link?link:"",
		// picture     : pictureURL?pictureURL:"",
		// name        : name?name:"",
		// description : desc?desc:""
		//
		// },
		// function(response) {
		//
		//
		// if (!response || response.error) {
		// alert('Error occured');
		// } else {
		// alert('Post ID: ' + response.id);
		// }
		// });

		FB.ui(obj, null);
	}
};
