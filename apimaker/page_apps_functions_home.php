<style>
	div.vid{ padding:0px 2px; cursor:pointer; }
	div.vid pre.vid{display: none; position: absolute; background-color: white; padding: 3px; border: 1px solid #aaa;}
	div.vid:hover pre.vid{display: block;}
</style>
<div id="app" >
	<div class="leftbar" >
		<?php require("page_apps_leftbar.php"); ?>
	</div>
	<div style="position: fixed;left:150px; top:40px; height: calc( 100% - 40px ); width:calc( 100% - 150px ); background-color: white; " >
		<div style="padding: 10px;" >
			<div style="float:right;" >
				<button class="btn btn-outline-dark btn-sm" v-on:click="function_show_create_form()" >Create Function</button>
			</div>
			<div style="float:right; margin-right:20px;" >
				<div v-if="msg" class="alert alert-primary py-0" >{{ msg }}</div>
				<div v-if="err" class="alert alert-danger py-0" >{{ err }}</div>
			</div>
			<div style="clear: both;"></div>
			<div class="h3 mb-3">Functions</div>
			<div style="height: calc( 100% - 100px ); overflow: auto;" >
			<table class="table table-striped table-bordered table-sm" >
				<tr>
					<td>ID</td>
					<td>Name</td>
					<td></td>
				</tr>
				<tr v-for="v,i in functions">
					<td><div class="vid">#<pre class="vid">{{v['_id']}}</pre></div></td>
					<td width="90%">
						<div><a v-bind:href="path+'functions/'+v['_id']+'/'+v['version_id']" >{{ v['name'] }}</a></div>
						<div class="text-secondary">{{ v['des'] }}</div>
					</td>
					<td><input type="button" class="btn btn-outline-danger btn-sm" value="X" v-on:click="delete_function(i)" ></td>
				</tr>
			</table>
			</div>
		</div>
	</div>
		<div class="modal fade" id="create_app_modal" tabindex="-1" >
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title">Create Function</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
		        	<div>Name</div>
		        	<input type="text" class="form-control" v-model="new_function['name']" placeholder="Name" v-on:change="nchange" >
		        	<div class="text-secondary small">no spaces. no special chars. except dash(-). lowercase recommended</div>
		        	<div>&nbsp;</div>
		        	<div>Description</div>
		        	<textarea class="form-control" v-model="new_function['des']" ></textarea>
		        	<div>&nbsp;</div>
		        	<div v-if="cmsg" class="alert alert-success" >{{ cmsg }}</div>
		        	<div v-if="cerr" class="alert alert-success" >{{ cerr }}</div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
		        <button type="button" class="btn btn-primary btn-sm"  v-on:click="createnow">Create</button>
		      </div>
		    </div>
		  </div>
		</div>
</div>
<script>
var app = Vue.createApp({
	data(){
		return {
			path: "<?=$config_global_apimaker_path ?>apps/<?=$app['_id'] ?>/",
			app_id: "<?=$app['_id'] ?>",
			app__: <?=json_encode($app) ?>,
			msg: "",
			err: "",
			cmsg: "",
			cerr: "",
			functions: [],
			show_create_function: false,
			new_function: {
				"name": "",
				"des": "",
			},
			create_app_modal: false,
			token: "",
		};
	},
	mounted(){
		this.load_functions();
	},
	methods: {
		nchange: function(){
			if( this.new_function['des']=="" ){
				this.new_function['des'] = this.new_function['name']+'';
			}
		},
		is_token_ok(t){
			if( t!= "OK" && t.match(/^[a-f0-9]{24}$/)==null ){
				setTimeout(this.token_validate,100,t);
				return false;
			}else{
				return true;
			}
		},
		token_validate(t){
			if( t.match(/^(SessionChanged|NetworkChanged)$/) ){
				this.err = "Login Again";
				alert("Need to Login Again");
			}else{
				this.err = "Token Error: " + t;
			}
		},
		load_functions(){
			this.msg = "Loading...";
			this.err = "";
			axios.post("?", {
				"action":"get_token",
				"event":"getfunctions."+this.app_id,
				"expire":2
			}).then(response=>{
				this.msg = "";
				if( response.status == 200 ){
					if( typeof(response.data) == "object" ){
						if( 'status' in response.data ){
							if( response.data['status'] == "success" ){
								this.token = response.data['token'];
								if( this.is_token_ok(this.token) ){
									this.load_functions2();
								}
							}else{
								alert("Token error: " + response.dat['data']);
								this.err = "Token Error: " + response.data['data'];
							}
						}else{
							this.err = "Incorrect response";
						}
					}else{
						this.err = "Incorrect response Type";
					}
				}else{
					this.err = "Response Error: " . response.status;
				}
			});
		},
		load_functions2(){
			this.msg = "Loading...";
			this.err = "";
			axios.post("?",{"action":"get_functions","app_id":this.app_id,"token":this.token}).then(response=>{
				this.msg = "";
				if( response.status == 200 ){
					if( typeof(response.data) == "object" ){
						if( 'status' in response.data ){
							if( response.data['status'] == "success" ){
								this.functions = response.data['data'];
							}else{
								alert("Token error: " + response.data['error']);
								this.err = "Token Error: " + response.data['error'];
							}
						}else{
							this.err = "Incorrect response";
						}
					}else{
						this.err = "Incorrect response Type";
					}
				}else{
					this.err = "Response Error: " . response.status;
				}
			});
		},
		function_show_create_form(){
			this.create_app_modal = new bootstrap.Modal(document.getElementById('create_app_modal'));
			this.create_app_modal.show();
			this.cmsg = ""; this.cerr = "";
		},
		cleanit(v){
			v = v.replace( /\-/g, "DASH" );
			v = v.replace( /\_/g, "UDASH" );
			v = v.replace( /\W/g, "-" );
			v = v.replace( /DASH/g, "-" );v = v.replace( /UDASH/g, "_" );
			v = v.replace( /[\-]{2,5}/g, "-" );
			v = v.replace( /[\_]{2,5}/g, "_" );
			return v;
		},
		createnow(){
			this.cerr = "";
			this.new_function['name'] = this.cleanit(this.new_function['name']);
			if( this.new_function['name'].match(/^[a-z0-9\.\-\_\ ]{3,100}$/i) == null ){
				this.cerr = "Name incorrect. Special chars not allowed. Length minimum 3 max 100";
				return false;
			}
			if( this.new_function['des'].match(/^[a-z0-9\.\-\_\&\,\!\@\'\"\ \r\n]{5,200}$/i) == null ){
				this.cerr = "Description incorrect. Special chars not allowed. Length minimum 5 max 200";
				return false;
			}
			this.cmsg = "Creating...";
			axios.post("?", {
				"action": "create_function", 
				"new_function": this.new_function
			}).then(response=>{
				this.cmsg = "";
				if( response.status == 200 ){
					if( typeof(response.data) == "object" ){
						if( 'status' in response.data ){
							if( response.data['status'] == "success" ){
								this.cmsg = "Created";
								this.create_app_modal.hide();
								this.load_functions();
							}else{
								this.cerr = response.data['error'];
							}
						}else{
							this.cerr = "Incorrect response";
						}
					}else{
						this.cerr = "Incorrect response Type";
					}
				}else{
					this.cerr = "Response Error: " . response.status;
				}
			});
		},
		delete_function( vi ){
			if( confirm("Are you sure?") ){
				this.msg = "Deleting...";
				this.err = "";
				axios.post("?", {"action":"get_token","event":"deletefunction"+this.app_id+this.functions[vi]['_id'],"expire":1}).then(response=>{
					this.msg = "";
					if( response.status == 200 ){
						if( typeof(response.data) == "object" ){
							if( 'status' in response.data ){
								if( response.data['status'] == "success" ){
									this.token = response.data['token'];
									if( this.is_token_ok(this.token) ){
										axios.post("?", {
											"action":"delete_function",
											"token":this.token,
											"function_id": this.functions[ vi ]['_id']
										}).then(response=>{
											this.msg = "";
											if( response.status == 200 ){
												if( typeof(response.data) == "object" ){
													if( 'status' in response.data ){
														if( response.data['status'] == "success" ){
															this.load_functions();
														}else{
															alert("Token error: " + response.data['data']);
															this.err = "Token Error: " + response.data['data'];
														}
													}else{
														this.err = "Incorrect response";
													}
												}else{
													this.err = "Incorrect response Type";
												}
											}else{
												this.err = "Response Error: " . response.status;
											}
										});
									}
								}else{
									alert("Token error: " + response.dat['data']);
									this.err = "Token Error: " + response.data['data'];
								}
							}else{
								this.err = "Incorrect response";
							}
						}else{
							this.err = "Incorrect response Type";
						}
					}else{
						this.err = "Response Error: " . response.status;
					}
				});
			}
		}
	}
}).mount("#app");
</script>