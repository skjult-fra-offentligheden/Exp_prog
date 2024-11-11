function modtager(topic, modtagetBesked) {
    let modtagerBuffer = JSON.parse(modtagetBesked);
    let afsenderen = modtagerBuffer.from;
    if (afsenderen != afsenderID)
	{
	    let value = modtagerBuffer.val;
      let modText = modtagerBuffer.text;
      console.log(value); 
      console.log(modtagerBuffer);
	    // do something with the received value
	}
    if (afsenderen == "Sebberx") { 
     
     text("SebberX", 50,50); 
     rect (100,100,100,200);
}
	
   
}
