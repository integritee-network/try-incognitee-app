// run in /scripts/ folder with node fetch-idenities.js

const { ApiPromise, WsProvider } = require("@polkadot/api");
const fs = require("fs");

async function main() {
  // Connect to the Polkadot network
  const wsProvider = new WsProvider("wss://sys.ibp.network/people-polkadot");
  const api = await ApiPromise.create({ provider: wsProvider });

  const outputFile = "../lib/polkadotPeopleIdentities.ts"; // Output TypeScript file

  console.log("Fetching accounts with registered identities...");

  // Fetch all accounts with registered identities
  const identities = await api.query.identity.identityOf.entries();

  // Prepare the lookup table (LUT)
  const lut = [];
  for (const [key, identity] of identities) {
    const address = key.args[0].toString(); // Extract account address
    try {
      const display = identity.unwrap()[0].info.display.asRaw.toHuman(); // Extract display name

      if (display) {
        lut.push({ username: display, address });
      }
    } catch (error) {
      console.log(`Error fetching identity for ${address}: ${error.message}`);
    }
  }

  // Format LUT as TypeScript
  const lutTs = `// this file is generated automatically by scripts/fetch-identities.js. do not edit\nexport const identities = [\n${lut
    .map(
      ({ username, address }) =>
        `  { username: "${username}", address: "${address}" },`,
    )
    .join("\n")}\n];\n`;

  // Write the LUT to a TypeScript file
  fs.writeFileSync(outputFile, lutTs);

  console.log(`LUT generated and saved to ${outputFile}`);

  // Disconnect from the API
  await api.disconnect();
}

main().catch(console.error);
