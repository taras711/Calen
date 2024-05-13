

const ui = {};

/**
 * Adds an accordion or expansion panel into your app. This is very useful to display controls that are grouped together
 * @param {Object} parent The parent layout where to add the text.
 * @param {Object} titles An array of accordion titles.
 * @param {String} options A comma separated options.
Style: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the parent width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the parent height <span style="color:#fb8c00; font
 */
ui.addAccordion = function(parent,titles,options,width,height) {
        
    function addAccordion() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius of the accordion panel. You can also pass an array of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[tl&#44; tr&#44; bl&#44; br]</span>. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setCornerRadius</span> for customization.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns whether the accordion is disabled or not. <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">True</span> only if all accordion is disable&#44; otherwise <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">false</span>.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the material icon font for the expand icon.
         */
        this.expandIcon = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {Boolean} Sets or returns whether the accordion is rounded or not.
         */
        this.rounded = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {String} Sets or returns the title text color in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.textColor1 = null;

        /**
         * @type {String} Sets or returns the secondary text color in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.textColor2 = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Sets or returns the accordion title text size.
         */
        this.textSize1 = null;

        /**
         * @type {Number} Sets or returns the accordion secondary text size.
         */
        this.textSize2 = null;

        /**
         * @type {Number} Sets and returns the width of the title as fraction. Useful when you have a long title.
         */
        this.titleWidth = null;

        /**
         * @type {Array} Sets or returns the list of titles for the accordion panel. Each element of the titles array is a string.
         */
        this.titles = null;

        /**
         * @type {Number} Collapse or shrink a corresponding accordion by its index.
         */
        this.toggle = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the top and bottom accordion panels
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Get the layout of the corresponding accordion item. This is very useful when you add a control or component that will be displayed when the accordion collapse
         * @param {Number} index The index of the accordion. You can also pass accordion title.
         */
        this.getLayout = function(index) {}
        
        /**
         * Update the accordion title by passing its corresponding index
         * @param {Number} index The index of the corresponding title to updates.
         * @param {String} title The new title text.
         */
        this.setTitleText = function(index,title) {}
        
        /**
         * Adds a secondary text on the accordion
         * @param {List} text The secondary text to display. You can also pass arguments as a comma separated string.
         * @param {Number} index If <span style="color:#fb8c00; font
         */
        this.setSecondaryText = function(text,index) {}
        
        /**
         * Sets the expand icon at the right of the accordion
         * @param {String} icon A material icon
         */
        this.setExpandIcon = function(icon) {}
        
        /**
         * Adds an item to the accordion
         * @param {String} title Accordion title
         * @param {String} secondaryText Accordion secondary text
         * @param {Number} index The index at which the accordion item will be added. If <span style="color:#fb8c00; font
         */
        this.addItem = function(title,secondaryText,index) {}
        
        /**
         * Removes accordion item by its index
         * @param {Number} index The index of the corresponding accordion to remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes accordion item by its title name
         * @param {String} title The title of the corresponding accordion to remove.
         */
        this.removeItemByName = function(title) {}
        
        /**
         * Removes the first accordion item. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Removes the last accordion item. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Enable or disable the accordion component or an item in the accordion component
         * @param {Number} index The index of the corresponding accordion.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of an accordion item by its index
         * @param {Number} index The index of the accordion item.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable an accordion item by its name
         * @param {String} name The title of the accordion
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of an accordion item by its name
         * @param {String} name The title of the accordion.
         */
        this.getEnabledByName = function(name) {}
        
        /**
         * Get the index of the corresponding layout
         * @param {Object} layout The layout to check.
         */
        this.getLayoutIndex = function(layout) {}
        
        /**
         * Sets a callback function when the accordion is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets the color of the title and the secondary text respectively
         * @param {String} color1 Color of the title text in hexadecimal format <span style="color:#fb8c00; font
         * @param {String} color2 Color of the secondary text in hexadecimal format <span style="color:#fb8c00; font
         */
        this.setTextColor = function(color1,color2) {}
    }
    return new addAccordion;
}

/**
 * Adds an AppBar on your app
 * @param {Object} parent The parent layout where to add the AppBar
 * @param {String} title The title text of the appbar
 * @param {String} options A comma separated options.
Menu icon: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addAppBar = function(parent,title,options,width,height) {
        
    function Bar() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the AppBar. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Transparent</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Inherit</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius of the accordion panel. You can also pass an array of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[tl&#44; tr&#44; bl&#44; br]</span>. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setCornerRadius</span> for customization.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the icon of the menu button.
         */
        this.icon = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Layout} Returns the right layout of the appbar where you can add controls.
         */
        this.layout = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Boolean} Sets or returns whether the appbar has menu button.
         */
        this.menu = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or return the AppBar title text
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the hexadecimal color of the appbar title.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the font size of the title text.
         */
        this.textSize = null;

        /**
         * @type {String} Sets or returns the variant of the title text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h1</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h2</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h3</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h4</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h5</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h6</span>
         */
        this.textVariant = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the appbar
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the component is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets a function to be called when the user clicks the men
         * @param {Function} callback
         */
        this.setOnMenu = function(callback) {}
        
        /**
         * Adds a layout for additional controls at the right of the appba
         * @param {Object} lay The layout where to add controls
         */
        this.addLayout = function(lay) {}
    }
    return new Bar;
}

/**
 * Adds a bottom navigation bar to your app
 * @param {Object} parent The parent layout where to add the BottomNavbar
 * @param {List} navs An array whose elements are of the form <span style="color:#fb8c00; font
 * @param {String} options A comma separated options.
Label: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addBottomNavbar = function(parent,navs,options,width,height) {
        
    function Navbar() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns whether the bottom navigation is disabled or enabled. All navigation actions must be disabled to return <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">true</span>. Otherwise&#44; it will return <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">false</span>.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Boolean} Sets or returns a boolean whether the labels are shown or hidden on active state.
         */
        this.labels = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the navigation actions array. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">navs</span> params above for format.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {Number} Sets or returns the current value of the BottomNavbar. This is the index of the corresponding selected action.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Sets the navigation actions list
         * @param {List} navs The navigation actions array. See <span style="color:#fb8c00; font
         */
        this.setList = function(navs) {}
        
        /**
         * Returns the navigation actions list
         * 
         */
        this.getList = function() {}
        
        /**
         * Sets navigation action to active by its name. If you are providing a wrong name, no action will be active
         * @param {String} name The name to be set to active
         */
        this.selectItem = function(name) {}
        
        /**
         * Sets a botttom navigation action to active by its inde
         * @param {Number} index The index of the bottom navigation action to be selected
         */
        this.selectItemByIndex = function(index) {}
        
        /**
         * Clears the selected navigation action
         * 
         */
        this.clearSelection = function() {}
        
        /**
         * Updates a navigation action by its index
         * @param {Number} index The index to update
         * @param {String} newName The name of the navigation action
         * @param {String} newIcon Material icon
         */
        this.setItemByIndex = function(index,newName,newIcon) {}
        
        /**
         * Updates the icon of the given index
         * @param {Number} index The index of the navigation action to update
         * @param {String} newIcon Material icon
         */
        this.setIcon = function(index,newIcon) {}
        
        /**
         * Adds a navigation actio
         * @param {String} name The name of the navigation action
         * @param {String} icon Material icon
         * @param {Number} index The index in which to add the action.
         */
        this.addItem = function(name,icon,index) {}
        
        /**
         * Removes a navigation action by its given index
         * @param {Number} index The index of the navigation action to be remove
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes a navigation action by its given name
         * @param {String} name The name of the navigation action to be remove.
         */
        this.removeItemByName = function(name) {}
        
        /**
         * Removes the first navigation action. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Removes the last navigation action. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Sets a callback function to execute when bottom navbar value changes
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Enable or disable a bottom navigation action. If you want to disable the component, use the `disable` property instead
         * @param {Number} index The index of the navigation action.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of a navigation action
         * @param {Number} index The index of the navigation action.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enabled or disable a bottom navigation action by its name
         * @param {String} name The name of the bottom navigation action.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of the bottom navigation action by its name
         * @param {String} name The name of the bottom navigation action.
         */
        this.getEnabledByName = function(name) {}
        
        /**
         * Shows the text label of the bottom navigation action
         * 
         */
        this.showLabels = function() {}
        
        /**
         * Hides the text label of the bottom navigation action
         * 
         */
        this.hideLabels = function() {}
    }
    return new Navbar;
}

/**
 * Adds a button control into your app
 * @param {Object} parent The layout where to add the button.
 * @param {String} text The button text or the material icon text.
 * @param {String} options A comma separated options.
Variant: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the parent width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the parent height <span style="color:#fb8c00; font
 */
ui.addButton = function(parent,text,options,width,height) {
        
    function addButton() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the badge content. You can pass a <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">string</span>
         */
        this.badge = null;

        /**
         * @type {String} Sets or returns the color of the badge. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.badgeColor = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Inherit</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius of the button.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the material icon font use for the leading icon.
         */
        this.icon = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">small</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">medium</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">large</span>
         */
        this.sizeVariant = null;

        /**
         * @type {String} Sets or returns the button text.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the text color in hexadecimal format.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {String} Sets or returns the tooltip text.
         */
        this.toolTip = null;

        /**
         * @type {String} Sets or returns the tooltip position. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span>
         */
        this.toolTipPosition = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the variant of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Contained</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Text</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding of the button
         * @param {Number} left The left padding in pixel.
         * @param {Number} top The top padding in pixels&#44;
         * @param {Number} right The right padding in pixels.
         * @param {Number} bottom The bottom padding in pixels.
         * @param {String} mode Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the button
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the button is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Adds a callback handler when the button is long touch. The touch timer is about 500 milliseconds
         * @param {Function} callback
         */
        this.setOnLongTouch = function(callback) {}
        
        /**
         * Sets a callback on file select
         * @param {Function} callback
         */
        this.setOnFileSelect = function(callback) {}
        
        /**
         * Sets a tooltip when the button is hovered
         * @param {String} title The text of the tooltip
         * @param {String} pos Position of the tooltip. 
         Positions : <span style="color:#fb8c00; font
         */
        this.setToolTip = function(title,pos) {}
        
        /**
         * Sets a text-shadow to the button text
         * @param {Number} radius The radius in pixels
         * @param {Number} dx The x
         * @param {Number} dy The y
         * @param {String} color The color in hexadecimal <span style="color:#fb8c00; font
         */
        this.setTextShadow = function(radius,dx,dy,color) {}
    }
    return new addButton;
}

/**
 * Adds a button group into your app
 * @param {Object} parent The parent layout where to add the ButtonGroup
 * @param {List} list The item to be displayed on the buttn group.
 * @param {String} options A comma separated options.
Variant: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the parent width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the parent height <span style="color:#fb8c00; font
 */
ui.addButtonGroup = function(parent,list,options,width,height) {
        
    function Group() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the list items of the button group.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {String} Sets or returns the orientation of the button group. Can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">vertical</span>
         */
        this.orientation = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">small</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">medium</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">large</span>
         */
        this.sizeVariant = null;

        /**
         * @type {String} Sets or returns the color of the button text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the font size of the button text.
         */
        this.textSize = null;

        /**
         * @type {String} Sets or returns the position of the tooltip. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span>
         */
        this.toolTipPosition = null;

        /**
         * @type {Array} Sets or returns the list of tooltip titles.
         */
        this.toolTips = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the variant. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Contained</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Text</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the button is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets the new list of the button grou
         * @param {String} items A comma separated list or an array
         */
        this.setList = function(items) {}
        
        /**
         * Sets a new text for the item in the button group
         * @param {String} item The new text
         * @param {Number} index The index of the item.
         */
        this.setItemByIndex = function(item,index) {}
        
        /**
         * Adds an additional item in the button group
         * @param {String} item The additional item.
         */
        this.addItem = function(item) {}
        
        /**
         * Removes an item in the button group by its index
         * @param {Number} index The index of the item to be remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes an item in the button group by its name
         * @param {String} name The name of the item to be remove.
         */
        this.removeItemByName = function(name) {}
        
        /**
         * Removes the last item of the button group. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Removes the first item in the button group. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Adds a tooltips to the ButtonGroup items
         * @param {List} titles The titles for each item in the ButtonGroup.
         * @param {String} pos The positio of the tooltip. 
         Can be <span style="color:#fb8c00; font
         */
        this.setToolTips = function(titles,pos) {}
        
        /**
         * Enable of disable the elevation of the button group
         * @param {Boolean} enable Can be <span style="color:#fb8c00; font
         */
        this.enableElevation = function(enable) {}
        
        /**
         * Enable or disable a button item in the button group
         * @param {Number} index The index of the button item.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of the button item in the button group
         * @param {Number} index The index of the button item in the button group.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable a button item by its name
         * @param {String} name The button text.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of button item in the button group
         * @param {String} name The button text.
         */
        this.getEnabledByName = function(name) {}
    }
    return new Group;
}

/**
 * Adds a checkbox control to the given layout
 * @param {Object} parent The layout where to add the checkbox
 * @param {String} text The label for the checkbox
 * @param {String} options A comma separated options.
Theme Colors: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the parent width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the parent height <span style="color:#fb8c00; font
 */
ui.addCheckbox = function(parent,text,options,width,height) {
        
    function addCheckbox() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the material icon font for check stated.
         */
        this.checkIcon = null;

        /**
         * @type {String} Sets or returns the theme color of the checkbox when checked. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Enabled or disable the checkbox component.
         */
        this.disable = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {Boolean} Returns whether the Checkbox is enabled or disabled.
         */
        this.enabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the color of the checkbox icon.
         */
        this.iconColor = null;

        /**
         * @type {Number} Sets or returns the size of the icon.
         */
        this.iconSize = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {Number} Sets or returns the space between the checkbox icon and the label text.
         */
        this.spaceBetween = null;

        /**
         * @type {String} Sets or returns the checkbox text.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {String} Sets or returns the text position. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span>
         */
        this.textPosition = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the material icon font for uncheck state.
         */
        this.uncheckIcon = null;

        /**
         * @type {Boolean} Sets or returns the checked state of the checkbox.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds an event handler when the checkbox is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets a custom icon for the checkbox
         * @param {String} checked Material icon for checked state
         * @param {String} unchecked Material icon for unchecked state
         */
        this.setIcon = function(checked,unchecked) {}
        
        /**
         * Returns the icons of the form { checkIcon, uncheckedIcon }
         * 
         */
        this.getIcon = function() {}
    }
    return new addCheckbox;
}

/**
 * Adds a CheckboxGroup to a given layout
 * @param {Object} parent The parent layout where to add the CheckboxGroup.
 * @param {List} list The items to be displayed.
 * @param {String} options A comma separated options.
Theme Color: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the parent width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the parent height <span style="color:#fb8c00; font
 */
ui.addCheckboxGroup = function(parent,list,options,width,height) {
        
    function Group() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the material icon font for check stated.
         */
        this.checkIcon = null;

        /**
         * @type {String} Sets or returns the theme color use for the checkbox. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the depth of the container.
         */
        this.elevation = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the color of the checkbox icon.
         */
        this.iconColor = null;

        /**
         * @type {Number} Sets or returns the size of the checkbox icon.
         */
        this.iconSize = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {String} Sets or returns the label text.
         */
        this.label = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the list items.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Boolean} Sets or returns whether the container is outlined or elevated.
         */
        this.outlined = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant of the Checkbox. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">medium</span>
         */
        this.sizeVariant = null;

        /**
         * @type {Number} Sets or returns the space between the checkbox icon and the text.
         */
        this.spaceBetween = null;

        /**
         * @type {String} Sets or returns the text color in hexadecimal format.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the checkbox icon. This will also affect the checkbox icon.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the material icon font for uncheck state.
         */
        this.uncheckIcon = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the checkbox group
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Sets a callback function when the checkbox item is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Adds a callback function to be called whent there is a change of value
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Sets the checked icon and unchecked ico
         * @param {String} checked Material icon font
         * @param {String} unchecked Material icon font
         */
        this.setIcon = function(checked,unchecked) {}
        
        /**
         * Get the checked and unchecked icon of the checkbox group
         * 
         */
        this.getIcon = function() {}
        
        /**
         * Checked or unchecked a given item by its index
         * @param {Number} item The item or index of the item.
         * @param {Boolean} bool The item value. Can be <span style="color:#fb8c00; font
         */
        this.setCheckedByIndex = function(item,bool) {}
        
        /**
         * Checked or unchecked a given item by its name
         * @param {String} name The item or index of the item.
         * @param {Boolean} bool The item value. Can be <span style="color:#fb8c00; font
         */
        this.setCheckedByName = function(name,bool) {}
        
        /**
         * Get the list of all checked items
         * 
         */
        this.getCheckedItems = function() {}
        
        /**
         * Get the current value of the item in the list
         * @param {Number} index The index of the corresponding item.
         */
        this.getCheckedByIndex = function(index) {}
        
        /**
         * Get the current value of the item in the list
         * @param {String} name The index of the corresponding item.
         */
        this.getCheckedByName = function(name) {}
        
        /**
         * Sets a new text to a given item by its index
         * @param {Number} index The index of the item.
         * @param {String} val The new text to replace.
         */
        this.setTextByIndex = function(index,val) {}
        
        /**
         * Sets a new text to a given item by its name
         * @param {String} name The name of the item
         * @param {String} val The new text to replace
         */
        this.setTextByName = function(name,val) {}
        
        /**
         * Get the text of the item in a given index
         * @param {Number} index The index of the list
         */
        this.getText = function(index) {}
        
        /**
         * Sets a new list of item in the checkbox group
         * @param {Object} list The new list items for the checkbox group.
         */
        this.setList = function(list) {}
        
        /**
         * Enable or disable an item in the checkbox group
         * @param {Number} index The index of the checkbox item.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of a checkbox item
         * @param {Number} index The index of the checkbox item.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable a checkbox item by its name
         * @param {String} name The name of the checkbox item.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of a checkbox item by its name
         * @param {String} name The checkbox item.
         */
        this.getEnabledByName = function(name) {}
        
        /**
         * Add or insert an item in the checkbox group
         * @param {String} text The text label for the checkbox.
         * @param {Number} index The index in which to insert the item.
         */
        this.addItem = function(text,index) {}
        
        /**
         * Removes an item in the checkbox group by its corresponding index
         * @param {Number} index The index of the corresponding item to remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes an item in the checkbox group by its title name
         * @param {String} title The title text of the corresponding checkbox item.
         */
        this.removeItemByName = function(title) {}
        
        /**
         * Removes the last item in the checkbox group. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Removes the first item in the checkbox group. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
    }
    return new Group;
}

/**
 * Adds a chip into your app
 * @param {Object} parent The parent layout where to add the Chip.
 * @param {String} text The text on the chip.
 * @param {String} options A comma separated option.
Theme Color: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addChip = function(parent,text,options,width,height) {
        
    function addChip() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} Sets or returns the avatar. Can be image or a single character.
         */
        this.avatar = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the chip. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {String} Sets or returns the delete icon.
         */
        this.deleteIcon = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {Boolean} Returns whether the chip is enabled or disabled.
         */
        this.enabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the material icon font if icon is provided.
         */
        this.icon = null;

        /**
         * @type {String} Sets or returns the icon color in hexadecimal format.
         */
        this.iconColor = null;

        /**
         * @type {Number} Sets or returns the font-size of the icon in css font-size format. You can pass string values to be more specific such as <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">12px</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">1.5rem</span>.
         */
        this.iconSize = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">medium</span>
         */
        this.sizeVariant = null;

        /**
         * @type {String} Sets or returns the text of the chip.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the variant of the chip. Vaues can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the chip
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the chip is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets the chip to clickable. This will add a pointer cursor into the chip when hovered
         * @param {Boolean} touchable Can be <span style="color:#fb8c00; font
         */
        this.setTouchable = function(touchable) {}
        
        /**
         * Sets a callback function when the chip is deleted. This will automatically add a delete icon to the chip
         * @param {} callback
         */
        this.setOnDelete = function(callback) {}
    }
    return new addChip;
}

/**
 * Shows a color picker. Customize a color or choose from the presets of color carefully selected from Material Design Color Pallette
 * @param {String} value A hexadecimal default value for the color picker.
 * @param {String} options A comma separated options.
Includes alpha: <span style="color:#fb8c00; font
 * @param {Function} onSelect
 */
ui.showColorPicker = function(value,options,onSelect) {
        
    function Picker() {
        
        /**
         * @type {String} Returns the value of the chosen color.
         */
        this.value = null;
        

        
        /**
         * Returns the hexadecimal string color value of the color picker
         * 
         */
        this.getValue = function() {}
    }
    return new Picker;
}

/**
 * Adds a date picker component to the app
 * @param {String} date A default date value to which the datepicker begins. Format <span style="color:#fb8c00; font
 * @param {String} options A comma separated options.
Orientation: <span style="color:#fb8c00; font
 */
ui.addDatePicker = function(date,options) {
        
    function Picker() {
        
        /**
         * @type {String} Sets or returns the format of the selected date. Values are <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">YYYY-MM-DD</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">MM-DD-YYYY</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">DD-MM-YYYY</span>
         */
        this.format = null;
        

        
        /**
         * Show the date picker the dialog
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the date picker dialog
         * 
         */
        this.hide = function() {}
        
        /**
         * Set a limit to which the date picker dialog can render a date
         * @param {String} past Date in the past of the form <span style="color:#fb8c00; font
         * @param {String} future Date in the future of the form <span style="color:#fb8c00; font
         */
        this.setLimits = function(past,future) {}
        
        /**
         * Sets a callback function to execute when date picker dialog is submitted
         * @param {Function} callback
         */
        this.setOnSelect = function(callback) {}
        
        /**
         * Sets the format of the date to be passed into the onSelect callback
         * @param {String} format A date format. Can be <span style="color:#fb8c00; font
         */
        this.setFormat = function(format) {}
        
        /**
         * Get the current visibility of the date picker
         * 
         */
        this.isVisible = function() {}
    }
    return new Picker;
}

/**
 * Show a DateTimePicker where the user can select a date and time
 * @param {Function} callback 
 * @param {String} date Default value for date of the form "MM/DD/YYYY"
 * @param {String} time Default value for time of the form "HH/MM/SS"
 * @param {String} format The format value that will be pass to callback. Formats can be of the form 
 <span style="color:#fb8c00; font
 */
ui.showDateTimePicker = function(callback,date,time,format) {
        
    function TimePicker() {
                

        
        /**
         * Sets a callback function on select date and time
         * @param {Function} callback
         */
        this.setOnSelect = function(callback) {}
    }
    return new TimePicker;
}

/**
 * Adds a dialog into your app
 * @param {String} title The dialog title text.
 * @param {String} body The dialog message to be shown.
 * @param {String} actions A comma separated text for action buttons.
 * @param {String} options A comma separated options.
Theme Colors: <span style="color:#fb8c00; font
 */
ui.addDialog = function(title,body,actions,options) {
        
    function addDialog() {
        
        /**
         * @type {Layout} Returns the layout of the dialog where you can add custom controls.
         */
        this.layout = null;

        /**
         * @type {String} Sets or returns the dialog text.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the title text color in hexadecimal format.
         */
        this.titleColor = null;

        /**
         * @type {String} Sets or returns the dialog title text.
         */
        this.titleText = null;
        

        
        /**
         * Adds a callback function when the action buttons are click
         * @param {Function} callback
         */
        this.setOnAction = function(callback) {}
        
        /**
         * Adds a callback function when the dialog is close
         * @param {} callback
         */
        this.setOnClose = function(callback) {}
        
        /**
         * Show the dialog
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the dialog
         * 
         */
        this.hide = function() {}
    }
    return new addDialog;
}

/**
 * Adds a hairline divider into your layout
 * @param {Object} parent The layout where to add the divider.
 * @param {Number} width Fraction of the screen width. Default is 1.
 * @param {String} options A comma separated options.
<span style="color:#fb8c00; font
 */
ui.addDivider = function(parent,width,options) {
        
    function addDivider() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the color in hexadecimal format.
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
    }
    return new addDivider;
}

/**
 * Adds a drawer into your app
 * @param {Object} layout The drawer layout where to add controls.
 * @param {String} options A comma separated options.nVariant: <span style="color:#fb8c00; font
 * @param {Number} width Distance from the anchor position <span style="color:#fb8c00; font
 */
ui.addDrawer = function(layout,options,width) {
        
    function addDrawer() {
        
        /**
         * @type {String} Sets or returns the anchor position of the drawer. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span>.
         */
        this.anchor = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the drawer.
         */
        this.disabled = null;

        /**
         * @type {Number} Sets or returns the width of the swipeable area of the Drawer.
         */
        this.swipeAreaWidth = null;

        /**
         * @type {Number} Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[0-1]</span>.
         */
        this.width = null;
        

        
        /**
         * Adds a layout into the drawer
         * @param {Object} lay Layout component.
         */
        this.addLayout = function(lay) {}
        
        /**
         * Disable swipe to open feature of the drawer. You can use this especially for ios devices which has swipe to go back feature
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.disableSwipeToOpen = function(value) {}
        
        /**
         * Disable the backdrop transition. This can improve the FPS on low-end devices
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.disableBackdropTransition = function(value) {}
        
        /**
         * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.disableDiscovery = function(value) {}
        
        /**
         * Adds a callback function when the drawer is opened
         * @param {} callback
         */
        this.setOnOpen = function(callback) {}
        
        /**
         * Adds a callback function when the drawer is closed
         * @param {} callback
         */
        this.setOnClose = function(callback) {}
        
        /**
         * Open the drawer dynamically
         * @param {String} anchor Optional. The anchor position. Can be <span style="color:#fb8c00; font
         */
        this.show = function(anchor) {}
        
        /**
         * Close the drawer dynamically
         * 
         */
        this.hide = function() {}
    }
    return new addDrawer;
}

/**
 * Adds a dropdown component into your layout
 * @param {Object} parent The layout where to add the dropdown.
 * @param {List} list The list items to show.
 * @param {String} options A comma separated options.
Theme Colors: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addDropdown = function(parent,list,options,width,height) {
        
    function addDropdown() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the dropdown material icon font.
         */
        this.icon = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {String} Sets or returns the default label of the dropdown.
         */
        this.label = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the dropdown list. You can also passed a comma separated string.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {String} Sets or returns the orientation of the dropdown buttongroup. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">vertical</span>
         */
        this.orientation = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant of the dropdown button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Large</span>
         */
        this.sizeVariant = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the value of the Dropdown. If you pass a number it will be treated as the index of the corresponding item in the choices.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the variant of the dropdown button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Contained</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Text</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the dropdown
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the component is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Adds a callback function on change event
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Adds a callback function on close event
         * @param {} callback
         */
        this.setOnOpen = function(callback) {}
        
        /**
         * Adds a callback function on close event
         * @param {} callback
         */
        this.setOnClose = function(callback) {}
        
        /**
         * Sets the list items on the dropdown
         * @param {List} val The list of new items t display.
         */
        this.setList = function(val) {}
        
        /**
         * Updates the text of the corresponding item in the dropdown
         * @param {String} item The new item text.
         * @param {Number} index The index of the item to update.
         */
        this.setItemByIndex = function(item,index) {}
        
        /**
         * Returns a dropdown item by its corresponding index
         * @param {Number} index The index of corresponding item.
         */
        this.getItemByIndex = function(index) {}
        
        /**
         * Enable or disable an item in the dropdown
         * @param {Number} index The index of the item.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of an item in the dropdown menu
         * @param {Number} index The index of the item.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable an item in the dropdown
         * @param {String} name The name of the item.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of a menu item by its name
         * @param {String} name The name of the corresponding menu item.
         */
        this.getEnabledByName = function(name) {}
        
        /**
         * Add or insert a menu item in the dropdown list
         * @param {String} name The name of the menu.
         * @param {Number} index The index in which to insert the menu item.
         */
        this.addItem = function(name,index) {}
        
        /**
         * Removes a menu item in the dropdown by its index
         * @param {Number} index The index of the menu item to remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes a menu item in the dropdown by its name
         * @param {String} name The name of the menu item.
         */
        this.removeItemByName = function(name) {}
        
        /**
         * Removes the first item in the dropdown menu. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Removes the last item in the dropdown menu. This will return the item being removed
         * 
         */
        this.popItem = function() {}
    }
    return new addDropdown;
}

/**
 * Adds a floating action button on your layout. FAB usually float at the bottom right of your screen by default
 * @param {Object} parent The parent layout where to add the fab
 * @param {String} icon The string icon of the FAB
 * @param {String} options A comma separated option.
Position: <span style="color:#fb8c00; font
 * @param {String} text Text to show for extended FABs
 */
ui.addFAB = function(parent,icon,options,text) {
        
    function AB() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color for the FAB. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {Boolean} Sets or returns the disabled state of the ripple effect.
         */
        this.disabledRipple = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the material icon font.
         */
        this.icon = null;

        /**
         * @type {Number} Sets or returns the size of the icon.
         */
        this.iconSize = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant of the FAB. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Large</span>
         */
        this.sizeVariant = null;

        /**
         * @type {String} Sets or returns the text for extended FAB.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the variant use for the FAB. Can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Extended</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Rounded</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the button
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the FAB is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
    }
    return new AB;
}

/**
 * Adds an image into your layout
 * @param {Object} parent The parent layout where to add the image.
 * @param {String} file The path to the image.
 * @param {String} options A comma seprated options.
<span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addImage = function(parent,file,options,width,height) {
        
    function addImage() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the material icon for error placeholder image.
         */
        this.errorIcon = null;

        /**
         * @type {String} Sets or returns the path or url of the image file.
         */
        this.file = null;

        /**
         * @type {String} Sets or returns the background color of the canvas.
         */
        this.fill = null;

        /**
         * @type {String} Sets or returns the fill color used on close paths such as square&#44; circle&#44; rectangle or arcs.
         */
        this.fillColor = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {String} Sets or returns the style of the end caps for a line. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">square</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">round</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">butt</span>
         */
        this.lineCap = null;

        /**
         * @type {String} Sets or returns the type of corner created when two lines meet. Values <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bevel</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">round</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">miter</span>
         */
        this.lineJoin = null;

        /**
         * @type {Number} Sets or returns the current line thickness.
         */
        this.lineWidth = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the maximum miter length.
         */
        this.miterLimit = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Array} Returns the pixel data of the image.
         */
        this.pixelData = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the current color of the line or stroke.
         */
        this.strokeColor = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the text-size for drawing in the canvas.
         */
        this.textSize = null;

        /**
         * @type {String} Sets or returns the text-style for drawing in the canvas. Values are <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">normal</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">italic</span>.
         */
        this.textStyle = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Enable or disbale the context menu or the right click menus
         * @param {Boolean} value Value. Can be <span style="color:#fb8c00; font
         */
        this.enableContextMenu = function(value) {}
        
        /**
         * Update the image file
         * @param {String} file The path to the image file.
         */
        this.setImage = function(file) {}
        
        /**
         * Get the color of a single pixel in the image. The returned array is of the form `[red, green, blue, alpha]`
         * @param {Number} x The x
         * @param {Number} y The y
         * @param {String} format Pass <span style="color:#fb8c00; font
         */
        this.getPixelColor = function(x,y,format) {}
        
        /**
         * Sets the color of a specific pixel in the canvas
         * @param {Number} x The x
         * @param {Number} y The y
         * @param {String} color A hexadecimal color format of the form <span style="color:#fb8c00; font
         */
        this.setPixelColor = function(x,y,color) {}
        
        /**
         * Returns the pixel data of the image
         * @param {Number} x The x
         * @param {Number} y The y
         * @param {Number} width The width of the image data.
         * @param {Number} height The height of the image data.
         */
        this.getPixelData = function(x,y,width,height) {}
        
        /**
         * Set the pixel data of the canvas
         * @param {String} base64 Base64 encoded string of the image or the <span style="color:#fb8c00; font
         * @param {Number} x The x
         * @param {Number} y The y
         * @param {Number} width The width of the new image data.
         * @param {Number} height The height of the new image data.
         */
        this.setPixelData = function(base64,x,y,width,height) {}
        
        /**
         * Sets a single line font styling for rendering text on canvas
         * @param {String} family The font
         * @param {Number} size The text
         * @param {String} style Value can be <span style="color:#fb8c00; font
         * @param {String} weight Values can be <span style="color:#fb8c00; font
         */
        this.setFont = function(family,size,style,weight) {}
        
        /**
         * Draws a line between two points in the canvas
         * @param {Number} x1 The x
         * @param {Number} y1 The y
         * @param {Number} x2 The x
         * @param {Number} y2 The y
         * @param {String} strokeColor A hexadecimal color.
         * @param {Number} strokeWidth The stroke thickness.
         */
        this.drawLine = function(x1,y1,x2,y2,strokeColor,strokeWidth) {}
        
        /**
         * Draws a circle in the canvas
         * @param {Number} x The x
         * @param {Number} y The y
         * @param {Number} radius The radius of the circle in pixels.
         * @param {String} fillColor A hexadecimal color.
         * @param {String} strokeColor A hexadecimal color.
         * @param {Number} strokeWidth The stoke thickness.
         */
        this.drawCircle = function(x,y,radius,fillColor,strokeColor,strokeWidth) {}
        
        /**
         * Draws a square into the canvas
         * @param {Number} x The position from the left of the top
         * @param {Number} y The distance from the top of the top
         * @param {Number} width The width of the square in pixels.
         * @param {String} fillColor A hexadecimal color.
         * @param {String} strokeColor A hexadecimal color.
         * @param {Number} strokeWidth The stroke thickness in pixels.
         */
        this.drawSquare = function(x,y,width,fillColor,strokeColor,strokeWidth) {}
        
        /**
         * Draws a rectangle into the canvas
         * @param {Number} x1 The distance from the left of the top
         * @param {Number} y1 The distance from the top of the top
         * @param {Number} width The width of the rectangle in pixels.
         * @param {Number} height The height of the rectangle in pixels.
         * @param {String} fillColor A hexadecimal color.
         * @param {String} strokeColor A hexadecimal color.
         * @param {Number} strokeWidth The stroke thickness.
         */
        this.drawRectangle = function(x1,y1,width,height,fillColor,strokeColor,strokeWidth) {}
        
        /**
         * Draws an arc in the canvas
         * @param {Number} x The x
         * @param {Number} y The y
         * @param {Number} radius The radius of the arc in pixels.
         * @param {Number} start The starting angle in degress
         * @param {Number} end The angle in degress in which the arc will stop.
         * @param {String} fillColor A hexadecimal color.
         * @param {String} strokeColor A hexadecimal color.
         * @param {Number} strokeWidth The stroke thickness.
         * @param {String} type The type of arc. Can be <span style="color:#fb8c00; font
         */
        this.drawArc = function(x,y,radius,start,end,fillColor,strokeColor,strokeWidth,type) {}
        
        /**
         * Draws a polyline on the canvas by passing an array of points
         * @param {List} points An array of coordinates. Each element on this array is an array of the form <span style="color:#fb8c00; font
         * @param {String} strokeColor A hexadecimal color.
         * @param {Number} strokeWidth The stroke thickness.
         */
        this.drawPolyline = function(points,strokeColor,strokeWidth) {}
        
        /**
         * Draws a polygon on the canvas by passing an array of points
         * @param {List} points An array of coordinates. Each element on this array if an array of the form <span style="color:#fb8c00; font
         * @param {String} fillColor A hexadecimal color.
         * @param {String} strokeColor A hexadecimal color.
         * @param {Number} strokeWidth The stroke thickness.
         */
        this.drawPolygon = function(points,fillColor,strokeColor,strokeWidth) {}
        
        /**
         * Draws a single pixel point in a specified coordinate
         * @param {Number} x The x
         * @param {Number} y The y
         * @param {Number} size The width of point in pixels.
         * @param {String} color A hexadecimal color.
         */
        this.drawPoint = function(x,y,size,color) {}
        
        /**
         * Add a text in the canvas image
         * @param {String} text The text to be drawn.
         * @param {Number} x Distance from the left in pixels.
         * @param {Number} y Distance from the top in pixels.
         * @param {String} fillColor Text color in hexadecimal format <span style="color:#fb8c00; font
         * @param {String} strokeColor Text border color in hexadecimal format <span style="color:#fb8c00; font
         * @param {Number} strokeWidth The border width in pixels.
         */
        this.drawText = function(text,x,y,fillColor,strokeColor,strokeWidth) {}
        
        /**
         * Draws an image to the canvas
         * @param {String} img Path to image file.
         * @param {Number} x The distance from the left of the top
         * @param {Number} y The distance from the top of the top
         * @param {Number} width If provided&#44; the image will be shrink or stretch to fill this width in pixels.
         * @param {Number} height If provided&#44; the height of the image will be shrink or stretch to fill this height in pixels.
         */
        this.drawImage = function(img,x,y,width,height) {}
        
        /**
         * Clears the drawings by filling the whole canvas with white background color
         * 
         */
        this.clear = function() {}
        
        /**
         * Translate the origin of the canvas at a new coordinate with the given angle of rotation
         * @param {Number} x The new x
         * @param {Number} y The new y
         * @param {Number} angle The angle of rotation in degrees.
         */
        this.translateOrigin = function(x,y,angle) {}
        
        /**
         * Rotate the canvas at a given angle and pivot point
         * @param {Number} angle The angle of rotation in degrees.
         * @param {Number} x An optional x
         * @param {Number} y An optional y
         */
        this.rotation = function(angle,x,y) {}
        
        /**
         * Measure the text metrics with the current settings of the canvas context
         * @param {String} text The text to measure.
         */
        this.measureText = function(text) {}
        
        /**
         * Add a callback function on touch down event
         * @param {Function} callback
         */
        this.setOnTouchDown = function(callback) {}
        
        /**
         * Add a callback function on touch up event
         * @param {Function} callback
         */
        this.setOnTouchUp = function(callback) {}
        
        /**
         * Sets a callback function when the image component is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets a callback function on load event
         * @param {} callback
         */
        this.setOnLoad = function(callback) {}
        
        /**
         * Sets a callback function when the a mouse move event is triggered
         * @param {Function} callback
         */
        this.setOnTouchMove = function(callback) {}
        
        /**
         * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds
         * @param {Function} callback
         */
        this.setOnLongTouch = function(callback) {}
    }
    return new addImage;
}

/**
 * Adds a layout into your app. A layout is the basic ui component of an app. It is where you add other ui components such as buttons, textfields, checkboxes, list, images and many more
 * @param {Object} parent The parent layout where to add this component. Pass a string <span style="color:#fb8c00; font
 * @param {String} type The layout type. Values can be <span style="color:#fb8c00; font
 * @param {String} options A comma separated options.
Orientation: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Object} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addLayout = function(parent,type,options,width,height) {
        
    function addLayout() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} Sets or returns the horizontal alignment of the control in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Center</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Right</span>
         */
        this.alignment = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Array} Sets or returns the margins of child components. The array is of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[left&#44; top&#44; right&#44; bottom]</span>.
         */
        this.childMargins = null;

        /**
         * @type {String} Sets or returns the spacing of the child control in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Around</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Between</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Evenly</span>
         */
        this.childSpacing = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Number} Sets or returns the index of the current slide.
         */
        this.currentSlide = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {String} Sets or returns the orientation of the controls in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Vertical</span>
         */
        this.orientation = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the vertical alignment of the controls in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">VCenter</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Bottom</span>
         */
        this.verticalAlignment = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Makes the layout visible
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Sets a default margins for the children of the layout component
         * @param {Number} left Left margin.
         * @param {Number} top Top margin.
         * @param {Number} right Right margin.
         * @param {Number} bottom Bottom margin.
         * @param {String} mode Can be <span style="color:#fb8c00; font
         */
        this.setChildMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Transition to the given index
         * @param {Number} index Index of a given layout.
         */
        this.goto = function(index) {}
        
        /**
         * Returns the index of the current Slide Layout
         * 
         */
        this.getCurrentSlide = function() {}
        
        /**
         * Transition to the next slide
         * 
         */
        this.next = function() {}
        
        /**
         * Transition to the previous slide
         * 
         */
        this.previous = function() {}
        
        /**
         * Adds a callback function to be called when slide event is triggered
         * @param {Function} callback
         */
        this.setOnSlide = function(callback) {}
        
        /**
         * Returns the index of the child from the layout children stack in order
         * @param {Object} child The child component of the layout.
         */
        this.getChildOrder = function(child) {}
        
        /**
         * Move the child to the front
         * @param {Object} child The child object of the layout.
         */
        this.childToFront = function(child) {}
        
        /**
         * Check whether a component is a child of this layout
         * @param {Object} child The child component to check.
         */
        this.hasChild = function(child) {}
        
        /**
         * Removes a child from this layout
         * @param {Object} child The child component to be remove.
         */
        this.removeChild = function(child) {}
        
        /**
         * Adds a callback handler when the layout is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Adds a callback handler when the layout is long touch. The touch timer is about 500 milliseconds
         * @param {Function} callback
         */
        this.setOnLongTouch = function(callback) {}
    }
    return new addLayout;
}

/**
 * Lists are continuous, vertical indexes of text or images
 * @param {Object} parent The parent layout
 * @param {List} list An array of arrays. Each element is of the form <span style="color:#fb8c00; font
 * @param {String} options A comma separated options.
Media: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addList = function(parent,list,options,width,height) {
        
    function addList() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} Sets or returns the size of the avatar. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Large</span>
         */
        this.avatarSize = null;

        /**
         * @type {String} Sets or returns the variant of the avatar. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Square</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Round</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Circle</span>
         */
        this.avatarVariant = null;

        /**
         * @type {String} Sets or returns the background color in a hexadecimal format.
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the checkbox when <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Selectable</span> option is enabled. Vaues can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.checkboxColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {Number} Sets or returns the depth of the list container. Values range from 0 to 24.
         */
        this.elevation = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the icon color in a hexadecimal format.
         */
        this.iconColor = null;

        /**
         * @type {Number} Sets or returns the size of the icon text.
         */
        this.iconSize = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {String} Sets or returns the label text.
         */
        this.label = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Boolean} Sets or returns whether the container is outlined or elevated.
         */
        this.outlined = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {Boolean} Sets or returns a boolean whether the list is selectable or not.
         */
        this.selectable = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {String} Sets or returns the color of the title text in hexadecimal format.
         */
        this.textColor1 = null;

        /**
         * @type {String} Sets or returns the color of the body text in hexadecimal format.
         */
        this.textColor2 = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Sets or returns the size of the title text.
         */
        this.textSize1 = null;

        /**
         * @type {Number} Sets or returns the size of the body text.
         */
        this.textSize2 = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the list container
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds an item in the list
         * @param {String} title The title of the item.
         * @param {String} body The text description of the item.
         * @param {String} image A material icon or image file path.
         * @param {Number} index The index in which to add or insert the item.
         */
        this.addItem = function(title,body,image,index) {}
        
        /**
         * Adds a callback function when the list item is click
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds
         * @param {Function} callback
         */
        this.setOnLongTouch = function(callback) {}
        
        /**
         * Sets a callback handler when an item in the list is selected
         * @param {Function} callback
         */
        this.setOnSelect = function(callback) {}
        
        /**
         * Sets a callback handler when an action icon is click
         * @param {Function} callback
         */
        this.setOnAction = function(callback) {}
        
        /**
         * Returns an array of indexes of the selected items
         * 
         */
        this.getSelectedItems = function() {}
        
        /**
         * Returns an array of titles of selected item
         * 
         */
        this.getSelectedTitles = function() {}
        
        /**
         * Updtes the list
         * @param {List} list A comma separated list of items or an array. See the list format above.
         */
        this.setList = function(list) {}
        
        /**
         * Make the list selectable or not
         * @param {Boolean} selectable If true&#44; make the list selectable. Otherwise&#44; list is not selectable
         */
        this.setSelectable = function(selectable) {}
        
        /**
         * Change the content of an item in a lis
         * @param {Number} index The index of the item to update
         * @param {String} newTitle The new title of the item
         * @param {String} newBody The new body text
         * @param {String} newImage The new icon or image
         */
        this.setItemByIndex = function(index,newTitle,newBody,newImage) {}
        
        /**
         * Get the item in a list by its corresponding index
         * @param {Number} index Returns the corresponding list item.
         * @param {Boolean} json Pass <span style="color:#fb8c00; font
         */
        this.getItemByIndex = function(index,json) {}
        
        /**
         * Updates an item in the list
         * @param {String} title The title of the list item to update.
         * @param {String} newTitle The new title of the list item.
         * @param {String} newBody The new description of the list item.
         * @param {String} newIcon A material icon font or image file path.
         * @param {String} newAction A material icon font for the action icon button.
         */
        this.setItem = function(title,newTitle,newBody,newIcon,newAction) {}
        
        /**
         * Get the item in the list by its correspding title
         * @param {String} title Returns the item in a list as an object of the following format { title&#44; body&#44; image }
         */
        this.getItem = function(title) {}
        
        /**
         * Removes an element from the list
         * @param {Number} index The index of the item to remove
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes an item in the list by its title
         * @param {String} name The title of the list to remove.
         */
        this.removeItemByName = function(name) {}
        
        /**
         * Removes the first item the list. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Removes the last item in the list. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Clears all selection in the list if the list is selectable
         * 
         */
        this.deselectAll = function() {}
        
        /**
         * Selects an item in the list by its index and marked the checkbox. List must be selectable
         * @param {Number} index The index to be selected.
         */
        this.selectItemByIndex = function(index) {}
        
        /**
         * Sets a new title text to a corresponding item in a list
         * @param {Number} index The index of the corresponding list item.
         * @param {String} title The new title text.
         */
        this.setTitleText = function(index,title) {}
        
        /**
         * Sets a new secondary text to a corresponding item in a list
         * @param {Number} index The index of the list whose secondary text to be changed.
         * @param {String} newText The new secondary text.
         */
        this.setBodyText = function(index,newText) {}
        
        /**
         * Updates an icon in a list by its corresponding index
         * @param {Number} index The index of the corresponding list item.
         * @param {String} icon Material icon font.
         */
        this.setIcon = function(index,icon) {}
    }
    return new addList;
}

/**
 * Adds a pop-up menu into your components
 * @param {Object} parent The component where to anchor the Menu.
 * @param {List} list A list of items to be shown in the pop
 * @param {String} options A comma separated options.
Theme Color: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addMenu = function(parent,list,options,width,height) {
        
    function addMenu() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the items in the menu. You can also pass a comma separated string.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the menu pop-up.
         * @param {Object} parent The component where to anchor the menu. It can be a <span style="color:#fb8c00; font
         */
        this.show = function(parent) {}
        
        /**
         * Hide the pop-up menu
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Set the position of the menu from the left and top of the anchor component
         * @param {Number} left The position of the menu from the left of the parent or anchor component. The unit is in pixels.
         * @param {Number} top The position of the menu from the top of the parent or anchor component. The unit is in pixels.
         */
        this.setPosition = function(left,top) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the menu is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Updates the list items on the menu
         * @param {List} list The list items to show.
         */
        this.setList = function(list) {}
        
        /**
         * Adds an item in the menu list
         * @param {String} name The new item to be added.
         * @param {Number} index The index at which to add the item.
         */
        this.addItem = function(name,index) {}
        
        /**
         * Removes an item in the menu items list by its index
         * @param {Number} index The index of the item to remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes an item in the menu items list by its name
         * @param {String} name The name of the item to remove.
         */
        this.removeItemByName = function(name) {}
        
        /**
         * Removes the last item. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Removes the first item. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Sets the autofocus value of the menu items
         * @param {Boolean} bool Value can be <span style="color:#fb8c00; font
         */
        this.setAutoFocus = function(bool) {}
        
        /**
         * Enable or disable an item in the menu popup
         * @param {Number} index The index of the item.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of an item the menu popup
         * @param {Number} index The index of the item.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable an item in the menu popup by its name
         * @param {String} name The name of the corresping item the menu.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of an item in the menu popup
         * @param {String} name The name of the item.
         */
        this.getEnabledByName = function(name) {}
    }
    return new addMenu;
}

/**
 * Show a popover on any <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">UI Components</span> except Dialogs and Popups. Popover is very useful on showing additional info or displaying instructions especially when the control is click or hovered
 * @param {Object} parent UI component. Can be a <span style="color:#fb8c00; font
 * @param {String} text The text to de displayed. For displaying more data&#44; pass a <span style="color:#fb8c00; font
 * @param {String} position A comma separated values representing the
<span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.showPopover = function(parent,text,position,width,height) {
        
    function showPopover() {
        
        /**
         * @type {String} Sets or returns the path to the background image.
         */
        this.backImage = null;

        /**
         * @type {String} Sets or returns the font file use for the Popover.
         */
        this.fontFile = null;
        

        
        /**
         * Show the popup dialog
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the popup dialog
         * 
         */
        this.hide = function() {}
    }
    return new showPopover;
}

/**
 * Shows a popup into your app
 * @param {String} msg The message to display on the pop
 * @param {String} options A comma separated options.
Duration: <span style="color:#fb8c00; font
 * @param {Number} duration Time in milliseconds. Pass this if you don't want the default auto hide duration.
 * @param {String} action Action button text.
 */
ui.showPopup = function(msg,options,duration,action) {
        
    function showPopup() {
        
        /**
         * @type {Number} Sets or returns the duration of the popup in milliseconds.
         */
        this.duration = null;

        /**
         * @type {String} Sets or returns the text of the popup.
         */
        this.text = null;
        

        
        /**
         * Adds an onClose callback to your popup
         * @param {} callback
         */
        this.setOnClose = function(callback) {}
        
        /**
         * Adds an action callback when the user touches the action button. The `btnText` param must
         * @param {} callback
         */
        this.setOnAction = function(callback) {}
        
        /**
         * Show the popup
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the popup
         * 
         */
        this.hide = function() {}
        
        /**
         * Updates the position of the popup
         * @param {String} vertical Vertical alignment. Values can be <span style="color:#fb8c00; font
         * @param {String} horizontal Horizontal alignment. Values can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(vertical,horizontal) {}
        
        /**
         * Returns the position of the popup. The returned object is of the form `{ vertical, horizontal }
         * 
         */
        this.getPosition = function() {}
    }
    return new showPopup;
}

/**
 * Adds a progress component into your app
 * @param {Object} parent The parent layout where to add the prgress component.
 * @param {Number} value the initial value of the progress component.
 * @param {String} options A comma separated options.
Theme Color: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction fo the screen height <span style="color:#fb8c00; font
 */
ui.addProgress = function(parent,value,options,width,height) {
        
    function addProgress() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the size of the circular progress control. This will assume a pixel unit.
         */
        this.circleSize = null;

        /**
         * @type {String} Sets or returns the theme color. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Sets or returns the thickness of the circular stroke.
         */
        this.thickness = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Sets or returns the type of the Progress Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Circular</span>
         */
        this.type = null;

        /**
         * @type {Number} Sets or returns the value of the progress control.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the variant of the progress component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Determinate</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Indeterminate</span>.
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
    }
    return new addProgress;
}

/**
 * Shows a progress dialog component into your app
 * @param {String} text The text message of the progress dialog.
 * @param {String} options A comma separated options.
<span style="color:#fb8c00; font
 */
ui.showProgressDialog = function(text,options) {
        
    function Dialog() {
        
        /**
         * @type {String} Sets or returns the ProgressDialog text.
         */
        this.text = null;
        

        
        /**
         * Show the progress dialog component
         * 
         */
        this.show = function() {}
        
        /**
         * Hides the dialog component
         * 
         */
        this.hide = function() {}
        
        /**
         * Adds a callback handler method on close event
         * @param {} callback
         */
        this.setOnClose = function(callback) {}
    }
    return new Dialog;
}

/**
 * Adds a radiogroup component into your app. A radiogroup is a type of select list that can only have a single value being checked at a time
 * @param {Object} parent The parent where to add the RadioGroup component.
 * @param {List} list The list items array.
 * @param {String} options A comma separated options.
Radio Sizes: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addRadioGroup = function(parent,list,options,width,height) {
        
    function Group() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the Radio Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the disabled state of the radio button group.
         */
        this.disabled = null;

        /**
         * @type {Number} Sets or returns the depth of the RadioGroup container. Value ranges from 0 to 24.
         */
        this.elevation = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the icon color in hexadecimal format.
         */
        this.iconColor = null;

        /**
         * @type {String} Sets or returns the position of the icon. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span>
         */
        this.iconPosition = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {String} Sets or returns the label text of the RadioGroup Component.
         */
        this.label = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the list array. You can also pass a comma separated string of items.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Boolean} Sets or returns whether the container is outlined or elevated.
         */
        this.outlined = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {String} Sets or returns the size of the radio button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span>
         */
        this.radioSize = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {Number} Sets or returns the space between the radio button and the text.
         */
        this.spaceBetween = null;

        /**
         * @type {String} Stest or returns the color of the text in hexadecimal format. You can also pass color names e.g. <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">red</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">green</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">blue</span>.
         */
        this.textColor = null;

        /**
         * @type {String} Sets or returns the position of the label text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span>.
         */
        this.textPosition = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the value of the RadioGroup Component. This must be equal to one of the item in the list.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the radiogroup container
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Call a function when the value of the radio group has changed
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Adds a callback function when an item is click
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets the the radiogroup list items
         * @param {String} val A comma separated items
         */
        this.setList = function(val) {}
        
        /**
         * Sets an item in the radiogroup component
         * @param {String} item The new item name to be displayed
         * @param {Number} index The index to of the item to be updated
         */
        this.setItemByIndex = function(item,index) {}
        
        /**
         * Updates an item in the list by its corresponding name
         * @param {String} name The name of the item.
         * @param {String} text The new text to replaced the name of the item.
         */
        this.setItemByName = function(name,text) {}
        
        /**
         * Adds an item in the radio group list
         * @param {String} name The new item to be added.
         * @param {Number} index The index in which to add the item.
         */
        this.addItem = function(name,index) {}
        
        /**
         * Removes an item in the radiogroup items list by its index
         * @param {Number} index The index of the item to remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes an item in the radiogroup items list by its name
         * @param {String} name The name of the item to remove.
         */
        this.removeItemByName = function(name) {}
        
        /**
         * Removes the last item in the radiogroup. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Removes the first item in the radiogroup. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Enable or disable the radiogroup or an item in the radiogroup
         * @param {Number} index The index of the item.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of an item in the radio group
         * @param {Number} index The index of the corresponding item.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable a radiogroup item by its name
         * @param {String} name The radiogroup text.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of a radiogroup item by its name
         * @param {String} name The radiogroup text.
         */
        this.getEnabledByName = function(name) {}
    }
    return new Group;
}

/**
 * Adds a Select Component to a given layout
 * @param {Object} parent The parent layout where to add the control
 * @param {List} list The list of items for the Select options
 * @param {String} options A comma separated options.
Sizes: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the parent width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the parent height <span style="color:#fb8c00; font
 */
ui.addSelect = function(parent,list,options,width,height) {
        
    function addSelect() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {Boolean} Sets or returns a boolean value whether the component is enabled or disabled.
         */
        this.enabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the color of the icon in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.iconColor = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {String} Sets or returns the label text.
         */
        this.label = null;

        /**
         * @type {String} Sets or returns the color of the label text in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.labelColor = null;

        /**
         * @type {Number} Sets or returns the size of the label.
         */
        this.labelSize = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the list items. You can also pass a comma separated string of items.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the maximum height of the popup container.
         */
        this.maxHeight = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {String} Sets or returns the color of the popup in hexadecimal format.
         */
        this.popupColor = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant of the Select Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span>
         */
        this.sizeVariant = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the value of the Select Component. For Select with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Multiple</span> options&#44; the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">value</span> is an array of string items. You can also pass the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">index</span> of the selected item. Pass an array of <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">indexes</span> for multiple selection.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the variant of the Select Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Standard</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Filled</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler when the select component is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets a callback function when the value changes
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Sets a callback function when the menu is open
         * @param {} callback
         */
        this.setOnOpen = function(callback) {}
        
        /**
         * Sets a callback function when the menu dialog is close
         * @param {Function} callback
         */
        this.setOnClose = function(callback) {}
        
        /**
         * Adds an item on the select component options list
         * @param {String} item A new item to be added.
         * @param {Number} index The index in which to add the item.
         */
        this.addItem = function(item,index) {}
        
        /**
         * Removes an item in the select component item list by its index
         * @param {Number} index The index of the corresponding item to remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes an item in the select component item list by its name
         * @param {String} name The name of the item to remove.
         */
        this.removeItemByName = function(name) {}
        
        /**
         * Removes an item at the beginning of the list items. This will return the item being removed
         * 
         */
        this.shifItem = function() {}
        
        /**
         * Removes an item at the end of the list items. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Returns the item at a given index
         * @param {Number} index The index of the item.
         */
        this.getItem = function(index) {}
        
        /**
         * Sets the list items in the menu popup
         * @param {Object} items A comma separated string or array of options
         */
        this.setList = function(items) {}
        
        /**
         * Enable or disable the select component
         * @param {Number} index Can be <span style="color:#fb8c00; font
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of an item in the select menu
         * @param {Number} index The index of the corresponding item in the select menu.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable an item in the menu popup
         * @param {String} name The name of the menu item.
         * @param {Boolean} value Value can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of an item in the menu popup
         * @param {String} name The name of the menu item.
         */
        this.getEnabledByName = function(name) {}
    }
    return new addSelect;
}

/**
 * Adds a Slider Component into your App
 * @param {Object} parent The layout where to add the Slider Component.
 * @param {Number} value The initial value of the Slider. Value must be between <span style="color:#fb8c00; font
 * @param {String} options A comma separated options.
Theme Color: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addSlider = function(parent,value,options,width,height) {
        
    function addSlider() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the Slider. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Boolean} Sets or returns the marks on the Slider Component. The marks will be base on the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">step</span> property. To add a custom labels in each mark&#44; pass an array with an object element with properties <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">label<String></span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">value<Number></span>. See marks array example below.
         */
        this.marks = null;

        /**
         * @type {Number} Sets or returns the maximum value.
         */
        this.maxValue = null;

        /**
         * @type {Number} Sets or returns the minimum value.
         */
        this.minValue = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {String} Sets or returns the orientation of the Slider Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Vertical</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Horizontal</span>
         */
        this.orientation = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {Number} Sets or returns the Sider Component steps.
         */
        this.step = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Sets or returns the track properties of the Slider Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Normal</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">False</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Inverted</span>
         */
        this.track = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {Number} Sets or returns the value of the Slider Component.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the value label display type. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">on</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">auto</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">off</span>. If <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">on</span>&#44; value label will always be shown. If <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">auto</span>&#44; value label will be shown when sliding is active. If <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">false</span>&#44; value label display will not be shown.
         */
        this.valueLabelDisplay = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds an event handler when the Slider component is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets a callback function when the value of the Slider Component changes
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Sets a callback function when a final value is selected. This is equal to submit value event
         * @param {Function} callback
         */
        this.setOnSelect = function(callback) {}
        
        /**
         * Sets a range value for the Slider Component
         * @param {Number} min Minimum value of the slider.
         * @param {Number} max Maximum value of the slider.
         */
        this.setRange = function(min,max) {}
        
        /**
         * Sets the marks of the Slider Component.
         * @param {Object} val The marks on the Slider Component.
         */
        this.setMarks = function(val) {}
        
        /**
         * Returns the step marks of the Slider Component. See `setMarks` methods for possible values
         * 
         */
        this.getMarks = function() {}
    }
    return new addSlider;
}

/**
 * Adds a Stepper to a given layout. A stepper can display a series of steps or information that a user can navigate forward or backward
 * @param {Object} parent The parent layout of the Stepper
 * @param {List} steps An array of titles.
 * @param {String} options A comma separated options.
<span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addStepper = function(parent,steps,options,width,height) {
        
    function addStepper() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {Number} Sets or returns the active step.
         */
        this.activeStep = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {Number} Sets or returns the elevation of the mobile stepper. Value ranges from <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">0</span> to <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">24</span>.
         */
        this.elevation = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {String} Sets or returns the orientation of the Stepper. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Vertical</span>.
         */
        this.orientation = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback function to be called when the stepper is complete
         * @param {} callback
         */
        this.setOnComplete = function(callback) {}
        
        /**
         * Adds a callback function to be called when the stepper has changed step
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Go to the next step
         * 
         */
        this.nextStep = function() {}
        
        /**
         * Go to the previous step
         * 
         */
        this.previousStep = function() {}
        
        /**
         * Returns the layout of the corresponding step layout where you can add controls
         * @param {Number} index The index of the corresponing stepper layout
         */
        this.getLayout = function(index) {}
        
        /**
         * Get the index of the corresponding layout
         * @param {Object} layout The layout to check.
         */
        this.getLayoutIndex = function(layout) {}
        
        /**
         * Removes a corresponding step by its index
         * @param {Number} index The index of the step to remove.
         */
        this.removeStep = function(index) {}
        
        /**
         * Sets a new title for the corresponding step by its index
         * @param {Number} index The index of the Stepper.
         * @param {String} title The new title text.
         */
        this.setTitleText = function(index,title) {}
    }
    return new addStepper;
}

/**
 * Adds a Switch Component into your layout. A switch is a control whose values can be toggled between <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">on</span> and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">off</span>
 * @param {Object} parent The parent layout where to add the Switch Component.
 * @param {String} text The label text.
 * @param {String} options A comma separated options.
Theme Color: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addSwitch = function(parent,text,options,width,height) {
        
    function addSwitch() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the disabled state of the ripple effect.
         */
        this.disableRipple = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the edge position of the toggle. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Start</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">End</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">False</span>
         */
        this.edge = null;

        /**
         * @type {Boolean} Sets or returns a Boolean whether the component is enabled or disabled.
         */
        this.enable = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the icon position. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span>
         */
        this.iconPosition = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Boolean} Sets or returns a boolean value whether this component is required or not.
         */
        this.required = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant of the toggle switch. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span>
         */
        this.sizeVariant = null;

        /**
         * @type {Number} Sets or returns the space between the switch icon and the label text.
         */
        this.spaceBetween = null;

        /**
         * @type {String} Sets or returns the label text.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the text color in hexadecimal format.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {Boolean} Sets or returns the value of the switch toggle.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds an event handler when the switch is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
    }
    return new addSwitch;
}

/**
 * Adds a SwitchGroup Component into your layout. A switchgroup is a list whose items can be toggled between <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">on</span> and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">off</span>
 * @param {Object} parent The parent layout where to add the SwitchGroup Component.
 * @param {Object} list The list items array whose elements can be <span style="color:#fb8c00; font
 * @param {String} options A comma separated options.
Icon: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addSwitchGroup = function(parent,list,options,width,height) {
        
    function Group() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the edge position of the toggle. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Start</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">End</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">False</span>
         */
        this.edge = null;

        /**
         * @type {Number} Sets or returns the depth of the control container. Value ranges from 0 to 24.
         */
        this.elevation = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the theme color <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span>. You can also pass a hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.iconColor = null;

        /**
         * @type {Number} Sets or returns the size of the icon.
         */
        this.iconSize = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {String} Sets or returns the label text.
         */
        this.label = null;

        /**
         * @type {String} Sets or returns the color of the label text in hexadecimal format.
         */
        this.labelColor = null;

        /**
         * @type {Number} Sets or returns the size of the label text.
         */
        this.labelSize = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {array} Sets or returns the list items. You can also pass a comma separated string of items.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Boolean} Sets or returns whether the container is outlined or elevated.
         */
        this.outlined = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the theme color <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">secondary</span>. You can also pass a hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the switchgroup container
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Sets a callback function when the switch item is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Adds a callback function to be called whent there is a change of value
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Sets the value of the corresponding item in the list
         * @param {Number} index The index of the corresponding item.
         * @param {Boolean} val A Values can be <span style="color:#fb8c00; font
         */
        this.setValueByIndex = function(index,val) {}
        
        /**
         * Returns whether an item is check or unchecked
         * @param {Number} index The index of the corresponding item.
         */
        this.getValueByIndex = function(index) {}
        
        /**
         * Updates the list on the switchgroup component
         * @param {Object} lst The list array or a comma separated list.
         */
        this.setList = function(lst) {}
        
        /**
         * Adds or insert an item in the SwitchGroup list
         * @param {String} title The title text.
         * @param {String} icon Material icon font.
         * @param {Boolean} value The value of the item.
         * @param {Number} index The index in which to insert the item. Default is at the bottom of the list.
         */
        this.addItem = function(title,icon,value,index) {}
        
        /**
         * Removes an item in the SwitchGroup by its index
         * @param {Number} index The index of the corresponding item to remove.
         */
        this.removeItemByIndex = function(index) {}
        
        /**
         * Removes an item in the SwitchGroup component by its title name
         * @param {String} title The title text of the SwitchGroup item.
         */
        this.removeItemByName = function(title) {}
        
        /**
         * Removes the last item in the SwitchGroup list. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Removes the first item in SwitchGroup list. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Enable or disable an item in the switchgroup component
         * @param {Number} index The index of the corresponding item in the list. You can also pass <span style="color:#fb8c00; font
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of an item in the switch group
         * @param {Number} index The index of the corresponding item in the switch group.
         */
        this.getEnabled = function(index) {}
    }
    return new Group;
}

/**
 * Adds a Tabs Component into your layout
 * @param {Object} parent The parent layout where to add the Tabs Component.
 * @param {List} list An array of tab names.
 * @param {String} options A comma separated options.
Swipe: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addTabs = function(parent,list,options,width,height) {
        
    function addTabs() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Boolean} Sets or returns a boolean value whether the tabs are centered or not.
         */
        this.centered = null;

        /**
         * @type {String} Sets or returns the theme color of the tab bar. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {Number} Sets or returns the elevation of the tab bar. Make sure to pass a <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Paper</span> option for this to work.
         */
        this.elevation = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the color ofthe tab icon.
         */
        this.iconColor = null;

        /**
         * @type {Number} Sets or returns the tab icon.
         */
        this.iconSize = null;

        /**
         * @type {String} Sets or returns the color of the indicator bar. You can pass theme color <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">secondary</span> or in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>.
         */
        this.indicatorColor = null;

        /**
         * @type {Number} Sets or returns the corner radius of the indicator bar in pixels.
         */
        this.indicatorRadius = null;

        /**
         * @type {Number} Sets or returns the thickness of the indicator bar in pixels.
         */
        this.indicatorThickness = null;

        /**
         * @type {Number} Sets or returns the width of the indicator bar as a fraction of the tab item width. Works only on <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">FullWidth</span> tab.
         */
        this.indicatorWidth = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the scroll button mode when tab items overflow the width of its container. Values are <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">auto</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">desktop</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">on</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">of</span>.
         */
        this.scrollButtonMode = null;

        /**
         * @type {Number} Sets or returns the height of the tab in pixels.
         */
        this.tabHeight = null;

        /**
         * @type {Number} Sets or returns the padding of the tab items. The return value is an object of the form `{left&#44; top&#44; right&#44; bottom
         */
        this.tabPadding = null;

        /**
         * @type {String} Sets or returns the theme color for the tab bar titles <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>. You can also pass a hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the variant of the Tabs Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Standard</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Scrollable</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">FullWidth</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the tab
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Sets a callback function when the value of the tab changes
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Add a callback function when a tab item i click
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Sets the tab titles array
         * @param {List} tabs The tab titles array. See examples for format.
         */
        this.setTabs = function(tabs) {}
        
        /**
         * Add or insert a tab to the Tabs Component
         * @param {String} name The name of the tab.
         * @param {String} icon Material icon font.
         * @param {Number} index The index in which to insert the tab.
         */
        this.addTab = function(name,icon,index) {}
        
        /**
         * Sets a new title for the corresponding tab
         * @param {Number} index Index of the tab.
         * @param {String} title The new title.
         */
        this.setTitleText = function(index,title) {}
        
        /**
         * Sets an icon to a corresponding tab title
         * @param {Number} index The index of the tab.
         * @param {String} icon Material icon font.
         */
        this.setIcon = function(index,icon) {}
        
        /**
         * Removes a tab item by its corresponding index
         * @param {Number} index The index of the corresponding tab to remove.
         */
        this.removeTabByIndex = function(index) {}
        
        /**
         * Removes a tab item by its corresponding name
         * @param {String} name The name of the corresponding tab to remove.
         */
        this.removeTabByName = function(name) {}
        
        /**
         * Removes the first item in the tabs list. This will return the item being removed
         * 
         */
        this.shiftItem = function() {}
        
        /**
         * Removes the last item in the tabs list. This will return the item being removed
         * 
         */
        this.popItem = function() {}
        
        /**
         * Returns the layout of the corresponding tab. You can then add components into the returned layout
         * @param {String} name The name of the tab. You can also pass the index of the tab.
         */
        this.getLayout = function(name) {}
        
        /**
         * Show a tab panel by its corresponding name. This will make the tab in active state
         * @param {String} name The name of the tab to be shown.
         */
        this.showTab = function(name) {}
        
        /**
         * Show a tab panel by its corresponding name. This will make the tab in active state
         * @param {Number} index The index of the tab to be shown.
         */
        this.showTabByIndex = function(index) {}
        
        /**
         * Enable or disable a tab item. Pass `index` as number if you want the corresponding tab index to be enabled or disabled.
         * @param {Number} index The index of the corresponding tab. Pass <span style="color:#fb8c00; font
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabled = function(index,value) {}
        
        /**
         * Get the enabled state of a tab
         * @param {Number} index The index of the corresponding tab.
         */
        this.getEnabled = function(index) {}
        
        /**
         * Enable or disable a tab by its name
         * @param {String} name The name of the tab.
         * @param {Boolean} value Values can be <span style="color:#fb8c00; font
         */
        this.setEnabledByName = function(name,value) {}
        
        /**
         * Get the enabled state of a tab by its name
         * @param {String} name The name of the tab.
         */
        this.getEnabledByName = function(name) {}
        
        /**
         * Determines the behavior of scroll buttons when tabs are set to `scrollable`
         * @param {String} mode Values can be 
         <span style="color:#fb8c00; font
         */
        this.showScrollButton = function(mode) {}
        
        /**
         * Get the index of the corresponding layout
         * @param {Object} layout The layout to check.
         */
        this.getLayoutIndex = function(layout) {}
        
        /**
         * Add a custom styling to the indicator color
         * @param {Number} width Fraction of the tab item width. This works only on <span style="color:#fb8c00; font
         * @param {Number} thickness Thickness in pixels.
         * @param {String} color Hexadecimal color of the form <span style="color:#fb8c00; font
         * @param {Number} radius The corner radius in pixels.
         */
        this.setIndicatorStyle = function(width,thickness,color,radius) {}
        
        /**
         * Sets the padding of the tab items
         * @param {Number} left The tab
         * @param {Number} top The tab
         * @param {Number} right The tab
         * @param {Number} bottom The tab
         * @param {String} mode Unit of measurement. Default is <span style="color:#fb8c00; font
         */
        this.setTabPadding = function(left,top,right,bottom,mode) {}
    }
    return new addTabs;
}

/**
 * Adds a text to your app
 * @param {Object} parent The layout control where to add the text control
 * @param {String} text The text to be displayed on the text control
 * @param {String} options A comma separated options.
Variants: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addText = function(parent,text,options,width,height) {
        
    function addText() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} Sets or returns the horizontal alignment of the text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Center</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Right</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Justify</span>.
         */
        this.alignment = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Boolean} Sets or returns whether the text is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bold</span> or not.
         */
        this.bold = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the text <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span>. You can also pass hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the ellipsis use when the text is truncated. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Ellipsis</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">End</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Start</span>
         */
        this.ellipsize = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Boolean} Sets or returns whether the text is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">italized</span> or not.
         */
        this.italic = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the text.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the text color in hexadecimal format.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the fontsize for the text. You can also pass values such as <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">1.2em</span>.
         */
        this.textSize = null;

        /**
         * @type {String} Sets or returns the style of the text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">italic</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">normal</span>.
         */
        this.textStyle = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {Boolean} Sets or returns whether the text is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">underlined</span> or not.
         */
        this.underline = null;

        /**
         * @type {String} Sets or returns the text variants. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> param above for available values.
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the vertical alignment of the text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Center</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Bottom</span>.
         */
        this.verticalAlignment = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds an event handler when the text component is touch
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds
         * @param {Function} callback
         */
        this.setOnLongTouch = function(callback) {}
        
        /**
         * Sets an html on the text control
         * @param {String} html An html string
         */
        this.setHtml = function(html) {}
        
        /**
         * Returns the html text
         * 
         */
        this.getHtml = function() {}
        
        /**
         * Sets a shadow on the text in a text control
         * @param {Number} radius The radius in pixels
         * @param {Number} dx X
         * @param {Number} dy Y
         * @param {Object} color A hexadecimal color of the form <span style="color:#fb8c00; font
         */
        this.setTextShadow = function(radius,dx,dy,color) {}
    }
    return new addText;
}

/**
 * Add a textfield component into your app. Collect inputs from users. Inputs can be a number, text, emails, passwords and more. Just pass the corresponding type int
 * @param {Object} parent The layout where to add the TextField Component.
 * @param {String} text The initial value of the TextField
 * @param {String} options A comma separated options.
Theme Color: <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addTextField = function(parent,text,options,width,height) {
        
    function Field() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {Boolean} Sets or returns a boolean value whethe the input is focus when rendered into the DOM.
         */
        this.autoFocus = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {String} Sets or returns the theme color of the textfield component.
         */
        this.color = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Returns the end adornment text or icon.
         */
        this.endAdornment = null;

        /**
         * @type {Boolean} Sets or returns the error state of the TextField component.
         */
        this.error = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Sets or returns the helper text or the hint below the input.
         */
        this.helperText = null;

        /**
         * @type {String} Sets or returns the hint text. It's the same as the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">placeholder</span> property.
         */
        this.hint = null;

        /**
         * @type {String} Sets or returns the input type. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">type</span> params for available values.
         */
        this.inputType = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {String} Sets or returns the label text.
         */
        this.label = null;

        /**
         * @type {String} Sets return the label color in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.labelColor = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the maximum rows for a <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">multiline</span> textfield.
         */
        this.maxRows = null;

        /**
         * @type {Number} Sets or returns the minimum rows for a <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">multiline</span> textfield.
         */
        this.minRows = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {String} Sets or returns the outline color in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span> when the textfield is focus.
         */
        this.outlineColor = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {String} Sets or returns the placeholder text.
         */
        this.placeholder = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Boolean} Sets or returns a boolean value whether the text field in required or not.
         */
        this.required = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the size variant of the textfield. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span>
         */
        this.sizeVariant = null;

        /**
         * @type {String} Returns the start adornment text or icon.
         */
        this.startAdornment = null;

        /**
         * @type {Number} Sets or returns the step increment if the input is of type number;
         */
        this.stepIncrement = null;

        /**
         * @type {String} Sets or returns the text value of the TextField Component.
         */
        this.text = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the variant of the TextField. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Standard</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Filled</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span>
         */
        this.variant = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Sets a callback function on `enter` or `submit` event
         * @param {Function} callback
         */
        this.setOnEnter = function(callback) {}
        
        /**
         * Sets a callback function on `values changes` event
         * @param {Function} callback
         */
        this.setOnChange = function(callback) {}
        
        /**
         * Adds a callback function when the textfield is focus or blur
         * @param {Function} callback
         */
        this.setOnFocus = function(callback) {}
        
        /**
         * Sets the minimum and maximum number of rows on a multiline type TextField
         * @param {Number} min The minimum number of rows.
         * @param {Number} max The maximum number of rows.
         */
        this.setRows = function(min,max) {}
        
        /**
         * Set a start adornment control into the TextField Component
         * @param {String} text Text or material icon font.
         * @param {String} type A comma separated options for start adornment control. Options can be 
         <span style="color:#fb8c00; font
         */
        this.setStartAdornment = function(text,type) {}
        
        /**
         * Add a callback handler when the start adornment control is touch
         * @param {} callback
         */
        this.setStartAdornmentOnTouch = function(callback) {}
        
        /**
         * Returns the start adornment text
         * 
         */
        this.getStartAdornment = function() {}
        
        /**
         * Add an end adornment control into the TextField Component
         * @param {String} text Text or material icon font.
         * @param {String} type A comma separated options for end adornment control. Options can be 
         <span style="color:#fb8c00; font
         */
        this.setEndAdornment = function(text,type) {}
        
        /**
         * Add a callback handler when the end adornment control is touch
         * @param {} callback
         */
        this.setEndAdornmentOnTouch = function(callback) {}
        
        /**
         * Returns the end adornment text
         * 
         */
        this.getEndAdornment = function() {}
    }
    return new Field;
}

/**
 * Adds a time picker component to the app
 * @param {String} time A default time value to which the timepicker begins. Value is of the form <span style="color:#fb8c00; font
 * @param {String} options A comma separated options.
Orientation: <span style="color:#fb8c00; font
 */
ui.addTimePicker = function(time,options) {
        
    function Picker() {
        
        /**
         * @type {String} Sets or returns the time format. Can be of the form 
 Hour formats 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">H</span> : 0 1 ... 22 23 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">HH</span> : 	00 01 ... 22 23 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h</span> : 1 2 ... 11 12 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">hh</span> : 	01 02 ... 11 12 
 Minute formats 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">m</span> : 	0 1 ... 58 59 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">mm</span> : 00 01 ... 58 59 
 AM/PM 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">A</span> : AM or PM 
 <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">a</span> : am pm
         */
        this.format = null;
        

        
        /**
         * Show the date picker the dialog.
         * @param {Function} callback 
         * @param {String} format A time format. Can be of the form 
         Hour formats 
         <span style="color:#fb8c00; font
         */
        this.show = function(callback,format) {}
    }
    return new Picker;
}

/**
 * Adds a TreeView component into your app. A tree view is best use in file system navigation
 * @param {Object} parent The parent layout where to add the TreeView component.
 * @param {Object} list An object of the treeview items. See example below.
 * @param {String} options A comma separated options. Values can be <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the screen width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the screen height <span style="color:#fb8c00; font
 */
ui.addTreeView = function(parent,list,options,width,height) {
        
    function View() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Object} Sets or returns the list object.
         */
        this.list = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Returns the selected item of the TreeView.
         */
        this.value = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Add a on touch handler to the TreeView item when click
         * @param {Function} callback
         */
        this.setOnTouch = function(callback) {}
        
        /**
         * Updates the list items of the TreeView component
         * @param {Object} obj The list object of the treeview items. See example above.
         */
        this.setList = function(obj) {}
        
        /**
         * Add a tree items to the tree view
         * @param {String} name The label text for the new item.
         * @param {Object} obj See list object for more info.
         */
        this.addItem = function(name,obj) {}
        
        /**
         * Returns the list items object of a given parent tree item name
         * @param {String} name The parent name of the tree items.
         */
        this.getItem = function(name) {}
    }
    return new View;
}

/**
 * Adds a webview into your app. A webview is a component where you can display a website into your app layout
 * @param {Object} parent The parent layout where to add the WebView component.
 * @param {String} url The url of the website.
 * @param {String} options A comma separated options for WebView. Values can be <span style="color:#fb8c00; font
 * @param {Number} width Fraction of the parent width <span style="color:#fb8c00; font
 * @param {Number} height Fraction of the parent height <span style="color:#fb8c00; font
 */
ui.addWebView = function(parent,url,options,width,height) {
        
    function View() {
        
        /**
         * @type {Number} Returns the absolute height of the control in pixels.
         */
        this.absHeight = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the left in pixels.
         */
        this.absLeft = null;

        /**
         * @type {Number} Returns the absolute distance of the control from the top in pixels.
         */
        this.absTop = null;

        /**
         * @type {Number} Returns the absolute width of the control in pixels.
         */
        this.absWidth = null;

        /**
         * @type {String} A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.backColor = null;

        /**
         * @type {String} The path to your image file.
         */
        this.backImage = null;

        /**
         * @type {Number} Sets or returns the border thickness in pixels.
         */
        this.border = null;

        /**
         * @type {Number} Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span>
         */
        this.borderColor = null;

        /**
         * @type {Number} Sets or returns the corner radius in pixels.
         */
        this.cornerRadius = null;

        /**
         * @type {Boolean} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.
         */
        this.disabled = null;

        /**
         * @type {String} Sets or returns the redirect url when an error occur.
         */
        this.errorPage = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.
         */
        this.fontFile = null;

        /**
         * @type {Number} Sets or returns the height of the control.
         */
        this.height = null;

        /**
         * @type {String} Setst or returns the html loaded in the iframe.
         */
        this.html = null;

        /**
         * @type {Boolean} Returns whether the control is visible or not.
         */
        this.isVisible = null;

        /**
         * @type {Number} Returns the distance of the control from the left.
         */
        this.left = null;

        /**
         * @type {Array} Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.
         */
        this.margins = null;

        /**
         * @type {Number} Sets or returns the opacity of the control.
         */
        this.opacity = null;

        /**
         * @type {String} Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.
         */
        this.options = null;

        /**
         * @type {Array} Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
         */
        this.padding = null;

        /**
         * @type {Object} Returns the parent layout control.
         */
        this.parent = null;

        /**
         * @type {Object} Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.
         */
        this.position = null;

        /**
         * @type {Number} Sets or returns the angle of rotation in degrees.
         */
        this.rotation = null;

        /**
         * @type {String} Sets or returns the color of the text.
         */
        this.textColor = null;

        /**
         * @type {Number} Sets or returns the size of the text within the control.
         */
        this.textSize = null;

        /**
         * @type {Number} Sets or returns the text zoom of the page loaded in the web view.
         */
        this.textZoom = null;

        /**
         * @type {Number} Returns the distance of the control from the top.
         */
        this.top = null;

        /**
         * @type {String} Returns the type of the control.
         */
        this.type = null;

        /**
         * @type {String} Sets or returns the url of the webview.
         */
        this.url = null;

        /**
         * @type {String} Sets or returns the visibility of the control.
         */
        this.visibility = null;

        /**
         * @type {Number} Sets or returns the width of the control.
         */
        this.width = null;
        

        
        /**
         * Adds a callback function on right click
         * @param {Function} callback
         */
        this.setOnContextMenu = function(callback) {}
        
        /**
         * Animate the component
         * @param {String} anim The type of animation. Here are the available values
        <span style="color:#fb8c00; font
         * @param {Number} duration The time in milliseconds.
         */
        this.animate = function(anim,duration) {}
        
        /**
         * Sets the size of the component
         * @param {Number} width Fraction of the parent width. [0
         * @param {Number} height Fraction of the parent height. [0
         */
        this.setSize = function(width,height) {}
        
        /**
         * Show the component
         * 
         */
        this.show = function() {}
        
        /**
         * Hide the component
         * 
         */
        this.hide = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.gone = function() {}
        
        /**
         * Destroy the component
         * 
         */
        this.destroy = function() {}
        
        /**
         * Sets the x and y scaling of the component
         * @param {Number} x The x
         * @param {Number} y The y
         */
        this.setScale = function(x,y) {}
        
        /**
         * Returns the position of the component. The return object is of the form `{left, top, right, bottom}
         * @param {String} options The mode of the measurements. Values can be <span style="color:#fb8c00; font
         */
        this.getPosition = function(options) {}
        
        /**
         * Sets the margin of the component
         * @param {Number} left Left margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} top Top margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} right Right margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {Number} bottom Bottom margin. You can also pass string e.g. <span style="color:#fb8c00; font
         * @param {String} mode Unit of measurement.
        <span style="color:#fb8c00; font
         */
        this.setMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the padding component container
         * @param {Number} left Fraction of the component width.
         * @param {Number} top Fraction of the component height. [0
         * @param {Number} right Fraction of the component width. [0
         * @param {Number} bottom Fraction of the component height. [0
         * @param {String} mode The size thickness mode. Can be <span style="color:#fb8c00; font
         */
        this.setPadding = function(left,top,right,bottom,mode) {}
        
        /**
         * Sets the position of the component relative to its parent dimensions
         * @param {Number} left Fraction of the parent width. [0
         * @param {Number} top Fraction of the screen height. [0
         * @param {String} mode Unit of measurement. Can be <span style="color:#fb8c00; font
         */
        this.setPosition = function(left,top,mode) {}
        
        /**
         * Sets the border line for the component container
         * @param {Number} width Border
         * @param {String} clr Border color in hexadecimal form <span style="color:#fb8c00; font
         * @param {String} style Border
         */
        this.setBorder = function(width,clr,style) {}
        
        /**
         * Sets the corner radius of the component
         * @param {Number} tl Top
         * @param {Number} tr Top
         * @param {Number} bl Bottom
         * @param {Number} br Bottom
         * @param {String} mode Unit. Values are <span style="color:#fb8c00; font
         */
        this.setCornerRadius = function(tl,tr,bl,br,mode) {}
        
        /**
         * Bring this component forward by a given z-index
         * @param {Number} zIndex The z
         */
        this.bringForward = function(zIndex) {}
        
        /**
         * Bring this component backward by a given z-index
         * @param {Number} zIndex The z
         */
        this.sendBackward = function(zIndex) {}
        
        /**
         * Adds a callback handler for onload event
         * @param {} callback
         */
        this.setOnLoad = function(callback) {}
        
        /**
         * Define a callback function which is called when the user clicked a link
         * @param {Function} callback
         */
        this.setOnUrl = function(callback) {}
        
        /**
         * Stops any web loading
         * 
         */
        this.stop = function() {}
        
        /**
         * Reloads the current page
         * 
         */
        this.reload = function() {}
        
        /**
         * Print current page via the builtin android printer dialog.
         * 
         */
        this.print = function() {}
    }
    return new View;
}
