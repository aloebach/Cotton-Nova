
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("cotton.DocumentationCottonScript", (workspace) => {
    nova.openURL( "https://github.com/unbelievableflavour/Cotton/wiki/CottonScript" );  
});


nova.commands.register("cotton.DocumentationSDK", (workspace) => {
    nova.openURL( "https://sdk.play.date" );  
});


nova.commands.register("cotton.DocumentationWiki", (workspace) => {
    nova.openURL( "https://github.com/unbelievableflavour/Cotton/wiki" );  
});


nova.commands.register("cotton.openLevelEditor", (workspace) => {

    var options = {
        args: [nova.workspace.path.concat("/Source/levels/world.ldtk")],
    };
    
    var cmd = "/usr/bin/open";
    
    var process = new Process(cmd, options);
    
    process.onStdout(function(line) {
        console.log("opening level editor " + line);
    });
    
    process.start();
    
}); 

