const mysqlp =  { data(){ return { s2_meti_wen_dda: false, s2_eman_meti_wen: "", vshow: true, all: false, fields: [], } }, props: ['datafor', 'v','datavar', 'rootdata', 'vars'], mounted: function(){ if( typeof(this.v) != "object" ){ this.v = []; }else if( "length" in this.v == false ){ this.v = []; } this.find_fields(); }, methods: { s2_ooooooohce: function(s2_vvvvvvvvvv){ if( typeof(s2_vvvvvvvvvv)=="object" ){ console.log( JSON.stringify(s2_vvvvvvvvvv,null,4) ); }else{ console.log( s2_vvvvvvvvvv ); } }, updateit: function(){ setTimeout(this.updateit2,100); }, updateit2: function(){ var v = {}; for( var k=0;k<this.fields.length;k++ ){ v[ this.fields[k]+'' ] = {'t':'text'}; if( this.fields[k] in this.rootdata['data']['schema']['fields'] ){ v[ this.fields[k]+'' ] = {'t': this.rootdata['data']['schema']['fields'][ this.fields[k] ]['type'] }; } } this.s2_ooooooohce( "updating fields: "); this.s2_ooooooohce( v ); this.rootdata['data']['fields']['v'] = v; }, find_fields: function(){ var vv = []; for( var k in this.v ){ vv.push( k+'' ); } this.fields = vv; }, include_all: function(){ setTimeout(this.include_all2,100); }, include_all2: function(){ console.log("iii"); if( this.all ){ if( typeof(this.rootdata)=="object" ){ if( 'data' in this.rootdata ){ if( 'schema' in this.rootdata['data'] ){ if( 'fields' in this.rootdata['data']['schema'] ){ this.fields = Object.keys(this.rootdata['data']['schema']['fields']['v']); this.updateit(); }else{console.log("11");} }else{console.log("22");} }else{console.log("33");} }else{console.log("44");} console.log("66"); }else{ console.log("zzz"); this.fields = []; this.updateit(); } } }, template: `<div v-if="vshow"> <div v-if="typeof(v)!='object'||v==undefined||v==null" style="margin-left:30px;">vobject error</div> <div v-else style="margin-left:10px;"> <div style="border-bottom:1px solid #ccc; margin-bottom:10px;"><label style="cursor:pointer;"><input type="checkbox" v-model="all" v-on:click="include_all()" > Select All </label></div> <div v-for="fv,fi in rootdata['data']['schema']['fields']['v']" v-bind:value="fv" style="display:flex;" > <div style="min-width:120px;" ><label style="cursor:pointer;"><input type="checkbox" v-model="fields" v-bind:value="fi" v-on:click="updateit()" > {{ fi }} </label></div> <div>{{ fv['type'] }}</div> </div> </div> <!--  <pre>{{ v }}</pre> <pre>{{ all }}</pre> <pre>{{ fields }}</pre> <pre>{{ rootdata['data']['fields'] }}</pre> <pre>{{ rootdata['data']['schema']['fields'] }}</pre> --> </div>` };