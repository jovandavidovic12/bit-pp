// 2.
// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.

// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.

// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.

// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).

// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

// f) Create a TV object and test it!



class Tv {
    constructor(brand, channel = 1, volume = 50){
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    status(){
        return this.brand + ' at ' + 'channel ' + this.channel + ', volume ' + this.volume;
    }

    increaseVolume(amount){
        if(this.volume > 1 && this.volume <= 100){
            this.volume += amount;
        }
       
        return this.volume;
    }

    decreaseVolume(amount){
        if(this.volume > 1 && this.volume <= 100){
            this.volume -= amount;
        }
        if(this.volume < 0){
            this.volume = 0;
        }
        return this.volume;
    }

    changeChannel(newChannel){
      if(newChannel > 1 && newChannel < 50){
        this.channel = newChannel;
      }
      if(this.channel > 50){
        this.channel = this.channel;
      }
}

reset(){
    this.channel = 1;
    this.volume = 50;
    return this;
}
}



var tv1 = new Tv('Samsung', 5, 20);
tv1.increaseVolume(20);
tv1.decreaseVolume(111)

tv1.changeChannel(55)
tv1.reset();
console.log(tv1.status())

