
class View {

    constructor() {
       //super();
       this.object = {}
       this.main = null;
       this.mainProporties = ["Linear", "Top, Center", 1, 1];
       this.Layout();
       
    }
    
    Id( id, object, register = true ) {
        this.object[id] = object;
        this.Styles( id );
    }
    
    Layout(){
        let _styles = this.SetStyle("main");
        let _drawer = this.SetStyle("drawer");
        let _isProp = (_styles?.main && Object.values(_styles.main).length > 0) ? _styles.main : this.mainProporties;
        _isProp.unshift("main");
        this.main = ui.addLayout.apply(ui, _isProp)
        this.Id( _isProp[0], this.main );
        this.Id("app", app);
        
        if(typeof _drawer.app_drawer == "object" && "drawer" in _drawer && _drawer.app_drawer.show == true){
            //console.log(JSON.stringify(this.object.))
            let drawLay = ui.addLayout(null, "Linear", "Top, ScrollY");
            let drawer = ui.addDrawer(drawLay, (_drawer.app_drawer?.position ? _drawer.app_drawer.position : "left"));
            let lstMenu = ui.addList(null, (_drawer.app_drawer?.menu ? _drawer.app_drawer.menu : []), "Icon", 1 );
            lstMenu.label = (_drawer.app_drawer?.label ? _drawer.app_drawer.label : "");
            
            drawLay["setMenu"] = function(){
                 this.addChild(lstMenu)
            }
            
            this.Id("drawLay", drawLay);
            this.Id("drawer", drawer);
            this.Id("drawer_menu", lstMenu);
        }else{
            this.Id("drawer", false);
        }
    }

    /**
     * Rendering style file AppStyle.json
     * @param {object} obj
     */
    StyleRender(id, object) {
        let output = {};
        object = object.split(":");
        if(object[0].indexOf("#") == -1){ // Is not comment
        
            if(typeof this.object[id][object[0]] === "function") output.index = "ntr";
            else output.index = "ltr";
            
        }
        output.type = object;

        return output;
    }

    /**
     * Get styles
     * @param {int} id
     */
    Styles(id, register = true) {

        //let _stylePath = "appStyle.json",
       let  _object = this.object[id],
            _render,
            _values,
            _styleFile,
            _styleRender;

        /*if (!app.FileExists(_stylePath)){

            app.CreateFile(_stylePath, "rw");
            app.WriteFile(_stylePath, "{}" );
        }
        _styleFile = JSON.parse(app.ReadFile(_stylePath));*/
        
        _styleFile = this.SetStyle(id, register)

        if (id in _styleFile) {
        
            for (let i = 0; i < _styleFile[id].length; i++) {
                _render = this.StyleRender(id,_styleFile[id][i]);
                
                if(_render.index == "ntr"){
                
                    _values = _render.type[1].split(",").map((e) => { return eval(e) })
                    _object[_render.type[0]].apply(_object, _values);
               
                 }else if(_render.index == "ltr"){
                
                    _object[_render.type[0]] = eval(_render.type[1]);
                }
                
            }

        } else {
            return false;
        }

    }

    /**
     * Set styles & register new object id
     * @param {int} id
     * @param {bool} register
     */
    SetStyle(id, register = true) {
        let _stylePath = "appStyle.json"

        if (!app.FileExists(_stylePath)){ 
            app.CreateFile(_stylePath, "rw");
            app.WriteFile(_stylePath, "{}" );
        }
        
        let styles = JSON.parse(app.ReadFile(_stylePath, "utf-8"));

        if (!(id in styles) && register) {
            styles[id] = [];
            app.WriteFile(_stylePath, JSON.stringify(styles, null, 4));
        }
        
        return styles;
    }
   
}

//const view = new View()
    