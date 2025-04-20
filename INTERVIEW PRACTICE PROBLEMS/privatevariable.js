// Implement a private variable using closures //

function createCounter() {
    // Private Variable
    let count = 0;
    // Inner Function ( closure )
    function Increment(){
        count++;
        console.log("Count: " + count);
    }
    return{
        incrementCounter: function(){
            Increment();
        },
        getCount: function(){
            return count;
        }   
    }
}

const counter = createCounter();

counter.incrementCounter();
counter.incrementCounter();

console.log(counter.getCount()); // 2
