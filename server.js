
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const catName = process.env.CAT_NAME;

  while(true) {
    console.log(`My favorite cat is ${catName}`)
    await sleep(5000);
  }
}

main();
