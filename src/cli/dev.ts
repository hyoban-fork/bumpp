import { main } from ".";

main(process.argv.slice(2))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });