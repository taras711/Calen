

const MUI = {};

/**
 * MUI colors are accessible through the **colors** property of the MUI object
 * 
 */
MUI.colors = function() {}

/**
 * Adds a nice pop-up at the top. See @CreateAlert for a full documentation
 * @param {String} text Popup text
 * @param {String} icon Material icon
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddAlert = function(text,icon,color) {
    return app.CreateAlert();
}

/**
 * Adds a simple alert with a single button. See @CreateAlertSimple for a full documentation
 * @param {String} text Text of the alert
 * @param {String} btnText Button text. Default is OKAY
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddAlertSimple = function(text,btnText,color) {
    return app.CreateAlertSimple();
}

/**
 * Adds an appbar on a given layout. See @CreateAppBar, @CreateAppBarElegant and @CreateAppBarModern for a full documentation. The parameters p1, p2 and p3 depends on the type of appbar. Refer to each type for more info. Example for @CreateAppBar and @CreateAppBarElegant 'ps' is 'title', 'p2' is 'logoIcon' and 'p3' is 'controls'. For @CreateAppBarModern 'p1' is 'hint','p2' is 'controlIcon' and 'p3' is 'color'
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} p1 Title text|Hint
 * @param {String} p2 Material Icon
 * @param {String} p3 controls|color
 * @param {String} options String comma “,” separated Elegant|Modern|Default and Round|Rectangle for Modern Appbar
 */
MUI.AddAppBar = function(parent,p1,p2,p3,options) {
    return app.CreateAppBar();
}

/**
 * Adds an elegant appbar on a given layout. See @CreateAppBarElegant for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} title Title text
 * @param {String} leadingIcon Material icon font
 * @param {String} options String comma “,” separated material icon font for the right controls
 */
MUI.AddAppBarElegant = function(parent,title,leadingIcon,options) {
    return app.CreateAppBarElegant();
}

/**
 * Adds a modern appbar on a given layout. See @CreateAppBarModern for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} hint Hint text for the search input
 * @param {String} controlIcon Material font for the control icon
 * @param {String} options Can be Round|Rectangle
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddAppBarModern = function(parent,hint,controlIcon,options,color) {
    return app.CreateAppBarModern();
}

/**
 * Adds a banner dialog. See @CreateBanner for a full documentation
 * @param {String} text 
 * @param {String} okText Truthy button text
 * @param {String} cancelText Falsey button text
 */
MUI.AddBanner = function(text,okText,cancelText) {
    return app.CreateBanner();
}

/**
 * Adds a MUI button to a given layout. See @CreateButtonElegant, @CreateButtonFlat, @CreateButtonRaised, @CreateButtonRaisedO, @CreateButtonRound, and @CreateButtonRoundO for full documentatio
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options raised|raisedo|roundo|round|elegant|outlined|contained|text|flat
 */
MUI.AddButton = function(parent,text,width,height,options) {
    return app.CreateButton();
}

/**
 * Add an elegant button on a given layout. See @CreateButtonElegant for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddButtonElegant = function(parent,text,width,height,color) {
    return app.CreateButtonElegant();
}

/**
 * Adds a flat button on given layout. See @CreateButtonFlat for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddButtonFlat = function(parent,text,width,height,color,backColor) {
    return app.CreateButtonFlat();
}

/**
 * Adds a raised material button on a given layout. See @CreateButtonRaised for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} txtcolor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddButtonRaised = function(parent,text,width,height,color,txtcolor) {
    return app.CreateButtonRaised();
}

/**
 * Adds an outlined material raised button on a given layout. See @CreateButtonRaisedO for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddButtonRaisedO = function(parent,text,width,height,color,backColor) {
    return app.CreateButtonRaisedO();
}

/**
 * Adds a round material button on a given layout. See @CreateButtonRound for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} txtcolor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddButtonRound = function(parent,text,width,height,color,txtcolor) {
    return app.CreateButtonRound();
}

/**
 * Adds an outlined material round button on a given layout. See @CreateButtonRoundO for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddButtonRoundO = function(parent,text,width,height,color,backColor) {
    return app.CreateButtonRoundO();
}

/**
 * An outlined material button. See @CreateButtonOutlined for full documentatio
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 */
MUI.AddButtonOutlined = function(parent,text,width,height) {
    return app.CreateButtonOutlined();
}

/**
 * Adds a contained material button on a given layout. See @CreateButtonContained for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 */
MUI.AddButtonContained = function(parent,text,width,height) {
    return app.CreateButtonContained();
}

/**
 * Adds a text button on a given layout. See @CreateButtonFlat for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 */
MUI.AddButtonText = function(parent,text,width,height) {
    return app.CreateButtonText();
}

/**
 * Adds a toggleable button on a given layout. See @CreateButtonToggle for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text Button text
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {Boolean} value 
 * @param {Function} callback
 */
MUI.AddButtonToggle = function(parent,text,width,height,value,callback) {
    return app.CreateButtonToggle();
}

/**
 * Adds a card on a given layout. See @CreateCard for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Object} options {title:str, body:str, image:str_ptf, buttonText:str_com, color:str, width:num_frc, dividerAvatar:bin, dividerBody:bin, avatar:str_pth, avatarOnTop:bin, buttonType:str
 */
MUI.AddCard = function(parent,options) {
    return app.CreateCard();
}

/**
 * Adds a color picker. See @CreateColorPicker for a full documentation
 * @param {Object} textEdit MUI TextEdit or DS TextEdit control
 * @param {String} title Title
 */
MUI.AddColorPicker = function(textEdit,title) {
    return app.CreateColorPicker();
}

/**
 * Adds an MUI Checkbox on a given layout. See @CreateCheckbox for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {List} list A comma separated string
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddCheckbox = function(parent,list,width,height,color) {
    return app.CreateCheckbox();
}

/**
 * Adds an MUI checklist dialog. See @CreateCheckList for a full documentation
 * @param {Object} textEdit MUI TextEdit control or DS TextEdit control
 * @param {String} title 
 * @param {List} list An array of objects of the form {name: string, check: boolean}
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {Boolean} bottom
 */
MUI.AddCheckList = function(textEdit,title,list,color,bottom) {
    return app.CreateCheckList();
}

/**
 * Adds a table control on a given layout. See @CreateDataTable for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {List} columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
 * @param {List} values An array of strings of the form Val1:Val2:Val3...
 * @param {Number} width Fraction of the screen width
 * @param {Number} height Fraction of the screen height
 * @param {String} options A comma separated options. Can be Selectable
 */
MUI.AddDataTable = function(parent,columns,values,width,height,options) {
    return app.CreateDataTable();
}

/**
 * Adds a picker dialog such as time, date or color. See @CreateDatePicker, @CreateTimePicker and @CreateColorPicker for a full documentation
 * @param {Object} textEdit MUI TextEdit or DS TextEdit control
 * @param {String} options Date|Color|Time
 */
MUI.AddPicker = function(textEdit,options) {
    return app.CreatePicker();
}

/**
 * Adds a date picker dialog. See @CreateDatePicker for a full documentation
 * @param {Object} textEdit MUI TextEdit or DS TextEdit control
 * @param {Number} yyyy Number integer Full year
 * @param {Number} mm Number integer [0
 * @param {Number} dd Number integer [1
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddDatePicker = function(textEdit,yyyy,mm,dd,color) {
    return app.CreateDatePicker();
}

/**
 * Adds a customizable materialize dialog. See @CreateDialog for a full documentation
 * @param {String} title Title
 * @param {String} body Body text
 * @param {String} okText Truthy button text
 * @param {String} cancelText Falsey button text
 * @param {Boolean} divider Show divider or hide
 */
MUI.AddDialog = function(title,body,okText,cancelText,divider) {
    return app.CreateDialog();
}

/**
 * Adds a divider to a given layout. See @CreateDivider for a full documentation
 * @param {Object} parent MUI Layout or DS layout contorl
 * @param {} height Optional
 */
MUI.AddDivider = function(parent,height) {
    return app.CreateDivider();
}

/**
 * Adds a floating action button. See @CreateFAB, @CreateFABElegant and @CreateFABOutline for a full documentation
 * @param {Object} parent MUI Layout or DS layout contorl
 * @param {String} icon Material icon fonts
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} options String comma “,” separated outline|elegant|default
 */
MUI.AddFAB = function(parent,icon,color,options) {
    return app.CreateFAB();
}

/**
 * Adds an elegant floating action button. See @CreateFABElegant for a full documentation
 * @param {Object} parent MUI Layout or DS layout contorl
 * @param {String} icon Material icon fonts
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddFABElegant = function(parent,icon,color) {
    return app.CreateFABElegant();
}

/**
 * Adds an outlined floating action button on a given layout. See @CreateFABOutline for a full documentation
 * @param {Object} parent MUI Layout or DS layout contorl
 * @param {String} icon Material icon font
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddFABOutline = function(parent,icon,color,backColor) {
    return app.CreateFABOutline();
}

/**
 * Adds a layout. See @CreateLayout for a full documentation
 * @param {Object} parent MUI Layout or DS layout contorl
 * @param {String} type Linear|Absolute|Frame|Card
 * @param {String} options Comma separated DroidScript layout options
 */
MUI.AddLayout = function(parent,type,options) {
    return app.CreateLayout();
}

/**
 * Adds an MUI control on a given layout. See @CreateList, @CreateListModern and @CreateListSimple for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} list 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options String comma “,” separated simple|modern|default|divider
 */
MUI.AddList = function(parent,list,width,height,options) {
    return app.CreateList();
}

/**
 * Adds a more customizable list dialog or checklist dialog. See @CreateListDialog and @CreateCheckList for a full documentation on each type
 * @param {Object} textEdit MUI TextEdit control or DS TextEdit control
 * @param {String} title 
 * @param {List} list An array of objects
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} options String comma “,” separated CheckList|ListDialog|Bottom
 */
MUI.AddListDialog = function(textEdit,title,list,color,options) {
    return app.CreateListDialog();
}

/**
 * Adds a ListModern control on a given layout. See @CreateListModern for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {List} list An array of object elements. See list example
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options Initial|Material|Avatar, RightIcon|RightNote, Selectable
 */
MUI.AddListModern = function(parent,list,width,height,options) {
    return app.CreateListModern();
}

/**
 * Adds a simple list for navigation purposes. See @CreateListSimple for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {List} list {title:str|icon:str
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options Divider
 */
MUI.AddListSimple = function(parent,list,width,height,options) {
    return app.CreateListSimple();
}

/**
 * Adds a simple MUI menu. See @CreateMenu for a full documentation
 * @param {String} list String comma “,” separated list
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} position Top,Left|Top,Right|Bottom,Left|Bottom,Right
 */
MUI.AddMenu = function(list,width,height,position) {
    return app.CreateMenu();
}

/**
 * MUI menu with material icon font. See @CreateMenuWithIcon for a full documentation
 * @param {List} list str
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} position Top,Left|Top,Right|Bottom,Left|Bottom,Right
 */
MUI.AddMenuWithIcon = function(list,width,height,position) {
    return app.CreateMenuWithIcon();
}

/**
 * Adds a modal. See @CreateModal for a full documentation
 * @param {String} title 
 * @param {String} body Body text. If you want to customize the modal layout pass an empty string.
 * @param {String} okTxt Truthy button text
 * @param {String} cancelTxt Falsy button text
 * @param {String} options Dialog options with additional Full option
 */
MUI.AddModal = function(title,body,okTxt,cancelTxt,options) {
    return app.CreateModal();
}

/**
 * Adds a radio material input. See @CreateRadio, @CreateRadioButtons and @CreateRadioMaterial for a full documentation. The param p1 depends on the type of an MUI button. It can be a color for normal radio or orientation 'vertical or horizontal' for material and button type
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} list String comma “,” separated strings
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options String comma “,” separated Buttons|Material|Normal
 * @param {String} p1 color|orientation
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddRadio = function(parent,list,width,height,options,p1,color,backColor) {
    return app.CreateRadio();
}

/**
 * Adds an MUI radio button control. See @CreateRadioButtons for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {List} list A comma separated strings
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} orientation Vertical|Horizontal
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddRadioButtons = function(parent,list,width,height,orientation,color,backColor) {
    return app.CreateRadioButtons();
}

/**
 * Adds an MUI RadioMaterial input. See @CreateRadioMaterial for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {List} list A comma separated strings
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} orientation Vertical|Horizontal
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddRadioMaterial = function(parent,list,width,height,orientation,color,backColor) {
    return app.CreateRadioMaterial();
}

/**
 * Adds an MUI seekbar on a given layout. See @CreateSeekBar for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} value Must be between 0 and range
 * @param {Number} range The maximum value of your seekbar
 * @param {Number} width 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddSeekBar = function(parent,value,range,width,color) {
    return app.CreateSeekBar();
}

/**
 * Adds an MUI Switch to a given control. See @CreateSwitch for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Boolean} value 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddSwitch = function(parent,value,color) {
    return app.CreateSwitch();
}

/**
 * Adds an MUI SwitchSettings to a given layout. See @CreateSwitchSettings for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {Boolean} value 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddSwitchSettings = function(parent,text,width,height,value,color,backColor) {
    return app.CreateSwitchSettings();
}

/**
 * Adds an MUI tab on a given layout. See @CreateTabFixed for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {String} title String comma “,” separated titles
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options String comma “,” separated DS layout options|Fix
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {Boolean} animation
 */
MUI.AddTabs = function(parent,title,width,height,options,color,animation) {
    return app.CreateTabs();
}

/**
 * Adds a TextEdit control to a given layout. See @CreateTextEditFilled, @CreateTextEditFilledA, @CreateTextEditOutline, @CreateTextEditOutlineA, @CreateTEFilledIconLeft, @CreateTEFilledIconRight, @CreateTEOutlineIconLeft, @CreateTEOutlineIconRight, @CreateTESearchElegant, @CreateTESearchUnique, @CreateTextEditSearch and @CreateTextEditUnique for full documentation on each type of MUI TextEdit. For p1, p2, p3, p4 and p5 parameters, these are the params after the options. You can refer to the corresponding Create*** method to see what this parameters are. Example for @CreateTextEditFilled 'p1' is 'hint', 'p2' is 'label' and 'p3' is 'color'. For @CreateTextEditOutline 'p1' is 'hint', 'p2' is 'label', 'p3' is 'color' and 'p4' is 'backColor'
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options outline|filled|unique|search|active|icon and for icon can be  left|right
 * @param {String} p1 See corresponding MUI TextEdit
 * @param {String} p2 See corresponding MUI TextEdit
 * @param {String} p3 See corresponding MUI TextEdit
 * @param {String} p4 See corresponding MUI TextEdit
 * @param {String} p5 See corresponding MUI TextEdit
 */
MUI.AddTextEdit = function(parent,width,options,p1,p2,p3,p4,p5) {
    return app.CreateTextEdit();
}

/**
 * Adds a filled text input with icon on the left on the given layout. See @CreateTEFilledIconLeft for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options
 * @param {String} icon Material icon font
 * @param {String} hint Hint or label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTEFilledIconLeft = function(parent,width,options,icon,hint,label,color) {
    return app.CreateTEFilledIconLeft();
}

/**
 * Adds a filled text input with icon on the right on a given layout. See @CreateTEFilledIconRight for full documentaion
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options
 * @param {String} icon Material icon font
 * @param {String} hint Hint or label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTEFilledIconRight = function(parent,width,options,icon,hint,label,color) {
    return app.CreateTEFilledIconRight();
}

/**
 * Adds a material outlined text input with icon on the left on a given layout. See @CreateTEOutlineIconLeft for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options with additional 'Round' option.
 * @param {String} icon Material icon font
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTEOutlineIconLeft = function(parent,width,options,icon,hint,label,color,backColor) {
    return app.CreateTEOutlineIconLeft();
}

/**
 * Adds a material outlined text input with icon on the right on a given layout. See @CreateTEOutlineIconRight for full documenation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options with additional 'Round' option.
 * @param {String} icon Material icon font
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTEOutlineIconRight = function(parent,width,options,icon,hint,label,color,backColor) {
    return app.CreateTEOutlineIconRight();
}

/**
 * Adds an elegant search textedit on a given layout. See @CreateTESearchElegant for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} hint Hint text
 * @param {String} icon Material icon font
 * @param {String} iconPos Right|Left
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} option Small|Normal|Border
 */
MUI.AddTESearchElegant = function(parent,width,hint,icon,iconPos,color,option) {
    return app.CreateTESearchElegant();
}

/**
 * Adds a unique text input on a given layout. See @CreateTESearchUnique for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} hint Hint text
 * @param {String} icon Material icon font
 * @param {String} iconColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTESearchUnique = function(parent,width,hint,icon,iconColor) {
    return app.CreateTESearchUnique();
}

/**
 * Adds a material textarea on a given layout. See @CreateTextAreaFilled, @CreateTextAreaFilledA, @CreateTextAreaOutline and @CreateTextAreaOutlineA for a full documentation on each corresponding type
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options String comma “,” separated filled|outline|active
 * @param {String} hint Hint text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextArea = function(parent,width,height,options,hint,label,color,backColor) {
    return app.CreateTextArea();
}

/**
 * Add a material filled textarea on a given layout. See @CreateTextAreaFilled for  a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextAreaFilled = function(parent,width,height,hint,label,color) {
    return app.CreateTextAreaFilled();
}

/**
 * Adds an active filled textarea on a given layout. See @CreateTextAreaFilledA for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Hides or show label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextAreaFilledA = function(parent,width,height,hint,label,color) {
    return app.CreateTextAreaFilledA();
}

/**
 * Add an outlined material textarea on a given layout. See @CreateTextAreaOutline for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextAreaOutline = function(parent,width,height,hint,label,color,backColor) {
    return app.CreateTextAreaOutline();
}

/**
 * Add an active outlined material textarea on a given layout. See @CreateTextAreaOutlineA for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextAreaOutlineA = function(parent,width,height,hint,label,color,backColor) {
    return app.CreateTextAreaOutlineA();
}

/**
 * Adds the most common type of material text input on a given layout. See @CreateTextEditFilled for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextEditFilled = function(parent,width,options,hint,label,color) {
    return app.CreateTextEditFilled();
}

/**
 * Add an active filled material text input on a given layout. See @CreateTextEditFilledA for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextEditFilledA = function(parent,width,options,hint,label,color) {
    return app.CreateTextEditFilledA();
}

/**
 * Adds an outlined material text input on a given layout. See @CreateTextEditOutline for full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options with additional 'Round' option.
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 */
MUI.AddTextEditOutline = function(parent,width,options,hint,label) {
    return app.CreateTextEditOutline();
}

/**
 * Adds an active outlined material text input on a given layout. See @CreateTextEditOutlineA for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options with additional 'Round' option.
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextEditOutlineA = function(parent,width,options,hint,label,color,backColor) {
    return app.CreateTextEditOutlineA();
}

/**
 * Adds a customize search style text input on given layout. See @CreateTextEditSearch for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options
 * @param {String} hint Hint text
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextEditSearch = function(parent,width,options,hint,color,backColor) {
    return app.CreateTextEditSearch();
}

/**
 * Adds a unique textedit customization on a given layout. See @CreateTextEditUnique for a full documentation
 * @param {Object} parent MUI Layout or DS Layout control
 * @param {Number} width 
 * @param {String} hint Hint text
 * @param {String} icon Material icon font
 * @param {String} iconCOlor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... Icon color
 */
MUI.AddTextEditUnique = function(parent,width,hint,icon,iconCOlor) {
    return app.CreateTextEditUnique();
}

/**
 * Adds a mui text control to the layout. See @CreateTextH1, @CreateTextH2, @CreateTextH3, @CreateTextH4, @CreateTextH5, @CreateTextH6, @CreateTextJumbo, @CreateTextParagraph and @CreateTextSecondary for full documentation on each type of mui typhography
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options with addition Thin|Light|Regular|Medium|Bold,h1|h2|h3|h4|h5|h6|secondary|jumbo|paragraph
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddText = function(parent,text,width,height,options,color) {
    return app.CreateText();
}

/**
 * Adds an H1 text to a layout. See @CreateTextH1 for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextH1 = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextH1();
}

/**
 * Adds an H2 text to a layout. See @CreateTextH2 for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextH2 = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextH2();
}

/**
 * Adds an H3 text to a layout. See @CreateTextH3 for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextH3 = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextH3();
}

/**
 * Adds an H4 text to a layout. See @CreateTextH4 for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextH4 = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextH4();
}

/**
 * Adds an H5 text to a layout. See @CreateTextH5 for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextH5 = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextH5();
}

/**
 * Adds an H6 text to a layout. See @CreateTextH6 for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextH6 = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextH6();
}

/**
 * Adds an extra large text to a layout. See @CreateTextJumbo for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTextJumbo = function(parent,text,width,height,options,color) {
    return app.CreateTextJumbo();
}

/**
 * Adds a paragraph text to a layout. See @CreateTextParagraph for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextParagraph = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextParagraph();
}

/**
 * Adds a secondary text to a layout. See @CreateTextSecondary for full documentation
 * @param {Object} parent MUI Layout or DS layout control
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.AddTextSecondary = function(parent,text,width,height,options,color,fontWeight) {
    return app.CreateTextSecondary();
}

/**
 * Adds a timepicker dialog. See @CreateTimePicker for a full documentation
 * @param {Object} textEdit MUI TextEdit or DS TextEdit control
 * @param {Number} hour [0
 * @param {Number} minute 0
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.AddTimePicker = function(textEdit,hour,minute,color) {
    return app.CreateTimePicker();
}

/**
 * A nice pop-up at the top of your current layou
 * @param {String} text Popup text
 * @param {String} icon Material icon
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateAlert = function(text,icon,color) {
        
    function Alert() {
        
        /**
         * Destroys the popup object
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Calls a function when alert is clos
         * @param {Function} callback
         */
        this.SetOnClose = function(callback) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
    }
    return new Alert;
}

/**
 * Create a simple alert with a single button
 * @param {String} text Text of the alert
 * @param {String} btnText Button text. Default is OKAY
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateAlertSimple = function(text,btnText,color) {
        
    function AlertSimple() {
        
        /**
         * Destroys the popup object
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Calls a function when button is clic
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
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
         * Change the current text of the control to html-formatted text
         * @param {String} str String html code
         */
        this.SetHtml = function(str) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
    }
    return new AlertSimple;
}

/**
 * The most common type of material design app bar
 * @param {String} title Title text
 * @param {String} leadingIcon A material font icon for the leading control
 * @param {String} controls String comma “,” separated material icon font for the right controls
 */
MUI.CreateAppBar = function(title,leadingIcon,controls) {
        
    function AppBar() {
        
        /**
         * Sets a new heading ico
         * @param {String} newIcon New material icon font
         */
        this.SetMenuIcon = function(newIcon) {}
        
        /**
         * Change the color of the heading ico
         * @param {String} newColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... New color of the heading icon
         */
        this.SetMenuIconColor = function(newColor) {}
        
        /**
         * Calls a function when the right controls are clic
         * @param {Function} callback
         */
        this.SetOnControlTouch = function(callback) {}
        
        /**
         * Calls a function when the heading icon is clic
         * @param {Function} callback
         */
        this.SetOnMenuTouch = function(callback) {}
        
        /**
         * Sets a new titl
         * @param {String} newTitle New title text
         */
        this.SetTitleText = function(newTitle) {}
        
        /**
         * Change the color of the titl
         * @param {String} newColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTitleTextColor = function(newColor) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new AppBar;
}

/**
 * A more elegant appbar implementatio
 * @param {String} title Title text
 * @param {String} leadingIcon Material icon font
 * @param {String} options String comma “,” separated material icon font for the right controls
 */
MUI.CreateAppBarElegant = function(title,leadingIcon,options) {
        
    function AppBarElegant() {
        
        /**
         * Sets a new heading ico
         * @param {String} newIcon New material icon font
         */
        this.SetMenuIcon = function(newIcon) {}
        
        /**
         * Change the color of the heading ico
         * @param {String} newColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... New color of the heading icon
         */
        this.SetMenuIconColor = function(newColor) {}
        
        /**
         * Calls a function when the right controls are clic
         * @param {Function} callback
         */
        this.SetOnControlTouch = function(callback) {}
        
        /**
         * Calls a function when the heading icon is clic
         * @param {Function} callback
         */
        this.SetOnMenuTouch = function(callback) {}
        
        /**
         * Sets a new titl
         * @param {String} newTitle New title text
         */
        this.SetTitleText = function(newTitle) {}
        
        /**
         * Change the color of the titl
         * @param {String} newColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTitleTextColor = function(newColor) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new AppBarElegant;
}

/**
 * A modern appbar with a search input, leading icon and trailing ico
 * @param {String} hint Hint text for the search input
 * @param {String} controlIcon Material font for the control icon
 * @param {String} options Can be Round|Rectangle
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateAppBarModern = function(hint,controlIcon,options,color) {
        
    function AppBarModern() {
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Calls a function when right control is touc
         * @param {Function} callback
         */
        this.SetOnControlTouch = function(callback) {}
        
        /**
         * Call a function when the menu icon is touc
         * @param {Function} callback
         */
        this.SetOnMenuTouch = function(callback) {}
        
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
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Inserts a string at a given position
         * @param {String} text 
         * @param {Number} start Number integer
         */
        this.InsertText = function(text,start) {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Called when the containing data has been changed by the user
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * %cb% the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
        /**
         * %cb% the user focuses the control
         * @param {Function} callback
         */
        this.SetOnFocus = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an action
         * 
         */
        this.Undo = function() {}
    }
    return new AppBarModern;
}

/**
 * A banner dialog is a nice popup that slides from the top of your current pag
 * @param {String} text 
 * @param {String} okText Truthy button text
 * @param {String} cancelText Falsey button text
 */
MUI.CreateBanner = function(text,okText,cancelText) {
        
    function Banner() {
        
        /**
         * Calls a function when buttons are click (prev. SetOnTouchOK
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the current text of the control to html-formatted text
         * @param {String} str String html code
         */
        this.SetHtml = function(str) {}
        
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
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the banner objec
         * 
         */
        this.Destroy = function() {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Define a callback to be called when the dialog of control is closed
         * @param {Function} callback
         */
        this.SetOnClose = function(callback) {}
    }
    return new Banner;
}

/**
 * An elegant butto
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateButtonElegant = function(text,width,height,color) {
        
    function ButtonElegant() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
    }
    return new ButtonElegant;
}

/**
 * Just a flat button
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateButtonFlat = function(text,width,height,color,backColor) {
        
    function ButtonFlat() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new ButtonFlat;
}

/**
 * The basic type of material butto
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} txtcolor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateButtonRaised = function(text,width,height,color,txtcolor) {
        
    function ButtonRaised() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
    }
    return new ButtonRaised;
}

/**
 * An outlined material raised button
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateButtonRaisedO = function(text,width,height,color,backColor) {
        
    function ButtonRaisedO() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
    }
    return new ButtonRaisedO;
}

/**
 * A round material butto
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} txtcolor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateButtonRound = function(text,width,height,color,txtcolor) {
        
    function ButtonRound() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
    }
    return new ButtonRound;
}

/**
 * An outlined material round butto
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateButtonRoundO = function(text,width,height,color,backColor) {
        
    function ButtonRoundO() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
    }
    return new ButtonRoundO;
}

/**
 * An outlined material butto
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 */
MUI.CreateButtonOutlined = function(text,width,height) {
        
    function ButtonOutlined() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new ButtonOutlined;
}

/**
 * An contained material button
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 */
MUI.CreateButtonContained = function(text,width,height) {
        
    function ButtonContained() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new ButtonContained;
}

/**
 * Adds a text button. See @CreateButtonFlat for full documentation
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 */
MUI.CreateButtonText = function(text,width,height) {}

/**
 * 
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {Boolean} value 
 * @param {Function} callback 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateButtonToggle = function(text,width,height,value,callback,color,backColor) {
        
    function ButtonToggle() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {String} clr1 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} clr2 String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} radius 
         * @param {String} strokeClr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {Number} strokeWidth 
         * @param {Number} shadow
         */
        this.SetStyle = function(clr1,clr2,radius,strokeClr,strokeWidth,shadow) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
    }
    return new ButtonToggle;
}

/**
 * A material implementation of a card. It is fully customizable to suit your likings.<h5>options properties<i style='font-size: 75%;'>definitions</i></h5><p> <b>title</b><i style='font-size: 75%;'>String</i> Title text</p><p> <b>body</b><i style='font-size: 75%;'>String</i> Body text</p><p> <b>image</b><i style='font-size: 75%;'>String</i> Path to the image</p><p> <b>buttonText</b><i style='font-size: 75%;'>String</i> Comma separated string for button text</p><p> <b>color</b><i style='font-size: 75%;'>String</i> Color string</p><p> <b>width</b><i style='font-size: 75%;'>Number</i> Fraction of the screen width</p><p> <b>divider1</b><i style='font-size: 75%;'>Boolean</i> Divider below the avatar</p><p> <b>divider2</b><i style='font-size: 75%;'>Boolean</i> Divider below the body</p><p> <b>avatar</b><i style='font-size: 75%;'>String</i> Path to the avatar image</p><p> <b>avatarOnTop</b><i style='font-size: 75%;'>Boolean</i> Is the avatar on top of the image </p><p> <b>buttonType</b><i style='font-size: 75%;'>String</i> Can be 'raised', 'raisedoutline', 'round', 'roundoutline' or 'flat'</p><p> <b>name</b><i style='font-size: 75%;'>String</i> Name of the card</p
 * @param {Object} options {title:str, body:str, image:str_ptf, buttonText:str_com, color:str, width:num_frc, dividerAvatar:bin, dividerBody:bin, avatar:str_pth, avatarOnTop:bin, buttonType:str
 */
MUI.CreateCard = function(options) {
        
    function Card() {
        
        /**
         * Calls a function when buttons are click
         * @param {Function} callback
         */
        this.SetOnButtonTouch = function(callback) {}
        
        /**
         * Calls a function when the image is click
         * @param {Function} callback
         */
        this.SetOnImageTouch = function(callback) {}
        
        /**
         * Calls a function when avatar is click
         * @param {Function} callback
         */
        this.SetOnAvatarTouch = function(callback) {}
        
        /**
         * Calls a function when title item is click
         * @param {Function} callback
         */
        this.SetOnTitleTouch = function(callback) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Card;
}

/**
 * Creates a color picker dialog where you can select a range of MUI predefined colors
 * @param {String} title
 */
MUI.CreateColorPicker = function(title) {
        
    function ColorPicker() {
        
        /**
         * Calls a function when a user click the OK butto
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
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
         * Pass texedit control to display input value
         * @param {Object} textEdit An MUI TextEdit control
         */
        this.SetTextEdit = function(textEdit) {}
    }
    return new ColorPicker;
}

/**
 * Checkbox is a powerful control when you want the user to select multiple items in a grou
 * @param {List} list A comma separated string
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateCheckbox = function(list,width,height,color) {
        
    function Checkbox() {
        
        /**
         * Calls a function when the checkbox is clic
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Get the check items in the lis
         * 
         */
        this.GetCheckItem = function() {}
        
        /**
         * Checks the corresponding item/items in the checkbox lis
         * @param {Number} index Number integer You can also pass an array of indexes e.g. [1, 3]
         */
        this.CheckItemByIndex = function(index) {}
        
        /**
         * Unchecks the corresponding item/items in the checkbox lis
         * @param {Number} index Number integer You can also pass an array of indexes e.g. [1, 3]
         */
        this.UncheckItemByIndex = function(index) {}
        
        /**
         * Change the height of the contro
         * @param {Number} height Fraction of the screen height
         */
        this.SetHeight = function(height) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Checkbox;
}

/**
 * Check list is a dialog type checkbox list. Let the user select items in a nice popu
 * @param {String} title 
 * @param {List} list An array of objects of the form {name: string, check: boolean}
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {Boolean} bottom
 */
MUI.CreateCheckList = function(title,list,color,bottom) {
        
    function CheckList() {
        
        /**
         * Calls a function when the checklist is submitte
         * @param {Function} callback
         */
        this.SetOnSubmit = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Change the height of the contro
         * @param {Number} height Fraction of the screen height
         */
        this.SetHeight = function(height) {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Pass texedit control to display input value
         * @param {Object} textEdit An MUI TextEdit control
         */
        this.SetTextEdit = function(textEdit) {}
    }
    return new CheckList;
}

/**
 * Data tables display sets of data across rows and columns. You can pass options and and configure your header and rows to add specific functionality
 * @param {List} columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
 * @param {List} values An array of strings of the form Val1:Val2:Val3...
 * @param {Number} width Fraction of the screen width
 * @param {Number} height Fraction of the screen height
 * @param {String} options A comma separated options. Can be Selectable
 */
MUI.CreateDataTable = function(columns,values,width,height,options) {
        
    function DataTable() {
        
        /**
         * Add a row at the end of the table. The same as AddRo
         * @param {String} row A colon ':' separated entries for the new row.
         */
        this.AppendRow = function(row) {}
        
        /**
         * Add a row at the beginning of the table
         * @param {String} row A colon ':' separated entries for the new row.
         */
        this.PrependRow = function(row) {}
        
        /**
         * Remove a row at a given index or indexe
         * @param {List} index An array of indexes you want to remove. It can also be just a number for a single index.
         */
        this.RemoveRows = function(index) {}
        
        /**
         * Get the selected rows. This function is synchronous. You need to pass a callback
         * @param {Function} callback
         */
        this.GetSelectedRows = function(callback) {}
        
        /**
         * Calls a function when the selection status of the table changes
         * @param {Function} callback
         */
        this.SetOnSelectionStatus = function(callback) {}
        
        /**
         * Calls a function when a row in the table is click
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Calls a function when the Table is ready and rendered already
         * @param {Function} callback
         */
        this.SetOnReady = function(callback) {}
        
        /**
         * Calls a function when the Table is on progres
         * @param {Function} callback
         */
        this.SetOnProgress = function(callback) {}
        
        /**
         * Set the rows of the table to a new values of data
         * @param {List} values A comma separated strings of the form "Val1:Val2:Val3:..."
         */
        this.SetRows = function(values) {}
        
        /**
         * Add a footer layout to the table where you can add controls
         * @param {String} type Type of layout. Can be Linear|Absolute|Frame. Default to Linear
         * @param {String} options A comma separated layout options. Default to Horizontal|Right|VCenter
         * @param {Number} height A fraction of the screen height.
         */
        this.AddFooter = function(type,options,height) {
            return app.CreateFooter();
        }
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new DataTable;
}

/**
 * Creates a materialize date picker dialog
 * @param {Number} yyyy Number integer Full year
 * @param {Number} mm Number integer [0
 * @param {Number} dd Number integer [1
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateDatePicker = function(yyyy,mm,dd,color) {
        
    function DatePicker() {
        
        /**
         * Calls a function when a user click the OK butto
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
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
         * Pass texedit control to display input value
         * @param {Object} textEdit An MUI TextEdit control
         */
        this.SetTextEdit = function(textEdit) {}
    }
    return new DatePicker;
}

/**
 * Creates a customizable materialize dialog
 * @param {String} title Title
 * @param {String} body Body text
 * @param {String} okText Truthy button text
 * @param {String} cancelText Falsey button text
 * @param {Boolean} divider Show divider or hide
 */
MUI.CreateDialog = function(title,body,okText,cancelText,divider) {
        
    function Dialog() {
        
        /**
         * Calls a function when buttons are click (prev. SetOnTouchOK
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Change the current text of the control to html-formatted text
         * @param {String} str String html code
         */
        this.SetHtml = function(str) {}
        
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
         * Sets a new title tex
         * @param {String} newTitle New title text
         */
        this.SetTitle = function(newTitle) {}
        
        /**
         * Change the color of the title tex
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTitleColor = function(color) {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Define a callback to be called when the dialog of control is closed
         * @param {Function} callback
         */
        this.SetOnClose = function(callback) {}
    }
    return new Dialog;
}

/**
 * Creates a divider which you can add to your layou
 * @param {} height Optional
 */
MUI.CreateDivider = function(height) {
        
    function Divider() {
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently useable by the user
         * 
         */
        this.IsEnabled = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
    }
    return new Divider;
}

/**
 * Creates a floating action butto
 * @param {String} icon Material icon fonts
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateFAB = function(icon,color) {
        
    function FAB() {
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Sets a new material ico
         * @param {String} icon Material icon font
         */
        this.SetIcon = function(icon) {}
        
        /**
         * Sets the text colo
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetIconColor = function(color) {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetIcon = function() {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
    }
    return new FAB;
}

/**
 * An elegant floating action butto
 * @param {String} icon Material icon fonts
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateFABElegant = function(icon,color) {
        
    function FABElegant() {
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Sets a new material ico
         * @param {String} icon Material icon font
         */
        this.SetIcon = function(icon) {}
        
        /**
         * Sets the text colo
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetIconColor = function(color) {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetIcon = function() {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
    }
    return new FABElegant;
}

/**
 * Creates an outlined floating action butto
 * @param {String} icon Material icon font
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateFABOutline = function(icon,color,backColor) {
        
    function FABOutline() {
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Sets a new material ico
         * @param {String} icon Material icon font
         */
        this.SetIcon = function(icon) {}
        
        /**
         * Sets the text colo
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetIconColor = function(color) {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetIcon = function() {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
        
        /**
         * Change the color of the contro
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetColor = function(color,backColor) {}
        
        /**
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
    }
    return new FABOutline;
}

/**
 * It is just the **CreateLayout** method of DroidScript with predefined values on background color just to be consistent on MUI theming
 * @param {String} type Linear|Absolute|Frame|Card
 * @param {String} options Comma separated DroidScript layout options
 */
MUI.CreateLayout = function(type,options) {}

/**
 * A manipulation of the DroidScript list object
 * @param {String} list 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options
 */
MUI.CreateList = function(list,width,height,options) {
        
    function List() {
        
        /**
         * 
         * @param {String} title 
         * @param {String} body 
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * @param {String} title
         */
        this.GetItem = function(title) {}
        
        /**
         * 
         * @param {Number} index
         */
        this.GetItemByIndex = function(index) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLength = function() {}
        
        /**
         * 
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {Number} index 
         * @param {String} title 
         * @param {String} body 
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
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
         * 
         * 
         */
        this.RemoveAll = function() {}
        
        /**
         * 
         * @param {String} title
         */
        this.RemoveItem = function(title) {}
        
        /**
         * 
         * @param {Number} index
         */
        this.RemoveItemByIndex = function(index) {}
        
        /**
         * 
         * @param {String} title 
         * @param {String} body
         */
        this.ScrollToItem = function(title,body) {}
        
        /**
         * 
         * @param {Number} index
         */
        this.ScrollToItemByIndex = function(index) {}
        
        /**
         * 
         * @param {String} title 
         * @param {String} body 
         * @param {Boolean} scroll
         */
        this.SelectItem = function(title,body,scroll) {}
        
        /**
         * 
         * @param {Number} index 
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
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * 
         * @param {unknown} icon 
         * @param {String} title 
         * @param {String} body 
         * @param {unknown} mode
         */
        this.SetColumnWidths = function(icon,title,body,mode) {}
        
        /**
         * 
         * @param {Number} height 
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetDivider = function(height,color) {}
        
        /**
         * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetEllipsize = function(mode) {}
        
        /**
         * 
         * @param {unknown} mode
         */
        this.SetEllipsize1 = function(mode) {}
        
        /**
         * 
         * @param {unknown} mode
         */
        this.SetEllipsize2 = function(mode) {}
        
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
         * 
         * @param {unknown} clr
         */
        this.SetHiTextColor1 = function(clr) {}
        
        /**
         * 
         * @param {unknown} clr
         */
        this.SetHiTextColor2 = function(clr) {}
        
        /**
         * 
         * @param {unknown} left 
         * @param {unknown} top 
         * @param {unknown} right 
         * @param {unknown} bottom 
         * @param {unknown} mode
         */
        this.SetIconMargins = function(left,top,right,bottom,mode) {}
        
        /**
         * 
         * @param {unknown} size 
         * @param {unknown} mode
         */
        this.SetIconSize = function(size,mode) {}
        
        /**
         * 
         * @param {String} title 
         * @param {unknown} newTitle 
         * @param {Number} newBody 
         * @param {unknown} newImage
         */
        this.SetItem = function(title,newTitle,newBody,newImage) {}
        
        /**
         * 
         * @param {Number} index 
         * @param {unknown} newTitle 
         * @param {Number} newBody 
         * @param {unknown} newImage
         */
        this.SetItemByIndex = function(index,newTitle,newBody,newImage) {}
        
        /**
         * 
         * @param {unknown} list 
         * @param {String} delim
         */
        this.SetList = function(list,delim) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Define distances that elements within the control are to maintain from the control borders
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * 
         * @param {String} clr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor1 = function(clr) {}
        
        /**
         * 
         * @param {String} clr String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor2 = function(clr) {}
        
        /**
         * 
         * @param {unknown} left 
         * @param {unknown} top 
         * @param {unknown} right 
         * @param {unknown} bottom 
         * @param {unknown} mode 
         * @param {String} options String comma “,” separated
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
         * 
         * @param {Number} radius 
         * @param {Number} dx 
         * @param {Number} dy 
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextShadow1 = function(radius,dx,dy,color) {}
        
        /**
         * 
         * @param {Number} radius 
         * @param {Number} dx 
         * @param {Number} dy 
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
         * 
         * @param {unknown} size 
         * @param {unknown} mode
         */
        this.SetTextSize1 = function(size,mode) {}
        
        /**
         * 
         * @param {unknown} size 
         * @param {unknown} mode
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
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
 * Creates a more customizable list dialo
 * @param {String} title 
 * @param {List} list An array of objects of the form {name: 'string', icon: 'material
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {Boolean} bottom
 */
MUI.CreateListDialog = function(title,list,color,bottom) {
        
    function ListDialog() {
        
        /**
         * Calls a function when a user selects an item in the lis
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Change the height of the contro
         * @param {Number} height Fraction of the screen height
         */
        this.SetHeight = function(height) {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Pass texedit control to display input value
         * @param {Object} textEdit An MUI TextEdit control
         */
        this.SetTextEdit = function(textEdit) {}
    }
    return new ListDialog;
}

/**
 * A modern implementation of list using the available controls of DroidScript
 * @param {List} list An array of object elements. See list example
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options Initial|Material|Avatar, RightIcon|RightNote, Selectable
 */
MUI.CreateListModern = function(list,width,height,options) {
        
    function ListModern() {
        
        /**
         * Calls a function when an item is click
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Calls a function when an item in the list is select. List must be selectable
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Calls a function when an icon or avatar is click. The same as SetIconOnTouch
         * @param {Function} callback
         */
        this.SetAvatarOnTouch = function(callback) {}
        
        /**
         * Enable or disable selectable option
         * @param {Boolean} selectable
         */
        this.SetSelectable = function(selectable) {}
        
        /**
         * Calls a function when a right icon is clic
         * @param {Function} callback
         */
        this.SetControlOnTouch = function(callback) {}
        
        /**
         * Appends an item at the bottom of the lis
         * @param {Object} data A single element of the list
         */
        this.AppendItem = function(data) {}
        
        /**
         * Removes a single item in the list
         * @param {Number} index Number integer
         */
        this.RemoveItem = function(index) {}
        
        /**
         * Removes multiple items in the list
         * @param {List} indexes An array of indexes.
         */
        this.RemoveItems = function(indexes) {}
        
        /**
         * Set a new title to a respective inde
         * @param {String} newTitle New title text
         * @param {Number} index Number integer
         */
        this.SetTitleText = function(newTitle,index) {}
        
        /**
         * Set a new body to a respective inde
         * @param {String} newBody New body text
         * @param {Number} index Number integer
         */
        this.SetBodyText = function(newBody,index) {}
        
        /**
         * Set a new material icon to the right ico
         * @param {String} newIcon New right icon
         * @param {Number} index Number integer
         */
        this.SetRightIcon = function(newIcon,index) {}
        
        /**
         * Set a new note text for a respective item on the lis
         * @param {String} newNote New note text
         * @param {Number} index Number integer
         */
        this.SetNoteText = function(newNote,index) {}
        
        /**
         * Sets a new lis
         * @param {Object} list List Modern list
         */
        this.SetList = function(list) {}
        
        /**
         * Removes an item at the bottom of the lis
         * 
         */
        this.PopItem = function() {}
        
        /**
         * Removes an item at the beginning of the lis
         * 
         */
        this.ShiftItem = function() {}
        
        /**
         * Returns the current list objec
         * 
         */
        this.GetList = function() {}
        
        /**
         * Returns the respective item in the lis
         * @param {Number} index Number integer
         */
        this.GetItem = function(index) {}
        
        /**
         * Returns the selected items in the lis
         * 
         */
        this.GetSelectedItems = function() {}
        
        /**
         * Highlight a respective item in the lis
         * @param {Number} index Number integer
         */
        this.Highlight = function(index) {}
        
        /**
         * Removes a highlight to a respective item in the lis
         * @param {Number} index Number integer
         */
        this.RemoveHighlight = function(index) {}
        
        /**
         * Set a new image to a respective item in the lis
         * @param {String} newImagePath String path to file ( “/absolute/...” or “relative/...” ) Path to the new image
         * @param {Number} index Number integer
         */
        this.SetImage = function(newImagePath,index) {}
        
        /**
         * 
         * @param {Object} data A single element of the list object
         * @param {Number} index Number integer
         */
        this.SetItem = function(data,index) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new ListModern;
}

/**
 * Creates a material designed dropdown. Let the user select from a predefined options
 * @param {List} list String. A comma separated options
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 */
MUI.CreateSpinner = function(list,width,height) {
        
    function Spinner() {
        
        /**
         * Calls a function when value change
         * @param {Function} callback
         */
        this.SetOnChange = function(callback) {}
        
        /**
         * Select an optio
         * @param {String} value Must be one of the provided values
         */
        this.SelectItem = function(value) {}
        
        /**
         * Select an option with a given index
         * @param {Number} index Number integer The index of the option in the given values
         */
        this.SelectItemByIndex = function(index) {}
        
        /**
         * Sets a new list of options
         * @param {List} list A comma separated values for options.
         */
        this.SetList = function(list) {}
        
        /**
         * Sets the hint when there is no active selection
         * @param {String} hint The hint text.
         */
        this.SetHint = function(hint) {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Change the size of the contained text
         * @param {Number} size 
         * @param {String} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
         */
        this.SetTextSize = function(size,mode) {}
        
        /**
         * Change the text color of the contained text
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextColor = function(color) {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
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
 * Creates a simple list that has an optional badge and icon with no body text
 * @param {List} list {title:str|icon:str
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} options Divider
 */
MUI.CreateListSimple = function(list,width,height,options) {
        
    function ListSimple() {
        
        /**
         * Calls a function when an item is click
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Appends an item at the bottom of the lis
         * @param {Object} data A single element of the list
         */
        this.AppendItem = function(data) {}
        
        /**
         * Removes an item in the list
         * @param {Number} index Number integer
         */
        this.RemoveItem = function(index) {}
        
        /**
         * Set the badge of the corresponding ite
         * @param {Number} newBadge Number integer
         * @param {Number} index Number integer
         */
        this.SetBadge = function(newBadge,index) {}
        
        /**
         * Sets a new title to a corresponding ite
         * @param {String} newTitle New title text
         * @param {Number} index Number integer
         */
        this.SetTitleText = function(newTitle,index) {}
        
        /**
         * Returns the current list objec
         * 
         */
        this.GetList = function() {}
        
        /**
         * Sets a new lis
         * @param {Object} list ListSimple list
         */
        this.SetList = function(list) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new ListSimple;
}

/**
 * A simple MUI implementation of material design menu
 * @param {String} list String comma “,” separated list
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} position Top,Left|Top,Right|Bottom,Left|Bottom,Right
 */
MUI.CreateMenu = function(list,width,height,position) {
        
    function Menu() {
        
        /**
         * Calls a function when item is clic
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Set a new list of option
         * @param {List} list A comma separated options
         */
        this.SetList = function(list) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
    }
    return new Menu;
}

/**
 * Advance MUI implementation of material design menu with additional icon using material icon font
 * @param {List} list str
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {String} position Top,Left|Top,Right|Bottom,Left|Bottom,Right
 */
MUI.CreateMenuWithIcon = function(list,width,height,position) {
        
    function MenuWithIcon() {
        
        /**
         * Calls a function when item is clic
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
    }
    return new MenuWithIcon;
}

/**
 * A modal is a popup with more controls that can be added
 * @param {String} title 
 * @param {String} body Body text. If you want to customize the modal layout pass an empty string.
 * @param {String} okTxt Truthy button text
 * @param {String} cancelTxt Falsy button text
 * @param {Boolean} show 
 * @param {String} options Dialog options with additional Full option
 */
MUI.CreateModal = function(title,body,okTxt,cancelTxt,show,options) {
        
    function Modal() {
        
        /**
         * Calls a function when control buttons are clic
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Get the layout of the modal where you can add your controls
         * 
         */
        this.GetLayout = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
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
         * Sets a new title to the moda
         * @param {String} title
         */
        this.SetTitle = function(title) {}
        
        /**
         * Change the background color of the heade
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetHeaderColor = function(color) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Define a callback to be called when the dialog of control is closed
         * @param {Function} callback
         */
        this.SetOnClose = function(callback) {}
    }
    return new Modal;
}

/**
 * Creates a radio control by manipulation of the DroidScript's list control. A radio control allows the user to select only one item in a list. For selecting multiple items in a list, use checkbox
 * @param {String} list String comma “,” separated strings
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateRadio = function(list,width,height,color) {
        
    function Radio() {
        
        /**
         * Calls a function when the user selects an item in the lis
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Checks a corresponding ite
         * @param {Number} index Number integer
         */
        this.CheckItemByIndex = function(index) {}
        
        /**
         * Gets the checked item in the lis
         * 
         */
        this.GetCheckItem = function() {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * @param {String} title
         */
        this.GetItem = function(title) {}
        
        /**
         * 
         * @param {Number} index
         */
        this.GetItemByIndex = function(index) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLength = function() {}
        
        /**
         * 
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {Number} index 
         * @param {String} title 
         * @param {String} body 
         * @param {String} image String path to file ( “/absolute/...” or “relative/...” )
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
         * 
         * 
         */
        this.RemoveAll = function() {}
        
        /**
         * 
         * @param {String} title
         */
        this.RemoveItem = function(title) {}
        
        /**
         * 
         * @param {Number} index
         */
        this.RemoveItemByIndex = function(index) {}
        
        /**
         * 
         * @param {String} title 
         * @param {String} body
         */
        this.ScrollToItem = function(title,body) {}
        
        /**
         * 
         * @param {Number} index
         */
        this.ScrollToItemByIndex = function(index) {}
        
        /**
         * 
         * @param {String} title 
         * @param {String} body 
         * @param {unknown} scroll
         */
        this.SelectItem = function(title,body,scroll) {}
        
        /**
         * 
         * @param {Number} index 
         * @param {unknown} scroll
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
         * @param {String} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
         */
        this.SetColorFilter = function(color,mode) {}
        
        /**
         * 
         * @param {unknown} icon 
         * @param {String} title 
         * @param {String} body 
         * @param {unknown} mode
         */
        this.SetColumnWidths = function(icon,title,body,mode) {}
        
        /**
         * 
         * @param {Number} height 
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetDivider = function(height,color) {}
        
        /**
         * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control
         * @param {String} mode start|middle|end
         */
        this.SetEllipsize = function(mode) {}
        
        /**
         * 
         * @param {unknown} mode
         */
        this.SetEllipsize1 = function(mode) {}
        
        /**
         * 
         * @param {unknown} mode
         */
        this.SetEllipsize2 = function(mode) {}
        
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
         * 
         * @param {unknown} clr
         */
        this.SetHiTextColor1 = function(clr) {}
        
        /**
         * 
         * @param {unknown} clr
         */
        this.SetHiTextColor2 = function(clr) {}
        
        /**
         * 
         * @param {unknown} list 
         * @param {String} delim
         */
        this.SetList = function(list,delim) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
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
         * 
         * @param {unknown} clr
         */
        this.SetTextColor1 = function(clr) {}
        
        /**
         * 
         * @param {unknown} clr
         */
        this.SetTextColor2 = function(clr) {}
        
        /**
         * 
         * @param {unknown} left 
         * @param {unknown} top 
         * @param {unknown} right 
         * @param {unknown} bottom 
         * @param {unknown} mode 
         * @param {String} options String comma “,” separated
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
         * 
         * @param {Number} radius 
         * @param {Number} dx 
         * @param {Number} dy 
         * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
         */
        this.SetTextShadow1 = function(radius,dx,dy,color) {}
        
        /**
         * 
         * @param {Number} radius 
         * @param {Number} dx 
         * @param {Number} dy 
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
         * 
         * @param {unknown} size 
         * @param {unknown} mode
         */
        this.SetTextSize1 = function(size,mode) {}
        
        /**
         * 
         * @param {unknown} size 
         * @param {unknown} mode
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new Radio;
}

/**
 * Creates a radio button control. A radio control allows the user to select only one item in a list. For selecting multiple items in a list, use checkbox
 * @param {List} list A comma separated strings
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} orientation Vertical|Horizontal
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateRadioButtons = function(list,width,height,orientation,color,backColor) {
        
    function RadioButtons() {
        
        /**
         * Calls a function when the user selects an item in the lis
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Checks a corresponding ite
         * @param {Number} index Number integer
         */
        this.CheckItemByIndex = function(index) {}
        
        /**
         * Gets the checked item in the lis
         * 
         */
        this.GetCheckItem = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Show or Hide the lis
         * 
         */
        this.Toggle = function() {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Returns the corresponding ite
         * @param {Number} index Number integer
         */
        this.GetItem = function(index) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Gets the lis
         * 
         */
        this.GetList = function() {}
        
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
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
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new RadioButtons;
}

/**
 * Creates a material radio control. A radio control allows the user to select only one item in a list. For selecting multiple items in a list, use checkbox
 * @param {List} list A comma separated strings
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} orientation Vertical|Horizontal
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateRadioMaterial = function(list,width,height,orientation,color,backColor) {
        
    function RadioMaterial() {
        
        /**
         * Calls a function when the user selects an item in the lis
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Checks a corresponding ite
         * @param {Number} index Number integer
         */
        this.CheckItemByIndex = function(index) {}
        
        /**
         * Gets the checked item in the lis
         * 
         */
        this.GetCheckItem = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
         * @param {Number} bottom Number fraction (0..1)
         * @param {String} mode px|sp|dip|mm|pt
         */
        this.SetMargins = function(left,top,right,bottom,mode) {}
        
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
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Show or Hide the lis
         * 
         */
        this.Toggle = function() {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * Returns the corresponding ite
         * @param {Number} index Number integer
         */
        this.GetItem = function(index) {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * Gets the lis
         * 
         */
        this.GetList = function() {}
        
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
        /**
         * %cb% the object has been long pressed
         * @param {Function} callback
         */
        this.SetOnLongTouch = function(callback) {}
        
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
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new RadioMaterial;
}

/**
 * An MUI implementation of a basic seekbar
 * @param {Number} value Must be between 0 and range
 * @param {Number} range The maximum value of your seekbar
 * @param {Number} width 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateSeekBar = function(value,range,width,color) {
        
    function SeekBar() {
        
        /**
         * Get the current value of the seekbar
         * 
         */
        this.GetValue = function() {}
        
        /**
         * Set the number of decimals to the valu
         * @param {Number} decimals Number integer The number of decimals
         */
        this.SetDecimals = function(decimals) {}
        
        /**
         * Calls a function when the seekbar is touch. Returns the value to the callback
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Sets a new value to the seekbar
         * @param {Number} value Must be between 0 and range
         */
        this.SetValue = function(value) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
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
 * Creates a switch that can be toggled on and off
 * @param {Boolean} value 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateSwitch = function(value,color) {
        
    function Switch() {
        
        /**
         * Get the current value of the switc
         * 
         */
        this.GetValue = function() {}
        
        /**
         * Calls a function when switch is clic
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Sets the value of the switc
         * @param {Boolean} value
         */
        this.SetValue = function(value) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
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
 * Creates a switchable settings that can be toggled on and off
 * @param {String} text 
 * @param {Number} width Number fraction (0..1)
 * @param {Number} height Number fraction (0..1)
 * @param {Boolean} value 
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateSwitchSettings = function(text,width,height,value,color,backColor) {
        
    function SwitchSettings() {
        
        /**
         * Get the current value of the switc
         * 
         */
        this.GetValue = function() {}
        
        /**
         * Calls a function when switch is clic
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * Sets the value of the switc
         * @param {Boolean} value
         */
        this.SetValue = function(value) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new SwitchSettings;
}

/**
 * Creates a simple fixed tab
 * @param {String} title String comma “,” separated titles
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options String comma “,” separated DS layout options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {Boolean} animation
 */
MUI.CreateTabFixed = function(title,width,height,options,color,animation) {
        
    function TabFixed() {
        
        /**
         * Get the corresponding layout of a given name where you can add your control
         * @param {String} name The layout name
         */
        this.GetLayout = function(name) {}
        
        /**
         * Open the a tab by passing an inde
         * @param {Number} index
         */
        this.SetActiveTabByIndex = function(index) {}
        
        /**
         * Calls a function when the tab is click
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Animates the control.
         * @param {String} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
         * @param {Function} callback 
         * @param {Number} time Number milliseconds
         */
        this.Animate = function(type,callback,time) {}
        
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
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired
         * @param {Boolean} enable
         */
        this.SetEnabled = function(enable) {}
        
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
         * Change the visibility of the control to one of the available modes:
         * @param {String} mode Show|Hide|Gone
         */
        this.SetVisibility = function(mode) {}
        
        /**
         * Performs an animation on the control.
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TabFixed;
}

/**
 * Creates a filled text input with icon on the lef
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options
 * @param {String} icon Material icon font
 * @param {String} hint Hint or label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTEFilledIconLeft = function(width,options,icon,hint,label,color) {
        
    function TEFilledIconLeft() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Calls a function when icon is touc
         * @param {Function} callback
         */
        this.SetOnIconTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TEFilledIconLeft;
}

/**
 * Creates a filled text input with icon on the righ
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options
 * @param {String} icon Material icon font
 * @param {String} hint Hint or label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTEFilledIconRight = function(width,options,icon,hint,label,color) {
        
    function TEFilledIconRight() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Calls a function when icon is touc
         * @param {Function} callback
         */
        this.SetOnIconTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TEFilledIconRight;
}

/**
 * Creates a material outlined text input with icon on the left
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options with additional 'Round' option.
 * @param {String} icon Material icon font
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTEOutlineIconLeft = function(width,options,icon,hint,label,color,backColor) {
        
    function TEOutlineIconLeft() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Calls a function when icon is touc
         * @param {Function} callback
         */
        this.SetOnIconTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TEOutlineIconLeft;
}

/**
 * Creates a material outlined text input with icon on the right
 * @param {Number} width 
 * @param {String} options String comma “,” separated DS TextEdit options with additional 'Round' option.
 * @param {String} icon Material icon font
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTEOutlineIconRight = function(width,options,icon,hint,label,color,backColor) {
        
    function TEOutlineIconRight() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Calls a function when icon is touc
         * @param {Function} callback
         */
        this.SetOnIconTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TEOutlineIconRight;
}

/**
 * Creates a customizable elegant text input
 * @param {Number} width 
 * @param {String} hint Hint text
 * @param {String} icon Material icon font
 * @param {String} iconPos Right|Left
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} option Small|Normal|Border
 */
MUI.CreateTESearchElegant = function(width,hint,icon,iconPos,color,option) {
        
    function TESearchElegant() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
        /**
         * %cb% the user pressed the icon
         * @param {Function} callback
         */
        this.SetIconOnTouch = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Calls a function when icon is touc
         * @param {Function} callback
         */
        this.SetOnIconTouch = function(callback) {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TESearchElegant;
}

/**
 * Creates a unique text inpu
 * @param {Number} width 
 * @param {String} hint Hint text
 * @param {String} icon Material icon font
 * @param {String} iconColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTESearchUnique = function(width,hint,icon,iconColor) {
        
    function TESearchUnique() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Calls a function when icon is touc
         * @param {Function} callback
         */
        this.SetOnIconTouch = function(callback) {}
    }
    return new TESearchUnique;
}

/**
 * Creates a material filled textare
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextAreaFilled = function(width,height,hint,label,color) {
        
    function TextAreaFilled() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
    }
    return new TextAreaFilled;
}

/**
 * Creates an active filled textarea
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Hides or show label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextAreaFilledA = function(width,height,hint,label,color) {
        
    function TextAreaFilledA() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
    }
    return new TextAreaFilledA;
}

/**
 * Creates an outlined material textarea
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextAreaOutline = function(width,height,hint,label,color,backColor) {
        
    function TextAreaOutline() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
    }
    return new TextAreaOutline;
}

/**
 * Creates an active outlined material textarea
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextAreaOutlineA = function(width,height,hint,label,color,backColor) {
        
    function TextAreaOutlineA() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
    }
    return new TextAreaOutlineA;
}

/**
 * Creates the most common type of material text input
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextEditFilled = function(width,options,hint,label,color) {
        
    function TextEditFilled() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TextEditFilled;
}

/**
 * Creates an active filled material text input
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextEditFilledA = function(width,options,hint,label,color) {
        
    function TextEditFilledA() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TextEditFilledA;
}

/**
 * Creates an outlined material text input
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options with additional 'Round' option.
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextEditOutline = function(width,options,hint,label,color,backColor) {
        
    function TextEditOutline() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TextEditOutline;
}

/**
 * Creates an active outlined material text input
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options with additional 'Round' option.
 * @param {String} hint Hint|Label text
 * @param {Boolean} label Show or hide label
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextEditOutlineA = function(width,options,hint,label,color,backColor) {
        
    function TextEditOutlineA() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TextEditOutlineA;
}

/**
 * Creates a customize search style text input
 * @param {Number} width 
 * @param {String} options Comma separated DS TextEdit options
 * @param {String} hint Hint text
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} backColor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextEditSearch = function(width,options,hint,color,backColor) {
        
    function TextEditSearch() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Calls a function when icon is touc
         * @param {Function} callback
         */
        this.SetOnIconTouch = function(callback) {}
    }
    return new TextEditSearch;
}

/**
 * Creates a unique textedit customization
 * @param {Number} width 
 * @param {String} hint Hint text
 * @param {String} icon Material icon font
 * @param {String} iconCOlor String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... Icon color
 */
MUI.CreateTextEditUnique = function(width,hint,icon,iconCOlor) {
        
    function TextEditUnique() {
        
        /**
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * Clear input histor
         * 
         */
        this.ClearHistory = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get cursor lin
         * 
         */
        this.GetCursorLine = function() {}
        
        /**
         * Get cursor positio
         * 
         */
        this.GetCursorPos = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectedText = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionEnd = function() {}
        
        /**
         * 
         * 
         */
        this.GetSelectionStart = function() {}
        
        /**
         * Returns the current displayed text of the control
         * 
         */
        this.GetText = function() {}
        
        /**
         * Get the type of MUI control
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Hides the control without consuming any more layout space as if it were never there
         * 
         */
        this.Gone = function() {}
        
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
         * Change the curernt cursor position
         * @param {Number} position Number integer
         */
        this.SetCursorPos = function(position) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * %cb% the user pressed 'Done' or 'Enter' on the keyboar
         * @param {Function} callback
         */
        this.SetOnEnter = function(callback) {}
        
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
         * Change the currently displayed text in the control
         * @param {String} text
         */
        this.SetText = function(text) {}
        
        /**
         * Undo an actio
         * 
         */
        this.Undo = function() {}
        
        /**
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
    }
    return new TextEditUnique;
}

/**
 * Creates a heading text 
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextH1 = function(text,width,height,options,color,fontWeight) {
        
    function TextH() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextH;
}

/**
 * Creates a heading text
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextH2 = function(text,width,height,options,color,fontWeight) {
        
    function TextH() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextH;
}

/**
 * Creates a heading text 
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextH3 = function(text,width,height,options,color,fontWeight) {
        
    function TextH() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextH;
}

/**
 * Creates a heading text 
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextH4 = function(text,width,height,options,color,fontWeight) {
        
    function TextH() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextH;
}

/**
 * Creates a heading text 
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextH5 = function(text,width,height,options,color,fontWeight) {
        
    function TextH() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextH;
}

/**
 * Creates a heading text 
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextH6 = function(text,width,height,options,color,fontWeight) {
        
    function TextH() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextH;
}

/**
 * Creates an extra large tex
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTextJumbo = function(text,width,height,options,color) {
        
    function TextJumbo() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextJumbo;
}

/**
 * Creates a paragraph tex
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextParagraph = function(text,width,height,options,color,fontWeight) {
        
    function TextParagraph() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextParagraph;
}

/**
 * Creates a secondary tex
 * @param {String} text 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} options DS text options
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 * @param {String} fontWeight Can be Thin|Light|Regular|Medium|Bold
 */
MUI.CreateTextSecondary = function(text,width,height,options,color,fontWeight) {
        
    function TextSecondary() {
        
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
         * Removes the focus of the control so that the user no longer has immediate access to it
         * 
         */
        this.ClearFocus = function() {}
        
        /**
         * 
         * 
         */
        this.data = function() {}
        
        /**
         * Set the focus to the control so that the user can interact with it immediately
         * 
         */
        this.Focus = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetHeight = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetHtml = function() {}
        
        /**
         * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetLeft = function(options) {}
        
        /**
         * 
         * 
         */
        this.GetLineCount = function() {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineStart = function(line) {}
        
        /**
         * 
         * @param {Number} line Number integer
         */
        this.GetLineTop = function(line) {}
        
        /**
         * 
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
         * Returns the current displayed text of the control
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
         * 
         * 
         */
        this.GetType = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Get the width of the control as screen width relative float or in pixels with the **px** option
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
         * 
         * @param {String} msg 
         * @param {String} options String comma “,” separated
         */
        this.Log = function(msg,options) {}
        
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
         */
        this.SetColorFilter = function(color,mode) {}
        
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
         * 
         * @param {Number} maxLines Number integer
         */
        this.SetLog = function(maxLines) {}
        
        /**
         * Define a distance to other controls on each side of the control
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * Define a callback function that is called when the user touches the control
         * @param {Function} callback
         */
        this.SetOnTouch = function(callback) {}
        
        /**
         * %cb% the user started toching the control
         * @param {Function} callback
         */
        this.SetOnTouchDown = function(callback) {}
        
        /**
         * %cb% the user drags his finger over the screen
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
         * @param {Number} left 
         * @param {Number} top 
         * @param {Number} right 
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
         * @param {Object} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
         * @param {Number} duration Number milliseconds
         * @param {String} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
         * @param {Number} repeat Number integer
         * @param {Boolean} yoyo 
         * @param {Function} callback
         */
        this.Tween = function(target,duration,type,repeat,yoyo,callback) {}
    }
    return new TextSecondary;
}

/**
 * Creates a material design time picker
 * @param {Number} hour [0
 * @param {Number} minute 0
 * @param {String} color String <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...
 */
MUI.CreateTimePicker = function(hour,minute,color) {
        
    function TimePicker() {
        
        /**
         * Calls a function when the user selects a time
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
        
        /**
         * Set the visibility of the control to “Show”
         * 
         */
        this.Show = function() {}
        
        /**
         * Hide the control but keep the layout space free
         * 
         */
        this.Hide = function() {}
        
        /**
         * Destroys the control completel
         * 
         */
        this.Destroy = function() {}
        
        /**
         * Returns the current visibility state of the control. The Values are:
         * 
         */
        this.GetVisibility = function() {}
        
        /**
         * Returns whether the control is currently visible to the user, ignoring overlaying controls
         * 
         */
        this.IsVisible = function() {}
        
        /**
         * Get the absolute height of the control in pixels
         * 
         */
        this.GetAbsHeight = function() {}
        
        /**
         * Get the absolute width of the control in pixels
         * 
         */
        this.GetAbsWidth = function() {}
        
        /**
         * Get the height of the control as screen height relative float or in pixels with the **px** option
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
         * Get the width of the control as screen width relative float or in pixels with the **px** option
         * @param {String} options px
         */
        this.GetWidth = function(options) {}
        
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
         * Pass texedit control to display input value
         * @param {Object} textEdit An MUI TextEdit control
         */
        this.SetTextEdit = function(textEdit) {}
    }
    return new TimePicker;
}

/**
 * MUI uses the free Roboto font family downloaded from <a href='www.fonts.google.com'>Google Fonts</a> as its main font for all of the controls. To use your own font family just put your .ttf font file into the Fonts/ directory of your app with the corresponding variation names.<br>For the icons, MUI uses the Google's Material Icon Font
 * 
 */
MUI.fonts = function() {}

/**
 * Show a menu on a given control
 * @param {AppObject} control 
 * @param {String} list String separated
 * @param {Number} width Number fraction (0..1)
 */
MUI.ShowMenu = function(control,list,width) {
        
    function Menu() {
        
        /**
         * Calls a function when the user selects an item
         * @param {Function} callback
         */
        this.SetOnSelect = function(callback) {}
    }
    return new Menu;
}
