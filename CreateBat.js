import fs from 'fs';
// Create a .bat file
class CreateBat{
     static createBatFile(filePath, content) {
        fs.writeFile(filePath, content, (err) => {
          if (err) {
            // console.error('Error creating .bat file:', err);
            return;
          }
        //   console.log('.bat file created successfully.');
        });
      };
      
      // Delete a .bat file
      static deleteBatFile(filePath)  {
        fs.unlink(filePath, (err) => {
          if (err) {
            // console.error('Error deleting .bat file:', err);
            return;
          }
        //   console.log('.bat file deleted successfully.');
        });
      };
      
}
export default CreateBat;
