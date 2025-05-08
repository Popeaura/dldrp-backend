import { create } from 'ipfs-core';

async function main() {
  // Initialize IPFS
  const ipfs = await create();

  // Add a file to IPFS
  const { cid } = await ipfs.add('Hello, IPFS with js-ipfs!');
  console.log('File added with CID:', cid.toString());

  // Retrieve the file from IPFS
  let content = '';
  for await (const chunk of ipfs.cat(cid)) {
    content += chunk.toString();
  }

  console.log('Content from IPFS:', content);
}

main().catch(console.error);
