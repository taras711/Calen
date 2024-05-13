class Main extends App {
    constructor(){
        super();
        this.app = app;
    }
    onStart() {
        this.app.SetOrientation("Portrait")
        this.app.SetStatusBarColor("#29a5f2");
        this.main = ui.addLayout("main", "Linear", "Top, Center, 1, 1");

        this.apb = ui.addAppBar( this.main, "My App", "Top, Menu", 1);
        this.apb.setSize(1, 0.12);
        this.apb.cornerRadius = [0, 0, 50, 50, "px"]
        
    }
}