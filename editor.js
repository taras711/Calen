"use strict"
class Editor extends View {
     constructor(){
          super()
     }
     
     CodeWorkSpace(){
     
     }
     
     SidebarDirectory(){
          let _sidebar = this.object.drawer,
               _sidebar_direct = this.object.drawLay,
               _sidebar_menu = this.object.drawer_menu,
               durectBreac,
               actionPanel,
               actionBack,
               durectBreacText,
               search, action_search;
          
          actionPanel = ui.addLayout(_sidebar_direct, "Linear", "Horizontal, Right, VCenter", 1);
          durectBreac = ui.addLayout(_sidebar_direct, "Linear", "Horizontal, Left, VCenter", 1);
           search = ui.addTextField(actionPanel, "", "Outlined,Secondary",0.65);
           search.hide()
           //search.label = "Search";
           //search.setStartAdornment("search","Icon");
           search.setEndAdornment("close", "Icon");
           search.setEndAdornmentOnTouch(toggleSearch)
           search.height = 0.55;
          
          action_search = ui.addButton(actionPanel, "search", "Primary,Icon");
          action_search.setOnTouch(toggleSearch)
          ui.addButton(actionPanel, "insert_drive_file", "Primary,Icon")
          ui.addButton(actionPanel, "folder_open", "Primary,Icon")
          
          durectBreac.padding = [0.03];
         // _sidebar_menu.addItem(durectBreac)
          actionBack = ui.addButton(durectBreac, "chevron_left", "Primary,Icon")
          //actionBack.setBadge( 5 )
          durectBreacText = ui.addText(durectBreac, "", "Singleline, Primary, overline", 0.8);
          durectBreacText.ellipsize = "End"
          //durectBreacText.underline = true
          ui.addDivider( _sidebar_direct, 1 );
          _sidebar_direct.setMenu();
          
          function addList( list = [] ){
              if(list.length > 0) _sidebar_menu.setList( list );
              else return false;
          }
          
          function toggleSearch(){
               //search.animate = "slideInDown";
               if(search.isVisible == false){
                     search.show();
                     action_search.hide()
               }else{ 
                    search.hide(); 
                    action_search.show()
               }
          }
          
          function directRend( direct = [] ){
              let output = "",
                   count = direct.length,
                   addSlash;
                   
                   if(count == 0){ actionBack.hide(); return false }else{ actionBack.show()};
                   if(count > 2) output += "... ";
                   addSlash = direct
                   output += addSlash.slice(-2).map((item) => { if(item !== direct[0] ) return " / " + item; else return item });
                   return output.replace(",","");
          }
          
          function open(){ _sidebar ? _sidebar.show() : null }
          
          function close(){ _sidebar ? _sidebar.hide() : null }
          
          return {
               sidebar: _sidebar,
               open: open,
               close: close,
               panel: {
                    menu: _sidebar_menu,
                    direct_controll: {
                        view: false,
                        rend: directRend || function(){},
                        panel: durectBreac,
                        title: durectBreacText,
                        handler: actionBack
                    }
               },
               directory: {
                    panel: _sidebar_direct,
                    add_list: addList
               }
          }
     }
     
     ToolsPanel(){
     
     }
     
     Action(){
     
     }
     
     setPath( url, filter = null, limit = null ) {
           let load =  ui.showProgressDialog("Loading folders","NoCancel");
           let list_path = app.ListFolder( url, filter, limit );
           let set_path = [];
           let list_path_count = list_path.length;
           
           if(list_path_count == 0) return [];
          
           for(let i = 0; i < list_path_count; i++){
                  load.text = "Loading "+list_path[i];
                 if(app.IsFolder(url+list_path[i] )){
                      
                      set_path.push(["folder", list_path[i], "", "more_vert"])
                     
                 }else{
                      set_path.push(["description", list_path[i], "", "more_vert"])
                 }
           }
           load.hide()
           return set_path;
     }
}