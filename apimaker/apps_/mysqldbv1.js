const mysqldbv1 = { data(){ return { s2_meti_wen_dda: false, s2_eman_meti_wen: "", } }, props: ['datafor', 'v','datavar', 'vars', 'refname'], mounted: function(){ this.init(); }, watch: { v: { handler: function(){ this.$emit("updated"); }, deep:true } }, methods: { s2_ooooooohce: function(s2_vvvvvvvvvv){ if( typeof(s2_vvvvvvvvvv)=="object" ){ console.log( JSON.stringify(s2_vvvvvvvvvv,null,4) ); }else{ console.log( s2_vvvvvvvvvv ); } }, init: function(){ if( 'stage' in this.v['data'] ){ if( this.v['data']['stage'] == "initiate" ){ this.v['data'] = { "db":{"th":"MySql-Database", "i":{"t":"T","v":""},"l":{"t":"T","v":""} }, "table":{"th":"MySql-Table", "i":{"t":"T","v":""},"l":{"t":"T","v":""} }, "schema":{ "th":"MySql-Schema",  "i":{"t":"T","v":""}, "l":{"t":"T","v":""}, "fields":{"t":"O","v":{}}, "keys":{"t":"O","v":{}} }, "query":{"t":"MySql-Action", "v":"Select"}, "fields":{"t":"O", "v":{}}, "key":{"t":"T", "v":"id"}, "value":{"t":"T", "v":"name"}, "where":{"t":"L", "v":[{ "f":{"t":"T", "v":"field"}, "c":{"t":"T", "v":"="}, "v":{"t":"T", "v":"value"}, "n":{"t":"T", "v":"and"} }]}, "set": {"t":"L", "v":[ { "f":{"t":"T", "v":"Field"}, "v":{"t":"T", "v":"Value"} } ]}, "limit": {"t":"N", "v":1}, "group": {"t":"B", "v":false}, "sort": {"t":"L", "v":[{ "f":{"t":"T", "v":"id"}, "o":{"t":"T", "v":"Asc"} }] }, "hint": {"t":"T", "v":""}, "output": {"t":"T", "v":"dbResult"}, }; delete( this.v['data']['stage'] );  } } console.log("yyy"); if( 'where' in this.v['data'] ){ if( typeof(this.v['data']['where']['v']) == "object" && "length" in this.v['data']['where']['v'] == false ){ this.v['data']['where']['v'] = []; } } if( 'fields' in this.v['data'] ){ if( typeof(this.v['data']['fields']['v']) == "object" && "length" in this.v['data']['fields']['v'] ){ this.v['data']['fields']['v'] = {}; } } if( 'set' in this.v['data'] ){ if( typeof(this.v['data']['set']['v']) == "object" && "length" in this.v['data']['set']['v'] == false ){ this.v['data']['set']['v'] = []; } } if( 'sort' in this.v['data'] ){ if( typeof(this.v['data']['sort']['v']) == "object" && "length" in this.v['data']['sort']['v'] == false ){ this.v['data']['sort']['v'] = []; } } }, s2_kkkcabllac: function( c ){ if( c == "s2_tes_amehcs" ){ var k = Object.keys(this.v['data']['schema']['fields']['v']); var v = []; for(var i=0;i<k.length;i++){ v.push({ "f": { "t": "T", "v": k[i] }, "v": { "t": "T", "v": "" }, }); } this.v['data']['set']['v'] = v;  }else{ console.log("Callback: " + c + " not defined!"); } }, update_project_structure: function(){ var v = this.v['data']['project']['v']; var vv = {}; var only_false = true; for(var k=0;k<v.length;k++){ if( v[k]['v']['v'] == "true" ){ only_false = false; } vv[ v[k]['f']['v'] ] = {'t':this.types[ v[k]['t']['v'] ]}; } if( only_false ){ vv = JSON.parse( JSON.stringify( this.v['data']['schema2'] ) ); } this.v['data']['projects'] = vv; }, s2_srav_egats_ot_erutcurts_bd_trevnoc: function(v){ if( typeof(v)=='object' && 'length' in v ){ var vv = []; for(var k=0;k<v.length;k++ ){ vv[k] = {"t": v[k]['t']}; if( v[k]['t'] == 'O'  ){ if( typeof(v[k]['v']) == "object" && "length" in v[k]['v'] == false ){ vv[k]['_'] = this.s2_srav_egats_ot_erutcurts_yarra_trevnoc( v[k]['v'] ); }else{ vv[k]['_'] = {}; } } } return vv; }else if( typeof(v)=='object' && 'length' in v == false ){ var vv = {}; for(var k in v ){ if( v[k]['type'] in this.types ){ vv[k] = {"t": this.types[ v[k]['type'] ] }; }else{ vv[k] = {"t": v[k]['type']}; } if( v[k]['type'] == 'dict' ){ if( typeof(v[k]['sub']) == "object" && "length" in v[k]['sub'] == false ){ vv[k]['_'] = this.s2_srav_egats_ot_erutcurts_bd_trevnoc( v[k]['sub'] ); }else{ vv[k]['_'] = {}; } } if( v[k]['type'] == 'list' ){ if( typeof(v[k]['sub']) == "object" && "length" in v[k]['sub'] ){ vv[k]['_'] = this.s2_srav_egats_ot_erutcurts_bd_trevnoc( v[k]['sub'][0] ); }else{ vv[k]['_'] = {}; } } } } return vv; }, s2_noitaton_tcejbo_teg( v ){ var vv = {}; if( typeof(v)=="object" ){ if( "length" in v == false ){ for(var k in v ){ if( v[k]['t'] == "V" ){ vv[ k ] = v[k]['t'] + "["+v[k]['v']['v']+"]"; if( 'vs' in v[k]['v'] ){ if( v[k]['v']['vs'] ){  if( v[k]['v']['vs']['v'] ){  vv[ k ] = vv[ k ] + '->' + v[k]['v']['vs']['v'];  } } } }else{ vv[ k ] = this.s2_eulav_evired(v[k]); } } }else{ console.error("get_object_notation: not a object "); this.s2_ooooooohce( v); } }else{ console.error("get_object_notation: incorrect type: "+ typeof(v) ); } return Object.fromEntries(Object.entries(vv).sort()); }, s2_noitaton_tsil_teg( v ){  var vv = []; if( typeof(v)=="object" ){ if( "length" in v ){ for(var k=0;k<v.length;k++ ){ if( v[k]['t'] == "V" ){ nv = v[k]['t'] + "["+v[k]['v']['v']+"]"; if( 'vs' in v[k]['v'] ){ if( v[k]['v']['vs'] ){  if( v[k]['v']['vs']['v'] ){  nv = nv + '->' + v[k]['v']['vs']['v'];  } } } vv.push(nv); }else{ vv.push( this.s2_eulav_evired(v[k]) ); } } }else{ console.error("get_list_notation: not a list "); } }else{ console.error("get_list_notation: incorrect type: "+ typeof(v) ); } return vv; }, s2_eulav_evired: function( v ){ if( v['t'] == "T" || v['t'] == "TT" ||  v['t'] == "HT" || v['t']== "D" ){ return v['v'].toString(); }else if( v['t']== "N" ){ return Number(v['v']); }else if( v['t'] == 'O' ){ return this.s2_noitaton_tcejbo_teg(v['v']); }else if( v['t'] == 'L' ){ return this.s2_noitaton_tsil_teg(v['v']); }else if( v['t'] == 'NL' ){ return null; }else if( v['t'] == 'B' ){ return (v['v']?true:false); }else if( v['t'] == 'DT' ){ return (v['v']['v'] + " " + v['v']['tz']).toString(); }else if( v['t'] == 'D' || v['t'] == 'TS' ){ return (v['v']).toString(); }else if( v['t'] == 'D' || v['t'] == 'DT' || v['t'] == 'TS' ){ return (v['v']).toString(); }else{ return "unknown: "+ v['t']; } }, s2_noitaton_erehw_teg( v, ind = "" ){ var vv = []; if( typeof(v)=="object" ){ if( "length" in v ){ for(var k=0;k<v.length;k++){ if( v[k]['c']['v'] == "==" ){ v[k]['c']['v'] = "="; } if( v[k]['v']['t'] == "V" ){ if( v[k]['v']['v']['t'] == "T" ){ vv.push( v[k]['f']['v'] +" "+v[k]['c']['v']+" \""+ v[k]['v']['t']+"["+v[k]['v']['v']['v']+"]\"" ); }else{ vv.push( v[k]['f']['v'] +" "+v[k]['c']['v']+" "+ v[k]['v']['t']+"["+v[k]['v']['v']['v']+"]" ); } }else if( v[k]['v']['t'] == "L" ){ vv.push( "(\n"+ind+"   " + this.s2_erehw_eulav_evired(v[k]['v'], ind) + " \n"+ind+")" ); }else{ vv.push( v[k]['f']['v'] +" "+v[k]['c']['v']+" "+this.s2_erehw_eulav_evired(v[k]['v'], ind) ); } if( k < v.length - 1 ){ vv.push( "\n" + ind + v[k]['n']['v'] ); } } }else{ console.error("get_where_notation: not a object "); this.s2_ooooooohce( v); } }else{ console.error("get_where_notation: incorrect type: "+ typeof(v) ); } return vv.join(" "); }, s2_erehw_eulav_evired: function( v, ind = ""){ if( v['t'] == "T" || v['t'] == "TT" ||  v['t'] == "HT" || v['t']== "D" ){ return '"'+ v['v'].toString() + '"'; }else if( v['t']== "N" ){ return Number(v['v']); }else if( v['t'] == 'O' ){ return "'Error[Incorrect Type O]'"; }else if( v['t'] == 'L' ){ return this.s2_noitaton_erehw_teg(v['v'], ind+"   "); }else if( v['t'] == 'NL' ){ return "null"; }else if( v['t'] == 'B' ){ return (v['v']?"true":"false"); }else if( v['t'] == 'DT' ){ return '"' + (v['v']['v'] + " " + v['v']['tz']).toString() + '"'; }else if( v['t'] == 'D' || v['t'] == 'TS' ){ return '"' + (v['v']).toString() + '"'; }else if( v['t'] == 'D' || v['t'] == 'DT' || v['t'] == 'TS' ){ return '"' + (v['v']).toString() + '"'; }else{ return "unknown: "+ v['t']; } }, get_fields_list: function(){ if( 'fields' in this.v['data']['schema'] ){ return Object.keys( this.v['data']['schema']['fields']['v'] ).sort(); }else{ return ["No fields found"]; } }, s2_noitaton_sdleif_teg( v ){ var vv = []; if( typeof(v)=="object" ){ if( "length" in v == false ){ for(var k in v ){ vv.push( k + ": " + v[k]['t'] ); } }else{ console.error("get_fields_notation: not a object "); this.s2_ooooooohce( v); } }else{ console.error("get_fields_notation: incorrect type: "+ typeof(v) ); } return vv.join("\n"); }, s2_noitaton_tros_teg( v, ind = "" ){ var vv = []; if( typeof(v)=="object" ){ if( "length" in v ){ for(var k=0;k<v.length;k++){ vv.push( v[k]['f']['v'] + " "+ v[k]['o']['v'] + "" ); } }else{ console.error("get_sort_notation: not a object "); this.s2_ooooooohce( v); } }else{ console.error("get_sort_notation: incorrect type: "+ typeof(v) );  } return vv.join(", "); }, s2_noitaton_atad_teg( v, ind = "" ){ var vv = []; if( typeof(v)=="object" ){ if( "length" in v ){ for(var k=0;k<v.length;k++){ if( v[k]['v']['t']=="V" ){ if( v[k]['v']['v']['t'] == "T" ){ vv.push( v[k]['f']['v'] + " = \"[" + v[k]['v']['v']['v'] + "]\"" ); }else{ vv.push( v[k]['f']['v'] + " = [" + v[k]['v']['v']['v'] + "]" ); } }else{ vv.push( v[k]['f']['v'] + " = "+ this.s2_erehw_eulav_evired( v[k]['v'] ) ); } } }else{ console.error("get_data_notation: not a object "); this.s2_ooooooohce( v); } }else{ console.error("get_data_notation: incorrect type: "+ typeof(v) );  } return vv.join(",\n"); }, }, template: `<div style="border-left:1px solid orange; padding-left:10px;" > <template v-if="'db' in v['data']" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Database</div> <div title="Database" data-type="dropdown" data-list="thing" data-thing="MySql-Database" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:db'" >{{ v['data']['db']['l']['v'] }}</div> </div> <template v-if="v['data']['db']['l']['v']!=''" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Table</div> <div title="Mysql Table Name" data-type="dropdown" data-list="thing" data-thing="MySql-Table" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:table'" v-bind:data-context-dependency="v['data']['db']['i']['v']" >{{ v['data']['table']['l']['v'] }}</div> </div> <template v-if="v['data']['table']['l']['v']!=''" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Schema</div> <div title="Mysql Schema Name" data-type="dropdown" data-list="thing" data-thing="MySql-Schema" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:schema'" v-bind:data-context-callback="refname+':s2_tes_amehcs'" v-bind:data-context-dependency="v['data']['db']['i']['v']+':'+v['data']['table']['i']['v']" >{{ v['data']['schema']['l']['v'] }}</div> </div> <template v-if="v['data']['schema']['l']['v']!=''" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Query</div> <div title="SQL Query" data-type="dropdown" data-list="list" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:query:v'" data-list-values="Select,SelectAssoc,SelectKeyValue,Insert,Update,Delete" >{{ v['data']['query']['v'] }}</div> </div> <template v-if="v['data']['query']['v']=='Select'||v['data']['query']['v']=='SelectAssoc'||v['data']['query']['v']=='SelectKeyValue'||v['data']['query']['v']=='Update'||v['data']['query']['v']=='Delete'" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Where</div> <pre title="Mysql Where Condition" data-type="objecteditable" editable-type="MySqlQ" editable-title="MYSQL where condition" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:where:v'" style="margin-bottom:0px; " >{{ s2_noitaton_erehw_teg(v['data']['where']['v']) }}</pre> </div> </template> <template v-if="v['data']['query']['v']=='SelectAssoc'||v['data']['query']['v']=='SelectKeyValue'" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Key Field</div> <div title="SQL Result Key Field" data-type="dropdown" data-list="list" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:key:v'" v-bind:data-list-values="get_fields_list()" >{{ v['data']['key']['v'] }}</div> </div> </template> <template v-if="v['data']['query']['v']=='SelectKeyValue'" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Value Field</div> <div title="SQL Result Value Field" data-type="dropdown" data-list="list" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:value:v'" v-bind:data-list-values="get_fields_list()" >{{ v['data']['value']['v'] }}</div> </div> </template> <template v-if="(v['data']['query']['v']=='Select'||v['data']['query']['v']=='SelectAssoc')&&'fields' in v['data']['schema']" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Fields</div> <pre title="Mysql Fields Selection" data-type="objecteditable" editable-type="MySqlP" editable-title="MYSQL Fields Selection" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:fields:v'" style="margin-bottom:0px; " >{{ s2_noitaton_sdleif_teg(v['data']['fields']['v']) }}</pre> </div> </template> <template v-if="v['data']['query']['v']=='Insert'||v['data']['query']['v']=='Update'" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Set</div> <pre title="Mysql Data Set"  data-type="objecteditable" editable-type="MySqlD" editable-title="MYSQL Data Set" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:set:v'" style="margin-bottom:0px; " >{{ s2_noitaton_atad_teg(v['data']['set']['v']) }}</pre> </div> </template> <template v-if="v['data']['query']['v']=='Select'||v['data']['query']['v']=='SelectAssoc'||v['data']['query']['v']=='SelectKeyValue'||v['data']['query']['v']=='Update'||v['data']['query']['v']=='Delete'" > <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Sort</div> <div title="Mysql Fields Sort" data-type="objecteditable" editable-type="MySqlS" editable-title="MYSQL Query Sort" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:sort:v'" style="margin-bottom:0px; " >{{ s2_noitaton_tros_teg(v['data']['sort']['v']) }}</div> </div> </template> <div v-if="v['data']['query']['v']!='Insert'" style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Limit</div> <div class="editable" style="min-width:30px;" ><div spellcheck="false" contenteditable data-type="editable"  v-bind:data-var="datavar+':data:limit:v'" v-bind:data-for="datafor" data-allow="number" >{{ v['data']['limit']['v'] }}</div></div> </div> </template> </template> <div style="display:flex; column-gap:5px; margin-bottom:5px;" > <div style="min-width:100px;text-align:right;">Output</div> <div title="Output Variable" class="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:output:v'"><div contenteditable spellcheck="false" data-type="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':data:output:v'" data-allow="T" >{{ v['data']['output']['v'] }}</div></div> </div> </template> </template> </div>` };