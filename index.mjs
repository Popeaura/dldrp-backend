import Helia from 'helia';

async function main() {
  // Initialize Helia
  const helia = await create()

  // Add a file to IPFS
  const { cid } = await helia.add('Hello, IPFS with Helia!')
  console.log('File added with CID:', cid.toString())

  // Retrieve the file from IPFS
  const content = await helia.cat(cid)
  console.log('Content from IPFS:', content.toString())
}

main().catch(console.error)
