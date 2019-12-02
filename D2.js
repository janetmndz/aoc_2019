const inputCode = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,9,23,1,23,5,27,2,6,27,31,1,31,5,35,1,35,5,39,2,39,6,43,2,43,10,47,1,47,6,51,1,51,6,55,2,55,6,59,1,10,59,63,1,5,63,67,2,10,67,71,1,6,71,75,1,5,75,79,1,10,79,83,2,83,10,87,1,87,9,91,1,91,10,95,2,6,95,99,1,5,99,103,1,103,13,107,1,107,10,111,2,9,111,115,1,115,6,119,2,13,119,123,1,123,6,127,1,5,127,131,2,6,131,135,2,6,135,139,1,139,5,143,1,143,10,147,1,147,2,151,1,151,13,0,99,2,0,14,0]

const intcore = (init, noun, verb) => {
    // This creates a copy of the inital array
    // Doesn't mutate original
    input = init.slice()
    // We only change the values of out copy to reuse the original array
    input[1] = noun;
    input[2] = verb;
    let position = 0;
    while(input[position] !== 99){
        if(input[position] === 1){
            //Add the next two values
            let val = input[input[position+1]] + input[input[position+2]]
            // Set the new value
            input[input[position+3]] = val
            // move position
            position += 4;
        }
        if(input[position] === 2){
            //Add the next two values
            let val = input[input[position+1]] * input[input[position+2]]
            // Set the new value
            input[input[position+3]] = val
            // move position
            position += 4;
        }
    }
    return input[0];
} 
// intcore(inputCode, 12, 2)
// => 4576384

const findOutput = (out) => {
    for (let noun = 1; noun < 100; noun++) {
        for (let verb = 1; verb < 100; verb++) {
            const output = intcore(inputCode, noun, verb);
            if (output === out) {
                return (100 * noun ) + verb;
            }
        }
    }
} 
// findOutput(19690720)
// => 5398
