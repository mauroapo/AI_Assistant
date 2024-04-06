import {exec} from 'child_process';


class RunBat
{
    static run(batFilePath)
    {
        // exec(batFilePath, (error, stdout, stderr) => {
        //     if (error) {
        //       console.error(`Error executing batch file: ${error}`);
        //       return;
        //     }
          
        //     console.log(`Batch file output: ${stdout}`);
        //     if (stderr) {
        //       console.error(`Error output from batch file: ${stderr}`);
        //     }
        //   });
        return new Promise((resolve, reject) => {
          exec(batFilePath, (error, stdout, stderr) => {
            if (error) {
              // console.error(`Error executing batch file: ${error}`);
              reject(error);
              return;
            }
    
            // console.log(`Batch file output: ${stdout}`);
            if (stderr) {
              // console.error(`Error output from batch file: ${stderr}`);
              reject(stderr);
              return;
            }
    
            resolve(true);
          });
        });
    }
}
export default RunBat;

