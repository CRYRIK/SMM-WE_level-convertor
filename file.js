function readFile(input) 
{ 
    let file = input.files[0]; 
    let reader = new FileReader(); 
    reader.readAsText(file); 
    reader.onload = function()

    { 
        text=reader.result
        console.log(text)
        var len = text.length-41
        console.log(text.slice(0,len))
        text=window.atob(text.slice(0,len))
        console.log(text)
        //json=JSON.parse(text)
        //console.log(json["MAIN"]["SUELO"][0]["y_pos"])    
        
        let stroka = text
        let blob = new Blob([stroka], {type: 'text/plain'}) 
        let link = document.createElement('a') 
        //console.log(link)
        link.setAttribute('href', URL.createObjectURL(blob)) 
        //console.log(URL.createObjectURL(blob))
        link.setAttribute('download', 'мой файл') 
 
        link.click()
        
    }; 
    reader.onerror = function() 
    { 
        console.log(reader.error); 
    }; 
}
