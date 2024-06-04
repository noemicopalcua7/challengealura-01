var finalText = document.querySelector(".output-message");
    
    function encrypt(){
        var area = extractText();
        finalText.textContent = encryptText(area);
        hide();
    }
    function decrypt(){
        var area = extractMessage();
        hide();
        var secondArea = extractText();
        if(area && secondArea){
            finalText.textContent = decryptText(area);
        }else{
            finalText.textContent = decryptText(secondArea);
        }  
    }

    function extractText(){
        var areas = document.querySelector(".input-message");
        return area.value;
    }
    
    function extractMessage(){
        var area = document.querySelector(".output-message");
        return area.value; 
    }

    function encryptText(message){
        var text = message;
        var finalMessage = "";

        for( var x = 0; x < text.length; x++){
                if (text [x] == "a"){
                   finalMessage = finalMessage + "ai"
                }
                else if (text [x] == "e"){
                    finalMessage = finalMessage + "enter"
                }
                else if (text [x] == "i"){
                    finalMessage = finalMessage + "imes"
                }
                else if (text [x] == "o"){
                    finalMessage = finalMessage + "ober"
                }
                else if (text [x] == "u"){
                    finalMessage = finalMessage + "ufat"
                }
                else {
                    finalMessage = finalMessage + text[x];
                }  
            }
            return finalMessage;

        }

    function hide(){  
        var clearText = "";
        var textOut = document.getElementById("input").value;
        textOut;
            if (clearText !== textOut) {
                document.getElementById("vector").style.display = "none";
            } else{ document.getElementById("vector").style.display = "";
        }
    }
    function decryptText(message){
        var text = message;
        var finalMessage = "";

        for( var x = 0; x < text.length; x++){
                if (text [x] == "a"){
                    finalMessage = finalMessage + "a"
                    x = x + 1;
                }
                else if (text [x] == "e"){
                    finalMessage = finalMessage + "e"
                    x = x + 4;
                }
                else if (text [x] == "i"){
                    finalMessage = finalMessage + "i"
                    x = x +3;
                }
                else if (text [x] == "o"){
                    finalMessage = finalMessage + "o"
                    x = x +3;
                }
                else if (text [x] == "u"){
                    finalMessage = finalMessage + "u"
                    x = x + 3;
                }
                else {
                    finalMessage = finalMessage + text[x];

                }  
            }
            return finalMessage;
        }

    function keyReplace(letter){
        let text = letter.value
        let keyReplace = new RegExp("[^a-z,-. - -ñ\n]+")
        if(keyReplace.test(text)){
            text = text.substr(0,text.length-1)
            alert("¡Carácter no válido!")
            alert("Solo letras minúsculas y sin acentos.")
        } else{
        }
        letter.value = text    
    }
    function copy(){
        var copyArea = document.getElementById("output-msg");
        copyArea.select();
        document.execCommand("copy");
    } 
    
