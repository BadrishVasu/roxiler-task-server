const {execSync} = require("child_process")
const DB_NAME = 'roxiler'

try{
    execSync(`mongoimport --db ${DB_NAME} --collection transactions --drop --file "${process.cwd()}/data/seed/trans.json" --jsonArray`);
    console.log(`Imported documents into database ${DB_NAME}`)
} catch(err){
    console.log(`Could not import documents into database ${DB_NAME}`)
    console.error(err)
}

// npm run seed:local 
// to seed the database with provided json data