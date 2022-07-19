
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


nova.commands.register("cotton.compile", (workspace) => {

    // Compiles pdx from game files in project workspace
    //TO-DO: check if there is a /Source folder, otherwise check in root directory
    var options = {
        args: [nova.workspace.path.concat("/Source"), nova.workspace.path.concat("/Game_file.pdx")],                
        shell: true
    };
    
    // command: run playdate compiler
    var cmd = "pdc";
    
    //var process = new Process("/usr/bin/env", options);
    var process = new Process(cmd, options);
    
    // for debugging
    console.log("Hello world");
    console.log(process.command);
    console.log(process.cwd);
    
    process.onStdout(function(line) {
        console.log("attempting to generate pdx file...");
        console.log("compiling " + line);
    });
    
    process.start();
    
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










nova.commands.register("cotton.test", (workspace) => {
    
    var options = {
        "placeholder": "https://foobar.com",
        "prompt": "Open"
    };
    nova.workspace.showInputPanel("Enter the URL to open:", options, function(result) {
        if (result) {
            nova.openURL(result, function(success) {
                
            });
        }
    });
});


nova.commands.register("cotton.test2", (workspace) => {
        
    // Launches the Python executable to determine its current version
    var options = {
        //args: ["./Source/levels/world.ldtk"],
        //shell: true,
        //cwd: "./Source/levels/",
        args: ["open", "./Source/levels/world.ldtk"]
    };
    
    var process = new Process("/usr/bin/env", options);
    //var process = new Process("/usr/bin/env", options);
    //var process = new Process("open", options);
    
    process.onStdout(function(line) {
        console.log("Running " + line);
    });
    
    process.start();
        
}); 




nova.commands.register("cotton.test3", (workspace) => {
    var options = {
        "placeholder": "/path/to/tool",
        "prompt": "Run"
    };
    nova.workspace.showInputPanel("Enter the path to the external tool:", options, function(result) {
        if (result) {
            var options = {
                // "args": [],
                // "env": {},
                // "stdin": <any buffer or string>
            };
            
            var process = new Process(result, options);
            var lines = [];
            
            process.onStdout(function(data) {
                if (data) {
                    lines.push(data);
                }
            });
            
            process.onDidExit(function(status) {
                var string = "External Tool Exited with Stdout:\n" + lines.join("");
                nova.workspace.showInformativeMessage(string);
            });
            
            process.start();
        }
    });
});

