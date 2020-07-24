// code glowup! corey "hurricane" weathers teaches us about strings with c++ style javascript
// ode to code: haiku

const x = 'Hello World';
const y = ['H','e','l','l',0];

// THE OLD WAY (THANKS C++)
    // start with the old way
    // c++ is quite wordy...
    // and not the answer

var z = '';
// Here is our for loop
for(var i =0; i< 6;i++)  
{
    // Here is our if condition
    if (y[i]!= 0)
    {
        // now write to console
        z = y[i];
        console.log('Iterator: ' + i);
        console.log('Letter:' + z);
    }
}

// THE NEW WAY
//  end with the new way
//  javascript has better ways
//  only takes one line

console.log(y);
console.table(y);