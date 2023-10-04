import helloWorld from "./helloWorld.js";
import ambilDataUser from "./ambilDataUser";
import { ambilDataUserAsync } from "./ambilDataUserAsync";

ambilDataUserAsync();
ambilDataUser();

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
messages();

