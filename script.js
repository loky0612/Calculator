function add(){
    var a=0,b=0;
    a = f.box.value;
    b = a.charAt(a.length-1);
    if (b=='+' || b=='-' || b=='*' || b=='/'){
        f.box.value = a.substring(0,a.length-1);
        f.box.value+='+';
    }
    else{
        f.box.value+='+';
    }
}

function sub(){
    var a=0,b=0;
    a = f.box.value;
    b = a.charAt(a.length-1);
    if (b=='+' || b=='-' || b=='*' || b=='/'){
        f.box.value = a.substring(0,a.length-1);
        f.box.value+='-';
    }
    else{
        f.box.value+='-';
    }
}

function mul(){
    var a=0,b=0;
    a = f.box.value;
    b = a.charAt(a.length-1);
    if (b=='+' || b=='-' || b=='*' || b=='/'){
        f.box.value = a.substring(0,a.length-1);
        f.box.value+='*';
    }
    else{
        f.box.value+='*';
    }
}

function divi(){
    var a=0,b=0;
    a = f.box.value;
    b = a.charAt(a.length-1);
    if (b=='+' || b=='-' || b=='*' || b=='/'){
        f.box.value = a.substring(0,a.length-1);
        f.box.value+='/';
    }
    else{
        f.box.value+='/';
    }
}

