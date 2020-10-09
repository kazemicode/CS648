var pattern = "";
var HEIGHT = 7;
for(var rows = 0; rows < HEIGHT; rows++){
    for(var columns = rows-1; columns < rows; columns++){
        pattern = pattern + "#";
    }
    console.log(pattern);
}