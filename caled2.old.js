//try{
    app.Script("View.class.js")
    //alert(View)
    
    
    
    class Main extends App{
    
        constructor(){
            super();
            this.app = app;
            //alert(View)
            this.view = new View();
        }
        
        onStart() {
            const view = this.view;
            
            this.apb = ui.addAppBar( view.main, "My App", "Top", 1);
            view.Id("apb", this.apb);
            let actions = {
                 settings: ui.addButton(view.object.apb.layout, "settings", "icon"),
                 save: ui.addButton(view.object.apb.layout, "save", "icon"),
                 play: ui.addButton(view.object.apb.layout, "play_arrow", "icon")
            }
            //actions.settings.setOnTouch(this.onAction)
           // view.object.apb.text = "main"
           this.mainScreen = ui.addLayout( this.view.main, "Linear", "Top, ScrollY",1,0.95);
           view.Id("mainScr", this.mainScreen)
          // let ofile = app.OpenUrl( "sdcard/Android/data/com.smartphoneremote.androidscriptfree/Files/Droidscript/Apks/" );
            let fileList = app.ListFolder( "/sdcard/DroidScript/Apks/", ".apk");
           
           this.titleText = ui.addText(this.mainScreen, "", "Left",0.8);
           //this.scroll = app.CreateScroller( 1, 1, "Top" );
           
           
           // Add a callback handler to show the drawer onMenu event
           this.apb.setOnMenu( this.showDrawer )
    
           // Add a drawer layout
           this.drawLay = ui.addLayout(null, "Linear", "Top")
    
           // Add a drawer to the app and pass the drawer layout
           this.drawer = ui.addDrawer(this.drawLay, "left")
    
           // Add a list to the drawer layout. See `List` component for customization.
           let lst = [
               ["folder", "Folders"],
               ["music_note", "Audios"],
               ["photo", "Photos"]
           ]
           this.lstMenu = ui.addList(this.drawLay, lst, "Icon", 1 )
           this.lstMenu.label = "Main navigation"
    
           
            // initialize the content of the card
            
    
            // Create a card by passing the content object
            //this.crd = ui.addCard(view.main, content, "primary", 0.8);
            this.getLists(fileList)
    
            // Add a callback handler when the action is click
            
        }
    
         onAction(text, i){
            ui.showPopup( text );
         }
    
         showDrawer() {
            this.drawer.show()
        }
         
         getLists( files ){
              var content = {
                //media: "Img/icon.png",
                bodyTitle: "Card",
                bodyText: "They are surfaces in material design that display content and actions on a single topic. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.",
                actions: ["file_download", "share"],
                actionType: "icon"
            }
              //let card = this.crd;
              this.titleText.text = "Files count: " + files.length;
              var _dload = app.CreateDownloader();
                      _dload.SetOnComplete( function(){
                      alert("Complete");
              });
              for(let i = 0; i < files.length; i++){
                   let crd = ui.addCard(this.mainScreen, content, "primary", 0.8);
                   crd.margins = [0, 0.05]
                   crd.bodyTitle = files[i]
                   crd.setOnAction(function(text){
                        if(text == "file_download"){
                        //alert(files[i])
                        
                            let src =  "/sdcard/DroidScript/Apks/"+files[i]
                            let dst = "/sdcard/Apks/download_"+files[i];
                            alert(src + " : " + dst);
                           _dload.Download(src, dst);
                           app.CopyFile( src, dst )
                        }
                   })
                   //app.CopyFile("/sdcard/DroidScript/Apks/"+files[i], "/sdcard/DroidScript/Apks/file"+i+".apk")
              }
         }
    }
    
    
    
    
    //}catch(e){ alert(e)}