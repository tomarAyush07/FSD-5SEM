const fs=require('fs').promises;

async function readFileExample(){
  try{
    await fs.writeFile('myfile.txt','Hello, this is a sample text file.','utf8');
    const data={name:'Ayush',age:21,city:'Kanpur'};
    await fs.writeFile('data.json',JSON.stringify(data,null,2),'utf8');
    console.log('Files created successfully.');
  }catch(err){
    console.error('Error writing files:',err);
  }
}

readFileExample();