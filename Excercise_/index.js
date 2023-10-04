import helloWorld from './helloWorld.js';
import ambilDataUser from './ambilDataUser.js';
import { ambilDataUserAsync } from './ambilDataUserAsync.js';
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
messages();

async function main() {
  console.log("Menggunakan promise:");
  await ambilDataUser();

  console.log("\nMenggunakan async/await:");
  await ambilDataUserAsync();
}
main();
