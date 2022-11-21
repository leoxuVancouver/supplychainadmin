<!-- 颜色选择插件 -->
function colorPanle(){
	$('.Inline').jPicker({
		 window:
		   {
			   title: null, 
			   effects:
			   {
				   type: 'slide', 
				   speed:
				   {
					   show: 'slow', 
					   hide: 'fast' 
				   }
			   },
			   position:
			   {
				   x: 'screenCenter', 
				   y: 'top' 
			   },
			   expandable: false, 
			   liveUpdate: true, 
			   alphaSupport: false, 
			   alphaPrecision: 0, 
			   updateInputColor: true 
		   },
		 color:
		   {
			   mode: 'h', 
			   active: new $.jPicker.Color({ ahex: '#ffcc00ff' }), 
			   quickList: 
				 [
				   new $.jPicker.Color({ h: 360, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 360, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 360, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 360, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 360, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 100 }),
				   new $.jPicker.Color({ h: 30, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 30, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 30, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 30, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 30, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 90 }),
				   new $.jPicker.Color({ h: 60, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 60, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 60, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 60, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 60, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 80 }),
				   new $.jPicker.Color({ h: 90, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 90, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 90, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 90, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 90, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 70 }),
				   new $.jPicker.Color({ h: 120, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 120, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 120, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 120, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 120, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 60 }),
				   new $.jPicker.Color({ h: 150, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 150, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 150, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 150, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 150, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 180, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 180, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 180, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 180, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 40 }),
				   new $.jPicker.Color({ h: 210, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 210, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 210, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 210, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 210, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 30 }),
				   new $.jPicker.Color({ h: 240, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 240, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 240, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 240, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 240, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 20 }),
				   new $.jPicker.Color({ h: 270, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 270, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 270, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 270, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 270, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 10 }),
				   new $.jPicker.Color({ h: 300, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 300, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 300, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 300, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 300, s: 100, v: 50 }),
				   new $.jPicker.Color({ h: 180, s: 0, v: 0 }),
				   new $.jPicker.Color({ h: 330, s: 33, v: 100 }),
				   new $.jPicker.Color({ h: 330, s: 66, v: 100 }),
				   new $.jPicker.Color({ h: 330, s: 100, v: 100 }),
				   new $.jPicker.Color({ h: 330, s: 100, v: 75 }),
				   new $.jPicker.Color({ h: 330, s: 100, v: 50 }), 
				   new $.jPicker.Color()
				 ]
		   },
		 images:
		   {
			   clientPath: 'images/', 
			   colorMap:
			   {
				   width: 230,
				   height: 230,
				   arrow:
				   {
					   file: 'mappoint.gif',
					   width: 15,
					   height: 15
				   }
			   },
			   colorBar:
			   {
				   width: 18,
				   height: 230,
				   arrow:
				   {
					   file: 'rangearrows.gif', 
					   width: 20,
					   height: 7
				   }
			   },
			   picker:
			   {
				   file: 'picker.gif', 
				   width: 25,
				   height: 24
			   }
		   },
		 localization:
		   {
			   text:
			   {
				   title: 'Drag Markers To Pick A Color',
				   newColor: '新的',
				   currentColor: '当前',
				   ok: 'OK',
				   cancel: 'Cancel'
			   },
			   tooltips:
			   {
				   colors:
				   {
					   newColor: 'New Color - Press &ldquo;OK&rdquo; To Commit',
					   currentColor: 'Click To Revert To Original Color'
				   },
				   buttons:
				   {
					   ok: 'Commit To This Color Selection',
					   cancel: 'Cancel And Revert To Original Color'
				   },
				   hue:
				   {
					   radio: 'Set To &ldquo;Hue&rdquo; Color Mode',
					   textbox: 'Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)'
	
				   },
				   saturation:
				   {
					   radio: 'Set To &ldquo;Saturation&rdquo; Color Mode',
					   textbox: 'Enter A &ldquo;Saturation&rdquo; Value (0-100%)'
				   },
				   value:
				   {
					   radio: 'Set To &ldquo;Value&rdquo; Color Mode',
					   textbox: 'Enter A &ldquo;Value&rdquo; Value (0-100%)'
				   },
				   red:
				   {
					   radio: 'Set To &ldquo;Red&rdquo; Color Mode',
					   textbox: 'Enter A &ldquo;Red&rdquo; Value (0-255)'
				   },
				   green:
				   {
					   radio: 'Set To &ldquo;Green&rdquo; Color Mode',
					   textbox: 'Enter A &ldquo;Green&rdquo; Value (0-255)'
				   },
				   blue:
				   {
					   radio: 'Set To &ldquo;Blue&rdquo; Color Mode',
					   textbox: 'Enter A &ldquo;Blue&rdquo; Value (0-255)'
				   },
				   alpha:
				   {
					   radio: 'Set To &ldquo;Alpha&rdquo; Color Mode',
					   textbox: 'Enter A &ldquo;Alpha&rdquo; Value (0-100)'
				   },
				   hex:
				   {
					   textbox: 'Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)',
					   alpha: 'Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)'
				   }
			   }
		   }
	 });
 }