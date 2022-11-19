import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/languages.json', 'utf8');
  const json = JSON.parse(fileContents)
  //Return the content of the data file in json format
  res.json(json);
}
