// let message = "Hello World!";

// document.getElementById("add").innerHTML=message;


var app = new Vue({
    el: "#app", //el is id of the html tag
    data:{
        message:"Hello World!",
        // count : 0,
        visitor_name: "",
        visitors:[]
    },
    methods : {
        sayHi: function(){ // When someone clicks on say hi it triggers the function
            this.message = "Hiii..",
            // this.count = this.count+1
            this.visitors.push(this.visitor_name); // This will add current visitor_name in visitors array
            this.visitor_name = "";
        },
    },
    computed : {
        count : function(){
            return this.visitors.length; // This will return length of the visitors array
        }
    }
})