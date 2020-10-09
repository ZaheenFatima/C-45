class Entry{
    constructor(){
        this.input = createInput("Country Name");

    }

  display(){
    this.title.html("Pollution Detector");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    

  }
}