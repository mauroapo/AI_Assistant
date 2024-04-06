import PromptHandler from './PromptHandler.js';
import CreateBatch from "./CreateBat.js";
import RunBat from "./RunBat.js";
let promptHandler = new PromptHandler();
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function waitForInput() {
    rl.question('Enter something: ', (answer) => {
        promptHandler.processNewPrompt(answer).then(response => {
                console.log(response.message.content);
                if(response.message.content.startsWith("Desculpe")){
                    console.log(false);
                }
                else{
                    CreateBatch.createBatFile('bat.bat',response.message.content);
                    RunBat.run('bat.bat')
                    .then(result => {
                        CreateBatch.deleteBatFile('bat.bat');
                    })
                }

                
                waitForInput();
        });

    })
};

console.log('Waiting for input. Press Ctrl+C to exit.');
waitForInput();




   