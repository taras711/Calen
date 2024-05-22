class View {

    constructor() {
       this.object = {}
    }

    Id( object ) {
        let id = Object.keys({object})[0];
        this.object[id] = object;
    }

    /**
     * Rendering style file AppStyle.json
     * @param {object} obj
     */
    StyleRender(object) {
        return object.split("@");
    }

    /**
     * Get styles
     * @param {int} id
     */
    Styles(id) {

        let _stylePath = "appStyle.json",
            _styleFile,
            _styleRender;

        if (!app.FileExists(_stylePath)) app.CreateFile(_stylePath, "rw");
        console.log("appStyle.json")
        _styleFile = JSON.parse(app.ReadFile(_stylePath));

        if (id in _styleFile) {
            for (let i = 0; i < _styleFile[id].length; i++) {
                _styleRender = this.StyleRender(_styleFile[id][i]);
                this.object[id][_styleRender[0]].apply(null, _styleRender[1].split(','));
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

        if (!app.FileExists(_stylePath)) app.CreateFile(_stylePath, "rw");
        console.log("appStyle.json")
        let styles = JSON.parse(app.ReadFile(_stylePath, "utf-8"));

        if (!(id in styles) && register) {
            styles[id] = [];
            app.WriteFile(_stylePath, JSON.stringify(styles, null, 4));
        }
    }
}