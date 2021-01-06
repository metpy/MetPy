Search.setIndex({docnames:["api/basic","api/calc","api/cdm","api/constants","api/formats","api/index","api/io","api/kinematics","api/plots","api/thermo","api/turbulence","api/units","developerguide","examples/generated/Advanced_Sounding","examples/generated/Dewpoint_and_Mixing_Ratio","examples/generated/GINI_Water_Vapor","examples/generated/Hodograph_Inset","examples/generated/NEXRAD_Level_2_File","examples/generated/NEXRAD_Level_3_File","examples/generated/Simple_Sounding","examples/generated/Skew-T_Layout","examples/generated/Station_Plot","examples/generated/Station_Plot_with_Layout","examples/index","index","installguide","units"],envversion:51,filenames:["api/basic.rst","api/calc.rst","api/cdm.rst","api/constants.rst","api/formats.rst","api/index.rst","api/io.rst","api/kinematics.rst","api/plots.rst","api/thermo.rst","api/turbulence.rst","api/units.rst","developerguide.rst","examples/generated/Advanced_Sounding.rst","examples/generated/Dewpoint_and_Mixing_Ratio.rst","examples/generated/GINI_Water_Vapor.rst","examples/generated/Hodograph_Inset.rst","examples/generated/NEXRAD_Level_2_File.rst","examples/generated/NEXRAD_Level_3_File.rst","examples/generated/Simple_Sounding.rst","examples/generated/Skew-T_Layout.rst","examples/generated/Station_Plot.rst","examples/generated/Station_Plot_with_Layout.rst","examples/index.rst","index.rst","installguide.rst","units.rst"],objects:{"metpy.calc":{basic:[0,0,0,"-"],kinematics:[7,0,0,"-"],thermo:[9,0,0,"-"],turbulence:[10,0,0,"-"]},"metpy.calc.basic":{get_wind_components:[0,1,1,""],get_wind_dir:[0,1,1,""],get_wind_speed:[0,1,1,""],heat_index:[0,1,1,""],pressure_to_height_std:[0,1,1,""],windchill:[0,1,1,""]},"metpy.calc.kinematics":{advection:[7,1,1,""],convergence_vorticity:[7,1,1,""],geostrophic_wind:[7,1,1,""],h_convergence:[7,1,1,""],v_vorticity:[7,1,1,""]},"metpy.calc.thermo":{dewpoint:[9,1,1,""],dewpoint_rh:[9,1,1,""],dry_lapse:[9,1,1,""],lcl:[9,1,1,""],mixing_ratio:[9,1,1,""],moist_lapse:[9,1,1,""],parcel_profile:[9,1,1,""],potential_temperature:[9,1,1,""],saturation_vapor_pressure:[9,1,1,""],vapor_pressure:[9,1,1,""]},"metpy.calc.turbulence":{friction_velocity:[10,1,1,""],get_perturbation:[10,1,1,""],kinematic_flux:[10,1,1,""],tke:[10,1,1,""]},"metpy.io":{cdm:[2,0,0,"-"],gini:[4,0,0,"-"],nexrad:[4,0,0,"-"]},"metpy.io.cdm":{AttributeContainer:[2,2,1,""],Dataset:[2,2,1,""],Dimension:[2,2,1,""],Group:[2,2,1,""],Variable:[2,2,1,""],cf_to_proj:[2,1,1,""]},"metpy.io.cdm.AttributeContainer":{__init__:[2,3,1,""],ncattrs:[2,3,1,""]},"metpy.io.cdm.Dataset":{__init__:[2,3,1,""]},"metpy.io.cdm.Dimension":{__init__:[2,3,1,""],group:[2,3,1,""],name:[2,4,1,""],size:[2,4,1,""]},"metpy.io.cdm.Group":{__init__:[2,3,1,""],createDimension:[2,3,1,""],createGroup:[2,3,1,""],createVariable:[2,3,1,""],dimensions:[2,4,1,""],groups:[2,4,1,""],name:[2,4,1,""],variables:[2,4,1,""]},"metpy.io.cdm.Variable":{__init__:[2,3,1,""],datatype:[2,4,1,""],dimensions:[2,4,1,""],dtype:[2,4,1,""],group:[2,3,1,""],name:[2,4,1,""],ndim:[2,4,1,""],shape:[2,4,1,""],size:[2,4,1,""]},"metpy.io.gini":{GiniFile:[4,2,1,""]},"metpy.io.gini.GiniFile":{__init__:[4,3,1,""],prod_desc2:[4,4,1,""],prod_desc:[4,4,1,""],proj_info:[4,4,1,""],to_dataset:[4,3,1,""]},"metpy.io.nexrad":{Level2File:[4,2,1,""],Level3File:[4,2,1,""],is_precip_mode:[4,1,1,""]},"metpy.io.nexrad.Level2File":{__init__:[4,3,1,""],clutter_filter_bypass_map:[4,4,1,""],dt:[4,4,1,""],maintenance_data:[4,4,1,""],maintenance_data_desc:[4,4,1,""],msg1_data_hdr:[4,4,1,""],rda:[4,4,1,""],rda_adaptation_desc:[4,4,1,""],rda_status:[4,4,1,""],stid:[4,4,1,""],sweeps:[4,4,1,""],vcp_info:[4,4,1,""],vol_hdr:[4,4,1,""]},"metpy.io.nexrad.Level3File":{__init__:[4,3,1,""],graph_pages:[4,4,1,""],header:[4,4,1,""],height:[4,4,1,""],lat:[4,4,1,""],lon:[4,4,1,""],map_data:[4,4,1,""],max_range:[4,4,1,""],metadata:[4,4,1,""],prod_desc:[4,4,1,""],product_name:[4,4,1,""],siteID:[4,4,1,""],sym_block:[4,4,1,""],tab_pages:[4,4,1,""]},"metpy.plots":{ctables:[8,0,0,"-"],skewt:[8,0,0,"-"],station_plot:[8,0,0,"-"]},"metpy.plots.ctables":{ColortableRegistry:[8,2,1,""],convert_gempak_table:[8,1,1,""],read_colortable:[8,1,1,""]},"metpy.plots.ctables.ColortableRegistry":{add_colortable:[8,3,1,""],get_colortable:[8,3,1,""],get_with_boundaries:[8,3,1,""],get_with_steps:[8,3,1,""],scan_dir:[8,3,1,""],scan_resource:[8,3,1,""]},"metpy.plots.skewt":{Hodograph:[8,2,1,""],SkewT:[8,2,1,""]},"metpy.plots.skewt.Hodograph":{add_grid:[8,3,1,""],ax:[8,4,1,""],plot:[8,3,1,""],plot_colormapped:[8,3,1,""]},"metpy.plots.skewt.SkewT":{ax:[8,4,1,""],plot:[8,3,1,""],plot_barbs:[8,3,1,""],plot_dry_adiabats:[8,3,1,""],plot_mixing_lines:[8,3,1,""],plot_moist_adiabats:[8,3,1,""]},"metpy.plots.station_plot":{StationPlot:[8,2,1,""],StationPlotLayout:[8,2,1,""],nws_layout:[8,5,1,""],simple_layout:[8,5,1,""]},"metpy.plots.station_plot.StationPlot":{location_names:[8,4,1,""],plot_barb:[8,3,1,""],plot_parameter:[8,3,1,""],plot_symbol:[8,3,1,""],plot_text:[8,3,1,""]},"metpy.plots.station_plot.StationPlotLayout":{PlotTypes:[8,2,1,""],add_barb:[8,3,1,""],add_symbol:[8,3,1,""],add_text:[8,3,1,""],add_value:[8,3,1,""],names:[8,3,1,""],plot:[8,3,1,""]},"metpy.plots.station_plot.StationPlotLayout.PlotTypes":{barb:[8,4,1,""],symbol:[8,4,1,""],text:[8,4,1,""],value:[8,4,1,""]},"metpy.units":{atleast_1d:[11,1,1,""],atleast_2d:[11,1,1,""],concatenate:[11,1,1,""],units:[11,4,1,""]},metpy:{calc:[1,0,0,"-"],constants:[3,0,0,"-"],io:[6,0,0,"-"],plots:[8,0,0,"-"],units:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:data"},terms:{"03_chap3":0,"0co":[21,22],"0x10a62bcf8":15,"1000mb":3,"10m":0,"110m":[21,22],"1280x1100":15,"136e37b":12,"16S":[21,22],"34e6":26,"4km":15,"50f":0,"50m":15,"5th":17,"80f":0,"break":24,"byte":[4,17],"case":[13,16,19,20],"class":[2,4,6,8,15,22],"default":[0,2,8,9,10,11,19,26],"enum":25,"final":[11,12,26],"float":[4,7,8,9],"function":[7,8,9,10,13,14,16,19,20,21,22,26],"import":[0,9,11,13,14,15,16,17,18,19,20,21,22,26],"int":[2,4,8,9,10,21,22],"long":26,"new":[2,8,11,12,13,16,20,26],"return":[0,2,4,7,8,9,10,11,17,21,22],"throw":14,"true":[0,4,10,13,16,19,20],"var":[2,17],"while":[12,24],AMS:24,And:14,Axes:8,BIS:[21,22],BOS:[21,22],But:26,CHS:[21,22],For:[2,4,7,10,12,24,26],Gas:3,IDs:21,NWS:[4,8],That:12,The:[0,2,3,4,6,7,8,9,10,11,12,13,14,16,20,24,25,26],Then:12,There:[6,7,9,12,26],These:[0,1,4,6,8,25],Used:[8,10],Uses:9,Using:12,With:26,__init__:[2,4],_edgecolor:17,_get_axes_msg:[15,21,22],_version:12,abbr:3,abl:11,about:[10,24],abov:[8,10,21],abq:[21,22],absolut:9,acceler:3,access:[4,6,8,24],accomplish:26,across:8,actual:[8,9,21,22],adapt:4,add:[8,12,13,16,19,20,21,22],add_barb:[8,22],add_colort:8,add_featur:[21,22],add_grid:[8,16,20],add_subplot:[8,15,20,21,22],add_symbol:8,add_text:8,add_valu:[8,22],added:12,adding:12,addit:[2,8,12,26],adher:12,adiabat:[3,8,9],admin_1_states_provinces_lin:[21,22],administr:12,adopt:12,advect:7,against:12,air:[0,5,9],air_pressure_at_sea_level:[8,22],air_temperatur:[8,21,22],algorithm:9,alia:4,all:[2,4,7,8,11,12,21,22,26],all_data:[21,22],all_stid:[21,22],allow:[6,8,21,22,26],along:[2,8,10,11],alpha:[8,13],alreadi:[6,8],also:[0,6,8,12,21,22,24,25,26],ambient:9,amsl:4,anaconda:17,angl:[3,17],angular:3,ani:[2,4,8,11,12,26],annual:24,anoth:8,api:[2,12,24,26],appear:8,appl:[0,9],appli:[0,7,8],approach:9,appropri:[2,8,12,21,22],approxim:[9,14],arang:[17,26],arbitrari:11,archiv:12,area:13,arg:8,argument:[8,11],around:[2,8,11,21,22],arr:[11,21,22],arrai:[0,2,4,7,8,9,11,13,16,17,18,20,21,22,26],arrang:12,array_lik:[0,7,8,9,10],artist:[15,21,22],as_file_obj:[17,18],ascii:[21,22],aspect:[13,16,20],assess:0,assum:[0,2,9,12],astyp:[21,22],atl:[21,22],atleast_1d:11,atleast_2d:11,atmos_atten:17,atmospher:[0,9,10],attach:[0,22,26],attempt:4,attent:26,attribut:[2,4],attributecontain:2,author:12,autom:12,automat:[0,12],avail:[1,4,12,24,26],avg:3,avoid:2,awar:11,ax_hod:16,axes:[8,15,17,18,21,22],axes_grid1:16,axhlin:8,axi:[8,10,11],axvlin:[8,13],az_angl:17,az_index_mod:17,az_num:17,az_spac:17,azimuth:[17,18],back:[21,22],backport:25,bag:12,bakhshaii:9,barb:[8,19,21],base:[0,8,12,18,25,26],baselin:12,basic:[1,5,9],bdist_wheel:12,been:[8,15,21,22],befor:[8,12],below:8,better:[12,19],between:[2,8,13,26],big:12,bil:[21,22],bit:[21,22],black:[13,15,21,22],bless:24,blind:12,block:[2,4],blow:0,blue:[8,13,22],boi:[21,22],bolton:9,bool:[0,4],border:[21,22],both:[4,6,8],bottom:8,bound:[8,16,20,21,22],boundari:[8,10],boundarynorm:8,branch:12,broken:12,brown:12,bsd:24,bug:24,bugfix:12,buggi:12,bui:[21,22],build:[8,12,25],built:[12,22],builtin:8,bypass:4,bz2:4,bzip2:4,calc:[0,5,7,9,10,12,13,14,16,19,20,21,22],calcul:[1,5,13,14,18,24,26],calib_dbz0:17,calib_dbz:17,call:[8,12,26],callabl:8,cambridg:10,can:[0,7,8,10,12,14,21,22,24,25,26],cancel:26,cannot:26,cardin:21,cartopi:[15,21,22],categori:[21,22],caus:8,cbook:[13,15,16,17,18,19,20,21,22],ccr:[15,21,22],cdm:[4,5,6,15,25],celsiu:9,center:[8,21],central:8,central_latitud:[15,21,22],central_longitud:[15,21,22],certainli:[21,22],cf_to_proj:2,chanc:12,chang:[4,8,19,21,22,24],charact:[8,12],chatroom:24,check:12,chill:0,circl:8,circular:8,claus:24,clean:12,clim:9,climat:2,clip:8,closest:19,cloth:0,cloud:[21,22],cloud_coverag:[8,22],cloud_frac:21,cloud_fract:[21,22],clt:[21,22],clutter:4,clutter_filter_bypass_map:4,cmap:[15,17,18],coastlin:[15,21,22],codaci:12,code:[8,21,22,24,25],codecov:12,collect:[3,8,11,17,24],color:[8,13,15,21,22],colormap:8,colort:5,colortableregistri:8,column:[7,21,22],combin:26,come:[9,12,25],command:[8,12],commit:12,common:[2,6],commun:24,comparison:[12,17],compat:[8,26],compil:25,complet:[9,21,22],complex:21,compon:[0,7,8,10,13,16,20,21,22],component_rang:[8,16,20],compound:26,compress:[4,17],comput:[0,9,10],computation:10,concaten:[11,13,21,22],concept:6,condens:9,confid:12,configur:12,conform:[2,8],conserv:9,consid:24,consist:8,constant:[5,7,8,13],constitu:9,construct:2,contain:[1,2,4,6,7,8,10,11,12,22],continu:12,control:[8,21],conu:15,conus_4km_wv_20151208_2200:15,conveni:7,convent:2,converg:[7,9],convergence_vort:7,convers:[8,11,21,22],convert:[0,2,4,8,11,12,13,14,16,17,18,20,21,22,25,26],convert_gempak_t:8,coordin:[8,15],copi:[2,12,22],corioli:7,corner:15,correct:[0,12,22,26],correctli:12,correspond:[0,4,8,9,10,11,14],cos:[17,18],could:[7,12],counter:9,counterclockwis:8,cours:14,cover:[21,22],coverag:[4,12],cp_d:3,cp_i:3,cp_l:3,cp_v:3,cpr:[21,22],creat:[2,4,8,12,13,14,15,16,19,20,21,22],createdimens:2,creategroup:2,createvari:2,crs:[15,21,22],crw:[21,22],ctabl:[8,15,17,18],cultur:[21,22],current:[0,2,8,12,21,25],current_weath:21,custom:[21,22],custom_layout:22,cv_d:3,cv_v:3,darkgreen:[21,22],darkr:22,dash:8,dat:15,data:[0,2,4,6,8,13,15,16,17,18,19,20,21,22,24,25],data_arr:22,data_dict:8,data_s:17,datablockhdr:17,datadict:18,datalim:[17,18],dataset:[2,4,15,22],datatyp:2,date:[4,15,17,21,22],datetim:4,declin:3,decod:[4,21,22],def:[21,22],defin:[9,10,19],deg2rad:[17,18,19],deg:[0,13,16,20],degc:[13,14,16,20,22],degf:[14,22],degre:[0,3,8,9,21,22],delet:12,delimit:[21,22],delta:[3,7],denot:[8,10],densiti:3,density_ic:3,density_wat:3,denver:14,depend:[2,25],deprec:[15,21,22],desc:[2,4,8],descend:2,describ:[2,12],descript:[3,4],design:24,desir:[9,26],determin:[4,12],devel:12,develop:24,deviat:12,dew:[8,9,21],dew_point_temperatur:[8,22],dewpoint:[9,21,22,23],dewpoint_rh:9,dewpt:9,dfw:[21,22],dict:[2,4,8,17,22],dictat:[13,16,19,20],dictionari:[8,22],differ:[2,8,14,21,22],differenti:9,digit:21,dimens:[2,7,11,13,16,20],dimension:[7,11,26],dimensionalityerror:26,dimensionless:9,dir:12,direc:[13,16,19,20],direct:[0,7,8,13,16,20,21,22,24,26],directli:[2,4,8,12,26],directori:[8,12,25],dirti:12,discuss:24,disk:8,displai:8,dist:12,distanc:[3,26],distribut:[8,12],divis:26,doc:12,docstr:12,document:[25,26],doe:[25,26],doing:12,don:22,done:[0,8,12,26],dot:13,down:12,download:25,dpi:[21,22],drastic:[21,22],draw:[8,21,22],dry:[5,8,9],dry_adiabatic_lapse_r:3,dry_air_density_stp:3,dry_air_gas_const:3,dry_air_molecular_weight:3,dry_air_spec_heat_press:3,dry_air_spec_heat_vol:3,dry_laps:[8,9,13],dsm:[21,22],dtype:[2,21,22],dure:12,each:[2,4,7,8,10,21],earli:24,earth:5,earth_avg_angular_vel:3,earth_avg_radiu:3,earth_grav:3,earth_max_declin:3,earth_orbit_eccentr:3,earth_radiu:15,earth_sfc_avg_dist_sun:3,earth_solar_irradi:3,easi:[4,8,12,22],easiest:[25,26],easili:12,east:[0,8],eastward_wind:[8,22],eccentr:3,edgecolor:[21,22],effici:10,either:12,el_angl:17,el_const_ptr:17,el_num:17,elconst:17,element:[2,8,21,22],elementwis:17,elimin:[12,26],ellips:15,els:[12,21,22],elv:17,empti:[2,4],encapsul:[8,26],end:12,end_az:18,energi:10,enforc:[12,26],ensur:[8,12,26],entir:[8,12],entri:[8,9],enum34:25,env:[12,15,21,22],environ:12,eps:9,epsilon:3,equal:[17,18],equat:[3,9,10],equival:[8,9,26],error:9,essenti:[8,9,11,15],etc:8,even:[12,22,26],everi:[2,4,19],everyth:[12,22],everywher:7,exampl:[0,7,9,10,12,13,14,19,21,22,24],exclud:12,exist:[4,21,22],expect:22,expon:3,express:[0,9],extens:[4,25],extent:15,extern:4,extra:22,face:[0,17],face_level_wind:0,facecolor:[13,21,22],facial:0,factor:0,fail:17,fals:[0,4,10,17,18],fan:12,far:8,farenheit:[14,22],feat:[21,22],featur:[21,22,24],feature_artist:15,featureartist:15,feedback:12,feedhorn_agl:17,few:[21,22],ffc:0,field:[4,7,8,22],fig:[8,13,15,16,17,18,20,21,22],figsiz:[13,15,16,17,18,19,20,21,22],figur:[8,13,15,16,19,20,21,22],file:[5,6,8,12,15,21,22,25],filenam:4,fill:[2,8],fill_betweenx:13,fill_valu:2,filter:4,find:[9,10],finish:[9,21,22],first:[4,8,9,11,14,17,21,22,26],first_gat:17,fix:[12,14],flag:[0,12],flake8:12,flatten:12,flow:7,flux:10,fmt:[8,22],fname:4,fobj:8,follow:[9,12,25],font:[8,21],fontsiz:[8,21,22],forc:14,forecast:2,forev:12,format:[5,6,8,12,21,22],formatt:[8,21],formula:[0,9],found:[4,11,24,25],fraction:[21,22],friction:10,friction_veloc:10,friendli:4,from:[0,3,4,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,25,26],fsd:[21,22],full:[8,13,21,22,26],fun:24,further:21,fusion:3,futur:[17,21,22],futurewarn:17,g136e37b:12,gamma_d:3,garratt:10,gas:9,gate:18,gate_width:17,gempak:8,gener:[4,5,8,12,26],geograph:4,geopotenti:7,geostroph:7,geostrophic_wind:7,get:[2,8,12,15,19,21,22],get_colort:[8,17],get_perturb:10,get_speed_dir:0,get_test_data:[13,15,16,17,18,19,20,21,22],get_wind_compon:[0,13,16,19,20,21,22],get_wind_dir:0,get_wind_spe:0,get_with_boundari:8,get_with_step:[8,15,18],gini:6,ginifil:[4,15],git:12,github:[12,24,25],gitter:24,give:[4,8,12,13,16,20],given:[4,7,8,9,11,14,22],gjt:[21,22],gld:[21,22],globe:15,glyph:[8,21],goal:[2,14],goe:15,good:[11,12,13,16,20],gov:0,grab:[11,12,18,21,22,25],gram:14,graph_pag:4,graphic:4,graviti:3,grb:[21,22],green:8,grid:[7,8,16,20],grid_map:15,grid_mapping_nam:15,gridspec:[8,20],group:[1,2],guarante:9,guid:24,gzip:4,h_converg:7,hand:22,handl:[2,4,8,21,22],happen:22,has:[2,8,11,12,15,17,21,22,24],hash:12,have:[7,9,12,21,22,26],header:[4,17],heat:[0,3,10],heat_index:0,height:[0,4,7,13],helper:8,here:[8,13,16,20,21,22],hex:8,hide:12,higher:[11,21,22],histori:12,hit:12,hobb:0,hodograph:[8,20],hold:2,hopefulli:[21,22],horizont:[7,8],host:12,hou:[21,22],hour:0,how:[8,10,21],howev:10,hsv:[21,22],html:[0,8,25],http:[0,25],human:0,humid:[0,9],icd:4,ice:3,ice_specific_heat:3,ict:[21,22],idea:12,ideal:22,ident:26,identifi:12,ignor:[8,22],imag:[4,12,15],implement:[0,2,6,9],impli:2,improv:[21,22],imshow:15,inch:[22,26],includ:[8,12],inclus:12,increment:[8,16,20,21],ind:[21,22],independ:8,index:[0,5,7,10,19,21,22],indic:[0,2,12],individu:8,infil:8,inform:[2,4,8,10,12,15,26],initi:[2,8],inlin:[13,15,16,17,18,19,20,21,22],input:[8,9,11],inset_ax:16,inset_loc:16,instal:[12,24],instanc:[2,4,8,12,26],instead:[0,2,9,17,21,22,26],instruct:25,int32:15,integ:[2,11,21,22],integr:[9,12],interest:[9,12],interfac:[2,4,6,15,25],intern:4,interv:19,introductori:0,invert:9,ipython:[12,25],irradi:3,is_precip_mod:4,isnan:17,isohum:8,isotherm:13,issu:24,item:[7,8,9,11,17],iter:[8,9],ito:26,ito_base_unit:26,its:[2,8,9],itself:[8,21,22],jagti:0,jan:[21,22],java:2,jleeman:17,john:0,join:[11,24],joul:26,just:[12,21,22,24],kappa:3,keep:[8,12,22],kei:[8,22],kelvin:[8,9],keyword:8,kilogram:[14,26],kilomet:26,kinemat:[1,5,10],kinematic_flux:10,kinet:10,knot:[13,16,20,21,22],know:22,koun_sdus54_:18,ktlx20130520_201643_v06:17,ktlx:17,kwarg:8,lake:[21,22],lambda:21,lambert_conform:15,lambert_conformal_con:15,lambertconform:[15,21,22],land:[21,22],landscap:12,laps:3,larg:2,lat:[4,15,17,21,22],latent:3,later:22,latest:12,latitud:[4,22],latitude_of_projection_origin:15,lax:[21,22],layer:10,layout:[2,8],lbb:[21,22],lcl:[9,13],lcl_temp:13,lead:7,least:[2,10,11],leav:[2,8],left:[8,15,21],length:[7,12,26],less:7,level2fil:[4,17],level3fil:[4,18],level:[0,4,9,21],lex:[21,22],lib:[15,17,21,22],librari:[11,25,26],lifeblood:12,lift:9,like:[4,6,8,12,15],limit:12,line2d:8,line:[8,12,13,16,19,20],linearli:8,linecollect:8,linestyl:13,linewidth:[13,21,22],linspac:18,liquid:[3,9],list:[2,4,7,8,11,21,22,24],listedcolormap:8,live:24,lnk:[21,22],loadtxt:[13,16,19,20,21,22],loc:16,local:[6,12],locat:[8,21,22],location_nam:8,log:[8,13,16,19,20],logic:12,logp:8,lon:[4,15,17,21,22],longer:12,longitud:[4,22],longitude_of_central_meridian:15,look:[8,12,21,22],loop:[21,22],lower:[15,21],lsv:[21,22],made:[12,21],magnitud:0,mai:[9,10,24],mail:24,maintain:2,mainten:4,maintenance_data:4,maintenance_data_desc:4,major:[1,12,17],make:[8,11,21,22],make_string_list:[21,22],manag:[8,12],mani:[21,22,24],manifest:12,manner:4,map:[4,8,17,21,22],map_data:4,mapper:[4,8,21],markerfacecolor:13,mask:[0,17,18],mask_undefin:0,mass:9,master:12,match:[7,8,11],math:10,mathemat:26,matplotlib:[8,12,13,15,16,17,18,19,20,21,22,25],matplotlibdeprecationwarn:[15,21,22],max:[3,15],max_it:9,max_rang:[4,18],maximum:[4,8,9],maxit:9,may3_sound:[13,16,20],mbar:[9,13,14,16,20,22],mcalc:14,mean:[2,10,12],measur:0,meet:24,mem:[21,22],memori:6,merg:12,messag:4,metadata:4,metar:[21,22],meteor:[0,9],meteorolog:[1,5,8,13,16,19,20],meter:[0,26],method:[4,26],metpi:[0,2,4,7,9,10,12,13,14,15,16,17,18,19,20,21,22,25,26],metpy3:[15,21,22],mia:[21,22],micron:15,mile:0,millibar:[14,21],millimet:26,min:15,miniconda3:[15,21,22],minimum:12,minor:[12,17],miss:12,mix:[8,9,23],mixing_ratio:9,mob:[21,22],mode:4,model:[2,6,8],modul:[1,5,6,10,11,25,26],moist:[8,9],moist_laps:[8,9],mol:3,molecular:3,molecular_weight_ratio:3,moment:12,momentum:10,mon:9,monitor:12,more:[4,10,12,21,24,26],most:12,mostli:12,move:12,mpl:[12,15,21,22],mpl_toolkit:16,mpldeprec:[15,21,22],msg1_data_hdr:4,msg1datahdr:4,msg31datahdr:17,msp:[21,22],much:4,multipl:[0,11,21,22,26],multipli:[0,8,26],must:[7,10,11,26],my_interv:19,n0q:18,n0u:18,name:[2,3,4,6,8,12,17,18,21,22],namedtupl:4,nan:17,naturalearthfeatur:[21,22],ncattr:2,ndarrai:[2,7,26],ndim:2,nearest:19,necessari:[11,12,26],need:[0,8,12,21,22,26],nest:2,netcdf4:[6,24],netcdf:[2,15,24],newaxi:[17,18],newli:2,nexrad:6,next:22,nice:12,nid:[4,18],noaa:0,noise_h:17,noise_v:17,nomin:3,non:12,none:[2,3,4,8,10,17,21,22],nonit:9,norm:[8,15,18],normal:[8,13,16,19,20],north:[0,8],northward_wind:[8,22],notat:10,note:[0,4,7,9,10,12],notebook:[12,13,14,15,16,17,18,19,20,21,22,25],noth:12,notic:22,now:[14,21,22],num_data_blk:17,num_gat:17,number:[2,4,8,9,11,12,18],numer:8,numpi:[2,11,12,13,15,16,17,18,19,20,21,22,25,26],nws_layout:8,nwsreflect:18,nwsveloc:18,nyc:[21,22],nyq_vel:17,object:[4,6,8,11,18,26],obtain:8,ocean:[21,22],odd:14,ofcm:0,offici:24,offset:[8,17],okc:[21,22],older:25,oli:[21,22],omega:3,onc:[8,12],one:[2,8,10,11,12,21],onli:[2,9,12,19,21,22,26],onto:8,open:[4,15,17,18,24],oper:[2,4,9],operand:26,optim:2,option:[0,2,4,8,9,10,11,12,25],orbit:3,ord:[21,22],order:[7,9],org:25,origin:[2,15],other:[0,2,8,9,10,11],otherwis:[4,8],our:[8,14,22],out:[8,12,15,17,18,21,22],outfil:8,outlin:[0,12],output:11,outset:12,over:[21,22],overlin:10,overridden:8,own:[2,19],ownership:2,packag:[8,11,12,15,17,21,22,25],packet:4,page:[4,12],paid:26,pandoc:12,paper:12,paramet:[0,2,4,7,8,9,10,11,22],parcel:[9,13],parcel_profil:[9,13],parent:2,pars:[8,13,16,19,20,26],part:[0,8,12],part_press:9,partial:9,particular:26,pass:[0,2,8,10,11,12],past:12,patch:8,path:[8,12],pattern:4,pcolormesh:[17,18],pdf:0,pep8:12,per:[0,8,14],percent:0,percentag:0,perform:[2,12,17,21,22,24,26],pertin:26,perturb:10,peter:0,phi:17,phidp0:17,phl:[21,22],phx:[21,22],physiolog:0,pint:[8,11,25,26],pip:[12,25],pit:[21,22],pkg:8,place:[8,26],plan:0,platecarre:[21,22],pleas:[10,15,21,22],plot:[5,12,13,15,16,17,18,19,20],plot_barb:[8,13,16,19,20,21],plot_colormap:[8,16],plot_dry_adiabat:[8,13,16,19,20],plot_mixing_lin:[8,13,16,19,20],plot_moist_adiabat:[8,13,16,19,20],plot_paramet:[8,21],plot_symbol:[8,21],plot_text:[8,21],plotter:8,plottyp:8,plt:[13,15,16,17,18,19,20,21,22],plugin:12,point:[4,7,8,9,21,22],poisson:[3,9],poisson_expon:3,posit:[8,11],possibl:26,pot_temp_ref_press:3,potenti:[3,8,9],potential_temperatur:9,precipit:[4,22],prefix:26,present:[4,8],present_weath:[8,22],preserv:11,press:10,pressur:[0,3,8,9,14,21],pressure_to_height_std:0,pretti:21,prime:10,print:[14,15,26],process:[8,9,12],processing_statu:17,prod_desc2:4,prod_desc:4,produc:10,product:4,product_nam:4,prof:13,profil:[9,13],proj:[2,15,21,22,25],proj_info:4,proj_var:15,project:[2,4,8,12,15,21,22],proper:[0,4,12,26],properti:[8,15,21,22],prove:6,provid:[4,8,11,25],pseudo:[8,9],pseudoadiabat:9,pull:[8,12,15,17,18,21,22],pure:25,purpos:6,push:12,put:[7,22],pyplot:[8,13,15,16,17,18,19,20,21,22],pyproj:25,pytest:12,python2:17,python3:[15,21,22],python:[2,6,12,24,25],qualiti:12,quantifiedcod:12,quantiti:[0,7,11,26],question:24,quiver:8,r19:0,rad:[3,17],rad_const_ptr:17,rad_length:17,rad_statu:17,radar:4,radconstsv1:17,radiu:3,rai:17,rang:[0,4,8,9,17,18,19],rap:[21,22],rate:3,ratio:[0,3,8,9,13,16,20,23],raw:14,rcparam:[19,21,22],rda:4,rda_adaptation_desc:4,rda_statu:4,read:[4,6,8,12,21,22,24],read_colort:8,readm:12,rebas:12,recent:12,recogn:4,recogniz:[21,22],recombin:17,recommend:25,recreat:12,red:[8,13,21],reduc:[10,26],ref:17,ref_hdr:17,ref_rang:17,refer:[0,3,9,10],registri:[8,11,15,17,18,26],rel:[0,8,9],relat:10,relev:[2,4,13,16,19,20],reli:[12,26],remot:[6,24],remov:[10,15,21,22],render:[21,22],replac:8,repo:12,report:24,repositori:12,repres:[2,7],represent:4,request:[8,12,24],requir:[0,8,9],resample_nn_1d:19,reserv:17,reshap:[21,22],resolut:[15,21,22],resourc:8,respect:[0,7,8,10,21],rest:11,restructur:12,result:[9,21,22,26],rev:9,review:12,rewritten:10,rgb:8,rho:17,rho_d:3,rho_hdr:17,rho_i:3,rho_l:3,rho_rang:17,ric:[21,22],right:[8,12,21],ring:8,rmai:[15,21,22],rng:18,root:[2,12],rotat:[8,13,16,20],row:7,rtd:12,run:[12,25],ryan:24,same:[9,11,12,14,21,22,26],sampl:[21,22],sat:[21,22],satellit:4,satur:[8,9],saturation_vapor_pressur:9,save:12,savefig:[21,22],scalar:[2,7,10,11,17],scale:[13,16,17,19,20,21,22],scan:8,scan_dir:8,scan_resourc:8,scienc:0,scipi:25,scipylib:25,script:[12,25],sdist:12,sea:21,sec:26,second:[0,4,12,26],section:4,sector_num:17,see:[8,10,12,26],seen:25,select:[21,22],self:17,semilog:8,semimajor_axi:15,semiminor_axi:15,sens:12,sensibl:12,sep:26,separ:7,sequenc:[7,11],seri:[1,5],server:24,servic:12,set:[0,2,8,11,12,15,19,21,22,25,26],set_aspect:[17,18],set_ext:[21,22],set_xlim:[13,16,17,18,20],set_ylim:[13,16,17,18,19,20],setup:[12,25],shape:[2,18],share:2,should:[0,2,8,9,11,12,22,24,26],show:[13,14,16,17,18,19,20],side:22,signific:3,similar:6,simpl:[2,8,21,22],simple_layout:[8,22],simpli:12,simplifi:[6,8,26],sin:[12,17,18],sinc:12,singl:[8,11],siphon:24,site:[4,15,17,21,22],site_amsl:17,siteid:4,situat:[21,22],size:[2,8,15,17,19],skew:[5,13,16,19],skewt:[8,13,16,19,20],skiprow:[13,16,19,20,21,22],sky:[21,22],sky_cov:21,slant:13,slc:[21,22],slice:2,slp:[21,22],small:[12,26],smaller:12,snr_thresh:17,solar:3,solv:9,some:[8,12,21,22],someth:8,sounding_data:19,sourc:[8,12,24,25],south:[0,8],space:[7,8,19],spd:[13,16,19,20],special:[13,16,19,20],specif:[0,3,4,8,21,22],specifi:[0,8,9,21,22,26],speed:[0,8,10,12,13,16,20,21,22],sphere:15,sphinx:12,spirit:2,split:[21,22],spot_blank:17,squash:12,srh:0,stabl:[4,12,24],stacklevel:[15,21,22],stage:[22,24],stai:12,standalon:[12,25],standard:[0,8,12,21,22,25],standard_parallel:[15,21,22],start:[8,9,12,21,22],start_az:18,state:[9,21,22],state_boundari:[21,22],station:[4,5],station_data:[21,22],station_plot:8,stationplot:[8,21,22],stationplotlayout:[8,22],statu:4,steadman:0,step:[8,26],stid:[4,17,21,22],still:[4,24],storag:2,store:8,str:[2,4,8,17],straightforward:[21,22],string:[4,8,12,17,21,22,26],stringio:6,structur:[4,21,22],studi:0,stull:9,style:8,subject:[4,10],subplot:[8,17,18,20],subplotspec:8,subtract:26,suffix:26,sultri:0,sun:3,suppli:10,support:[2,4,11,12,14,24,25],surfac:[3,14],survei:0,sweep:[4,17],sym_block:[4,18],symbol:[8,21,22],symbol_mapp:8,symbolog:4,syntax:26,syr:[21,22],sys_zdr:17,ta_htindx:0,tab_pag:4,tabl:8,tabular:4,tag:12,take:[6,8,9,12,14],taken:4,talk:24,target:12,temp:22,temperatur:[0,3,8,9,10,11,21,22,26],tempt:12,tenth:[21,22],term:24,test:[14,15],text:[8,12,21,22],than:[7,9,25],thei:[8,9,12,26],them:[8,12,14,21,22],theme:12,therefor:12,thermo:9,thermodynam:[1,5],thi:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,19,20,21,22,25,26],thin:11,thing:[4,8,12,14,22,24],third:8,those:[11,12,21,22],though:25,thredd:24,through:[8,9,12,24,25],throughout:11,thu:0,tick:8,time:[1,2,4,5,12,15,21,26],time_m:17,tke:10,tlh:[21,22],tlx_201305202016:18,to_base_unit:26,to_dataset:[4,15],togeth:[11,12,22],too:[21,22],tool:[19,24],top:[12,26],tot_press:9,total:[2,9],tover:17,track:[12,22],tracker:24,trail:[7,21],transform:[8,21,22],travi:12,trivial:[21,22],ttf:[21,22],tupl:[0,2,4,7,8,17],turbul:[1,5],turn:[17,18],tutori:24,twine:12,twitter:24,two:[10,11,14],txpower_h:17,txpower_v:17,txt:[13,16,19,20,21,22],type:[2,4,8,17,21,22],typic:[13,16,19,20],u_nam:8,unamb_rang:17,undefin:0,under:[8,24],underli:[8,15],understand:26,unicod:8,unidata:24,uniform:12,uniniti:2,unit:[0,2,3,5,8,9,12,13,14,16,20,21,22,24],unitless:[0,8],unitregistri:11,univers:[2,10],unpack:[4,13,16,19,20],until:9,updat:12,upload:12,upon:[2,12,26],upper:[15,21],ups:12,urlopen:6,use:[2,4,8,9,11,12,15,21,22,26],usecol:[13,16,19,20,21,22],used:[2,4,8,9,10,11,12,21,22],useful:8,user:[4,15,17,21,22,24],uses:[0,12,21],using:[0,2,6,8,9,10,12,13,14,16,19,20,21,22,25,26],util:[21,22],v_name:8,v_vortic:7,valid:2,valu:[0,2,4,7,8,9,10,11,14,19,21,22],vapor:[3,9,14],vapor_pressur:[9,14],var_data:17,var_rang:17,variabl:[2,4,8,10,15,22],varieti:1,variou:[2,4,21,22,26],vcp:[4,17],vcp_info:4,vcp_num:4,vector:0,vel:10,veloc:[3,10],verbos:26,version:[11,25],vertic:[7,8,10,19],via:[12,25,26],view:15,vih:[21,22],viridi:17,virtu:9,visual:24,vmajor:12,vol:17,vol_const_ptr:17,vol_hdr:4,volconst:17,volum:[3,4],vortic:7,wai:[21,22,25,26],wallac:0,want:21,warn:[15,21,22],water:[5,9],water_gas_const:3,water_heat_fus:3,water_heat_vapor:3,water_molecular_weight:3,water_specific_heat:3,wcti:0,wdir:0,wea:9,weather:[21,22,24],weight:3,well:[2,4,8,12,14,21,22,24,25,26],were:[0,4],west:[0,8,15],what:12,wheel:12,when:[8,12],where:[0,7,8,10,13,22],whether:0,which:[0,2,7,8,10,11,12,14,17,21,22,25,26],whilst:11,whitelist:[21,22],wide:[2,4],width:8,wild:4,wind:[0,7,8,10,13,16,20,21,22],wind_dir:[21,22],wind_spe:[21,22],windchil:0,wish:10,within:[2,4,12,25],without:11,wmo:[21,22],won:24,work:[7,12,21,22,24,26],workshop:24,world:[12,22],wors:12,would:22,wrangl:[21,22],wrap_arrai:2,wrapper:[2,8,11],write:8,written:[6,12],wv_cmap:15,wv_norm:15,wv_specific_heat_press:3,wv_specific_heat_vol:3,wvcimss:15,www:[0,25],wx_code:[21,22],wx_symbol:[8,21],wx_symbol_font:8,wx_text:[21,22],x_clip_radiu:8,xloc:[8,17,18],y_clip_radiu:8,yet:22,yield:9,yloc:[17,18],yml:12,you:[2,10,12,21,22],your:[19,25],zdr:17,zip:[12,17,18],zorder:[15,21,22],zpc:[21,22]},titles:["Basic Calculations","<code class=\"docutils literal\"><span class=\"pre\">metpy.calc</span></code>","CDM","<code class=\"docutils literal\"><span class=\"pre\">metpy.constants</span></code>","File Formats","The MetPy API","<code class=\"docutils literal\"><span class=\"pre\">metpy.io</span></code>","Kinematic Calculations","<code class=\"docutils literal\"><span class=\"pre\">metpy.plots</span></code>","Thermodynamic Calculations","Turbulence Time Series Calculations","<code class=\"docutils literal\"><span class=\"pre\">metpy.units</span></code>","Developer&#8217;s Guide","Advanced Sounding","Dewpoint and Mixing Ratio","GINI Water Vapor","Hodograph Inset","NEXRAD Level 2 File","NEXRAD Level 3 File","Simple Sounding","Skew-T Layout","Station Plot","Station Plot with Layout","MetPy Examples","MetPy","Installation Guide","Unit Support"],titleterms:{The:[5,21,22],advanc:13,air:3,api:5,basic:0,calc:1,calcul:[0,7,9,10],cdm:2,chang:12,code:12,colort:8,conda:12,constant:3,construct:26,contact:24,convers:26,develop:12,dewpoint:14,document:[12,24],dry:3,earth:3,exampl:[23,25],file:[4,17,18],format:4,gener:3,gini:[4,15],guid:[12,25],hodograph:16,inset:16,instal:25,kinemat:7,layout:[20,22],level:[17,18],licens:24,make:12,meteorolog:3,metpi:[1,3,5,6,8,11,23,24],mix:14,nexrad:[4,17,18],oper:26,other:12,payoff:[21,22],plot:[8,21,22],present:24,project:24,ratio:14,relat:24,releas:12,requir:[12,25],seri:10,setup:[21,22],simpl:19,skew:[8,20],sound:[13,19],station:[8,21,22],style:12,support:26,test:12,thermodynam:9,time:10,tool:12,turbul:10,unit:[11,26],vapor:15,version:12,water:[3,15]}})