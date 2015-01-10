var app = {
	init: function(){	

		this.renderLoginPage();
		this.auth();
		this.renderTest();
		// this.clearBody()
	},
	auth: function(){

		var form = document.getElementById('login-form')
		form.addEventListener('submit', function(event){
			event.preventDefault();
			if(app.checkUser()){
				app.renderTest();
			}
		})  		
	},
	renderLoginPage: renderLoginPage,

	checkUser: function(email, password){
		//...
		return true;
	},
	renderTest: renderTest,

	clearBody: function(){
		var body=document.getElementsByTagName('body')[0];
   		while(body.firstChild) body.removeChild(body.firstChild);
	}
};



app.init()
