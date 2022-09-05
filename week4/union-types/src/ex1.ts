function concat(strUnion: string | string[] , flag: boolean | number):void {
    
    let result: string

    if(Array.isArray(strUnion)){
        //handle like an array
        result = strUnion.join(" ")
        
    }else if(typeof strUnion != 'string'){
        result = "error, input is not a string"
    }else{
        //handle like a string
        result = strUnion
    }

    if(flag){
        console.log(result);
    }

}


concat("Tomer", false);
concat("Tomer", 2);
concat(["Tomer", "Sagi"], 1);
concat(["Tomer", "Sagi"], 0);
concat(["Michael", "Jordan", "is", "the", "King"], true);