

const app = {};

/**
 * Creates and adds a Button to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FontAwesome,Html,Monospace,Normal|Aluminium|Gray|Lego,SingleLine,Custom,NoPad,FillX/Y,NoSound
 */
app.AddButton = function(layout,text,width,height,options) {
    return app.CreateButton();
}

/**
 * Creates and adds a CameraView to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated Front,UseBitmap,UseABGR,NoRotate,"&lt;resolution&gt;":"CIF: 352x288\nQQVGA: 160x120\nQVGA: 320x240\nSVGA: 800x600\nVGA: 640x480\nXGA: 1024x768\nUXGA: 1600x1200"
 */
app.AddCameraView = function(layout,width,height,options) {
    return app.CreateCameraView();
}

/**
 * Creates and adds a blank white [Image](CreateImage.htm) with the AutoUpdate feature turned off to a Layout
 * 
 */
app.AddCanvas = function() {
    return app.CreateCanvas();
}

/**
 * Creates and adds a CheckBox to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y,NoSound
 */
app.AddCheckBox = function(layout,text,width,height,options) {
    return app.CreateCheckBox();
}

/**
 * Creates and adds a CodeEdit to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y
 */
app.AddCodeEdit = function(layout,text,width,height,options) {
    return app.CreateCodeEdit();
}

/**
 * AddDrawer adds layout as drawer on a given side. If the user swipes from this side to the other the layout will slide out.
 * @param {AppObject} layout CreateLayout
 * @param {String} side left|right
 * @param {Number} width Number fraction (0..1)
 * @param {Number} grabWidth Number fraction (0..1)
 */
app.AddDrawer = function(layout,side,width,grabWidth) {
    return app.CreateDrawer();
}

/**
 * Creates and adds a Image to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options String comma “,” separated fix,alias,px:use pixel values for size,Button:causes image to depress like a button when touched,ScaleCenter,async:loads the image asynchronously,FontAwesome,Resize,TouchThrough,Icon:allows loading of app icons,wallpaper,NoPlay:prevent gifs from playing automatically
 * @param {Number} pxw Number pixel
 * @param {Number} pxh Number pixel
 */
app.AddImage = function(layout,file,width,height,options,pxw,pxh) {
    return app.CreateImage();
}

/**
 * AddLayout adds a layout to the screen so that it is visible (if not hidden with SetVisibility)
 * @param {AppObject} layout CreateLayout
 * @param {String} type Linear|Absolute|Frame|Card
 * @param {String} options TouchThrough:forwards touch events to underlying children,TouchSpy:spies for touch events on all children,Left|Top|Right|Bottom|Center|H/VCenter,Wrap,Horizontal|Vertical,FillX/Y
 */
app.AddLayout = function(layout,type,options) {
    return app.CreateLayout();
}

/**
 * Creates and adds a List to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} list String separated
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated bold:bold item titles|Expand:Expand list to full height inside scrollers,Menu:applies various settings to make the list appear like an in
 * @param {String} delim
 */
app.AddList = function(layout,list,width,height,options,delim) {
    return app.CreateList();
}

/**
 * Creates and adds a Scroller to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX|FillY|FillXY,Horizontal|Vertical,NoScrollBar,ScrollFade
 */
app.AddScroller = function(layout,width,height,options) {
    return app.CreateScroller();
}

/**
 * Creates and adds a SeekBar to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y
 */
app.AddSeekBar = function(layout,width,height,options) {
    return app.CreateSeekBar();
}

/**
 * Creates and adds a Spinner to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} list String comma “,” separated
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y,NoSound
 */
app.AddSpinner = function(layout,list,width,height,options) {
    return app.CreateSpinner();
}

/**
 * Creates and adds a Switch toggle to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated Monospace,Custom,NoPad,FillX/Y,NoSound
 */
app.AddSwitch = function(layout,text,width,height,options) {
    return app.CreateSwitch();
}

/**
 * Creates and adds a Text to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated AutoScale,AutoSize,Multiline,Left|Right,Html,Bold,Monospace,NoWrap,Log,FillX/Y
 */
app.AddText = function(layout,text,width,height,options) {
    return app.CreateText();
}

/**
 * Creates and adds a TextEdit to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated AutoSelect:Select all Text if user enter the Textedit,AutoSize:Expand or shrink the control automatically so the text fits in the Textedit,Bold:Write bold text,Extract:enables full screen keyboard in landscape mode,Left:Justify the text to the left|Center:Justify the text in the middle|Right:Justify the text to the right|Monospace,NoSpell:Disable the spell
 */
app.AddTextEdit = function(layout,text,width,height,options) {
    return app.CreateTextEdit();
}

/**
 * Creates and adds a Toggle to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated Monospace,Custom,NoPad,FillX/Y,NoSound
 */
app.AddToggle = function(layout,text,width,height,options) {
    return app.CreateToggle();
}

/**
 * Creates and adds a VideoView to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated
 */
app.AddVideoView = function(layout,width,height,options) {
    return app.CreateVideoView();
}

/**
 * Creates and adds a WebView to a Layout.
 * @param {AppObject} layout CreateLayout
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 * @param {Number} zoom Number percent
 */
app.AddWebView = function(layout,width,height,options,zoom) {
    return app.CreateWebView();
}

/**
 * Alert shows a simple text dialog with a colored title and a 'Ok' button to exit. If title was not given the dialog looks like a normal alert box
 * @param {String} message 
 * @param {String} title 
 * @param {String} options String comma “,” separated NoDim,NoFocus
 * @param {Number} hue Number integer
 */
app.Alert = function(message,title,options,hue) {}

/**
 * Animate calls a function repeatedly like setInterval() but with the current time (Date.getTime()) and the difference to the last call in milliseconds as parameter
 * @param {Function} callback 
 * @param {Number} fps Number frames per second
 */
app.Animate = function(callback,fps) {}

/**
 * Broadcast is used for broadcasting messages between DroidScript apps.
 * @param {String} type Exec
 * @param {String} message
 */
app.Broadcast = function(type,message) {}

/**
 * Send a broadcasting intent with a custom action
 * @param {String} action android action
 * @param {String} category 
 * @param {String} data 
 * @param {String} type 
 * @param {String} extras 
 * @param {String} options String comma “,” separated
 */
app.BroadcastIntent = function(action,category,data,type,extras,options) {}

/**
 * Call is used to call the given phone number
 * @param {String} number number
 */
app.Call = function(number) {}

/**
 * Cancels a background job started via @ScheduleJo
 * 
 */
app.CancelJob = function() {}

/**
 * will trigger a standard Google Play license check for the running application (if it is a paid App).
 * @param {String} key String base64 encoded GPlay license key
 */
app.CheckLicense = function(key) {}

/**
 * CheckPermission checks whether the permission of a particular component has been granted.
 * @param {String} type Camera|Storage|ExtSDcard|Network|Location|SMS|Calendar|Body|Contacts|Record|Biometric|Phone|Accounts|License
 */
app.CheckPermission = function(type) {}

/**
 * Opens an Android dialog and allows the user to select one of the registered Google/Gmail accounts or add one. The selected email address is returned as the first argument in the callback function.
 * @param {Function} callback
 */
app.ChooseAccount = function(callback) {}

/**
 * ChooseContact opens the Contacts app so that the user can select the name and either the phone number or email address of a user
 * @param {String} type Phone|Email
 * @param {Function} callback
 */
app.ChooseContact = function(type,callback) {}

/**
 * ChooseFile opens a file picker for user to select a local file or a file from GoogleDrive, OneDrive or DropBox.
 * @param {String} message 
 * @param {String} type mimetype
 * @param {Function} callback 
 * @param {String} fldr String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {} options keep file permission after reboot,nodownload
 */
app.ChooseFile = function(message,type,callback,fldr,options) {}

/**
 * ChooseImage opens the photo gallery for user to select an image.
 * @param {String} options String comma “,” separated |internal|external
 * @param {Function} callback
 */
app.ChooseImage = function(options,callback) {}

/**
 * ChooseWifi lets the user select a WiFi network in range
 * @param {String} title1 
 * @param {String} title2 
 * @param {Function} callback 
 * @param {String} options String comma “,” separated force|large
 * @param {String} extra ssids
 */
app.ChooseWifi = function(title1,title2,callback,options,extra) {}

/**
 * ClearCookies clears the saved cookies for webviews or html apps.
 * @param {Boolean} session Clear session cookies
 */
app.ClearCookies = function(session) {}

/**
 * ClearData deletes variables saved via app.Save*(). The file parameter is optional. If given, the specified file will be used, otherwise it will be located in the apps private Folder.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.ClearData = function(file) {}

/**
 * ClearValue deletes a variable saved via app.Save*(). The file parameter is optional. If given, the specified file will be used, otherwise it will be located in the apps private Folder.
 * @param {String} name 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.ClearValue = function(name,file) {}

/**
 * Closes the drawer layout on the given side with slide animation.
 * @param {String} side left|right
 */
app.CloseDrawer = function(side) {}

/**
 * CopyFile copies a file to a given destination. The target must locate to the actual target file, not the folder. An existing file will be overridden.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.CopyFile = function(source,destination) {}

/**
 * CopyFolder copies a folder and its contents to a given destination. If an item already exists in the destination it will not be overwritten unless overwrite is true.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {Boolean} overwrite 
 * @param {String} filter pattern
 */
app.CopyFolder = function(source,destination,overwrite,filter) {}

/**
 * The AudioRecorder object can be used to listen for sound and record it to a file
 * 
 */
app.CreateAudioRecorder = function() {
        
    function AudioRecorder() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns a list of frequency values. The amount is dependent on the set frequency
         * 
         */
        this.GetData = function() {}
        
        /**
         * Returns the PMPO value (Peak music power output)
         * 
         */
        this.GetPeak = function() {}
        
        /**
         * Returns the RMS value (Root Mean Square
         * 
         */
        this.GetRMS = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Pauses the recording temporally
         * 
         */
        this.Pause = function() {}
        
        /**
         * Define the file where the recorder should record to
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetFile = function(file) {}
        
        /**
         * Set the Recording frequency to one of the possible values
         * @param {Number} frequency Number integer 8000|11025|22050|44100|48000
         */
        this.SetFrequency = function(frequency) {}
        
        /**
         * Define the file where the recorder should record to
         * @param {String} src Default|Camcorder|Mic|Unprocessed|Voicecommunication|Voiceperformance|Voicerecognition
         */
        this.SetSource = function(src) {}
        
        /**
         * Start recording to the specified file
         * 
         */
        this.Start = function() {}
        
        /**
         * Stop the audio recording
         * 
         */
        this.Stop = function() {}
    }
    return new AudioRecorder;
}

/**
 * CreateBluetoothList shows an Android dialog which allows the user to select a Bluetooth device from paired and discovered devices. See Also: @GetPairedBtDevices, @DiscoverBtDevices
 * @param {String} filter
 */
app.CreateBluetoothList = function(filter) {
        
    function BluetoothList() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Define a callback function that is called when the user selects an element
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new BluetoothList;
}

/**
 * The CreateBluetoothSerial object is used for communicating with other Bluetooth devices.The 'Text' mode is set by default, but **int**eger and **hex**adecimal values can also be sent
 * @param {String} mode Text|Int|Hex
 */
app.CreateBluetoothSerial = function(mode) {
        
    function BluetoothSerial() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Clears the Bluetooth buffer of the serial connection
         * 
         */
        this.Clear = function() {}
        
        /**
         * Connect to a Bluetooth device via its address. The oppenent must have called bt.Listen before
         * @param {String} name 
         * @param {String} channel
         */
        this.Connect = function(name,channel) {}
        
        /**
         * Disconnect your device from an eventually existant connection. Calls the OnDisconnect callback function on both devices
         * 
         */
        this.Disconnect = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Checks if Bluetooth is enabled or not
         * 
         */
        this.IsBluetoothEnabled = function() {}
        
        /**
         * Checks if a Bluetooth connection exists to another device
         * 
         */
        this.IsConnected = function() {}
        
        /**
         * Checks if a specific device is paired using its Bt name
         * @param {String} name
         */
        this.IsPaired = function(name) {}
        
        /**
         * Listen to your serial connection for any incoming mesages by passing <i>true</i> as first argument, <s>or stop listening by passing false</s>. It has to be called before an other device can connect with yours via bt.Connect
         * @param {Boolean} enabled
         */
        this.Listen = function(enabled) {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * If Bluetooth is disabled, shows an android dialog which asks the user to enable bluetooth connection. If granted, bluetooth will be enabled automatically. No callback fired
         * 
         */
        this.RequestEnable = function() {}
        
        /**
         * Enable sending data in several modes
         * @param {String} mode Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF
         */
        this.SetDataMode = function(mode) {}
        
        /**
         * If the device has sent the connection request
         * @param {Function} callback
         */
        this.SetOnConnect = function(callback) {}
        
        /**
         * SetOnDisconnect will be called on both devices after disconnecting from an existing bluetooth connection
         * 
         */
        this.SetOnDisconnect = function() {}
        
        /**
         * The SetOnReceive callback is called automatically after data has been received via the Bluetooth serial connection
         * @param {Function} callback
         */
        this.SetOnReceive = function(callback) {}
        
        /**
         * Tells the serial listener how to split received data. Splitted data will result in multiple OnReceive calls.
         * @param {String} mode End|Start
         * @param {} p2 
         * @param {} p3
         */
        this.SetSplitMode = function(mode,p2,p3) {}
        
        /**
         * 
         * @param {Number} milliseconds Number milliseconds
         */
        this.SetTimeout = function(milliseconds) {}
        
        /**
         * Send data over the Bluetooth serial connection to the other device
         * @param {String} data
         */
        this.Write = function(data) {}
    }
    return new BluetoothSerial;
}

/**
 * Buttons created with the **CreateButton** method are used for interacting with the app. This is done by calling a callback function after clicking on the button. You can specify such a callback function with the **SetOnTouch** Method
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FontAwesome,Html,Monospace,Normal|Aluminium|Gray|Lego,SingleLine,Custom,AutoShrink:Auto
 */
app.CreateButton = function(text,width,height,options) {
        
    function Button() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetEllipsize = function(mode) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the font style by defining a font file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetFontFile = function(file) {}
        
        /**
         * Change the current text of the control to html-formatted text
         * @param {String} str String html code
         */
        this.SetHtml = function(str) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the button has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Customize the look of the button
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius Number pixel
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth Number pixel
         * @param {Number} shadow Number fraction (0..1)
         */
        this.SetStyle = function(color1,color2,radius,strokeClr,strokeWidth,shadow) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Define a shadow displayed around the control.
         * @param {Number} radius Number integer
         * @param {Number} dx Number integer
         * @param {Number} dy Number integer
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextShadow = function(radius,dx,dy,color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Button;
}

/**
 * **CameraView**s are used to access the device camera
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated Front,UseBitmap,UseABGR,NoRotate,"&lt;resolution&gt;":"CIF: 352x288\nQQVGA: 160x120\nQVGA: 320x240\nSVGA: 800x600\nVGA: 640x480\nXGA: 1024x768\nUXGA: 1600x1200"
 */
app.CreateCameraView = function(width,height,options) {
        
    function CameraView() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Automatically takes pictures if a motion was detected by cam.[MotionMosaic]{switchPopup(this, 'MotionMosaic')}.
         * @param {String} path String path to folder ( “/absolute/...” or “relative/...” )
         * @param {String} fileName File_n#_motion
         * @param {Number} maxCount Number integer
         */
        this.AutoCapture = function(path,fileName,maxCount) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Finds faces in the current camera view
         * @param {Number} maxCount Number integer
         */
        this.FindFaces = function(maxCount) {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns the amount of cameras built in to the device
         * 
         */
        this.GetCameraCount = function() {}
        
        /**
         * Returns a list of available color effects for the camera
         * 
         */
        this.GetColorEffects = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Returns the camera capture height in pixels
         * 
         */
        this.GetImageHeight = function() {}
        
        /**
         * Returns the camera capture width in pixels
         * 
         */
        this.GetImageWidth = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the hightst possible zoom value
         * 
         */
        this.GetMaxZoom = function() {}
        
        /**
         * Get properties, possible values and settings of the camera as “key=value; pairs
         * 
         */
        this.GetParameters = function() {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns a list of possible picture dimensions
         * 
         */
        this.GetPictureSizes = function() {}
        
        /**
         * Returns the current camera's raw, png or jpg image datas encoded as base64
         * @param {String} format GrayScale:fastest|JSON:"slowest&colon; “ARGB&comma;ARGB&comma;...”"|"&lt;resolution&gt;":"CIF: 352x288\nQQVGA: 160x120\nQVGA: 320x240\nSVGA: 800x600\nVGA: 640x480\nXGA: 1024x768\nUXGA: 1600x1200"|rawbase64|pngbase64|jpgbase64
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} width Number fraction (0..1)
         * @param {Number} height Number fraction (0..1)
         */
        this.GetPixelData = function(format,left,top,width,height) {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Returns the curent zoom value
         * 
         */
        this.GetZoom = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Checks if the currently used camera has a camera flash
         * 
         */
        this.HasFlash = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns a boolea indicating whether the camera is currently recording a video
         * 
         */
        this.IsRecording = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Defines a raster which is used for motion detection.
         * @param {Number} xtiles Number integer
         * @param {Number} ytiles Number integer
         * @param {Number} sensitivity Number pixel
         * @param {Number} minPeriod Number milliseconds
         * @param {AppObject} image CreateImage
         */
        this.MotionMosaic = function(xtiles,ytiles,sensitivity,minPeriod,image) {}
        
        /**
         * Record a video to a given file. If seconds is specified, the recording will automatically stop after this time. Otherwise call cam.Stop()
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {Number} seconds Number seconds
         */
        this.Record = function(file,seconds) {}
        
        /**
         * Keeps tracks of the average color around a given point
         * @param {String} list String pipe “|” separated x1:num_frc,y1:num_frc|x2:num_frc,y2:num_frc|...
         * @param {Function} callback 
         * @param {Number} sampSize Number pixel
         * @param {Number} maxRate Number milliseconds
         */
        this.ReportColors = function(list,callback,sampSize,maxRate) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Applies a color effect to the camera
         * @param {String} effect none|mono|negative|solarize|sepia|posterize|whiteboard|blackboard|aqua|vage
         */
        this.SetColorEffect = function(effect) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * Define two @CreateImage controls where the camera view is duplicated to. This method may be used for cardboart AR. Have a look at [Daves forum post](https://groups.google.com/d/msg/androidscript/gJI6axNtkqk/Cc22nwVbr0QJ) about that method
         * @param {AppObject} image1 CreateImage
         * @param {AppObject} image2 CreateImage
         */
        this.SetDuplicateImage = function(image1,image2) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * En- or disables the camera flash if available
         * @param {Boolean} onoff
         */
        this.SetFlash = function(onoff) {}
        
        /**
         * Change the cameras focus mode depending  on the purpose
         * @param {String} mode Auto|Picture:for taking pictures|Video:for recording videos|Macro|EDOF:Extended Depth Of Field for continuous digital focusing|Fixed|Infinity
         */
        this.SetFocusMode = function(mode) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Define a callback function called when the user focuses the control
         * @param {Function} callback
         */
        this.SetOnFocus = function(callback) {}
        
        /**
         * Defines a callback function which is called if cam.AutoCapture took a picture. The _file_ parameter contains the path to the image file
         * @param {Function} callback
         */
        this.SetOnPicture = function(callback) {}
        
        /**
         * Defines a callback function which is called when the camera is ready for use
         * @param {Function} callback
         */
        this.SetOnReady = function(callback) {}
        
        /**
         * Rotates the camera view
         * @param {Number} angle Number angle in degrees (0..360) 0|90|180|270
         */
        this.SetOrientation = function(angle) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Change property values of the camera.
         * @param {String} name 
         * @param {} value
         */
        this.SetParameter = function(name,value) {}
        
        /**
         * Define a custom picture size in pixels
         * @param {Number} width Number pixel
         * @param {Number} height Number pixel
         */
        this.SetPictureSize = function(width,height) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Rotates captured image in any desired angle in degrees
         * @param {Number} angle Number angle in degrees (0..360)
         */
        this.SetPostRotation = function(angle) {}
        
        /**
         * Defines an image control which will show the captured picture automatically when taken
         * @param {AppObject} image CreateImage
         */
        this.SetPreviewImage = function(image) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * En-/Disables the camera sound playing when taking pictures
         * @param {Boolean} enabled
         */
        this.SetSound = function(enabled) {}
        
        /**
         * Define a custom video recording size in pixels
         * @param {Number} width Number pixel
         * @param {Number} height Number pixel
         */
        this.SetVideoSize = function(width,height) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Change the zoom value of the camera
         * @param {Number} level
         */
        this.SetZoom = function(level) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Start the camera preview on the display
         * 
         */
        this.StartPreview = function() {}
        
        /**
         * Stop recording a video
         * 
         */
        this.Stop = function() {}
        
        /**
         * Stop the camera preview on the display
         * 
         */
        this.StopPreview = function() {}
        
        /**
         * Streams the camera view to a local ip
         * @param {String} ip 
         * @param {Number} port Number integer
         * @param {Number} quality Number percent
         * @param {Number} fps Number frames per second
         * @param {Number} mtu Number maximum transmission unit
         */
        this.Stream = function(ip,port,quality,fps,mtu) {}
        
        /**
         * Takes a picture of the current view and saves it to a file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.TakePicture = function(file) {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new CameraView;
}

/**
 * Creates and adds a blank white Image with the Auto-Update feature turned off.
 * 
 */
app.CreateCanvas = function() {}

/**
 * CheckBoxes can be used to let the user en- or disable specific options in your app. They consist of a ticker box on the left and a text label on the right side
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y,NoSound
 */
app.CreateCheckBox = function(text,width,height,options) {
        
    function CheckBox() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Checks if the checkbox is currently checked or not
         * 
         */
        this.GetChecked = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Changes the current checked state of the CheckBox
         * @param {Boolean} checked
         */
        this.SetChecked = function(checked) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Define a callback function that is called when the user touches the CheckBox
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new CheckBox;
}

/**
 * The CloudStore component allows you to easily store and retrieve app data (as a simple or complex JSON object) from a cloud
 * @param {String} apiKey
 */
app.CreateCloudStore = function(apiKey) {
        
    function CloudStore() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Deletes a file in the cloud
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {Function} callback
         */
        this.Delete = function(file,callback) {}
        
        /**
         * Lists files of the cloud
         * @param {String} filter 
         * @param {Function} callback
         */
        this.List = function(filter,callback) {}
        
        /**
         * Loads data from the cloud
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} callback 
         * @param {Function} options
         */
        this.Load = function(file,callback,options) {}
        
        /**
         * Merges an object with an already existing in the cloud
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {Object} data 
         * @param {Function} callback
         */
        this.Merge = function(file,data,callback) {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this._Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Saves data in the cloud
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {all types} data 
         * @param {Function} callback 
         * @param {String} options
         */
        this.Save = function(file,data,callback,options) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * Upload a file to the cloud
         * @param {String} data 
         * @param {String} name 
         * @param {String} type String mimetype
         * @param {Function} callback 
         * @param {String} password
         */
        this.Upload = function(data,name,type,callback,password) {}
    }
    return new CloudStore;
}

/**
 * CreateCodeEdit is a control for premium users which is like a TextEdit but it has advanced methods.
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y
 */
app.CreateCodeEdit = function(text,width,height,options) {
        
    function CodeEdit() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clears the undo/redo history
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Copies the selected text to the device clipboard
         * 
         */
        this.Copy = function() {}
        
        /**
         * Cut selected text and copies it to the device clipboard
         * 
         */
        this.Cut = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns the current line index where the cursor is located
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Returns the index of the character where the cursor is currently located
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns at which character in the text a certain line begins
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the currently selected text
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * Returns the position of where the user selection ends
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * Returns the position of where the user selection begins
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Checks if there is currently some text selected
         * 
         */
        this.GetSelectMode = function() {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Highlights a specific line in the text with a thin red underline
         * @param {Number} line Number integer
         */
        this.HighlightLine = function(line) {}
        
        /**
         * Inserts a string at the current cursor position
         * @param {String} text
         */
        this.InsertText = function(text) {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Paste text from the clipboard at the current cursor position
         * 
         */
        this.Paste = function() {}
        
        /**
         * Redo an undone action
         * 
         */
        this.Redo = function() {}
        
        /**
         * Replaces the current selection with the passed text
         * @param {String} text
         */
        this.Replace = function(text) {}
        
        /**
         * Replace all occurances of a string in the text
         * @param {String} text 
         * @param {String} newText 
         * @param {Boolean} matchCase 
         * @param {Boolean} wholeWord
         */
        this.ReplaceAll = function(text,newText,matchCase,wholeWord) {}
        
        /**
         * Replaces a given range in the text with some string
         * @param {String} text 
         * @param {Number} start Number integer
         * @param {Number} end Number integer
         */
        this.ReplaceText = function(text,start,end) {}
        
        /**
         * Search for a string in the text in a given direction and selects it
         * @param {String} text 
         * @param {String} direction Up|Down
         * @param {Boolean} matchCase 
         * @param {Boolean} wholeWord
         */
        this.Search = function(text,direction,matchCase,wholeWord) {}
        
        /**
         * Selects the whole text
         * 
         */
        this.SelectAll = function() {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Changes the color scheme of the CodeEdit
         * @param {String} scheme Dark|Light
         */
        this.SetColorScheme = function(scheme) {}
        
        /**
         * Change the current cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the current text of the control to html-formatted text
         * @param {String} str String html code
         */
        this.SetHtml = function(str) {}
        
        /**
         * Change the highlighted language syntax
         * @param {String} ext .js,.java,.php,.c,.cpp,.cs,.rb,.m,.py,.txt
         */
        this.SetLanguage = function(ext) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Select between navigating using the Yoyo or standard touch
         * @param {String} method Yoyo|Touch
         */
        this.SetNavigationMethod = function(method) {}
        
        /**
         * Called when the containing data has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Defines a callback function which is called when the user double-taps the Yoyo
         * @param {Function} callback
         */
        this.SetOnDoubleTap = function(callback) {}
        
        /**
         * %cb% a key event appears
         * @param {Function} callback
         */
        this.SetOnKey = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Selects part of the text in a given range
         * @param {Number} start Number integer
         * @param {Number} stop Number integer
         */
        this.SetSelection = function(start,stop) {}
        
        /**
         * En/Disables the selection mode for the cursor
         * @param {Boolean} onOff
         */
        this.SetSelectMode = function(onOff) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * En/Disable usage of the device keyboard
         * @param {Boolean} onOff
         */
        this.SetUseKeyboard = function(onOff) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Undo an action
         * 
         */
        this.Undo = function() {}
    }
    return new CodeEdit;
}

/**
 * Creates a CustomTab control.
 * 
 */
app.CreateCustomTabs = function() {}

/**
 * The Crypt component is used to en- or decrypt a string with a given key or to create a hash of it
 * @param {String} options String comma “,” separated
 */
app.CreateCrypt = function(options) {
        
    function Crypt() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Decrypt text with a key
         * @param {String} text 
         * @param {String} password
         */
        this.Decrypt = function(text,password) {}
        
        /**
         * Encrypt text with a key
         * @param {String} text 
         * @param {String} password
         */
        this.Encrypt = function(text,password) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Build a hash of a string for one-way encryption
         * @param {String} text 
         * @param {String} mode MD5|SHA|SHA
         * @param {String} options Wrap
         */
        this.Hash = function(text,mode,options) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
    }
    return new Crypt;
}

/**
 * CreateDebug is used to show the console as overlay above the app in order to see the debug logs.
 * 
 */
app.CreateDebug = function() {}

/**
 * Custom dialogs appear on top of the app and thus can be used to show temporary information or collect data from the user. They are also useful for displaying configuration or settings controls
 * @param {String} title 
 * @param {String} options String comma “,” separated AutoCancel|NoCancel,NoTitle,NoFocus,NoDim,NoKeys,TouchModal,NoTouch,Modal,Kiosk,Old:apply old list style affecting title style and unrounded corners
 */
app.CreateDialog = function(title,options) {
        
    function Dialog() {
        
        /**
         * Add the content layout to the dialog
         * @param {AppObject} layout CreateLayout
         */
        this.AddLayout = function(layout) {
            return app.CreateLayout();
        }
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Hide the control and remove it from the screen
         * 
         */
        this.Dismiss = function() {}
        
        /**
         * En/Disables the device back key to hide the dialog
         * @param {Boolean} enable
         */
        this.EnableBackKey = function(enable) {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the height of the title bar
         * 
         */
        this.GetTitleHeight = function() {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Removes a content layout
         * @param {AppObject} layout CreateLayout
         */
        this.RemoveLayout = function(layout) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius Number pixel
         */
        this.SetBackColor = function(color,radius) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * %cb% the device's back button was pressed while the dialog was on front
         * @param {Function} callback
         */
        this.SetOnBack = function(callback) {}
        
        /**
         * %cb% the dialog is cancelled
         * @param {Function} callback
         */
        this.SetOnCancel = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Changes the title of the dialog
         * @param {String} title
         */
        this.SetTitle = function(title) {}
        
        /**
         * Changes the color of the title divider
         * @param {String} clr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTitleColor = function(clr) {}
        
        /**
         * Changes the title divider color of the dialog
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTitleDividerColor = function(color) {}
        
        /**
         * Changes the divider height of the dialog
         * @param {Number} height Number pixel
         */
        this.SetTitleDividerHeight = function(height) {}
        
        /**
         * Changes the height of the title bar
         * @param {Number} height Number pixel
         * @param {String} options String comma “,” separated px|sp|dip|mm|pt
         */
        this.SetTitleHeight = function(height,options) {}
        
        /**
         * Changes the text size of the dialog title
         * @param {Number} size 
         * @param {String} options px|sp|dip|mm|pt
         */
        this.SetTitleTextSize = function(size,options) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Dialog;
}

/**
 * The Downloader component can be used to download a file straight from the internet to your phone or tablet's local storage. You can download a file with the **Download** method which accepts a _source url_ and a _target directory_: <js>dwn.Download( srcFileUrl, targetDir );</js
 * @param {String} options String comma “,” separated NoDialog|Light
 */
app.CreateDownloader = function(options) {
        
    function Downloader() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Start downloading one or multiple files
         * @param {} url [urls:str_url]
         * @param {String} fldr String path to file or folder ( “/absolute/...” or “relative/...” )
         * @param {String} name 
         * @param {String} headers
         */
        this.Download = function(url,fldr,name,headers) {}
        
        /**
         * Returns the current download progress
         * 
         */
        this.GetProgress = function() {}
        
        /**
         * Returns the target download size in bytes
         * 
         */
        this.GetSize = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Checks if all downloads are completed
         * 
         */
        this.IsComplete = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * %cb% download is cancelled
         * @param {Function} callback
         */
        this.SetOnCancel = function(callback) {}
        
        /**
         * %cb% all downloads are finished
         * @param {Function} callback
         */
        this.SetOnComplete = function(callback) {}
        
        /**
         * %cb% a file is download
         * @param {Function} callback
         */
        this.SetOnDownload = function(callback) {}
        
        /**
         * %cb% an error occurred while downloading a file
         * @param {Function} callback
         */
        this.SetOnError = function(callback) {}
    }
    return new Downloader;
}

/**
 * The Email component allows us to send and receive emails without user interaction
 * @param {String} account email
 * @param {String} password password
 */
app.CreateEmail = function(account,password) {
        
    function Email() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Start receiving emails from a given folder
         * @param {String} folder 
         * @param {Number} maxCount Number integer
         * @param {String} filter
         */
        this.Receive = function(folder,maxCount,filter) {}
        
        /**
         * Send an email to someone
         * @param {String} subject 
         * @param {String} body 
         * @param {String} sender email address
         * @param {String} recipients email address
         * @param {String} attach String path to file or folder ( “/absolute/...” or “relative/...” )
         */
        this.Send = function(subject,body,sender,recipients,attach) {}
        
        /**
         * Set IMAP or POP3 settings for receiving messages
         * @param {String} server imap/pop.gmail.com:google|imap/pop.mail.yahoo.com:yahoo|imap/pop.gmx.net:gmx
         * @param {Number} port Number integer 993:imap|995:pop
         */
        this.SetIMAP = function(server,port) {}
        
        /**
         * %cb% a message is received
         * @param {Function} callback
         */
        this.SetOnMessage = function(callback) {}
        
        /**
         * %cb% a status changed
         * @param {Function} callback
         */
        this.SetOnStatus = function(callback) {}
        
        /**
         * Set SMTP settings for sending messages
         * @param {String} server smtp.gmail.com:google,smtp.mail.yahoo.com:yahoo,mail.gmx.net:gmx
         * @param {Number} port Number integer 465:SSL|578:TLS (gmail&comma; yahoo)|587:gmx
         */
        this.SetSMTP = function(server,port) {}
    }
    return new Email;
}

/**
 * Returns a File object
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} mode r|w|rw
 */
app.CreateFile = function(file,mode) {
        
    function File() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Close Fil
         * 
         */
        this.Close = function() {}
        
        /**
         * Returns the file size in bytes
         * 
         */
        this.GetLength = function() {}
        
        /**
         * Returns the current pointer position in the file
         * 
         */
        this.GetPointer = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Reads a amount of bytes from the file
         * @param {Number} len Number integer
         * @param {String} mode Int|Text|Hex
         */
        this.ReadData = function(len,mode) {}
        
        /**
         * Read numeric data from file
         * @param {String} type Byte|UByte|Bool|Float|FloatLE|Long|LongLE|Short|UShort|ShortLE|UShortLE|Int|UInt|IntLE
         */
        this.ReadNumber = function(type) {}
        
        /**
         * Read data from the file as text
         * @param {String} type UTF:read UTF
         */
        this.ReadText = function(type) {}
        
        /**
         * Asynchronously reads a single character or a line as text
         * @param {String} type Line:"read one line terminated by &bsol;&bsol;n&comma; &bsol;&bsol;r or &bsol;&bsol;r&bsol;&bsol;n"|Char:read big
         * @param {Function} callback
         */
        this.ReadTextAsync = function(type,callback) {}
        
        /**
         * CHange pointer position to a given byte in the file
         * @param {Number} offset Number integer
         */
        this.Seek = function(offset) {}
        
        /**
         * Allocate memory for a file
         * @param {Number} len Number integer
         */
        this.SetLength = function(len) {}
        
        /**
         * Let the pointer skip a given number of bytes
         * @param {Number} bytes Number integer
         */
        this.Skip = function(bytes) {}
        
        /**
         * Write data to the file
         * @param {String} data FA,FB,FC|250,251,252|abc46:low order 8
         * @param {String} mode Hex|Int|Text
         */
        this.WriteData = function(data,mode) {}
        
        /**
         * Writes a number to the file
         * @param {Number} data 
         * @param {String} type Byte|UByte|Bool|Float|FloatLE|Long|LongLE|Short|UShort|ShortLE|UShortLE|Int|UInt|IntLE
         */
        this.WriteNumber = function(data,type) {}
        
        /**
         * writes text to fil
         * @param {} data [ bytes:num_int ]
         * @param {String} type UTF:write UTF
         */
        this.WriteText = function(data,type) {}
    }
    return new File;
}

/**
 * CreateGame automatically turns your app in game mode and adds a [GameView](CreateGameView.htm) control to it which loads the referenced script
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} orient Portrait|Landscape
 */
app.CreateGame = function(file,orient) {
        
    function Game() {
        
        /**
         * 
         * 
         */
        this.game = function() {}
        
        /**
         * 
         * 
         */
        this.lay = function() {}
    }
    return new Game;
}

/**
 * The GameView is a blindingly fast container for game development with a physics engine and PIXI as underlying sprite container which uses the GPU to render graphics. The GameView runs a standalone script which can communicate with the main app via gfx.Execute or gmv.Execute vice versa
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated
 */
app.CreateGameView = function(width,height,options) {
        
    function GameView() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Execute some code inside the GameView
         * @param {String} js String javascript code
         */
        this.Execute = function(js) {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetFile = function(mode) {}
        
        /**
         * Change the targeted framerate
         * @param {Number} fps Number frames per second
         */
        this.SetFrameRate = function(fps) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new GameView;
}

/**
 * GLView is a fast 2D canvas suitable for drawing and moving graphics around on the screen quickly, ideal for games. The options parameter should be always set to “Fast2d”
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options fast2d
 */
app.CreateGLView = function(width,height,options) {
        
    function GLView() {
        
        /**
         * width/height relatio
         * 
         */
        this.aspect = function() {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * [HTMLDivElement
         * 
         */
        this.canvas = function() {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Create a sprite object which can be drawn on the GLVie
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {Function} callback
         */
        this.CreateImage = function(file,callback) {}
        
        /**
         * Draws an image to the canva
         * @param {Object} image glv Image
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} w Number fraction (0..1)
         * @param {Number} h Number fraction (0..1)
         * @param {Number} angle Number angle in degrees (0..360)
         */
        this.DrawImage = function(image,x,y,w,h,angle) {}
        
        /**
         * Draws a part of an image to the canvas
         * @param {Object} sheet GLV Image
         * @param {Number} sx Number pixel
         * @param {Number} sy Number pixel
         * @param {Number} sw Number pixel
         * @param {Number} sh Number pixel
         * @param {Number} dx Number fraction (0..1)
         * @param {Number} dy Number fraction (0..1)
         * @param {Number} dw Number fraction (0..1)
         * @param {Number} dh Number fraction (0..1)
         * @param {Number} angle Number angle in degrees (0..360)
         */
        this.DrawSprite = function(sheet,sx,sy,sw,sh,dx,dy,dw,dh,angle) {}
        
        /**
         * calls _gfx.Exec(
         * @param {unknown} p1 
         * @param {unknown} p2 
         * @param {unknown} p3 
         * @param {unknown} p4
         */
        this._Exec = function(p1,p2,p3,p4) {}
        
        /**
         * 
         * @param {unknown} p1 
         * @param {unknown} p2 
         * @param {unknown} p3 
         * @param {unknown} p4
         */
        this._Execute = function(p1,p2,p3,p4) {}
        
        /**
         * Destroys the control with an explode animation and sound
         * 
         */
        this.Explode = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns the current FastCanvas contex
         * 
         */
        this.GetContext = function() {}
        
        /**
         * Captures the current cached context to a png image.
         * @param {Number} x Number pixel
         * @param {Number} y Number pixel
         * @param {Number} w Number pixel
         * @param {Number} h Number pixel
         * @param {} fileName 
         * @param {Function} successCallback 
         * @param {Function} errorCallback
         */
        this.GetContext.ctx.capture = function(x,y,w,h,fileName,successCallback,errorCallback) {}
        
        /**
         * <deprecated does nothing. ctx is automatically cleared after render()
         * @param {Number} x Number pixel
         * @param {Number} y Number pixel
         * @param {Number} width Number pixel
         * @param {Number} height Number pixel
         */
        this.GetContext.ctx.clearRect = function(x,y,width,height) {}
        
        /**
         * 
         * 
         */
        this.GetContext.ctx._drawCommands = function() {}
        
        /**
         * Draws a part of a glv image to the glv context, where s are source coordinates and d destination coordinates
         * @param {Object} image glv Image
         * @param {Number} sx Number pixel
         * @param {Number} sy Number pixel
         * @param {Number} sw Number pixel
         * @param {Number} sh Number pixel
         * @param {Number} dx Number pixel
         * @param {Number} dy Number pixel
         * @param {Number} dw Number pixel
         * @param {Number} dh Number pixel
         */
        this.GetContext.ctx.drawImage = function(image,sx,sy,sw,sh,dx,dy,dw,dh) {}
        
        /**
         * 
         * 
         */
        this.GetContext.ctx._globalAlpha = function() {}
        
        /**
         * 
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
         * @param {Function} successCallback 
         * @param {Function} errorCallback
         */
        this.GetContext.ctx.loadTexture = function(image,successCallback,errorCallback) {}
        
        /**
         * render the draw commands to the contex
         * 
         */
        this.GetContext.ctx.render = function() {}
        
        /**
         * Reset all transformations to defaul
         * 
         */
        this.GetContext.ctx.resetTransform = function() {}
        
        /**
         * Restore a previously saved context stat
         * 
         */
        this.GetContext.ctx.restore = function() {}
        
        /**
         * Rotates the current applied transformatio
         * @param {Number} angle Number angle in radient (0..2*π)
         */
        this.GetContext.ctx.rotate = function(angle) {}
        
        /**
         * Saves the current context stat
         * 
         */
        this.GetContext.ctx.save = function() {}
        
        /**
         * Scales the current applied transformation matri
         * @param {Number} a Number fraction (0..1)
         * @param {Number} d Number fraction (0..1)
         */
        this.GetContext.ctx.scale = function(a,d) {}
        
        /**
         * Set the current transformation matri
         * @param {Number} a 
         * @param {Number} b 
         * @param {Number} c 
         * @param {Number} d 
         * @param {Number} tx 
         * @param {Number} ty
         */
        this.GetContext.ctx.setTransform = function(a,b,c,d,tx,ty) {}
        
        /**
         * Apply an other transformation matrix to the current on
         * @param {Number} a 
         * @param {Number} b 
         * @param {Number} c 
         * @param {Number} d 
         * @param {Number} tx 
         * @param {Number} ty
         */
        this.GetContext.ctx.transform = function(a,b,c,d,tx,ty) {}
        
        /**
         * 'Moves' the current applied transformation matri
         * @param {Number} tx Number pixel
         * @param {Number} ty Number pixel
         */
        this.GetContext.ctx.translate = function(tx,ty) {}
        
        /**
         * 
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
         */
        this.GetContext.ctx.unloadTexture = function(image) {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * 
         * 
         */
        this.height = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Render all draw commands to the canva
         * 
         */
        this.Render = function() {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags a finger over the screen
         * @param {Function} callback
         */
        this.SetOnTouchMove = function(callback) {}
        
        /**
         * %cb% the users finger leaves the screen
         * @param {Function} callback
         */
        this.SetOnTouchUp = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired
         * @param {Boolean} touchable
         */
        this.SetTouchable = function(touchable) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * 
         * 
         */
        this.width = function() {}
    }
    return new GLView;
}

/**
 * Image controls can be used to display images such like png, jpg or gif
 * @param {String} file String file path or content:// uri
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options String comma “,” separated fix:image with fixed resolution,alias,px:use pixel values for size,Button:causes image to depress like a button when touched,ScaleCenter,async:loads the image asynchronously,FontAwesome,Resize,TouchThrough,Icon:allows loading of app icons,wallpaper,NoPlay:prevent gifs from playing automatically
 * @param {Number} pxw Number pixel
 * @param {Number} pxh Number pixel
 */
app.CreateImage = function(file,width,height,options,pxw,pxh) {
        
    function Image() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Clears everything on the image except the background
         * 
         */
        this.Clear = function() {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Cache draw command when not autoupdatin
         * @param {String} func 
         * @param {String} p1 
         * @param {Number} p2 
         * @param {Number} p3 
         * @param {Number} p4 
         * @param {Number} p5 
         * @param {Number} p6 
         * @param {Number} p7
         */
        this._Draw = function(func,p1,p2,p3,p4,p5,p6,p7) {}
        
        /**
         * Draws an elliptical arc by specifying the corners of the surrounding rectangle and the angle range of the arc to be drawn
         * @param {} x1 
         * @param {} y1 
         * @param {} x2 
         * @param {} y2 
         * @param {Number} start Number angle in degrees (0..360)
         * @param {Number} sweep Number angle in degrees (0..360)
         */
        this.DrawArc = function(x1,y1,x2,y2,start,sweep) {}
        
        /**
         * Draws a Circle
         * @param {Number} x 
         * @param {Number} y 
         * @param {} radius
         */
        this.DrawCircle = function(x,y,radius) {}
        
        /**
         * Draws the frame on a given time of a loaded gif file
         * @param {Number} ms Number milliseconds
         */
        this.DrawFrame = function(ms) {}
        
        /**
         * Draws an Image:dso-CreateImage.
         * @param {AppObject} image CreateImage
         * @param {Number} x 
         * @param {Number} y 
         * @param {Number} w 
         * @param {Number} h 
         * @param {Number} angle Number angle in degrees (0..360)
         * @param {String} mode ADD|CLEAR|DARKEN|DST|DST_ATOP|DST_IN|DST_OUT|DST_OVER|LIGHTEN|MULTIPLY|OVERLAY|SCREEN|SRC|SRC_ATOP|SRC_IN|SRC_OUT|SRC_OVER|XOR
         */
        this.DrawImage = function(image,x,y,w,h,angle,mode) {}
        
        /**
         * Draws an image with a 2d [transformation matrix](https://docs.rainmeter.net/tips/transformation-matrix-guide)
         * @param {AppObject} image CreateImage
         * @param {List} matrix [a, b, c, d, tx, ty]
         */
        this.DrawImageMtx = function(image,matrix) {}
        
        /**
         * Draws a line
         * @param {Number} x1 
         * @param {Number} y1 
         * @param {Number} x2 
         * @param {Number} y2
         */
        this.DrawLine = function(x1,y1,x2,y2) {}
        
        /**
         * Draws a single pixel
         * @param {Number} x 
         * @param {Number} y
         */
        this.DrawPoint = function(x,y) {}
        
        /**
         * Draws a rectangle
         * @param {Number} x1 
         * @param {Number} y1 
         * @param {Number} x2 
         * @param {Number} y2
         */
        this.DrawRectangle = function(x1,y1,x2,y2) {}
        
        /**
         * Draws a vertically centered graph in relation to the specified range in both direction.
         * @param {List} data [ data:num_int ]
         * @param {Number} range
         */
        this.DrawSamples = function(data,range) {}
        
        /**
         * Draws a text
         * @param {String} txt 
         * @param {Number} x 
         * @param {Number} y
         */
        this.DrawText = function(txt,x,y) {}
        
        /**
         * Applies certain modifications to the image data, such as translate, scale, skew or alpha
         * 
         */
        this.Flatten = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the name set via SetName
         * 
         */
        this.GetName = function() {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns the [r,g,b] values from a pixel on the image
         * @param {Number} x 
         * @param {Number} y
         */
        this.GetPixelColor = function(x,y) {}
        
        /**
         * Returns the raw, png or jpg image data encoded as base64
         * @param {String} format rawbase64|pngbase64|jpgbase64
         * @param {Number} left Number integer
         * @param {Number} top Number integer
         * @param {Number} width Number integer
         * @param {Number} height Number integer
         */
        this.GetPixelData = function(format,left,top,width,height) {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Measure width and height of a given text with the current image settings
         * @param {String} txt
         */
        this.MeasureText = function(txt) {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Moves the content of the image to the specified position
         * @param {Number} x 
         * @param {Number} y
         */
        this.Move = function(x,y) {}
        
        /**
         * Resets all transformations
         * 
         */
        this.Reset = function() {}
        
        /**
         * Rotates the content
         * @param {Number} angle Number angle in degrees (0..360)
         * @param {Number} pivotX 
         * @param {Number} pivotY
         */
        this.Rotate = function(angle,pivotX,pivotY) {}
        
        /**
         * Saves the image to a file on the local filesystem
         * @param {String} fileName String path to file ( “/absolute/...” or “relative/...” )
         * @param {Number} quality Number percent for jpg files
         */
        this.Save = function(fileName,quality) {}
        
        /**
         * Scales the content by the given factors
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.Scale = function(x,y) {}
        
        /**
         * Change the image alpha to a value between 0 and 255, where 0 is full transparent
         * @param {Number} alpha Number 0-255
         */
        this.SetAlpha = function(alpha) {}
        
        /**
         * En/disable updating the view after every drawing or transformation method
         * @param {Boolean} onoff
         */
        this.SetAutoUpdate = function(onoff) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Fills the image with a specific color
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the font style by defining a font file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetFontFile = function(file) {}
        
        /**
         * Set the content to an image:dso-"CreateImage" control or specify a path to an image which will then be loaded
         * @param {} image Image
         * @param {Number} width Number fraction (0..1)
         * @param {Number} height Number fraction (0..1)
         * @param {String} options rescale
         */
        this.SetImage = function(image,width,height,options) {}
        
        /**
         * Set the stroke width to a number in pixels
         * @param {Number} width Number pixel
         */
        this.SetLineWidth = function(width) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Set a minimum timeout between two touch 'move' actions fired
         * @param {Number} milliseconds Number milliseconds
         */
        this.SetMaxRate = function(milliseconds) {}
        
        /**
         * Change the name of the image
         * @param {String} name
         */
        this.SetName = function(name) {}
        
        /**
         * %cb% the image has loaded in “async” mode
         * @param {Function} callback
         */
        this.SetOnLoad = function(callback) {}
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags a finger over the screen
         * @param {Function} callback
         */
        this.SetOnTouchMove = function(callback) {}
        
        /**
         * %cb% the users finger leaves the screen
         * @param {Function} callback
         */
        this.SetOnTouchUp = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Change the current paint color for drawing methods
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetPaintColor = function(color) {}
        
        /**
         * Change the current paint style for drawing methods
         * @param {String} style Fill|Line
         */
        this.SetPaintStyle = function(style) {}
        
        /**
         * Set the image to base64 encoded pixel data
         * @param {String} data String base64 encoded &lt;rawbase64&gt;|data&colon;image/jpg;base64&comma;&lt;jpgbase64&gt;,data&colon;image/png;base64&comma;&lt;pngbase64&gt;
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px,icon,resize|rescale|square,fix:set bitmap size
         */
        this.SetPixelData = function(data,width,height,options) {}
        
        /**
         * En-/Disable pixel mode for the image so that all drawing methods use either control relative or pixel values
         * @param {Boolean} onoff
         */
        this.SetPixelMode = function(onoff) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the size of drawn text
         * @param {Number} size
         */
        this.SetTextSize = function(size) {}
        
        /**
         * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired
         * @param {Boolean} touchable
         */
        this.SetTouchable = function(touchable) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Skews the content
         * @param {Number} x 
         * @param {Number} y
         */
        this.Skew = function(x,y) {}
        
        /**
         * Transform the content with a 2d transformation matrix
         * @param {List} matrix
         */
        this.Transform = function(matrix) {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Update the view in disabled AutoUpdate mode
         * 
         */
        this.Update = function() {}
    }
    return new Image;
}

/**
 * Layouts are container objects which are used to visually organize graphical objects (controls), such as text, buttons and images on the screen. There are 4 types of layouts: _**“Linear”**_, _**“Absolute”**_, _**“Frame”**_ and _**“Card”**_
 * @param {String} type Linear|Absolute|Frame|Card
 * @param {String} options String comma “,” separated TouchThrough:forwards touch events to underlying children,TouchSpy:spies for touch events on all children,Left|Top|Right|Bottom|Center|H/VCenter,Wrap,Horizontal|Vertical,FillX/Y
 */
app.CreateLayout = function(type,options) {
        
    function Layout() {
        
        /**
         * Adds a control to the layout
         * @param {AppObject} child 
         * @param {Number} order Number integer
         */
        this.AddChild = function(child,order) {
            return app.CreateChild();
        }
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Moves a child in front of all other children
         * @param {AppObject} child
         */
        this.ChildToFront = function(child) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Destroys and removes a child from the layout
         * @param {AppObject} child
         */
        this.DestroyChild = function(child) {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns the z order of a child
         * @param {AppObject} child
         */
        this.GetChildOrder = function(child) {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Removes a child from the layout
         * @param {AppObject} child
         */
        this.RemoveChild = function(child) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set margins of top-level children
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetChildMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Change the text size of top-level children
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetChildTextSize = function(size,mode) {}
        
        /**
         * Applies a corner radius to card layouts
         * @param {Number} radius Number pixel
         */
        this.SetCornerRadius = function(radius) {}
        
        /**
         * Applies a shadow to card layouts
         * @param {Number} elevation Number pixel
         */
        this.SetElevation = function(elevation) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Adjust the placing of contained children
         * @param {String} gravity Left,Top,Right,Bottom,VCenter,HCenter,FillX,FillY,FillXY
         */
        this.SetGravity = function(gravity) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines a callback function which is called when the content of a child control has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChildChange = function(callback) {}
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags a finger over the screen
         * @param {Function} callback
         */
        this.SetOnTouchMove = function(callback) {}
        
        /**
         * %cb% the users finger leaves the screen
         * @param {Function} callback
         */
        this.SetOnTouchUp = function(callback) {}
        
        /**
         * Change the children orientation
         * @param {String} orient Horizontal|Vertical
         */
        this.SetOrientation = function(orient) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired
         * @param {Boolean} touchable
         */
        this.SetTouchable = function(touchable) {}
        
        /**
         * Define whether the layout should forward OnTouch events to underlying controls
         * @param {Boolean} through
         */
        this.SetTouchThrough = function(through) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Layout;
}

/**
 * If you want to display many dataset of the same structure you might consider using the **List** object
 * @param {String} list String separated
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated bold:bold item titles|Expand:Expand list to full height inside scrollers,Menu:applies various settings to make the list appear like an in
 * @param {String} delim
 */
app.CreateList = function(list,width,height,options,delim) {
        
    function List() {
        
        /**
         * Adds an entry to the list
         * @param {String} title 
         * @param {String} body 
         * @param {} image
         */
        this.AddItem = function(title,body,image) {
            return app.CreateItem();
        }
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Returns item data of an item with a specific title
         * @param {String} title
         */
        this.GetItem = function(title) {}
        
        /**
         * Returns item data of an item on a specific index
         * @param {Number} index Number integer
         */
        this.GetItemByIndex = function(index) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the amount of items in the lists
         * 
         */
        this.GetLength = function() {}
        
        /**
         * When passing no argument it returns the full list data as a list of objects. Otherwise it will return a string list instead
         * @param {String} delim
         */
        this.GetList = function(delim) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Inserts an item at s specific index in the list
         * @param {Number} index Number integer
         * @param {String} title 
         * @param {String} body 
         * @param {} image
         */
        this.InsertItem = function(index,title,body,image) {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Removes all entries of the list
         * 
         */
        this.RemoveAll = function() {}
        
        /**
         * Removes an item with a specific title from the list
         * @param {String} title
         */
        this.RemoveItem = function(title) {}
        
        /**
         * Removes an item on a specific index from the lis
         * @param {Number} index Number integer
         */
        this.RemoveItemByIndex = function(index) {}
        
        /**
         * Scrolls the list to an item with a specific title
         * @param {String} title 
         * @param {String} body
         */
        this.ScrollToItem = function(title,body) {}
        
        /**
         * Scrolls the list to an item on a specific index
         * @param {Number} index Number integer
         */
        this.ScrollToItemByIndex = function(index) {}
        
        /**
         * Highlights an item with a specific title
         * @param {String} title 
         * @param {String} body 
         * @param {Boolean} scroll
         */
        this.SelectItem = function(title,body,scroll) {}
        
        /**
         * Highlights an item on a specific index
         * @param {Number} index Number integer
         * @param {Boolean} scroll
         */
        this.SelectItemByIndex = function(index,scroll) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Changes the coloumn withs for title, body and icon. Often used with the “Horiz” option
         * @param {Number} icon Number fraction (0..1)
         * @param {Number} title Number fraction (0..1)
         * @param {Number} body Number fraction (0..1)
         * @param {String} mode String comma “,” separated px|sp|dip|mm|pt
         */
        this.SetColumnWidths = function(icon,title,body,mode) {}
        
        /**
         * Changes the item divider height and color
         * @param {Number} height Number fraction (0..1)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetDivider = function(height,color) {}
        
        /**
         * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetEllipsize = function(mode) {}
        
        /**
         * Will cause the element titles to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetEllipsize1 = function(mode) {}
        
        /**
         * Will cause the element bodies to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetEllipsize2 = function(mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the font style by defining a font file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetFontFile = function(file) {}
        
        /**
         * Change the highlight color of titles when selected
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetHiTextColor1 = function(color) {}
        
        /**
         * Change the highlight color of bodies when selected
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetHiTextColor2 = function(color) {}
        
        /**
         * Change the outer icon border distance
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode String comma “,” separated px|sp|dip|mm|pt
         */
        this.SetIconMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Changes the icon size
         * @param {Number} size 
         * @param {String} mode String comma “,” separated px|sp|dip|mm|pt
         */
        this.SetIconSize = function(size,mode) {}
        
        /**
         * Change the content of an element with a specific title
         * @param {String} title 
         * @param {String} newTitle 
         * @param {String} newBody 
         * @param {String} newImage String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetItem = function(title,newTitle,newBody,newImage) {}
        
        /**
         * Change the content of an element on a specific index
         * @param {Number} index Number integer
         * @param {String} newTitle 
         * @param {String} newBody 
         * @param {String} newImage String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetItemByIndex = function(index,newTitle,newBody,newImage) {}
        
        /**
         * Set the color of a list item
         * @param {String} name 
         * @param {String} textClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetItemColor = function(name,textClr,backClr) {}
        
        /**
         * Set the color of a list item by its index
         * @param {Number} index Number integer
         * @param {String} textClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetItemColorByIndex = function(index,textClr,backClr) {}
        
        /**
         * Set the content of the whole list
         * @param {String} list String separated title|title&colon;icon|title&colon;body&colon;icon
         * @param {String} delim
         */
        this.SetList = function(list,delim) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Define a callback function that is called when the user touches a list item
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches a list item
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the default text color of titles
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor1 = function(color) {}
        
        /**
         * Change the default text color of bodies
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor2 = function(color) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         * @param {String} options inner:around each individual title and body|outer:around both title and body together
         */
        this.SetTextMargins = function(left,top,right,bottom,mode,options) {}
        
        /**
         * Define a shadow displayed around the control.
         * @param {Number} radius Number integer
         * @param {Number} dx Number integer
         * @param {Number} dy Number integer
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextShadow = function(radius,dx,dy,color) {}
        
        /**
         * Apply text shadows to titles
         * @param {Number} radius Number angle in degrees (0..360)
         * @param {Number} dx Number integer
         * @param {Number} dy Number integer
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextShadow1 = function(radius,dx,dy,color) {}
        
        /**
         * Apply text shadows to bodies
         * @param {Number} radius Number angle in degrees (0..360)
         * @param {Number} dx Number integer
         * @param {Number} dy Number integer
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextShadow2 = function(radius,dx,dy,color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the text size for titles
         * @param {Number} size 
         * @param {String} mode String comma “,” separated px|sp|dip|mm|pt
         */
        this.SetTextSize1 = function(size,mode) {}
        
        /**
         * Change the text size for bodies
         * @param {Number} size 
         * @param {String} mode String comma “,” separated px|sp|dip|mm|pt
         */
        this.SetTextSize2 = function(size,mode) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new List;
}

/**
 * If you want a quick way to let the user select one or even multiple items of a given dataset you can use the ListDialog
 * @param {String} title 
 * @param {String} list 
 * @param {String} options Multi
 */
app.CreateListDialog = function(title,list,options) {
        
    function ListDialog() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Hide the control and remove it from the screen
         * 
         */
        this.Dismiss = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Define a callback function that is called when the user touches a list item
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the dialog title
         * @param {String} title
         */
        this.SetTitle = function(title) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
    }
    return new ListDialog;
}

/**
 * The Locator component can be used to find your whereabouts on the planet using either your device's GPS or information from your network. The provider specifies where the locator should retreive its information from . “Network” means get the location from the cell network and wifi, “GPS” tells the locator to use the device's GP
 * @param {String} type String comma “,” separated GPS,Network
 * @param {String} options String comma “,” separated
 */
app.CreateLocator = function(type,options) {
        
    function Locator() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the approximate initial bearing in degrees East of true North when traveling along the shortest path between this location and the given location
         * @param {Number} latitude 
         * @param {Number} longitude
         */
        this.GetBearingTo = function(latitude,longitude) {}
        
        /**
         * Returns the approximate distance in meters between this location and the given location
         * @param {Number} latitude 
         * @param {Number} longitude
         */
        this.GetDistanceTo = function(latitude,longitude) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Define a function which is called when some of the values changed
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Set Locator update frequency in second
         * @param {Number} rate Number seconds
         */
        this.SetRate = function(rate) {}
        
        /**
         * Start the locator
         * 
         */
        this.Start = function() {}
        
        /**
         * Stop the locator
         * 
         */
        this.Stop = function() {}
    }
    return new Locator;
}

/**
 * The MediaPlayer object can be used to play sound files from the phone or tablet
 * 
 */
app.CreateMediaPlayer = function() {
        
    function MediaPlayer() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Close the media player and thus make it unuseable for further use
         * 
         */
        this.Close = function() {}
        
        /**
         * Returns the total duration of the currently loaded song in seconds
         * 
         */
        this.GetDuration = function() {}
        
        /**
         * Returns the elapsed playtime in seconds
         * 
         */
        this.GetPosition = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Checks if the media player will replay the song from the begining if it has finished
         * 
         */
        this.IsLooping = function() {}
        
        /**
         * Checks if the media player is currently playing
         * 
         */
        this.IsPlaying = function() {}
        
        /**
         * Checks if the media player is ready for use
         * 
         */
        this.IsReady = function() {}
        
        /**
         * Pause the current playing song
         * 
         */
        this.Pause = function() {}
        
        /**
         * Play the current loaded song from the last paused time or from a given start time in in seconds
         * 
         */
        this.Play = function() {}
        
        /**
         * Seek the player to a given time in seconds
         * @param {Number} time Number float
         */
        this.SeekTo = function(time) {}
        
        /**
         * Load a sound file to the media player
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetFile = function(file) {}
        
        /**
         * Define whether the media player should replay the song when completed
         * @param {Boolean} loop
         */
        this.SetLooping = function(loop) {}
        
        /**
         * %cb% a sound file has finished playing
         * @param {Function} callback
         */
        this.SetOnComplete = function(callback) {}
        
        /**
         * %cb% the player is ready for use
         * @param {Function} callback
         */
        this.SetOnReady = function(callback) {}
        
        /**
         * %cb% a seeking process is done
         * @param {Function} callback
         */
        this.SetOnSeekDone = function(callback) {}
        
        /**
         * Change the volume of the playing song
         * @param {Number} left Number percent
         * @param {Number} right Number percent
         */
        this.SetVolume = function(left,right) {}
        
        /**
         * Stop playing a song
         * 
         */
        this.Stop = function() {}
    }
    return new MediaPlayer;
}

/**
 * The MediaStore is used to query audio information from the android provider or from the device in the “/sdcard/Music” folder
 * 
 */
app.CreateMediaStore = function() {
        
    function MediaStore() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Loads the album image to an existing image:dso-CreateImage
         * @param {AppObject} image CreateImage
         * @param {Number} id Number integer
         * @param {String} options internal|external
         */
        this.GetAlbumArt = function(image,id,options) {}
        
        /**
         * Loads the song image to an existing image:dso-CreateImage
         * @param {AppObject} image CreateImage
         * @param {Number} id Number integer
         * @param {String} options internal|external
         */
        this.GetSongArt = function(image,id,options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Search for media albums
         * @param {String} filter String sql code
         * @param {} sort album,_id,albumArt,artist,numSongs,firstYear,lastYear
         * @param {String} options internal|external
         */
        this.QueryAlbums = function(filter,sort,options) {}
        
        /**
         * Search for media artists
         * @param {String} filter String sql code
         * @param {} sort _id,artist,numAlbums,numTracks
         * @param {String} options internal|external
         */
        this.QueryArtists = function(filter,sort,options) {}
        
        /**
         * Search for media
         * @param {String} filter String sql code
         * @param {} sort title,_id,duration,size,uri,album,albumID,artist,artistId
         * @param {String} options internal|external
         */
        this.QueryMedia = function(filter,sort,options) {}
        
        /**
         * %cb% an album query has finished
         * @param {Function} callback
         */
        this.SetOnAlbumsResult = function(callback) {}
        
        /**
         * %cb% a artist query has finished
         * @param {Function} callback
         */
        this.SetOnArtistsResult = function(callback) {}
        
        /**
         * %cb% a media query has finished
         * @param {Function} callback
         */
        this.SetOnMediaResult = function(callback) {}
    }
    return new MediaStore;
}

/**
 * Add music to your app. See the @../Music/Music.html page for more detail
 * 
 */
app.CreateMusic = function() {}

/**
 * NetClients can be used to communicate with servers on the web. You can choose between two different protocols
 * @param {String} type UDP:fast but does not guarantee data correctness|TCP:slow but guarantees data correctness,Raw:drop 4 Byte header before every message
 */
app.CreateNetClient = function(type) {
        
    function NetClient() {
        
        /**
         * Receive TCP received data automatically by calling the OnReceive callback
         * @param {String} server String url path
         * @param {Number} port Number integer
         * @param {String} mode US
         */
        this.AutoReceive = function(server,port,mode) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Closes the NetClient socket
         * 
         */
        this.Close = function() {}
        
        /**
         * Connect the NetClient to a server
         * @param {String} address String url path
         * @param {Number} port Number integer
         */
        this.Connect = function(address,port) {}
        
        /**
         * Disconnect the NetClient from the server
         * 
         */
        this.Disconnect = function() {}
        
        /**
         * Downloads a file via TCP from the server
         * @param {String} file String url path
         */
        this.DownloadFile = function(file) {}
        
        /**
         * Returns the broadcast address of UDP connections
         * 
         */
        this.GetBroadcastAddress = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Checks if the NetClient is connected to a server
         * 
         */
        this.IsConnected = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Receive data as bytes
         * @param {String} mode Int|Hex
         */
        this.ReceiveBytes = function(mode) {}
        
        /**
         * Receive an UDP Datagram
         * @param {String} mode US
         * @param {Number} port Number integer
         * @param {Number} timeout 
         * @param {String} options &lt;BUFSIZ:"“1k,2k,4k,8k,16k,32k,64k”"&gt;
         */
        this.ReceiveDatagram = function(mode,port,timeout,options) {}
        
        /**
         * Receive datagrams over UDP and calls the OnReceive callback for each one
         * @param {Number} port Number integer
         * @param {String} mode US
         * @param {String} options &lt;BUFSIZ:"“1k,2k,4k,8k,16k,32k,64k”"&gt;
         */
        this.ReceiveDatagrams = function(port,mode,options) {}
        
        /**
         * Receive a file via TCP from the server
         * @param {String} file 
         * @param {Number} wait
         */
        this.ReceiveFile = function(file,wait) {}
        
        /**
         * Receive text from TCP connection
         * @param {String} mode US
         */
        this.ReceiveText = function(mode) {}
        
        /**
         * Receive video from TCP connection.
         * @param {Number} port 
         * @param {AppObject} img CreateImage
         */
        this.ReceiveVideoStream = function(port,img) {}
        
        /**
         * Send bytes over TCP connection
         * @param {List} data [ bytes:num_byt ]||str_com
         * @param {String} mode Int|Hex
         */
        this.SendBytes = function(data,mode) {}
        
        /**
         * Send an UDP Datagram
         * @param {String} data 
         * @param {String} mode US
         * @param {String} address String url path
         * @param {Number} port Number integer
         * @param {String} options Text|Hex|Bytes
         */
        this.SendDatagram = function(data,mode,address,port,options) {}
        
        /**
         * Enable sending data in several modes
         * @param {String} mode Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF
         */
        this.SetDataMode = function(mode) {}
        
        /**
         * Tells AutoReceive how to split received data. Splitted data will result in multiple OnReceive calls.
         * @param {String} mode End|Start
         * @param {} p2 
         * @param {} p3
         */
        this.SetSplitMode = function(mode,p2,p3) {}
        
        /**
         * Sends text over TCP connection
         * @param {String} text 
         * @param {String} mode US
         */
        this.SendText = function(text,mode) {}
        
        /**
         * %cb% a TCP connection could be established or if it failed to connect to the server. The _connected_ state is passed as first argument
         * @param {Function} callback
         */
        this.SetOnConnect = function(callback) {}
        
        /**
         * %cb% a TCP file download has finished
         * @param {Function} callback
         */
        this.SetOnDownload = function(callback) {}
        
        /**
         * %cb% a TCP NetClient received some data when AutoReceive was set
         * @param {Function} callback
         */
        this.SetOnReceive = function(callback) {}
        
        /**
         * Define an interval in which the client should check for new messages
         * @param {Number} seconds Number seconds
         */
        this.SetTimeout = function(seconds) {}
        
        /**
         * Wakes up PC's (and perhaps other devices) when the BIOS/device is configured for it.
         * @param {String} ip 
         * @param {String} mac
         */
        this.WakeOnLan = function(ip,mac) {}
    }
    return new NetClient;
}

/**
 * Creates a NodeJS background process with all the functionality of common node.js
 * @param {String} paths String path to file or folder ( “/absolute/...” or “relative/...” ) NODE_PATH env variable
 * @param {String} options
 */
app.CreateNode = function(paths,options) {}

/**
 * The Notification object can be used to put messages in the notification drawer. The “AutoCancel” **option** will automatically dismiss the notificatin if the user touches it. “FullScreen” tries to create a larger notification on the screen. And “OnGoing” makes the Notification closeable by your app only
 * @param {String} options String comma “,” separated Ongoing,AutoCancel,FullScreen,NoVibrate,Low:priority
 */
app.CreateNotification = function(options) {
        
    function Notification() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Cancel a notification with a specific id
         * @param {String} id
         */
        this.Cancel = function(id) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Listens for any notification the user gets. Requires notification access by granted by android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS
         * @param {String} options CheckPerms
         */
        this.Listen = function(options) {}
        
        /**
         * Send the notification to the user
         * @param {String} id
         */
        this.Notify = function(id) {}
        
        /**
         * Set an image which will be displayed bigger than usual
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetLargeImage = function(image) {}
        
        /**
         * Activate the device notification LEDs
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} onMs Number milliseconds
         * @param {Number} offMs Number milliseconds
         */
        this.SetLights = function(color,onMs,offMs) {}
        
        /**
         * Set notification texts
         * @param {String} ticker 
         * @param {String} title 
         * @param {String} text 
         * @param {String} extra
         */
        this.SetMessage = function(ticker,title,text,extra) {}
        
        /**
         * Called when a notification has been intercepted
         * @param {Function} callback
         */
        this.SetOnNotify = function(callback) {}
        
        /**
         * Set a small image in your notification
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetSmallImage = function(image) {}
    }
    return new Notification;
}

/**
 * The NXT object is used to manage the connection between your Android phone and the Lego Mindstorms NXT brick.
 * 
 */
app.CreateNxt = function() {
        
    function Nxt() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Play tone with given frequency for a given time in milliseconds
         * @param {Number} frequency Number hertz
         * @param {Number} duration Number milliseconds
         */
        this.Beep = function(frequency,duration) {}
        
        /**
         * Brakes motors by lowering the input power
         * @param {String} motors A,B,C|ABC
         */
        this.Brake = function(motors) {}
        
        /**
         * Check whether phone/tablet is connected to the NXT
         * 
         */
        this.CheckConnection = function() {}
        
        /**
         * Connects to the NXT device via Bluetooth
         * @param {String} name
         */
        this.Connect = function(name) {}
        
        /**
         * Disconnect Phone/Tablet from NXT
         * 
         */
        this.Disconnect = function() {}
        
        /**
         * commands NXT to drive motor
         * @param {String} motors A,B,C|ABC
         * @param {Number} power Number percent
         * @param {Number} rotations Number percent
         * @param {Number} options Number float 0|rotations
         */
        this.Drive = function(motors,power,rotations,options) {}
        
        /**
         * Find the first program file of the NXT
         * @param {String} pattern
         */
        this.FileFindFirst = function(pattern) {}
        
        /**
         * Find next program file on the NXT
         * @param {String} handle
         */
        this.FileFindNext = function(handle) {}
        
        /**
         * Returns Bluetooth address of a connected NXT bric
         * 
         */
        this.GetBtAddress = function() {}
        
        /**
         * Returns Bluetooth name of a connected NXT bric
         * 
         */
        this.GetBtName = function() {}
        
        /**
         * Returns the name of the currently running program
         * 
         */
        this.GetCurrentProgram = function() {}
        
        /**
         * Returns the wheel encoder value of a motor
         * @param {String} motor A,B,C|ABC
         */
        this.GetRotationCount = function(motor) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Checks if bluetooth is enabled on the device
         * 
         */
        this.IsBluetoothEnabled = function() {}
        
        /**
         * Checks if the device is connected to a NXT
         * 
         */
        this.IsConnected = function() {}
        
        /**
         * Checks if bluetooth is enabled on the device. Its the same as nxt.IsBluetoothEnabled
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Checks if a motor is currently powere
         * @param {String} motor A,B,C|ABC
         */
        this.IsMotorIdle = function(motor) {}
        
        /**
         * Checks if a Bluetooth device with a given name is paired with our device
         * @param {String} name
         */
        this.IsPaired = function(name) {}
        
        /**
         * Play a sound file for a given amount of times
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {Number} repeat Number integer
         */
        this.PlaySoundFile = function(file,repeat) {}
        
        /**
         * Read a color sensor value on the input where the sensor is plugged into.
         * @param {Number} input Number integer 1
         * @param {String} mode ColorDetect|LightSense|RedSense|GreenSense|BlueSense
         */
        this.ReadColorSensor = function(input,mode) {}
        
        /**
         * Reads the distance measured by the ultrasonic sensor in centimeters
         * @param {Number} input Number integer 1..4
         */
        this.ReadDistanceSensor = function(input) {}
        
        /**
         * Reads the intensity of the light currently being 'seen' by the NXT light sensor. If active is set true an additionall white LED will be turned on while sensing
         * @param {Number} input Number integer 1..4
         * @param {Boolean} active
         */
        this.ReadLightSensor = function(input,active) {}
        
        /**
         * Reads a message from the NXT brick's mail box. This message can be written using a normal NXT-G program running on the brick. This allows you to read values from NXT-G programs with your phone or tablet
         * @param {Number} mailbox Number integer 1..10
         * @param {String} type Text|Number|Logic
         * @param {Boolean} remove
         */
        this.ReadMail = function(mailbox,type,remove) {}
        
        /**
         * Reads the sound pressure level of the surrounding
         * @param {Number} input Number integer 1..4
         * @param {String} mode DB:Decibels|DbA:A
         */
        this.ReadSoundSensor = function(input,mode) {}
        
        /**
         * Returns whether the touch sensor switch is currently pushed
         * @param {Number} input Number integer 1..4
         */
        this.ReadTouchSensor = function(input) {}
        
        /**
         * Invokes system dialog box which could enable Bluetooth on tablet/phone when Bluetooth is disabled
         * 
         */
        this.RequestEnable = function() {}
        
        /**
         * Reset wheel encoder offset to 0
         * @param {String} motors A,B,C|ABC
         */
        this.Reset = function(motors) {}
        
        /**
         * Sends a message to the NXT brick's mail box
         * @param {Number} mailbox Number integer 1..10
         * @param {String} type Text|Number|Logic
         * @param {} message
         */
        this.SendMail = function(mailbox,type,message) {}
        
        /**
         * Provides a convenient way to invert the direction of the motor commands
         * @param {Boolean} invert
         */
        this.SetInvert = function(invert) {}
        
        /**
         * Changes the color sensor LED to one color of “White”, “Red”, “Green”, “Blue” or “Off
         * @param {Number} input Number integer 1..4
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... “White”|“Red”|“Green”|“Blue”|“Off”
         */
        this.SetLampColor = function(input,color) {}
        
        /**
         * %cb% the NXT has been connected via Bluetooth or if it failed to
         * @param {Function} callback
         */
        this.SetOnConnect = function(callback) {}
        
        /**
         * %cb% the NXT has been successfully connected via Bluetoot
         * @param {Function} callback
         */
        this.SetOnConnected = function(callback) {}
        
        /**
         * called when NXT has successfully connected via Bluetoot
         * @param {Function} callback
         */
        this.SetOnConnectEx = function(callback) {}
        
        /**
         * Shows the user a dialog box that contains a list of NXT bricks which are paired with the phone. The user can then select the brick to connect to via Bluetooth
         * 
         */
        this.ShowDevices = function() {}
        
        /**
         * Starts an NXT-G program on the NXT brick if available
         * @param {String} name String path to file or folder ( “/absolute/...” or “relative/...” )
         */
        this.StartProgram = function(name) {}
        
        /**
         * Stop powering some motors
         * @param {String} motors A,B,C|ABC
         */
        this.Stop = function(motors) {}
        
        /**
         * Stops a the currently running NXT-G program
         * 
         */
        this.StopProgram = function() {}
        
        /**
         * Converts a color integer received from ReadColorSensor to a meaningful color name
         * @param {Number} val Number integer 1..6
         */
        this.ToColorName = function(val) {}
    }
    return new Nxt;
}

/**
 * Overlays are displayed above everything on the screen - even on the home screen or above other applications. Overlays can be created from services as well which makes them almost perfect for interacting with them.
 * @param {String} options String comma “,” separated
 */
app.CreateOverlay = function(options) {
        
    function Overlay() {
        
        /**
         * Adds a layout to the overlay
         * @param {AppObject} layout CreateLayout
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {String} options px
         */
        this.AddLayout = function(layout,left,top,options) {
            return app.CreateLayout();
        }
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Removes a layout from the overlay
         * @param {AppObject} layout CreateLayout
         */
        this.RemoveLayout = function(layout) {}
        
        /**
         * Defines the position of a contained layout
         * @param {AppObject} layout CreateLayout
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {String} options px
         */
        this.SetPosition = function(layout,left,top,options) {}
    }
    return new Overlay;
}

/**
 * The PhoneState component is able to detect phone state changes
 * @param {String} types CellLocation,DataConnection,DataActivity,CallState,ServiceState,SignalStrength,CallForwarding,MessageWaiting
 */
app.CreatePhoneState = function(types) {
        
    function PhoneState() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * %cb% a phone state has changed
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Start listening
         * 
         */
        this.Start = function() {}
        
        /**
         * Stop listening
         * 
         */
        this.Stop = function() {}
    }
    return new PhoneState;
}

/**
 * Creates a new PlayStore instance for retreiving informations or purchasing items
 * 
 */
app.CreatePlayStore = function() {
        
    function PlayStore() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Get product info of paid items from Google Play
         * @param {String} prodIDs 
         * @param {Function} callback 
         * @param {String} options IAP:In
         */
        this.GetBillingInfo = function(prodIDs,callback,options) {}
        
        /**
         * Get product info of purchased items from Google Play
         * @param {Function} callback 
         * @param {String} options SUBS
         */
        this.GetPurchases = function(callback,options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Purchase an item on Google Play
         * @param {String} prodID 
         * @param {String} token 
         * @param {Function} callback 
         * @param {String} options SUBS
         */
        this.Purchase = function(prodID,token,callback,options) {}
    }
    return new PlayStore;
}

/**
 * If you have much data to display which doesn't fit in the area availabe, you probably want to use a **Scroller**. The options for the Scroller are the same as the LinearLayout fill options, which set how a Scroller sizes within it's parent:- “FillX”, “FillY” and “FillXY”. By default Scrollers will auto-size to wrap their contents
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX|FillY|FillXY,Horizontal|Vertical,NoScrollBar,ScrollFade
 */
app.CreateScroller = function(width,height,options) {
        
    function Scroller() {
        
        /**
         * Add a layout to the scroller
         * @param {AppObject} layout CreateLayout
         */
        this.AddChild = function(layout) {
            return app.CreateChild();
        }
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Removes and releases a child object
         * @param {AppObject} layout CreateLayout
         */
        this.DestroyChild = function(layout) {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the horizontal scroll bar position
         * 
         */
        this.GetScrollX = function() {}
        
        /**
         * Returns the vertical scroll bar position
         * 
         */
        this.GetScrollY = function() {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Removes a scroller layout from the scroller
         * @param {AppObject} child
         */
        this.RemoveChild = function(child) {}
        
        /**
         * Scrolls relatively to the current scroll bar positions
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         */
        this.ScrollBy = function(x,y) {}
        
        /**
         * Scrolls to a given fixed position
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         */
        this.ScrollTo = function(x,y) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Scroller;
}

/**
 * SeekBars are bars with a moveable pointer which let the user select a value in a given range
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y
 */
app.CreateSeekBar = function(width,height,options) {
        
    function SeekBar() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current value of the seek bar
         * 
         */
        this.GetValue = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         * @param {String} options
         */
        this.SetColorFilter = function(color,mode,options) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Change the minimum timeout in milliseconds between two OnChange calls
         * @param {Number} rate Number milliseconds
         */
        this.SetMaxRate = function(rate) {}
        
        /**
         * Called when the containing data has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Change the value which represents 100% of the seek bar. Default is 10
         * @param {Number} range
         */
        this.SetRange = function(range) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the current seekbar value in the defined range
         * @param {Number} val
         */
        this.SetValue = function(val) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new SeekBar;
}

/**
 * The sensor object can be used to access numerous sensors of your device. You can use the **SetOnChange** function of the Sensor to set the name of a function you want to be called when a the changes occur
 * @param {String} type Accelerometer|MagneticField|Orientation|Light|Proximity|Temperature|GameRotation|GeomagneticRotation|Gravity|Gyroscope|HeartRate|Acceleration|Pressure|Humidity|RotationMotion|StepCounter|StepDetector
 * @param {String} options String comma “,” separated Slow|Medium|Fast|Fastest
 */
app.CreateSensor = function(type,options) {
        
    function Sensor() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the first/x/azimuth value of a sensor
         * 
         */
        this.GetAzimuth = function() {}
        
        /**
         * Returns a list of builtin sensors in your device
         * 
         */
        this.GetNames = function() {}
        
        /**
         * Returns the second/y/pitch value of a sensor
         * 
         */
        this.GetPitch = function() {}
        
        /**
         * Returns the third/z/roll value of a sensor
         * 
         */
        this.GetRoll = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns all values of a sensor
         * 
         */
        this.GetValues = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Define a minimum timeout between two OnChage calls
         * @param {Number} rate Number milliseconds
         */
        this.SetMaxRate = function(rate) {}
        
        /**
         * Define a minimum threshold value which triggers a OnChange call
         * @param {Number} min
         */
        this.SetMinChange = function(min) {}
        
        /**
         * %cb% a sensor value has changed
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Start reading from the sensor
         * 
         */
        this.Start = function() {}
        
        /**
         * Stop reading from the sensor
         * 
         */
        this.Stop = function() {}
    }
    return new Sensor;
}

/**
 * Services run in the background and can be used to monitor online databases, local communication ports or changes in data on the file system. They can also trigger notifications to the user and launch apps when changes or timeouts occur
 * @param {String} packageName this|&lt;package&gt;
 * @param {String} className this|&lt;class&gt;
 * @param {Function} callback 
 * @param {String} options String comma “,” separated Persist:attempts to force restart if service killed
 */
app.CreateService = function(packageName,className,callback,options) {
        
    function Service() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Sends a message to the service
         * @param {String} message
         */
        this.SendMessage = function(message) {}
        
        /**
         * Run service in background
         * 
         */
        this.SetInBackground = function() {}
        
        /**
         * Run service in foreground
         * @param {String} title 
         * @param {String} text 
         * @param {String} largeIcon String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} smallIcon String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} importance none|min|low|high
         */
        this.SetInForeground = function(title,text,largeIcon,smallIcon,importance) {}
        
        /**
         * %cb% a message arrived from the service
         * @param {Function} callback
         */
        this.SetOnMessage = function(callback) {}
        
        /**
         * Stop the service
         * 
         */
        this.Stop = function() {}
    }
    return new Service;
}

/**
 * This method creates a shortcut of an app on your home screen - referencing to a js file runnable with DS.
 * @param {String} name 
 * @param {String} iconFile String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} options String comma “,” separated Portrait|Landscape,Transparent,Debug:start app in debug mode,Game:runs in GameView mode|remote
 */
app.CreateShortcut = function(name,iconFile,file,options) {}

/**
 * Returns a SmartWatch object
 * @param {String} type |Sony
 */
app.CreateSmartWatch = function(type) {
        
    function SmartWatch() {
        
        /**
         * AddLayout adds a layout to the SmartWatch screen so that it is visible (if not hidden with SetVisibility
         * @param {Object} layout SWlay
         */
        this.AddLayout = function(layout) {
            return app.CreateLayout();
        }
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Creates a SmartWatch Image. See also: @CreateImag
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options String comma “,” separated fix,alias,px:use pixel values for size,Button:causes image to depress like a button when touched,ScaleCenter,async:loads the image asynchronously,FontAwesome,Resize,TouchThrough,Icon:allows loading of app icons,wallpaper,NoPlay:prevent gifs from playing automatically
         * @param {Number} pxwidth Number pixel
         * @param {Number} pxheight Number pixel
         */
        this.CreateImage = function(image,width,height,options,pxwidth,pxheight) {}
        
        /**
         * Creates a SmartWatch Layout. See also: @CreateLayou
         * @param {String} type Linear|Absolute|Frame
         * @param {String} options String comma “,” separated TouchThrough:forwards touch events to underlying children,TouchSpy:spies for touch events on all children,Left|Top|Right|Bottom|Center|VCenter,Wrap,Horizontal|Vertical,FillX,FillY,FillXY
         */
        this.CreateLayout = function(type,options) {}
        
        /**
         * Creates a SmartWatch Sensor. See also: @CreateSenso
         * @param {String} name Accelerometer|MagneticField|Orientation|Light|Proximity|Temperature|GameRotation|GeomagneticRotation|Gravity|Gyroscope|HeartRate|Acceleration|Pressure|Humidity|RotationMotion|StepCounter|StepDetector
         * @param {String} options String comma “,” separated Slow|Medium|Fast|Fastest
         */
        this.CreateSensor = function(name,options) {}
        
        /**
         * Creates a SmartWatch Text. See also: @CreateTex
         * @param {String} text 
         * @param {Number} width Number fraction (0..1)
         * @param {Number} height Number fraction (0..1)
         * @param {String} options String comma “,” separated Multiline,Left|Right,Html,Bold,Monospace,AutoSize,NoWrap,Log
         */
        this.CreateText = function(text,width,height,options) {}
        
        /**
         * Returns the SmartWatch DS version number
         * 
         */
        this.GetVersion = function() {}
        
        /**
         * Removes a SmartWatch layout from the screen
         * @param {Object} layout SWlay
         */
        this.RemoveLayout = function(layout) {}
        
        /**
         * Set the SmartWatch menu field
         * @param {String} list String comma “,” separated
         * @param {String} iconPath String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetMenu = function(list,iconPath) {}
        
        /**
         * %cb% the SmartWatch back button was pressed
         * @param {Function} callback
         */
        this.SetOnBack = function(callback) {}
        
        /**
         * %cb% the SmartWatch app is hidden
         * @param {Function} callback
         */
        this.SetOnHide = function(callback) {}
        
        /**
         * %cb% the SmartWatch menu button is touched
         * @param {Function} callback
         */
        this.SetOnMenu = function(callback) {}
        
        /**
         * %cb% the SmartWatch app is shown
         * @param {Function} callback
         */
        this.SetOnShow = function(callback) {}
        
        /**
         * %cb% the SmartWatch app has started
         * @param {Function} callback
         */
        this.SetOnStart = function(callback) {}
        
        /**
         * %cb% the SmartWatch app has stopped
         * @param {Function} callback
         */
        this.SetOnStop = function(callback) {}
        
        /**
         * %cb% the SmartWatch screen is swiped
         * @param {Function} callback
         */
        this.SetOnSwipe = function(callback) {}
        
        /**
         * %cb% the SmartWatch was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Change the screen stat
         * @param {unknown} p1
         */
        this.SetScreenState = function(p1) {}
        
        /**
         * Show a layout on the scree
         * @param {Object} layout SWlay
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         */
        this.ShowLayout = function(layout,x,y) {}
        
        /**
         * Shows a message on the scree
         * @param {String} message
         */
        this.ShowMessage = function(message) {}
        
        /**
         * Stops the running SmartWatch app
         * 
         */
        this.StopApp = function() {}
        
        /**
         * Makes the SmartWatch vibrat
         * @param {unknown} p1 
         * @param {unknown} p2 
         * @param {unknown} p3
         */
        this.Vibrate = function(p1,p2,p3) {}
    }
    return new SmartWatch;
}

/**
 * Returns a new SMS object to send and retreive SMS messages.
 * 
 */
app.CreateSMS = function() {
        
    function SMS() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Send SMS message
         * @param {String} number 
         * @param {String} message 
         * @param {String} options MultiPart:multi
         */
        this.Send = function(number,message,options) {}
        
        /**
         * %cb% the user received a SM
         * @param {Function} callback
         */
        this.SetOnMessage = function(callback) {}
        
        /**
         * %cb% a status has changed
         * @param {Function} callback
         */
        this.SetOnStatus = function(callback) {}
    }
    return new SMS;
}

/**
 * The **SpeechRec** object can be used to listen for and recognize speech
 * @param {String} options String comma “,” separated NoBeep,Partial
 */
app.CreateSpeechRec = function(options) {
        
    function SpeechRec() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Stop recognizing speech and break other processes
         * 
         */
        this.Cancel = function() {}
        
        /**
         * Returns the RMS value (Root Mean Square) from the audio recorder
         * 
         */
        this.GetRMS = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Check whether SpeechRec is currently listening
         * 
         */
        this.IsListening = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Start recognizing speech
         * 
         */
        this.Recognize = function() {}
        
        /**
         * %cb% an error occured
         * @param {Function} callback
         */
        this.SetOnError = function(callback) {}
        
        /**
         * %cb% the SpeechRec object is ready for use
         * @param {Function} callback
         */
        this.SetOnReady = function(callback) {}
        
        /**
         * %cb% a text was successfully recognize
         * @param {Function} callback
         */
        this.SetOnResult = function(callback) {}
        
        /**
         * Stop speech recording and start recognizing
         * 
         */
        this.Stop = function() {}
    }
    return new SpeechRec;
}

/**
 * Create Spinners using the CreateSpinner method of the app object
 * @param {String} list String comma “,” separated
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated FillX/Y,NoSound
 */
app.CreateSpinner = function(list,width,height,options) {
        
    function Spinner() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Change the current shown item
         * @param {String} item
         */
        this.SelectItem = function(item) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the item list of the spinner
         * @param {String} list String comma “,” separated
         * @param {String} delim
         */
        this.SetList = function(list,delim) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Called when the spinner value has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control.
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the current shown ite
         * @param {String} item
         */
        this.SetText = function(item) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Spinner;
}

/**
 * Switches are a variant of [toggle buttons](CreateToggle.htm) with another look
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated Monospace,Custom,NoPad,FillX/Y,NoSound
 */
app.CreateSwitch = function(text,width,height,options) {
        
    function Switch() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns whether the switch is currently activate
         * 
         */
        this.GetChecked = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Change the current checked state of the switch
         * @param {Boolean} checked
         */
        this.SetChecked = function(checked) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Called when the control has been clicked by the user
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Customize the look of the toggle
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius Number pixel
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth Number pixel
         * @param {Number} shadow Number fraction (0..1)
         */
        this.SetStyle = function(color1,color2,radius,strokeClr,strokeWidth,shadow) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Switch;
}

/**
 * Returns a Synth object which can produces a variety of sounds, sound effects and music
 * @param {String} type Signal,VCA,VCF
 */
app.CreateSynth = function(type) {
        
    function Synth() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Play a comma-separated sequence of “midi_note&colon;duration” pairs
         * @param {String} tune String comma “,” separated note1&colon;duration1&comma;note2&colon;duration2&comma;...
         */
        this.PlayMidiTune = function(tune) {}
        
        /**
         * Plays a single not
         * @param {Number} note Number integer 0..125
         */
        this.PlayNote = function(note) {}
        
        /**
         * Plays a frequency tone
         * @param {} frequency 
         * @param {Number} duration Number milliseconds
         */
        this.PlayTone = function(frequency,duration) {}
        
        /**
         * Change the delay effect differenc
         * @param {Number} milliseconds Number milliseconds
         */
        this.SetDelay = function(milliseconds) {}
        
        /**
         * Enables the delay effect (plays every note a second time after a given delay
         * @param {Boolean} enable
         */
        this.SetDelayEnabled = function(enable) {}
        
        /**
         * Adds a feedback effect when delay is enable
         * @param {Number} feedback Number fraction (0..1)
         */
        this.SetFeedback = function(feedback) {}
        
        /**
         * Set the current played frequenc
         * @param {Number} frequency
         */
        this.SetFrequency = function(frequency) {}
        
        /**
         * Set the length of a whole note in seconds. Defaults to 2.5
         * @param {Number} duration Number seconds
         */
        this.SetNoteLength = function(duration) {}
        
        /**
         * Initializes the phaser effec
         * @param {Number} drywet Number fraction (0..1)
         * @param {Number} rate 
         * @param {Number} range 
         * @param {Number} feedback Number fraction (0..1)
         */
        this.SetPhaser = function(drywet,rate,range,feedback) {}
        
        /**
         * Control producing of unprocessed (0) and delayed (1) signals (whatever this means
         * @param {Number} drywet Number fraction (0..1)
         */
        this.SetPhaserDryWet = function(drywet) {}
        
        /**
         * En/Disables phaser effec
         * @param {Boolean} enable
         */
        this.SetPhaserEnabled = function(enable) {}
        
        /**
         * Enables phaser feedbac
         * @param {Number} feedback Number fraction (0..1)
         */
        this.SetPhaserFeedback = function(feedback) {}
        
        /**
         * Set sweep rang
         * @param {Number} range
         */
        this.SetPhaserRange = function(range) {}
        
        /**
         * Set sweeps per secon
         * @param {Number} rate
         */
        this.SetPhaserRate = function(rate) {}
        
        /**
         * Initializes the VC
         * @param {Number} attack Number milliseconds
         * @param {Number} decay Number milliseconds
         * @param {Number} sustain Number fraction (0..1)
         * @param {Number} release Number milliseconds
         */
        this.SetVca = function(attack,decay,sustain,release) {}
        
        /**
         * Set a time where the volume should reach a maximu
         * @param {Number} attack Number milliseconds
         */
        this.SetVcaAttack = function(attack) {}
        
        /**
         * Controls time in which the volume is lowered to the sustain valu
         * @param {Number} decay Number milliseconds
         */
        this.SetVcaDecay = function(decay) {}
        
        /**
         * En/Disables VCA effec
         * @param {Boolean} enable
         */
        this.SetVcaEnabled = function(enable) {}
        
        /**
         * Set a time where the volume should reach a minimu
         * @param {} release
         */
        this.SetVcaRelease = function(release) {}
        
        /**
         * Set a basis volum
         * @param {Number} sustain Number fraction (0..1)
         */
        this.SetVcaSustain = function(sustain) {}
        
        /**
         * Initialize the VCF effec
         * @param {Number} attack Number milliseconds
         * @param {Number} decay Number milliseconds
         * @param {Number} sustain Number fraction (0..1)
         * @param {Number} release Number milliseconds
         * @param {} cuttoff 
         * @param {Number} resonance Number fraction (0..1)
         * @param {Number} depth Number fraction (0..1)
         */
        this.SetVcf = function(attack,decay,sustain,release,cuttoff,resonance,depth) {}
        
        /**
         * Set a time where the frequencies should reach a maximu
         * @param {Number} attack Number milliseconds
         */
        this.SetVcfAttack = function(attack) {}
        
        /**
         * Set a maximum frequency which will never be exceede
         * @param {} cuttoff
         */
        this.SetVcfCutoff = function(cuttoff) {}
        
        /**
         * Controls time in which the frequency is lowered to the sustain value
         * @param {Number} decay Number milliseconds
         */
        this.SetVcfDecay = function(decay) {}
        
        /**
         * Set the strength of the Vcf filte
         * @param {Number} depth Number fraction (0..1)
         */
        this.SetVcfDepth = function(depth) {}
        
        /**
         * En/Disables VCF effec
         * @param {Boolean} enable
         */
        this.SetVcfEnabled = function(enable) {}
        
        /**
         * Set a time where the volume should reach a minimu
         * @param {Number} release Number milliseconds
         */
        this.SetVcfRelease = function(release) {}
        
        /**
         * Adds a resonance ton
         * @param {Number} resonance Number fraction (0..1)
         */
        this.SetVcfResonance = function(resonance) {}
        
        /**
         * Set a basis frequenc
         * @param {Number} sustain Number fraction (0..1)
         */
        this.SetVcfSustain = function(sustain) {}
        
        /**
         * Set the overall synthesizer volum
         * @param {Number} left Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         */
        this.SetVolume = function(left,right) {}
        
        /**
         * Set the wave shape of the synthesize
         * @param {String} shape Sin,Saw,Square,White
         */
        this.SetWaveShape = function(shape) {}
        
        /**
         * Start playin
         * 
         */
        this.Start = function() {}
        
        /**
         * Stop playin
         * 
         */
        this.Stop = function() {}
    }
    return new Synth;
}

/**
 * Creates a shell SystemProcess (ie&period; “sh”, “su” if <red>root</red> or “busybox” if <blue>installed</blue>) which can be reused throughout the program.
 * @param {} cmd sh|su|busybox
 * @param {String} env 
 * @param {String} dir String path to folder ( “/absolute/...” or “relative/...” )
 * @param {String} options String comma “,” separated combine:combines stdout and stderr|builder:force use of proc builder
 */
app.CreateSysProc = function(cmd,env,dir,options) {
        
    function SysProc() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Read data from stder
         * @param {Number} maxLines Number integer
         * @param {String} options String comma “,” separated nowait:dont wait for input
         */
        this.Err = function(maxLines,options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Read data from stdi
         * @param {Number} maxLines Number integer
         * @param {String} options String comma “,” separated nowait:dont wait for input
         */
        this.In = function(maxLines,options) {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Writes a command to stdout. A trailing linebreak will execute it
         * @param {String} command
         */
        this.Out = function(command) {}
        
        /**
         * Returns the first byte of a file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.ReadFileAsByte = function(file) {}
        
        /**
         * %cb% something was written to stder
         * @param {Function} callback
         */
        this.SetOnError = function(callback) {}
        
        /**
         * %cb% something was written to stdou
         * @param {Function} callback
         */
        this.SetOnInput = function(callback) {}
        
        /**
         * Write a binary string to a file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} data
         */
        this.WriteToFile = function(file,data) {}
    }
    return new SysProc;
}

/**
 * Tabs are useful if you have multiple subsections in your app. The user can then press the title of a tab and the control will automatically switch to the corresponding layout
 * @param {String} list String comma “,” separated
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options NoMargins
 */
app.CreateTabs = function(list,width,height,options) {
        
    function Tabs() {
        
        /**
         * Adds a control to the layout
         * @param {AppObject} child 
         * @param {Number} order Number integer
         */
        this._AddChild = function(child,order) {}
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Moves a child in front of all other children
         * @param {AppObject} child
         */
        this._ChildToFront = function(child) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Destroys and removes a child from the layout
         * @param {AppObject} child
         */
        this._DestroyChild = function(child) {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns the z order of a child
         * @param {AppObject} child
         */
        this._GetChildOrder = function(child) {}
        
        /**
         * Returns the currently displayed tab nam
         * 
         */
        this.GetCurrentTabName = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Returns the content layout of a given tab
         * @param {String} name
         */
        this.GetLayout = function(name) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Adds a new tab to the tabs control
         * @param {String} name
         */
        this.parent.AddTab = function(name) {}
        
        /**
         * Removes a child from the layout
         * @param {AppObject} child
         */
        this._RemoveChild = function(child) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Applies a corner radius to card layouts
         * @param {Number} radius Number pixel
         */
        this.SetCornerRadius = function(radius) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Adjust the placing of contained children
         * @param {String} gravity Left,Top,Right,Bottom,VCenter,HCenter,FillX,FillY,FillXY
         */
        this._SetGravity = function(gravity) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * %cb% the tab has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Defines a callback function which is called when the content of a child control has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChildChange = function(callback) {}
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this._SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags a finger over the screen
         * @param {Function} callback
         */
        this._SetOnTouchMove = function(callback) {}
        
        /**
         * %cb% the users finger leaves the screen
         * @param {Function} callback
         */
        this._SetOnTouchUp = function(callback) {}
        
        /**
         * Change the children orientation
         * @param {String} orient Horizontal|Vertical
         */
        this._SetOrientation = function(orient) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * 
         * @param {Number} size 
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired
         * @param {Boolean} touchable
         */
        this.SetTouchable = function(touchable) {}
        
        /**
         * Define whether the layout should forward OnTouch events to underlying controls
         * @param {Boolean} through
         */
        this.SetTouchThrough = function(through) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Switch to a given tab nam
         * @param {String} name
         */
        this.ShowTab = function(name) {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Tabs;
}

/**
 * If you want to display text in your app you can use the Text object. You can use the “Multiline” **option** to allow multi-line text and the “Left” or “Right” options to align the text. The default is single line centered text
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated AutoScale,AutoSize,Multiline,Left|Right|Bottom|VCenter,Html,Bold,Monospace,AutoShrink:Auto
 */
app.CreateText = function(text,width,height,options) {
        
    function Text() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Returns the html formatted content
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the amount of lines in the text even with html formattin
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * Returns at which character in the text a certain line begins
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * Returns the top position of a given line on the screen
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * Returns the maximum amount of lines the control can hold with the current control and font heigh
         * 
         */
        this.GetMaxLines = function() {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Append a string to the text separated with a line brea
         * @param {String} message 
         * @param {String} options String comma “,” separated Clear:Clears the log before writing,Red|Green|Blue
         */
        this.Log = function(message,options) {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetEllipsize = function(mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the font style by defining a font file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetFontFile = function(file) {}
        
        /**
         * Change the current text of the control to html-formatted text
         * @param {String} str String html code
         */
        this.SetHtml = function(str) {}
        
        /**
         * Define a maximum amount of log line
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags a finger over the screen
         * @param {Function} callback
         */
        this.SetOnTouchMove = function(callback) {}
        
        /**
         * %cb% the users finger leaves the screen
         * @param {Function} callback
         */
        this.SetOnTouchUp = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Define a shadow displayed around the control.
         * @param {Number} radius Number integer
         * @param {Number} dx Number integer
         * @param {Number} dy Number integer
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextShadow = function(radius,dx,dy,color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired
         * @param {Boolean} touchable
         */
        this.SetTouchable = function(touchable) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Text;
}

/**
 * If you want the user to enter custom data you probably need the **TextEdit** control. For number input only you can apply the “numbers” **option**
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated AutoSelect:Select all Text if user enter the Textedit,AutoSize:Expand or shrink the control automatically so the text fits in the Textedit,Bold:Write bold text,Extract:enables full screen keyboard in landscape mode,Left:Justify the text to the left|Center:Justify the text in the middle|Right:Justify the text to the right|Monospace,NoSpell:Disable the spell
 */
app.CreateTextEdit = function(text,width,height,options) {
        
    function TextEdit() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clears the undo/redo history
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns the current line index where the cursor is located
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Returns the index of the character where the cursor is currently located
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Returns the html formatted content
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the amount of lines in the text even with html formattin
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * Returns at which character in the text a certain line begins
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * Returns the top position of a given line on the screen
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * Returns the maximum amount of lines the control can hold with the current control and font heigh
         * 
         */
        this.GetMaxLines = function() {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the currently selected text
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * Returns the position of where the user selection ends
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * Returns the position of where the user selection begins
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Inserts a string at a given position
         * @param {String} text 
         * @param {Number} start Number integer
         */
        this.InsertText = function(text,start) {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Redo an undone action
         * 
         */
        this.Redo = function() {}
        
        /**
         * Replaces a given range in the text with some string
         * @param {String} text 
         * @param {Number} start Number integer
         * @param {Number} end Number integer
         */
        this.ReplaceText = function(text,start,end) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Changes the cursor color
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetCursorColor = function(color) {}
        
        /**
         * Change the current cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Set a grey default which is shown when the edit is empt
         * @param {String} text
         */
        this.SetHint = function(text) {}
        
        /**
         * Change the current text of the control to html-formatted text
         * @param {String} str String html code
         */
        this.SetHtml = function(str) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Called when the containing data has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * %cb% the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter)
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
        /**
         * Define a callback function called when the user focuses the control
         * @param {Function} callback
         */
        this.SetOnFocus = function(callback) {}
        
        /**
         * Selects part of the text in a given range
         * @param {Number} start Number integer
         * @param {Number} stop Number integer
         */
        this.SetSelection = function(start,stop) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Undo an action
         * 
         */
        this.Undo = function() {}
    }
    return new TextEdit;
}

/**
 * Returns a Theme object.
 * @param {String} baseTheme Dark|Light
 */
app.CreateTheme = function(baseTheme) {
        
    function Theme() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Define the standard text color of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBtnTextColor = function(color) {}
        
        /**
         * Define standard options of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm)
         * @param {String} options String comma “,” separated FontAwesome,Html,Monospace,SingleLine,Custom,NoPad,FillX/Y,Normal|Aluminium|Gray|Lego
         */
        this.SetButtonOptions = function(options) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetButtonPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Define standard style of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius Number pixel
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth Number pixel
         * @param {Number} shadow Number fraction (0..1)
         * @param {String} checkClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetButtonStyle = function(color1,color2,radius,strokeClr,strokeWidth,shadow,checkClr) {}
        
        /**
         * Define standard options of [check boxes](CreateCheckBox.htm)
         * @param {String} options String comma “,” separated FillX/Y
         */
        this.SetCheckBoxOptions = function(options) {}
        
        /**
         * Define standard button colors of [dialogs](CreateDialog.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetDialogBtnColor = function(color) {}
        
        /**
         * Define standard button text colors of [dialogs](CreateDialog.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetDialogBtnTxtColor = function(color) {}
        
        /**
         * Define standard background colors of [dialogs](CreateDialog.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetDialogColor = function(color) {}
        
        /**
         * Define standard corder radius of [dialogs](CreateDialog.htm)
         * @param {Number} radius Number pixel
         */
        this.SetDialogCornerRadius = function(radius) {}
        
        /**
         * En/Disables standard dimming of [dialogs](CreateDialog.htm)
         * @param {Boolean} dim
         */
        this.SetDimBehind = function(dim) {}
        
        /**
         * Define standard highlight colors
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetHighlightColor = function(color) {}
        
        /**
         * Define standard divider colors of [lists](CreateList.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetListDividerColor = function(color) {}
        
        /**
         * Define standard background progress color of [progress indicators](ShowProgress.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetProgressBackColor = function(color) {}
        
        /**
         * Define standard options of [progress indicators](ShowProgress.htm)
         * @param {String} options String comma “,” separated NoDim,NonModal,Solid
         */
        this.SetProgressOptions = function(options) {}
        
        /**
         * Define standard options of [progress bars](ShowProgressBar.htm)
         * @param {String} options Light
         */
        this.SetProgressBarOptions = function(options) {}
        
        /**
         * Define standard text color of [progress indicators](ShowProgress.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetProgressTextColor = function(color) {}
        
        /**
         * Define standard text color of controls
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color1,color2) {}
        
        /**
         * Define standard options of [text edits](CreateTextEdit.htm)
         * @param {String} options underline
         */
        this.SetTextEditOptions = function(options) {}
        
        /**
         * Define standard title text color of [dialogs](CreateDialog.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTitleColor = function(color) {}
        
        /**
         * Define standard title divider color of [dialogs](CreateDialog.htm)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTitleDividerColor = function(color) {}
        
        /**
         * Define standard title divider height of [dialogs](CreateDialog.htm)
         * @param {Number} height Number pixel
         */
        this.SetTitleDividerHeight = function(height) {}
        
        /**
         * Define standard height of [dialogs](CreateDialog.htm)
         * @param {Number} height Number pixel
         * @param {String} options String comma “,” separated px|dip|sp|mm|pt|pl|ps
         */
        this.SetTitleHeight = function(height,options) {}
        
        /**
         * Define standard title text size of [dialogs](CreateDialog.htm)
         * @param {Number} size 
         * @param {String} options String comma “,” separated px|dip|sp|mm|pt|pl|ps
         */
        this.SetTitleTextSize = function(size,options) {}
    }
    return new Theme;
}

/**
 * Toggle buttons are basically [Buttons](CreateButton.htm) with an additional light bar indicating if it is activated or not. The user can toggle this state by pressing on it
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated Monospace,Custom,NoPad,FillX/Y,NoSound
 */
app.CreateToggle = function(text,width,height,options) {
        
    function Toggle() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Returns whether the toggle is currently activate
         * 
         */
        this.GetChecked = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Returns the current1605064214 displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels
         * @param {String} mode px
         */
        this.GetTextSize = function(mode) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Change the current checked state of the toggle
         * @param {Boolean} checked
         */
        this.SetChecked = function(checked) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Called when the control has been clicked by the user
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Costomize the look of the toggle
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius Number pixel
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth Number pixel
         * @param {Number} shadow Number fraction (0..1)
         */
        this.SetStyle = function(color1,color2,radius,strokeClr,strokeWidth,shadow) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Toggle;
}

/**
 * The USBSerial component can be used to communicate with other USB devices connected to yours
 * @param {Number} baudRate Number integer 300|600|1200|2400|4800|9600|19200|38400|57600|115200|230400|460800|921600
 * @param {Number} dataBits Number integer 5|6|7|8
 * @param {Number} stopBits Number integer 1|2|15
 * @param {Number} parity Number integer 0:none|1:odd|2:even|3:mark|4:space
 * @param {Number} device pid
 */
app.CreateUSBSerial = function(baudRate,dataBits,stopBits,parity,device) {
        
    function USBSerial() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns whether a USB serial device is connected
         * 
         */
        this.IsConnected = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Enable sending data in several modes
         * @param {String} mode Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF
         */
        this.SetDataMode = function(mode) {}
        
        /**
         * Raises the **D**ata **T**erminal **R**eady state
         * @param {Boolean} onOff
         */
        this.SetDTR = function(onOff) {}
        
        /**
         * Define the maximum amount of bytes you want to receive at once
         * @param {Number} bytes Number integer
         */
        this.SetMaxRead = function(bytes) {}
        
        /**
         * Define maximum amount of bytes to send at once
         * @param {Number} bytes Number integer
         */
        this.SetMaxWrite = function(bytes) {}
        
        /**
         * The SetOnReceive callback is called automatically after data has been received via the USB serial connection
         * @param {Function} callback
         */
        this.SetOnReceive = function(callback) {}
        
        /**
         * Raises the **R**equest **T**o **S**end state
         * @param {Boolean} onOff
         */
        this.SetRTS = function(onOff) {}
        
        /**
         * Tells the serial listener how to split received data. Splitted data will result in multiple OnReceive calls.
         * @param {String} mode End|Start
         * @param {} p2 
         * @param {} p3
         */
        this.SetSplitMode = function(mode,p2,p3) {}
        
        /**
         * 
         * @param {Number} ms Number milliseconds
         */
        this.SetTimeout = function(ms) {}
        
        /**
         * Start listening to the USB serial connection
         * 
         */
        this.Start = function() {}
        
        /**
         * Stop listening on USB serial connectio
         * 
         */
        this.Stop = function() {}
        
        /**
         * Send data over the USB serial connection to the other device
         * @param {String} text 
         * @param {String} encoding US
         */
        this.Write = function(text,encoding) {}
    }
    return new USBSerial;
}

/**
 * The **VideoView** can be used to play local video files from the filesystem or video streams from remote sources
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated
 */
app.CreateVideoView = function(width,height,options) {
        
    function VideoView() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Retunrs the video duration in seconds
         * 
         */
        this.GetDuration = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the VideoView is currently playing a vide
         * 
         */
        this.IsPlaying = function() {}
        
        /**
         * Returns whether the video is ready for playing
         * 
         */
        this.IsReady = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Pauses the video
         * 
         */
        this.Pause = function() {}
        
        /**
         * Plays the video
         * 
         */
        this.Play = function() {}
        
        /**
         * Seek the video to given time in seconds
         * @param {Number} seconds Number integer
         */
        this.SeekTo = function(seconds) {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Set the video file path or ur
         * @param {} file http(s)://url
         */
        this.SetFile = function(file) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * %cb% the playback has finished playin
         * @param {Function} callback
         */
        this.SetOnComplete = function(callback) {}
        
        /**
         * %cb% an error occured
         * @param {Function} callback
         */
        this.SetOnError = function(callback) {}
        
        /**
         * %cb% the video is ready for playback
         * @param {Function} callback
         */
        this.SetOnReady = function(callback) {}
        
        /**
         * %cb% the subtitle text changed
         * @param {Function} callback
         */
        this.SetOnSubtitle = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Set a subtitle file where to retreive the video subtitles from
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.SetSubtitles = function(file) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Change the video player volum
         * @param {Number} left Number percent
         * @param {Number} right Number percent
         */
        this.SetVolume = function(left,right) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Stop the video playback
         * 
         */
        this.Stop = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new VideoView;
}

/**
 * Creates a wallpaper instance in the wallpaper.js script.
 * @param {String} options String comma “,” separated
 */
app.CreateWallpaper = function(options) {
        
    function Wallpaper() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
    }
    return new Wallpaper;
}

/**
 * Web servers form the foundation of the web, especially the Internet of Things (IoT). Turning your phone or tablet into a web server or creating a network of interconnected devices is very simple with DroidScript. Set a document root for the server using the SetFolder method of the WebServer object. This is the folder location on your device that your web pages will be served from
 * @param {Number} port Number integer
 * @param {String} options String comma “,” separated ListDir:Show files in folder|Upload:Allow file uploads|NoWelcome:Ignore index&period;html|Reflect:Reflect web socket messages back to all clients,"&lt;BUFSIZE&gt;":"“ws_64k, ws_128k, ws_512k, ws_1M, ws_5M, ws_10M”"
 */
app.CreateWebServer = function(port,options) {
        
    function WebServer() {
        
        /**
         * Redirects a url pattern (with * wildcards) to a target locatio
         * @param {String} pattern String url path
         * @param {String} location String url path
         */
        this.AddRedirect = function(pattern,location) {
            return app.CreateRedirect();
        }
        
        /**
         * %cb% a HTTP GET request on a given servlet name was recieved
         * @param {} path /name
         * @param {Function} callback
         */
        this.AddServlet = function(path,callback) {
            return app.CreateServlet();
        }
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Disconnects a client from the WebServer
         * @param {String} ip 
         * @param {Number} id Number integer
         */
        this.Disconnect = function(ip,id) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns a list of connected client [WebSockets](CreateWebSocket.htm)
         * 
         */
        this.GetWebSockClients = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Sends a message to a specific client.
         * @param {String} txt 
         * @param {String} ip 
         * @param {Number} id Number integer
         */
        this.SendText = function(txt,ip,id) {}
        
        /**
         * Specifies the root folder of the server
         * @param {String} folder String path to folder ( “/absolute/...” or “relative/...” )
         */
        this.SetFolder = function(folder) {}
        
        /**
         * %cb% the server received a message from a client
         * @param {Function} callback
         */
        this.SetOnReceive = function(callback) {}
        
        /**
         * %cb% a file was uploaded to the server
         * @param {Function} callback
         */
        this.SetOnUpload = function(callback) {}
        
        /**
         * Responds to an incoming HTTP reques
         * @param {String} text
         */
        this.SetResponse = function(text) {}
        
        /**
         * Set a folder where uploaded files are to be placed
         * @param {String} folder String path to folder ( “/absolute/...” or “relative/...” )
         */
        this.SetUploadFolder = function(folder) {}
        
        /**
         * Start the server
         * 
         */
        this.Start = function() {}
        
        /**
         * Stop serve
         * 
         */
        this.Stop = function() {}
    }
    return new WebServer;
}

/**
 * WebSocket are useful when constantly comminicating with a server and when a fast reaction time is required
 * @param {String} ip 
 * @param {String} id 
 * @param {Number} retry Number integer
 * @param {String} options
 */
app.CreateWebSocket = function(ip,id,retry,options) {
        
    function WebSocket() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Close the web socket
         * 
         */
        this.Close = function() {}
        
        /**
         * Returns the js Socket instanc
         * 
         */
        this.GetSocket = function() {}
        
        /**
         * Check whether WebSocket is ope
         * 
         */
        this.IsOpen = function() {}
        
        /**
         * Send a message to the serve
         * @param {String} message
         */
        this.Send = function(message) {}
        
        /**
         * %cb% the WebSocket has been closed
         * @param {Function} callback
         */
        this.SetOnClose = function(callback) {}
        
        /**
         * %cb% the WebSocket recived a message from the server
         * @param {Function} callback
         */
        this.SetOnMessage = function(callback) {}
        
        /**
         * %cb% the WebSocket has been opened
         * @param {Function} callback
         */
        this.SetOnOpen = function(callback) {}
    }
    return new WebSocket;
}

/**
 * You can create a control to display local or remote web pages in your App using the **CreateWebView** method
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options String comma “,” separated AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 * @param {Number} zoom Number percent
 */
app.CreateWebView = function(width,height,options,zoom) {
        
    function WebView() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Loads the previous page from history
         * 
         */
        this.Back = function() {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Check whether the user can travel back in history
         * 
         */
        this.CanGoBack = function() {}
        
        /**
         * Check whether the user can travel forward in history
         * 
         */
        this.CanGoForward = function() {}
        
        /**
         * Captures the visible area of the web view to a file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.Capture = function(file) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clears the page history for Back() and Forward(
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Executes JavaScript code inside the WebView and passes the result to the callbac
         * @param {String} code String javascript code
         * @param {Function} callback
         */
        this.Execute = function(code,callback) {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Loads the following page from history
         * 
         */
        this.Forward = function() {}
        
        /**
         * Call functions defined inside a webvie
         * @param {String} name 
         * @param {all types} args...
         */
        this.Func = function(name,args...) {}
        
        /**
         * Get the absolute height of the control in pixels.
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels.
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Returns the parent control object where the object was added to - commonly a layout
         * 
         */
        this.GetParent = function() {}
        
        /**
         * Returns data about the position and size of the control.
         * @param {String} options screen,px
         */
        this.GetPosition = function(options) {}
        
        /**
         * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetTop = function(options) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current website url
         * 
         */
        this.GetUrl = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option.
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control overlaps with another by a given distance
         * @param {AppObject} obj 
         * @param {Number} depth Number fraction (0..1)
         */
        this.IsOverlap = function(obj,depth) {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Loads html code to the WebView
         * @param {String} html String html code
         * @param {String} baseFolder String path to folder ( “/absolute/...” or “relative/...” )
         * @param {String} options String comma “,” separated AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoRedirect:blocks assert redirect,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
         */
        this.LoadHtml = function(html,baseFolder,options) {}
        
        /**
         * Loads an url to the WebVie
         * @param {String} url String url path
         * @param {String} options String comma “,” separated AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoRedirect:blocks assert redirect,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
         */
        this.LoadUrl = function(url,options) {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Print current page via the builtin android printer dialog.
         * 
         */
        this.Print = function() {}
        
        /**
         * Reloads the current pag
         * 
         */
        this.Reload = function() {}
        
        /**
         * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_
         * @param {Number} alpha 0..0.99|1..256
         */
        this.SetBackAlpha = function(alpha) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetBackColor = function(color) {}
        
        /**
         * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options left
         */
        this.SetBackGradient = function(color1,color2,color3,options) {}
        
        /**
         * Define a radial color gradient for the background of control
         * @param {Number} x Number fraction (0..1)
         * @param {Number} y Number fraction (0..1)
         * @param {Number} radius Number fraction (0..1)
         * @param {String} color1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} color2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {unknown} color3 
         * @param {String} options String comma “,” separated
         */
        this.SetBackGradientRadial = function(x,y,radius,color1,color2,color3,options) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Define a list of urls that are blocked for loading
         * @param {List} urls [ urls:str ]||str
         */
        this.SetBlockedUrls = function(urls) {}
        
        /**
         * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html)
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * Set a control description for accessibilit
         * @param {String} desc
         */
        this.SetDescription = function(desc) {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a url loaded when an error occured
         * @param {String} url String url path
         */
        this.SetErrorPage = function(url) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Scales the html text by a given factor
         * @param {Number} zoom Number fraction (0..1)
         */
        this.SetTextZoom = function(zoom) {}
        
        /**
         * %cb% a message was logged to the console
         * @param {Function} callback
         */
        this.SetOnConsole = function(callback) {}
        
        /**
         * %cb% an error occured
         * @param {Function} callback
         */
        this.SetOnError = function(callback) {}
        
        /**
         * %cb% the webpage loading progress change
         * @param {Function} callback
         */
        this.SetOnProgress = function(callback) {}
        
        /**
         * Called when a HTTP Request was made in the webview
         * @param {Function} callback
         */
        this.SetOnRequest = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user clicked a link
         * @param {Function} callback
         */
        this.SetOnUrl = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left Number fraction (0..1)
         * @param {Number} top Number fraction (0..1)
         * @param {Number} right Number fraction (0..1)
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Defines the position and size for the control if the parent is an absolute layout
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px
         */
        this.SetPosition = function(left,top,width,height,options) {}
        
        /**
         * Add a url redirection rule
         * @param {String} urlFrom String url path
         * @param {String} urlTo String url path
         */
        this.SetRedirect = function(urlFrom,urlTo) {}
        
        /**
         * Scales the control along with its contents by the factors passed to the function
         * @param {Number} x Number factor
         * @param {Number} y Number factor
         */
        this.SetScale = function(x,y) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Set the control in touch mode
         * @param {Boolean} mode
         */
        this.SetTouchMode = function(mode) {}
        
        /**
         * Defines a custom user agen
         * @param {String} agent
         */
        this.SetUserAgent = function(agent) {}
        
        /**
         * Set login data for websites that require authentication
         * @param {String} name 
         * @param {String} password
         */
        this.SetUserCreds = function(name,password) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Simulates a key event on an app object.
         * @param {String} keyName 
         * @param {String} modifiers META_META_ON,META_RIGHT_ON,NUM_LOCK_ON,SCROLL_LOCK_ON,SHIFT_LEFT_ON,SHIFT_MASK,SHIFT_ON,SHIFT_RIGHT_ON,SYM_ON
         * @param {Number} pause
         */
        this.SimulateKey = function(keyName,modifiers,pause) {}
        
        /**
         * Stops any web loading
         * 
         */
        this.Stop = function() {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new WebView;
}

/**
 * The wizard is supposed to simplify a configuration progress which requires several inputs and decisions by the user
 * @param {String} title 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {Function} callback 
 * @param {String} options String comma “,” separated AutoCancel|NoCancel,NoTitle,NoFocus,NoDim,NoKeys,TouchModal,NoTouch
 */
app.CreateWizard = function(title,width,height,callback,options) {
        
    function Wizard() {
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Hide the control and remove it from the screen
         * 
         */
        this.Dismiss = function() {}
        
        /**
         * Indicate that the Wizard is going to finish on the next page
         * 
         */
        this.Finish = function() {}
        
        /**
         * Returns the list of the three control buttons at the bottom of the wizard
         * 
         */
        this.GetButtons = function() {}
        
        /**
         * Returns the dialog:dso-"CreateDialog" object of the wizard
         * 
         */
        this.GetDialog = function() {}
        
        /**
         * Return s the content layout:dso-"CreateLayout" object of the wizard
         * 
         */
        this.GetLayout = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
    }
    return new Wizard;
}

/**
 * The YesNo dialog can be used to let the user confirm a specific action. Its the equivalent to the js confirm function, but it is more customizable. <grey>(and doesn't crash when aborting</grey
 * @param {String} message 
 * @param {String} options String comma “,” separated NoDim,NoFocus,TouchModal
 */
app.CreateYesNoDialog = function(message,options) {
        
    function YesNoDialog() {
        
        /**
         * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control
         * @param {Number} hue 
         * @param {Number} saturation 
         * @param {Number} brightness 
         * @param {Number} contrast 0..100
         */
        this.AdjustColor = function(hue,saturation,brightness,contrast) {}
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Hide the control and remove it from the screen
         * 
         */
        this.Dismiss = function() {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Allows access to other functions defined on the object in Java via reflection.
         * @param {String} name 
         * @param {List} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
         * @param {String} p1 
         * @param {String} p2 
         * @param {String} p3 
         * @param {String} p4
         */
        this.Method = function(name,types,p1,p2,p3,p4) {}
        
        /**
         * Changes the background color of the control
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius Number pixel
         */
        this.SetBackColor = function(color,radius) {}
        
        /**
         * Changes the background to an image which can be repeated using the **repeat** option.
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} options repeat
         */
        this.SetBackground = function(file,options) {}
        
        /**
         * Changes the texts of the two Yes/No buttons
         * @param {String} yes 
         * @param {String} no
         */
        this.SetButtonText = function(yes,no) {}
        
        /**
         * %cb% the user touches one of the buttons, passing either “Yes” or “No” to the callback functio
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Change the size of the control in either screen relative values or in pixels if the **px** option was given
         * @param {Number} width 
         * @param {Number} height 
         * @param {String} options px|sp|dip|dp|mm|pt
         */
        this.SetSize = function(width,height,options) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
    }
    return new YesNoDialog;
}

/**
 * The ZipUtil is handy for creating, editing and extracting zip files. You can even add files or texts to existing zip files, list their contents and extract single files from them
 * @param {String} mode
 */
app.CreateZipUtil = function(mode) {
        
    function ZipUtil() {
        
        /**
         * Adds a file to the zip relative to the zip root
         * @param {} name 
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.AddFile = function(name,file) {
            return app.CreateFile();
        }
        
        /**
         * Adds some text to the zip relative to the zip root
         * @param {} name 
         * @param {String} text
         */
        this.AddText = function(name,text) {
            return app.CreateText();
        }
        
        /**
         * Batch method calls to be able to set all object's properties at once.
         * @param {Object} properties { COMMAND:lst
         */
        this.Batch = function(properties) {}
        
        /**
         * Closes the zip util
         * 
         */
        this.Close = function() {}
        
        /**
         * Creates a new zip file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.Create = function(file) {}
        
        /**
         * Creates a Debuk keystore fil
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” ) debug.keystore
         */
        this.CreateDebugKey = function(file) {}
        
        /**
         * Creates a user keystore fil
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” ) user.keystore
         * @param {String} password 
         * @param {String} name 
         * @param {String} organization
         */
        this.CreateKey = function(file,password,name,organization) {}
        
        /**
         * Extract a single file from the zip to a gived destination
         * @param {} name 
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.Extract = function(name,file) {}
        
        /**
         * Returns the control class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns a list of the files contained in the zip
         * @param {String} path String path to file or folder ( “/absolute/...” or “relative/...” )
         */
        this.List = function(path) {}
        
        /**
         * Opens an already existing zip file
         * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
         */
        this.Open = function(file) {}
        
        /**
         * Signs and checks the zip against the keystore file and returns if it is ok
         * @param {String} fileIn String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} fileOut String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} keyStore String path to file or folder ( “/absolute/...” or “relative/...” )
         * @param {String} password
         */
        this.Sign = function(fileIn,fileOut,keyStore,password) {}
        
        /**
         * Updates the zip manifes
         * @param {String} fileIn String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} fileOut String path to file ( “/absolute/...” or “relative/...” )
         * @param {String} packageName 
         * @param {String} appName 
         * @param {String} permissions String comma “,” separated
         * @param {String} options String comma “,” separated Launch,Debug
         */
        this.UpdateManifest = function(fileIn,fileOut,packageName,appName,permissions,options) {}
    }
    return new ZipUtil;
}

/**
 * This function is an app equivalent to console.log(msg) which writes text into a console visible in debug mode “true” or “console”.
 * @param {String} message
 */
app.Debug = function(message) {}

/**
 * DeleteDatabase removes a specific database
 * @param {String} name
 */
app.DeleteDatabase = function(name) {}

/**
 * DeleteFile deletes a given file from the filesystem. This makes it hard to restore it!
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.DeleteFile = function(file) {}

/**
 * DeleteFolder does the same as DeleteFile but with folders. It recursively removes all files and folders of the given folder and finally deletes it.
 * @param {String} folder String path to folder ( “/absolute/...” or “relative/...” )
 */
app.DeleteFolder = function(folder) {}

/**
 * DestroyLayout destroys a layout and all its contents so it can't be used any more. As a result, all memory occupied by these objects will be released.
 * @param {AppObject} layout CreateLayout
 */
app.DestroyLayout = function(layout) {}

/**
 * DisableKeys prevents the default behavior of several hard, soft or keyboard keys
 * @param {String} keyList String comma “,” separated VOLUME_DOWN,VOLUME_UP,FORWARD,BACK,MENU,ENTER,...
 */
app.DisableKeys = function(keyList) {}

/**
 * Use this method to prevent any user interaction with the app.
 * @param {Boolean} disable
 */
app.DisableTouch = function(disable) {}

/**
 * Use DiscoverBtDevices to search for other bluetooth devices which are not paired with the current device. If any was found it will be forwarded directly to the **onFound** callback. If the search has finished **onComplete** function will be called
 * @param {String} filter 
 * @param {Function} onFound 
 * @param {Function} onComplete
 */
app.DiscoverBtDevices = function(filter,onFound,onComplete) {}

/**
 * Downloads a file using the Android's built-in download manager which creates a notification with the current download status and a custom title and description
 * @param {String} source 
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} title 
 * @param {String} description 
 * @param {String} options NoDialog
 */
app.DownloadFile = function(source,destination,title,description,options) {}

/**
 * Allows to en- or disable the devices back key. When it is disabled the global _OnBack_ app event will called when the user presses the back button - otherwise the app exits
 * @param {Boolean} enable
 */
app.EnableBackKey = function(enable) {}

/**
 * Shows a detailed error message with message, file and line in an asynchroneous dialog. You can also set it to quit the app after the user dismisses the dialog.
 * @param {String} message 
 * @param {Number} line Number integer
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {Boolean} quit
 */
app.Error = function(message,line,file,quit) {}

/**
 * Executes a piece of code asynchroneously to your program. It is designed for interacting with your main app from within a [WebView](CreateWebView.htm)
 * @param {String} js String javascript code
 */
app.Execute = function(js) {}

/**
 * With Exit you can cancel and completely stop the app. You can also forcefully **kill** the app by passing true as first argument
 * @param {Boolean} kill
 */
app.Exit = function(kill) {}

/**
 * ExtExec allows you to execute Linux shell commands in the powerful Linux environment provided by the free app called Termux
 * @param {String} name termux
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} args 
 * @param {String} options hide
 */
app.ExtExec = function(name,file,args,options) {}

/**
 * ExtractAssets allows to extract folders and files from your compiled APK to the local storage. But it works for local DroidScript projects as well. When override is false, already existant files will be kept and not overridden
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {Boolean} overwrite 
 * @param {String} options DoEvents:extract in background
 */
app.ExtractAssets = function(source,destination,overwrite,options) {}

/**
 * ExtractPlugins overrides old plugin versions in the app's private folder with newer versions shipped with the APK.
 * 
 */
app.ExtractPlugins = function() {}

/**
 * FileExists Checks if a given file exists in your filesystem or not.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.FileExists = function(file) {}

/**
 * Checks if a given folder exits or not.
 * @param {String} folder String path to folder ( “/absolute/...” or “relative/...” )
 */
app.FolderExists = function(folder) {}

/**
 * Call main app functions from inside a webvie
 * @param {String} name 
 * @param {all types} args...
 */
app.Func = function(name,args...) {}

/**
 * With **G**oogle **A**nalytics implemented via analytics.js you can track the use of your apps in real-time and watch as people are using it all over the planet and see what city they are in. You can get lots of usage statistics including what version of your app they are using, what version of Android, the time of day they are using your app, what device they are using and even which parts of the app people are using the most
 * @param {String} command create|send|set|require|provide|remove
 * @param {String} [...fields] 
 * @param {Object} options
 */
app.GA = function(command,[...fields],options) {}

/**
 * Returns information about the availability of several accesibility features on the device
 * 
 */
app.GetAccessibility = function() {}

/**
 * Returns a string of all known account names on the device separated with comma ','.
 * 
 */
app.GetAccounts = function() {}

/**
 * GetActivities returns a list of object of currently running activities.
 * 
 */
app.GetActivities = function() {}

/**
 * Returns the name of the current app
 * 
 */
app.GetAppName = function() {}

/**
 * Returns the path to the app assets folder. In a DroidScript project the path should be “/sdcard/DroidScript/APPNAME”
 * 
 */
app.GetAppPath = function() {}

/**
 * Returns the current battery level of the device in percent.
 * 
 */
app.GetBatteryLevel = function() {}

/**
 * Returns the hexadecimal Bluetooth address of the device, following the pattern “00&colon;00&colon;00&colon;00&colon;00&colon;00”.
 * 
 */
app.GetBluetoothAddress = function() {}

/**
 * Returns the Bluetooth name of the device.
 * 
 */
app.GetBluetoothName = function() {}

/**
 * Returns the Bluetooth State of a given Bt connection type.
 * @param {String} type a2dp|headset|gatt|health
 */
app.GetBtProfileState = function(type) {}

/**
 * GetBuildNum returns the build number of an APK
 * 
 */
app.GetBuildNum = function() {}

/**
 * Returns the current charge type. If the device isn't charging the result is “None”.
 * 
 */
app.GetChargeType = function() {}

/**
 * GetClipboardText returns text that was last copied to the clipboard.
 * 
 */
app.GetClipboardText = function() {}

/**
 * Returns the name of the device country (ie. “United Kingdom” or “Deutschland”)
 * 
 */
app.GetCountry = function() {}

/**
 * Returns the code of the device country (ie. “GB” or “DE”)
 * 
 */
app.GetCountryCode = function() {}

/**
 * Returns data stored via app.SetData(key, value). All data will be lost when the app is closed.
 * @param {String} name
 */
app.GetData = function(name) {}

/**
 * Returns the path to the database folder of the app. An example pattern is “/data/data/packageName/databases”.
 * 
 */
app.GetDatabaseFolder = function() {}

/**
 * Returns the default Orientation of the device. The result modes can be “Portrait” if the device width is smaller than the device height, or “Landscape” vice versa.
 * 
 */
app.GetDefaultOrientation = function() {}

/**
 * Returns the alphanumeric ID of the device which is different for each devic
 * 
 */
app.GetDeviceId = function() {}

/**
 * Get the display height of the app in pixels. Therefore the android status bar and virtual buttons won't be included to the value.
 * 
 */
app.GetDisplayHeight = function() {}

/**
 * Get the display width of the app in pixels. Therefore virtual buttons won't be included to the value.
 * 
 */
app.GetDisplayWidth = function() {}

/**
 * Returns the current drawer state of a drawer on a given side.
 * @param {String} side left|right
 */
app.GetDrawerState = function(side) {}

/**
 * Returns the current DroidScript version number in the format 0.00
 * 
 */
app.GetDSVersion = function() {}

/**
 * Returns the value of an environment variable defined on the device
 * @param {String} name PATH|...
 */
app.GetEnv = function(name) {}

/**
 * GetExternalFolder returns the path to the external micro sdcard of the device. Normally it is something like “/storage/extsd” or “/storage/extSdCard”
 * 
 */
app.GetExternalFolder = function() {}

/**
 * GetFileDate returns a Date object containing the last modified date of a file or folder
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.GetFileDate = function(file) {}

/**
 * GetFileSize returns the size of a file or folder in byte
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.GetFileSize = function(file) {}

/**
 * Returns the free space of the internal or external storage in GigaBytes
 * @param {String} mode internal|external
 */
app.GetFreeSpace = function(mode) {}

/**
 * Returns a list of objects containing informations about installed apps.
 * 
 */
app.GetInstalledApps = function() {}

/**
 * Returns an intent object sent to the app.
 * 
 */
app.GetIntent = function() {}

/**
 * Get devices internal “/sdcard/” path. Normally it should be “/storage/emulated/legacy”.
 * 
 */
app.GetInternalFolder = function() {}

/**
 * GetIPAddress returns the current network ip address. It should look like “0.0.0.0” which is the default value for disabled internet connection. The individual numbers can have values between 0 and 255
 * 
 */
app.GetIPAddress = function() {}

/**
 * Returns the name of a conected joystick.
 * @param {Number} id Number integer
 */
app.GetJoystickName = function(id) {}

/**
 * Returns the state of a connected joystick. The key can have many values depending on the used controller. The axis-n keys are for different joystick x/y/z axes or the D-Pad - you will best try which key stands for which button with the attached example
 * @param {Number} id Number integer
 * @param {String} key A|B|C|X|Y|Z|R1|L1|Left|Right|Up|Down|Start|ThumbLeft|ThumbRight|axis
 */
app.GetJoystickState = function(id,key) {}

/**
 * Returns an object with all keystates.
 * @param {Number} id Number integer
 */
app.GetJoystickStates = function(id) {}

/**
 * Returns the height of the device keyboard in pixels. Returns _0_ if the keyboard is hidden.
 * 
 */
app.GetKeyboardHeight = function() {}

/**
 * GetLanguage returns the name of the devices language (ie. “English” or “Deutsch”).
 * 
 */
app.GetLanguage = function() {}

/**
 * Returns the available translation languages specified in your lang.json file.
 * 
 */
app.GetAppLanguages = function() {}

/**
 * GetLanguageCode returns the user language code (ie&period; “en” or “de”).
 * 
 */
app.GetLanguageCode = function() {}

/**
 * Returns the alphanumeric **M**edia-**A**ccess-**C**ontrol address of the device. Style should be “00&colon;00&colon;00&colon;00&colon;00&colon;00”. The individual numbers can have hexadecimal values between 00 and FF
 * 
 */
app.GetMacAddress = function() {}

/**
 * Returns a file path to a unique media file matching the format “/storage/emulated/0/Pictures/[**folder**]/**YYYYMMDD**_**hhmmSSsss**[**ext**]”. The folder for this file will be created automatically.
 * @param {} folder 
 * @param {String} ext
 */
app.GetMediaFile = function(folder,ext) {}

/**
 * Returns an object containing informations about the RAM memory
 * 
 */
app.GetMemoryInfo = function() {}

/**
 * Returns a string list of metadata values contained in an audio file.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} keys String comma “,” separated album,artist,genre,title,composer,author,duration,bitrate,width,height
 */
app.GetMetadata = function(file,keys) {}

/**
 * Returns the model name of the device
 * 
 */
app.GetModel = function() {}

/**
 * Returns the name of the APK application. meaning if your app runs in DroidScript, the name will be “DroidScript” as well
 * 
 */
app.GetName = function() {}

/**
 * If the app was started by a notification, this function will return the id of that notification.
 * 
 */
app.GetNotifyId = function() {}

/**
 * Returns a map of DroidScript control objects with their id as key
 * 
 */
app.GetObjects = function() {}

/**
 * Returns all current app settings. If ran from inside DroidScript, “debug,remote,holo” is the default value.
 * 
 */
app.GetOptions = function() {}

/**
 * Returns the current device orientation. The result modes can be “Portrait” if the device width is smaller than the device height, or “Landscape” vice versa.
 * 
 */
app.GetOrientation = function() {}

/**
 * GetOSVersion returns the API target level  of the android version
 * 
 */
app.GetOSVersion = function() {}

/**
 * Returns the package name of the APK
 * 
 */
app.GetPackageName = function() {}

/**
 * Returns a list of objects containing the name and bluetooth address of paired devices. Note that Bluetooth must be turned on to receive this information.
 * 
 */
app.GetPairedBtDevices = function() {}

/**
 * Returns the path to the local storage folder of the APK.
 * 
 */
app.GetPath = function() {}

/**
 * GetPermission accepts a list of 'dangerus' classified permissions and returns a list of ungranted permissions in the **callback** function, or in case of only “ExtSDCard” the path URI of the user-selected folder.
 * @param {String} type String comma “,” separated Camera|ExtSDcard|External|Internal|Network|Storage|Overlay|SMS|Location|Calendar|Body|Contacts|Record|Phone|Biometric|Accounts|License|usb:<pid:num>
 * @param {Function} callback
 */
app.GetPermission = function(type,callback) {}

/**
 * Returns the path to a folder located in the apps private space which is normally not accessible by other apps or the user himself.
 * @param {String} name 
 * @param {String} options external
 */
app.GetPrivateFolder = function(name,options) {}

/**
 * Returns the id of a resource.
 * @param {String} name 
 * @param {String} options android
 */
app.GetResourceId = function(name,options) {}

/**
 * Returns the current ringer mode of the device which can be “Normal”, “Vibrate” or “Silent”.
 * 
 */
app.GetRingerMode = function() {}

/**
 * Returns the current rotation of the device around it's Z-Axis in 90 degree steps. The values are relative to the initial orientation of the device on startup.
 * 
 */
app.GetRotation = function() {}

/**
 * Returns the routers ip address. (Its typically your own IP but ending with a .1, ie. 192.168.178.1
 * 
 */
app.GetRouterAddress = function() {}

/**
 * Returns the current _**R**eceived **S**ignal **S**trength **I**ndication_ which is a measurement of the power present in a received WiFi signal in dBm (decibel milliwatt)
 * 
 */
app.GetRSSI = function() {}

/**
 * Returns a list of objects containing info about all currently running apps in the fore- or background.
 * 
 */
app.GetRunningApps = function() {}

/**
 * Returns a list of objects containing info about all currently running services in the background.
 * 
 */
app.GetRunningServices = function() {}

/**
 * Returns the density of the device's screen.
 * 
 */
app.GetScreenDensity = function() {}

/**
 * Returns the total screen height of the device in pixels. With the 'Real' **option** softkeys will be included in the value.
 * @param {String} options Real
 */
app.GetScreenHeight = function(options) {}

/**
 * Returns the total screen width of the device in pixels. With the 'Real' **option** softkeys will be included in the value.
 * @param {String} options Real
 */
app.GetScreenWidth = function(options) {}

/**
 * Returns a path list of files shared with the app. If the results were retreived they can't be read an other time, unless they will be shared again.
 * 
 */
app.GetSharedFiles = function() {}

/**
 * Returns the value of a shared text. If the result is returned, it cannot be read another time unless it is shared again.
 * 
 */
app.GetSharedText = function() {}

/**
 * Returns a list of installed tts engines.
 * 
 */
app.GetSpeechEngines = function() {}

/**
 * Checks if the speaker is enabled for phone calls. Returns false if no call is active.
 * 
 */
app.GetSpeakerPhone = function() {}

/**
 * Returns the full path to a special folder commonly used for images, videos, music etc.
 * @param {String} name DCIM|Pictures|Movies|Downloads|Music
 */
app.GetSpecialFolder = function(name) {}

/**
 * Returns the name (SSID) of the current network the user is connected with. If WiFi is disabled “<unknown ssid>” is returned.
 * 
 */
app.GetSSID = function() {}

/**
 * Calculates text dimensions based on a specific control or with default setting
 * @param {String} txt 
 * @param {Number} size 
 * @param {Number} width Number fraction (0..1)
 * @param {AppObject} obj
 */
app.GetTextBounds = function(txt,size,width,obj) {}

/**
 * Returns the configuration of the current theme
 * 
 */
app.GetThemeInfo = function() {}

/**
 * Creates a downscaled copy of an existing image. Pass -1 as width or height to keep the aspect ratio.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {Number} width Number pixel
 * @param {Number} height Number pixel
 */
app.GetThumbnail = function(source,destination,width,height) {}

/**
 * Returns the upper border distance from the app display to the device screen as height relative float or in pixels with the **px** option
 * @param {String} options px
 */
app.GetTop = function(options) {}

/**
 * Returns the object class name
 * 
 */
app.GetType = function() {}

/**
 * Returns the email-address of the currently active user account.
 * 
 */
app.GetUser = function() {}

/**
 * Returns the app version number of the currently running apk
 * 
 */
app.GetVersion = function() {}

/**
 * Returns the volume level of a given audio type as a number between 0 and 1. By default the “System” volume is returned.
 * @param {String} stream alarm|dtmf|music|notification|ring|system|voicecall
 */
app.GetVolume = function(stream) {}

/**
 * Forces the screen to turn off and puts the device to sleep. (This has the same effect as pressing the power button)
 * 
 */
app.GoToSleep = function() {}

/**
 * Checks if the device has a soft navigation bar on the screen
 * 
 */
app.HasSoftNav = function() {}

/**
 * Hides the main app layout in order to save performance when (re)creating controls.
 * 
 */
app.Hide = function() {}

/**
 * Hides the device keyboard if it is currently shown.
 * 
 */
app.HideKeyboard = function() {}

/**
 * Hides a previously shown progress indicator.
 * 
 */
app.HideProgress = function() {}

/**
 * Hides a previously shown progress bar dialog.
 * 
 */
app.HideProgressBar = function() {}

/**
 * HttpRequest sends a request to a server. baseUrl and path will just be added to one string to get the address.
 * @param {String} type GET:retrieve data|POST:submit data|JSON:post json data|PUT:replace target resource|DELETE:deletes the resource|HEAD:omit body
 * @param {String} baseUrl String url path
 * @param {String} path 
 * @param {String} params 
 * @param {Function} callback 
 * @param {String} headers
 */
app.HttpRequest = function(type,baseUrl,path,params,callback,headers) {}

/**
 * 
 * 
 */
app.InIDE = function() {}

/**
 * Let the user install a device wallpaper located in the 'Wallpaper.js' script in the project root folder.
 * @param {String} packageName this
 * @param {String} className this
 */
app.InstallWallpaper = function(packageName,className) {}

/**
 * Starts the installation process of an apk file from your local drive
 * @param {String} apkFile String path to file ( “/absolute/...” or “relative/...” )
 * @param {Function} callback 
 * @param {String} options
 */
app.InstallApp = function(apkFile,callback,options) {}

/**
 * Returns whether current app is an APK or not (case not it's a DroidScript Project)
 * 
 */
app.IsAPK = function() {}

/**
 * Checks if an app given by a package name is installed.
 * @param {String} packageName
 */
app.IsAppInstalled = function(packageName) {}

/**
 * Return whether bluetooth was enabled. 
 * 
 */
app.IsBluetoothEnabled = function() {}

/**
 * Checks if bluetooth is enabled and on.
 * 
 */
app.IsBluetoothOn = function() {}

/**
 * Checks if a given bluetooth device was paired with the user device.
 * @param {String} name
 */
app.IsBtDevicePaired = function(name) {}

/**
 * Checks if phone is currently charging or not.
 * 
 */
app.IsCharging = function() {}

/**
 * Checks if the device is running on ChromeOS.
 * 
 */
app.IsChrome = function() {}

/**
 * Checks if the device is connected to any network.
 * 
 */
app.IsConnected = function() {}

/**
 * Checks if the app is currently debugging.
 * 
 */
app.IsDebugging = function() {}

/**
 * Checks if the passed fs path leads to a folder.
 * @param {String} folder String path to folder ( “/absolute/...” or “relative/...” )
 */
app.IsFolder = function(folder) {}

/**
 * Checks if the device keyboard is currently visible or not.
 * 
 */
app.IsKeyboardShown = function() {}

/**
 * Checks if a specific location mode was enabled.
 * @param {String} mode GPS|Network
 */
app.IsLocationEnabled = function(mode) {}

/**
 * Checks if the Navigation Bar is on the righthand side of the display
 * 
 */
app.IsNavBarOnRight = function() {}

/**
 * Checks if the apk version number increased compared to the last time started
 * 
 */
app.IsNewVersion = function() {}

/**
 * Checks if the device is in portrait mode
 * 
 */
app.IsPortrait = function() {}

/**
 * Checks if the user has a DroidScript premium subscription inside the IDE
 * 
 */
app.IsPremium = function() {}

/**
 * Indicates 'scoped storage' on Android 10
 * 
 */
app.IsScoped = function() {}

/**
 * Checks if the device screen is currently on
 * 
 */
app.IsScreenOn = function() {}

/**
 * Checks if the currently running app instance is a service
 * 
 */
app.IsService = function() {}

/**
 * Checks if the app has finished loading. It will return true after OnStart has returned
 * 
 */
app.IsStarted = function() {}

/**
 * Checks if the user device is a tablet.
 * 
 */
app.IsTablet = function() {}

/**
 * Checks if the OS is AndroidThings.
 * 
 */
app.IsTV = function() {}

/**
 * Checks if the mobile Wifi Access Point is enabled on the user device.
 * 
 */
app.IsWifiApEnabled = function() {}

/**
 * Checks if Wifi is enabled on the user device.
 * 
 */
app.IsWifiEnabled = function() {}

/**
 * Kills a running app by its process ID. You can retreive a list of all running apps with their pids using the @GetRunningApps function of the **app** object
 * @param {Number} pid Number integer
 */
app.KillApp = function(pid) {}

/**
 * Convert the user language name to it's 2 character long language code. If no argument is passed, the current language code is returned.
 * @param {String} name
 */
app.GetAppLangCode = function(name) {}

/**
 * Launches an app if installed or search for it on GooglePlay otherwise
 * @param {String} packageName 
 * @param {} noPlay
 */
app.LaunchApp = function(packageName,noPlay) {}

/**
 * The ListFolder method returns a list of all files and folders in a given folder
 * @param {String} path String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} filter 
 * @param {Number} limit Number integer
 * @param {String} options String comma “,” separated Alphasort:sorts the paths in alphabetical order,FullPath:returns absolute paths to the listed items,RegEx:accepts regexp patterns,Folders:list folders only,Files:list files only,NoEmpty:hide empty folders,project:Shows DS project folders only
 */
app.ListFolder = function(path,filter,limit,options) {}

/**
 * Returns a list of granted permission
 * @param {String} type storage
 */
app.ListPermissions = function(type) {}

/**
 * Load a saved boolean value to remember varibale values between multiple app starts.
 * @param {String} name 
 * @param {Boolean} default 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.LoadBoolean = function(name,dflt,file) {}

/**
 * Load a saved number value to remember varibale values between multiple app starts.
 * @param {String} name 
 * @param {Number} default 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.LoadNumber = function(name,dflt,file) {}

/**
 * Load a saved json object to remember varibale values between multiple app starts.
 * @param {String} name 
 * @param {Object} default 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.LoadJson = function(name,dflt,file) {}

/**
 * Import an installed plugin to your app. You can download plugins from [DroidScript's plugin page](http://droidscript.org/plugins/), [Google Playstore](https://play.google.com/store/search?q=DroidScript+Plugin) or you can create self-written plugins
 * @param {String} url String url path
 */
app.LoadPlugin = function(url) {}

/**
 * Loads a local JavaScript file asynchronously to your app to make its functionality available in your app.
 * @param {String} path String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {Function} callback
 */
app.LoadScript = function(path,callback) {}

/**
 * Load saved text value to remember varibale values between multiple app starts.
 * @param {String} name 
 * @param {String} default 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.LoadText = function(name,dflt,file) {}

/**
 * Locks the device.
 * 
 */
app.Lock = function() {}

/**
 * Make drawer on a specific side unaccessible for the app and the user, hiding it if necessary. You can only unlock it using the @UnlockDrawer method.
 * @param {String} side left|right
 */
app.LockDrawer = function(side) {}

/**
 * Creates a new folder in the local filesystem recursively.
 * @param {String} folder String path to folder ( “/absolute/...” or “relative/...” )
 */
app.MakeFolder = function(folder) {}

/**
 * OpenDatabase creates or opens a local database in which large amounts of data can be stored that can still be queried in a reasonable amount of time
 * @param {String} name
 */
app.OpenDatabase = function(name) {
        
    function Database() {
        
        /**
         * addTransaction
         * @param {} transaction
         */
        this.addTransaction = function(transaction) {}
        
        /**
         * Close the database
         * @param {Function} success 
         * @param {Function} error
         */
        this.close = function(success,error) {}
        
        /**
         * Close the databas
         * 
         */
        this.Close = function() {}
        
        /**
         * databaseFeatures
         * 
         */
        this._databaseFeatures = function() {}
        
        /**
         * dbname
         * 
         */
        this._dbname = function() {}
        
        /**
         * Delete the databas
         * 
         */
        this.Delete = function() {}
        
        /**
         * Executes a SQL query
         * @param {String} statement String sql code
         * @param {List} params 
         * @param {Function} success 
         * @param {Function} error
         */
        this.executeSql = function(statement,params,success,error) {}
        
        /**
         * Executes a SQL quer
         * @param {String} sql String sql code
         * @param {List} params 
         * @param {Function} success 
         * @param {Function} error
         */
        this.ExecuteSql = function(sql,params,success,error) {}
        
        /**
         * Returns the database nam
         * 
         */
        this.GetName = function() {}
        
        /**
         * Returns the component class name
         * 
         */
        this.GetType = function() {}
        
        /**
         * The database name
         * 
         */
        this.name = function() {}
        
        /**
         * Opens the database
         * @param {Function} success 
         * @param {Function} error
         */
        this.open = function(success,error) {}
        
        /**
         * openargs
         * 
         */
        this._openargs = function() {}
        
        /**
         * contains DBs
         * 
         */
        this._openDBs = function() {}
        
        /**
         * openError
         * @param {String} err
         */
        this._openError = function(err) {}
        
        /**
         * openSuccess
         * 
         */
        this._openSuccess = function() {}
        
        /**
         * readTransaction
         * @param {Function} fn 
         * @param {Function} error 
         * @param {Function} success
         */
        this.readTransaction = function(fn,error,success) {}
        
        /**
         * startNextTransaction
         * 
         */
        this.startNextTransaction = function() {}
        
        /**
         * transaction
         * @param {Function} fn 
         * @param {Function} error 
         * @param {Function} success
         */
        this.transaction = function(fn,error,success) {}
    }
    return new Database;
}

/**
 * Opens the drawer layout on the given side with slide animation.
 * @param {String} side left|right
 */
app.OpenDrawer = function(side) {}

/**
 * Allows the user to open a file with an external application on the device. The **choose** parameter shows the user a custom message in the choose dialog.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} type String mimetype
 * @param {String} choose
 */
app.OpenFile = function(file,type,choose) {}

/**
 * Allows the user to open an url with an external application on the device. The **choose** parameter shows the user a custom message in the choose dialog.
 * @param {String} url String url path
 * @param {String} type String mimetype
 * @param {String} choose
 */
app.OpenUrl = function(url,type,choose) {}

/**
 * Returns a content:// path for images and video
 * @param {String} path String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.Path2Uri = function(path) {}

/**
 * Pairs a bluetooth device with yours.
 * @param {String} address 
 * @param {Function} callback
 */
app.PairBtDevice = function(address,callback) {}

/**
 * Pins the app on the scree
 * @param {Boolean} enable
 */
app.PinScreen = function(enable) {}

/**
 * Play a specific ringtone type based on the users device settings for ringtones. _Type_ can be “Alarm”, “Notification” or “Ringtone”
 * @param {String} type Alarm|Notification|Ringtone
 */
app.PlayRingtone = function(type) {}

/**
 * Plays a sound file stored remotely or on the local filesystem.
 * @param {} file
 */
app.PlaySound = function(file) {}

/**
 * The _PreventScreenLock_ method prevents the device screen from dimming and locking while your app is in the foreground
 * @param {} mode Full:Device can sleep, Screen and Keyboard on|Partial:CPU always on, Screen and Keyboard off
 */
app.PreventScreenLock = function(mode) {}

/**
 * Prevent the device WiFi from powering down.
 * 
 */
app.PreventWifiSleep = function() {}

/**
 * Queries content from the android content model. The **uri** typically have the syntax “content://authority/path/id”. You can find more infos about it on the [Android Developer page](https://developer.android.com/reference/android/content/ContentUris)
 * @param {String} uri String URI encoded
 * @param {String} columns String comma “,” separated
 * @param {String} select String sql code
 * @param {List} args 
 * @param {String} sort coloumn:a coloumn specified in 'coloumns'
 */
app.QueryContent = function(uri,columns,select,args,sort) {}

/**
 * Quits the app with showing an @Alert dialog box before exiting. The function will pause the program and exit before any further commands can be executed
 * @param {String} msg 
 * @param {String} title 
 * @param {String} options String comma “,” separated NoDim,NoFocus
 */
app.Quit = function(msg,title,options) {}

/**
 * Reads a file from the local filesystem and returns its contents.
 * @param {String} file String file path or content:// uri
 * @param {String} encoding US
 */
app.ReadFile = function(file,encoding) {}

/**
 * Reads file data from the local filesystem and returns its contents.
 * @param {String} file String “/absolute/...” path to a file
 * @param {String} mode base64|hex|int|ascii
 */
app.ReadFileData = function(file,mode) {}

/**
 * Converts short file paths to full path
 * @param {String} path String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.RealPath = function(path) {}

/**
 * Reads the assets folders “Img”,“Snd”,“Html” and “Misc” from an external folder outside the apk
 * @param {String} dir String path to folder ( “/absolute/...” or “relative/...” )
 */
app.RedirectAssets = function(dir) {}

/**
 * Removes a drawer layout from a given side.
 * @param {String} side left|right
 */
app.RemoveDrawer = function(side) {}

/**
 * Removes a layout added to the app.
 * @param {AppObject} layout CreateLayout
 */
app.RemoveLayout = function(layout) {}

/**
 * Removes a granted permissio
 * @param {String} uri String URI encoded
 */
app.RemovePermission = function(uri) {}

/**
 * Renames a file on the local filesystem. This method can also be used to move a file to a whole other destination.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.RenameFile = function(source,destination) {}

/**
 * Renames a folder on the local filesystem. This method can also be used to move a folder to a whole other destination.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.RenameFolder = function(source,destination) {}

/**
 * Replaces all occurances of some text or a regex pattern in a local file with some other text
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} txt 
 * @param {String} rep 
 * @param {String} options String comma “,” separated
 */
app.ReplaceInFile = function(file,txt,rep,options) {}

/**
 * Save a boolean value to remember varibale values between multiple app starts.
 * @param {String} name 
 * @param {Boolean} value 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.SaveBoolean = function(name,value,file) {}

/**
 * Saves cookies for webviews or html apps.
 * 
 */
app.SaveCookies = function() {}

/**
 * Save a number value to remember varibale values between multiple app starts and updates.
 * @param {String} name 
 * @param {Number} value 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.SaveNumber = function(name,value,file) {}

/**
 * Save a json object to remember varibale values between multiple app starts and updates.
 * @param {String} name 
 * @param {Object} value 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.SaveJson = function(name,value,file) {}

/**
 * Save a text value to remember varibale values between multiple app starts and updates.
 * @param {String} name 
 * @param {String} value 
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.SaveText = function(name,value,file) {}

/**
 * Forces android to scan an image file to appear in the phone's gallery.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 */
app.ScanFile = function(file) {}

/**
 * Takes a screen shot of your app and saves it to the specified path. Quality is an **option**al percentage value for jpg files defaulting to 95.
 * @param {String} fileName String path to file ( “/absolute/...” or “relative/...” )
 * @param {Number} quality Number percent
 */
app.ScreenShot = function(fileName,quality) {}

/**
 * Schedules background jobs defined in a Job.js file
 * @param {Number} delay Number milliseconds
 * @param {String} options
 */
app.ScheduleJob = function(delay,options) {}

/**
 * Loads a local JavaScript file to your app to make its functionality available in your app.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {} noDefer
 */
app.Script = function(file,noDefer) {}

/**
 * Send a file to a remote target, ie. via Email. %c The **subject** and **text** arguments will be auto filled and the **choose** text will be displayed when the user selects the target app. Default may be something like _'Complete action using'_
 * @param {String} file String “/absolute/...” path to a file
 * @param {String} subject 
 * @param {String} text 
 * @param {String} choose
 */
app.SendFile = function(file,subject,text,choose) {}

/**
 * Send an image to a remote target, ie. via Email or a messenger. The **choose** text will be displayed when the user selects the target app. Default may be something like _'Complete action using'_
 * @param {String} file String “/absolute/...” path to a file
 * @param {String} choose
 */
app.SendImage = function(file,choose) {}

/**
 * Intens can be used to perform an operation between different applications or activities. _It is basically a passive data structure holding an abstract description of an action to be performed_
 * @param {String} packageName 
 * @param {String} className 
 * @param {String} action android.intent.action.*
 * @param {String} category android.intent.category.*
 * @param {String} uri String URI encoded
 * @param {String} type String mimetype
 * @param {List} extras [{ name:str&comma; type:str
 * @param {String} options String comma “,” separated result,cleartask
 * @param {Function} callback
 */
app.SendIntent = function(packageName,className,action,category,uri,type,extras,options,callback) {}

/**
 * Send an EMail to someone using the default mail application. The passed argumets will be auto-filled
 * @param {String} address 
 * @param {String} subject 
 * @param {String} body 
 * @param {String} attach String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} type String mimetype
 * @param {String} options SendTo
 */
app.SendMail = function(address,subject,body,attach,type,options) {}

/**
 * Send a message from a Service to the main app
 * @param {String} message
 */
app.SendMessage = function(message) {}

/**
 * Send an SMS to someone using the default SMS application. The passed argumets will be auto-filled or requested by the SMS app otherwise. %c
 * @param {String} msg 
 * @param {String} number String number
 */
app.SendSMS = function(msg,number) {}

/**
 * This Method is used for sharing text between apps
 * @param {String} text 
 * @param {String} subject 
 * @param {String} choose
 */
app.SendText = function(text,subject,choose) {}

/**
 * Set a time when you want your app to start automatically if it is not already opened. When the alarm is fired, the global _OnAlarm_ event will be fired
 * @param {String} type Set|Repeat|Cancel
 * @param {} id 
 * @param {Function} callback 
 * @param {Number} time Number datetime in milliseconds (from JS Date object)
 * @param {Number} interval Number milliseconds
 * @param {String} options String comma “,” separated ExactIdle|Exact:only works for single shot alarms,App:Opens main app if called from a service
 */
app.SetAlarm = function(type,id,callback,time,interval,options) {}

/**
 * Causes the current running APK or its Service to be started automatically when your device boots.
 * @param {String} auto App|Service|None
 */
app.SetAutoBoot = function(auto) {}

/**
 * Set a DroidScript project name which will be launched automatically when DroidScript starts.
 * @param {String} appName
 */
app.SetAutoStart = function(appName) {}

/**
 * Automatically enables the use of the WiFi editor. This method is mainly useful for headless devices like AndroidTV which don't have a DroidScript UI.
 * @param {Boolean} auto
 */
app.SetAutoWifi = function(auto) {}

/**
 * Changes the background color of the app
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
app.SetBackColor = function(color) {}

/**
 * Enables Bluetooth on the device.
 * @param {Boolean} enable
 */
app.SetBluetoothEnabled = function(enable) {}

/**
 * The SetClipboardText method puts text data on the device clip board. This allows you to copy and paste text between different applications.
 * @param {String} text
 */
app.SetClipboardText = function(text) {}

/**
 * Saves variables until the app closes. All saved data will be lost afterwards. %c
 * @param {String} name 
 * @param {String} value
 */
app.SetData = function(name,value) {}

/**
 * SetDebug lets you control the debugging level. The available modes are
 * @param {String} switches String comma “,” separated console,ds,adb,all
 */
app.SetDebug = function(switches) {}

/**
 * Changes the dpi value (dots per inch) that affects the content of any control created afterwards. The smaller the value, the smaller the scaling.
 * @param {Number} dpi Number integer
 */
app.SetDensity = function(dpi) {}

/**
 * Set the current service to run in the background.
 * 
 */
app.SetInBackground = function() {}

/**
 * Set the current service to run in the foreground.
 * @param {String} title 
 * @param {String} text 
 * @param {String} largeIcon String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} smallIcon String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} importance min|low|default|high|none
 */
app.SetInForeground = function(title,text,largeIcon,smallIcon,importance) {}

/**
 * Set options for the connected joystick. The “forwardkeys” **option** allows the joystick key presses to pass onto the child controls of the main activity. (They are normally prevented from reaching child controls)
 * @param {String} options String comma “,” separated ForwardKeys:allows the joystick key presses to pass onto the child controls of the main activity
 */
app.SetJoystickOptions = function(options) {}

/**
 * Blocks android functionality to keep the rest of your phone safe while others may use your app.
 * @param {String} mode String comma “,” separated Power,Status,Nav,NavRight,LockTask:COSU kiosk,Pin:task un
 * @param {Boolean} enable 
 * @param {String} options String comma “,” separated Black,Tasks:prevents recent tasks button working
 * @param {String} packages
 */
app.SetKioskMode = function(mode,enable,options,packages) {}

/**
 * Loads the current language code from the lang.json file in your project root folder. Make sure you use the [standard 2 letter language codes](http://www.loc.gov/standards/iso639-2/php/code_list.php).
 * @param {String} name
 */
app.SetAppLanguage = function(name) {}

/**
 * Set the app menu fields. When a menu entry is touched, the global _OnMenu_ event will be called.
 * @param {String} list String comma “,” separated
 * @param {String} iconPath String path to file ( “/absolute/...” or “relative/...” )
 */
app.SetMenu = function(list,iconPath) {}

/**
 * Set the default margins settings for control
 * @param {Number} left 
 * @param {Number} top 
 * @param {Number} right 
 * @param {Number} bottom Number fraction (0..1)
 * @param {String} mode px|sp|dip|mm|pt
 */
app.SetMargins = function(left,top,right,bottom,mode) {}

/**
 * Emulates a GPS location on the device.
 * @param {Number} lat 
 * @param {Number} lng 
 * @param {Number} accuracy
 */
app.SetMockLocation = function(lat,lng,accuracy) {}

/**
 * Change the android NavBar color.
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
app.SetNavBarColor = function(color) {}

/**
 * Define a callback function for incoming Broadcast messages.
 * @param {Function} callback 
 * @param {String} action
 */
app.SetOnBroadcast = function(callback,action) {}

/**
 * Define a callback function for debug messages.
 * @param {Function} callback
 */
app.SetOnDebug = function(callback) {}

/**
 * Define a callback function to catch thrown errors messages.
 * @param {Function} callback
 */
app.SetOnError = function(callback) {}

/**
 * You can use SetOnKey for receiving and handling all key events fired in the application
 * @param {Function} callback
 */
app.SetOnKey = function(callback) {}

/**
 * Define a callback function to detect when keyboard visible state has changed.
 * @param {Function} callback
 */
app.SetOnShowKeyboard = function(callback) {}

/**
 * Define a callback function to detect when the WiFi connected state has changed. The **state** parameter can be “CONNECTING”, “CONNECTED”, or “DISCONNECTED”. The WiFi ssid is passed on “CONNECTED” only.
 * @param {Function} callback
 */
app.SetOnWifiChange = function(callback) {}

/**
 * Define some global options for the app.
 * @param {String} options String comma “,” separated UseBrowser,NoKeys|ShowKeys,NoThemeAlerts,IgnoreSslErrors,TouchModal,NoTouch,NoFocus,Secure,ShowLocked,WakeScreen,ScreenOn
 */
app.SetOptions = function(options) {}

/**
 * Set the display orientation to a fixed value. You can unlock it again passing “Default” as **orientation**.
 * @param {String} orient Default|Landscape|ReverseLandscape|Portrait|ReversePortrait
 * @param {Function} callback
 */
app.SetOrientation = function(orient,callback) {}

/**
 * Change the main app's position and size. Mostly used for transparent apps
 * @param {Number} left Number fraction (0..1)
 * @param {Number} top Number fraction (0..1)
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options px
 */
app.SetPosition = function(left,top,width,height,options) {}

/**
 * Changes the GUI thread priority
 * @param {String} level Low|Medium|High
 */
app.SetPriority = function(level) {}

/**
 * Change the current ringer mode of the device which can be “Normal”, “Vibrate” or “Silent”.
 * @param {String} mode Normal|Vibrate|Silent
 */
app.SetRingerMode = function(mode) {}

/**
 * Change the screen brightness to a value between 0 and 1, where 0 is the lowest and 1 the highest possible brightness value
 * @param {Number} level Number fraction (0..1)
 */
app.SetScreenBrightness = function(level) {}

/**
 * Changes the screen mode of your application. If null is passed, the [app menu](SetMenu.htm) will be dismissed. When called, the global OnConfig function will be called (if defined)
 * @param {String} mode Default|Normal|Full|Game
 */
app.SetScreenMode = function(mode) {}

/**
 * Define a DroidScript Project which will be automatically started when DS received shared data. Check out the 'Shared Data' sample in the DS samples section.
 * @param {String} name AppName
 */
app.SetSharedApp = function(name) {}

/**
 * En/Disables the speaker for phone calls.
 * @param {Boolean} on
 */
app.SetSpeakerPhone = function(on) {}

/**
 * Change the android status bar color.
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
app.SetStatusBarColor = function(color) {}

/**
 * Set the default text size setting for control
 * @param {Number} size 
 * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */
app.SetTextSize = function(size,mode) {}

/**
 * Change the theme of your app to any created [Theme Object](CreateTheme.htm). The theme will only apply to objects created after the theme was set. You typically need to recreate all your controls or restart the app to apply the new theme.
 * @param {AppObject} theme CreateTheme
 */
app.SetTheme = function(theme) {}

/**
 * Change the user agent for html apps. For more details [ask Wikipedia](https://en.wikipedia.org/wiki/User_agent)
 * @param {String} agent
 */
app.SetUserAgent = function(agent) {}

/**
 * Set user credentials in an html app for websites that require user login
 * @param {String} name 
 * @param {String} password
 */
app.SetUserCreds = function(name,password) {}

/**
 * Set the volume of a given volume type as a number between 0 and 1.
 * @param {String} stream Alarm|DTMF:Dual Tone Multi
 * @param {Number} level Number fraction (0..1)
 * @param {String} options ShowUI
 */
app.SetVolume = function(stream,level,options) {}

/**
 * En/Disable the mobile Wifi Access Point of the device. You can define a custom WiFi AP name and a password as credentials for other people
 * @param {Boolean} enable 
 * @param {String} ssid 
 * @param {String} key
 */
app.SetWifiApEnabled = function(enable,ssid,key) {}

/**
 * En/Disable Wifi on the device.
 * @param {Boolean} enable
 */
app.SetWifiEnabled = function(enable) {}

/**
 * Shows the main app layout.
 * 
 */
app.Show = function() {}

/**
 * The check list provides a similar functionality to the “Multi” [ListDiaog](CreateListDialog.htm), although you can adjust its initial check states with an object structure
 * @param {String} title 
 * @param {String} list title:str:checked:bin||lst_obj
 * @param {Function} callback 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options sun
 */
app.ShowCheckList = function(title,list,callback,width,height,options) {}

/**
 * Show/Hide the debug console as overlay in your app, after calling @CreateDebug.
 * @param {Boolean} show
 */
app.ShowDebug = function(show) {}

/**
 * Shows the keyboard on a focussed control.
 * @param {AppObject} obj
 */
app.ShowKeyboard = function(obj) {}

/**
 * Show the in-app menu. When a menu entry is touched, the _OnMenu_ event will be called.
 * 
 */
app.ShowMenu = function() {}

/**
 * Shows a simple popup message on the screen. It automatically disappears after about 5 secods or after an even shorter time if you pass the “Short” **option**, or when the user touches the screen
 * @param {String} message 
 * @param {String} options String comma “,” separated Bottom,Short|Long
 */
app.ShowPopup = function(message,options) {}

/**
 * Shows a rotating progress circle indicating that something happens and that the user should keep his extremities with him until the process completed
 * @param {String} message 
 * @param {String} options String comma “,” separated NoDim:Don't darken background,NonModal:allow background touch,Solid:shows solid background behind spinner
 */
app.ShowProgress = function(message,options) {}

/**
 * Shows a dialog with a bar indicating the current progress of a certain thing.
 * @param {String} title 
 * @param {Number} percent Number percent
 * @param {String} options Light
 */
app.ShowProgressBar = function(title,percent,options) {}

/**
 * Shows a text input dialog with a title to allow the user to input some text
 * @param {String} title 
 * @param {String} default 
 * @param {Function} callback
 */
app.ShowTextDialog = function(title,dflt,callback) {}

/**
 * Shows a tooltip message on the screen
 * @param {String} message 
 * @param {Number} left Number fraction (0..1)
 * @param {Number} top Number fraction (0..1)
 * @param {Number} timeOut Number milliseconds
 * @param {String} options Down
 */
app.ShowTip = function(message,left,top,timeOut,options) {}

/**
 * Simulates a drag event on an app object in a scrollable container
 * @param {AppObject} obj 
 * @param {Number} x1 Number fraction (0..1)
 * @param {Number} y1 Number fraction (0..1)
 * @param {Number} x2 Number fraction (0..1)
 * @param {Number} y2 Number fraction (0..1)
 * @param {Number} step 
 * @param {Number} pause
 */
app.SimulateDrag = function(obj,x1,y1,x2,y2,step,pause) {}

/**
 * Simulates a key event on an app object.
 * @param {AppObject} obj 
 * @param {String} keyName 
 * @param {String} modifiers META_META_ON,META_RIGHT_ON,NUM_LOCK_ON,SCROLL_LOCK_ON,SHIFT_LEFT_ON,SHIFT_MASK,SHIFT_ON,SHIFT_RIGHT_ON,SYM_ON
 * @param {Number} pause
 */
app.SimulateKey = function(obj,keyName,modifiers,pause) {}

/**
 * Simulates a scroll event on a scrollable app object
 * @param {AppObject} obj 
 * @param {Number} x Number fraction (0..1)
 * @param {Number} y Number fraction (0..1)
 * @param {Number} dx Number fraction (0..1)
 * @param {Number} dy Number fraction (0..1)
 * @param {Number} count 
 * @param {Number} fling
 */
app.SimulateScroll = function(obj,x,y,dx,dy,count,fling) {}

/**
 * Simulates a touch event on a rouchable control
 * @param {AppObject} obj 
 * @param {Number} x Number fraction (0..1)
 * @param {Number} y Number fraction (0..1)
 * @param {String} dir Down|Move|Up
 */
app.SimulateTouch = function(obj,x,y,dir) {}

/**
 * Starts your DS app in an html project. Call it in the document.onload function in order to initialize DroidScript and execute your OnStart() function
 * 
 */
app.Start = function() {}

/**
 * Starts an app in a new window. **Note:** This function does only work in APKs because in the IDE your app is already running.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} options String comma “,” separated Portrait|Landscape,Transparent,Debug:start app in debug mode,Game:runs in GameView mode|remote
 * @param {String} intent { action:str&comma; type:str&comma; data:obj&comma; extras:obj }
 */
app.StartApp = function(file,options,intent) {}

/**
 * Starts a debug server which can be used to debug your app on headless devices.
 * 
 */
app.StartDebugServer = function() {}

/**
 * Starts a service which runs parallel to your app.
 * @param {String} packageName 
 * @param {String} className
 */
app.StartService = function(packageName,className) {}

/**
 * Stops an app started via @StartApp
 * @param {String} name String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.StopApp = function(name) {}

/**
 * Stops a running debug server.
 * 
 */
app.StopDebugServer = function() {}

/**
 * Stops a service started via @StartService
 * 
 */
app.StopService = function() {}

/**
 * Executes a shell command on the android shell. **NOTE:** You have to add a '`exit`' command at the end of your script because the shell does not terminate automatically after finishing.
 * @param {String} command 
 * @param {String} options log:logs output to console,noread:dont read result (just execute),sh|su
 * @param {Number} maxRead 
 * @param {Number} timeout Number seconds
 */
app.SysExec = function(command,options,maxRead,timeout) {}

/**
 * Uses the android TextToSpeech engine to play text acoustically. You can use different locales depending on the user language. A list of languages and their locales (LCID string) can be found on [www.science.co.il](https://www.science.co.il/language/Locale-codes.php)
 * @param {String} text 
 * @param {Number} pitch 
 * @param {Number} rate 
 * @param {Function} callback 
 * @param {String} stream music
 * @param {String} locale 
 * @param {String} engine
 */
app.TextToSpeech = function(text,pitch,rate,callback,stream,locale,engine) {}

/**
 * Hides the app but continue running it in the background. If called, the global _OnPause_ event will be fired and if reshown, _OnResume_ is fired.
 * 
 */
app.ToBack = function() {}

/**
 * Brings the app back to the foreground.
 * 
 */
app.ToFront = function() {}

/**
 * Translates “Ok” and “Cancel” buttons created after this method to the passed strings
 * @param {String} Ok 
 * @param {String} Cancel
 */
app.Translate = function(Ok,Cancel) {}

/**
 * Unlocks the device.
 * 
 */
app.Unlock = function() {}

/**
 * Unlocks a locked drawer.
 * @param {String} side left|right
 */
app.UnlockDrawer = function(side) {}

/**
 * Unpairs a paired Bluetooth device by its bt address. The _callback_ argument is called when the device was successfully unpaired.
 * @param {String} address 
 * @param {Function} callback
 */
app.UnpairBtDevice = function(address,callback) {}

/**
 * Extracts the contents of a zip file to a given target folder.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.UnzipFile = function(source,destination) {}

/**
 * Updates the progress percentage of a ProgressBar.
 * @param {Number} percent Number percent
 */
app.UpdateProgressBar = function(percent) {}

/**
 * Force an UI refresh during a very time consuming calculation
 * @param {Number} ms Number milliseconds rate
 */
app.UpdateUI = function(ms) {}

/**
 * Uploads a file to a server
 * @param {String} url String url path
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} name 
 * @param {Function} callback
 */
app.UploadFile = function(url,file,name,callback) {}

/**
 * Decodes a URI encoded string.
 * @param {String} uri String URI encoded
 * @param {} options returns DS style paths
 */
app.Uri2Path = function(uri,options) {}

/**
 * Makes the device vibrate in a specified pattern in millisecond values:
 * @param {String} pattern String comma “,” separated
 */
app.Vibrate = function(pattern) {}

/**
 * Performs a **synchronous** delay in your program which effectively pauses it
 * @param {Number} seconds Number seconds
 */
app.Wait = function(seconds) {}

/**
 * Forces the screen to turn on the screen. (This has the same effect as pressing the power button in sleep mode)
 * 
 */
app.WakeUp = function() {}

/**
 * Lists a directory recursively similar to app.@ListFolde
 * @param {String} path String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} filter 
 * @param {Number} limit Number integer
 * @param {String} options String comma “,” separated Alphasort:sorts the paths in alphabetical order,FullPath:returns absolute paths to the listed items,RegEx:accepts regexp patterns,Folders:list folders only,Files:list files only,NoEmpty:hide empty folders,project:Shows DS project folders only
 */
app.WalkFolder = function(path,filter,limit,options) {}

/**
 * Connect to a WiFi network by specifying the ssid and a password. See Also: @WifiScan, @SetOnWifiChange, @SetWifiApEnable
 * @param {String} ssid 
 * @param {String} key
 */
app.WifiConnect = function(ssid,key) {}

/**
 * Scans the surroundings for any available Wifi networks
 * @param {Function} callback 
 * @param {String} options detail
 */
app.WifiScan = function(callback,options) {}

/**
 * Writes text to a local file.
 * @param {String} file String path to file ( “/absolute/...” or “relative/...” )
 * @param {String} text 
 * @param {String} mode Append|ASCII
 * @param {String} encoding US
 */
app.WriteFile = function(file,text,mode,encoding) {}

/**
 * Compresses a local file to a zip file.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.ZipFile = function(source,destination) {}

/**
 * Recursively compresses a local folder to a zip file.
 * @param {String} source String path to file or folder ( “/absolute/...” or “relative/...” )
 * @param {String} destination String path to file or folder ( “/absolute/...” or “relative/...” )
 */
app.ZipFolder = function(source,destination) {}
