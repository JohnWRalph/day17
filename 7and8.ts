// 7) Create a type that represents an NFT, with properties like imageURL, name, 
// currentOwnerAddress, openSeaFloorPrice, and description.

// 8) Create a function that accepts an array of NFTs and returns the one with the 
// lowest floor price. Not the floor price itself, but it returns an NFT. getCheapestNft

type NFT = {
    imageURL: string;
    name: string;
    currentOwnerAddress: string;
    openSeaFloorPrice: number;
    description: string;
}

function getCheapestNft(array: NFT[]) {
    let minValue = array.reduce((prev, current) => {
        return (prev.openSeaFloorPrice < current.openSeaFloorPrice) ? prev : current
    });
    return minValue;
}


const NFT1: NFT = {
    imageURL: "https:1.com",
    name: "NFT1",
    currentOwnerAddress: "0x123456",
    openSeaFloorPrice: 0.1,
    description: "description1"
}


const NFT2: NFT = {
    imageURL: "https:2.com",
    name: "NFT2",
    currentOwnerAddress: "0x2123456",
    openSeaFloorPrice: 0.05,
    description: "description2"
}


const NFT3: NFT = {
    imageURL: "https:3.com",
    name: "NFT3",
    currentOwnerAddress: "0x3123456",
    openSeaFloorPrice: 0.15,
    description: "description3"
}


const NFT4: NFT = {
    imageURL: "https:4.com",
    name: "NFT4",
    currentOwnerAddress: "0x4123456",
    openSeaFloorPrice: 0.5,
    description: "description4"
}

const arrayNFT = [NFT1, NFT2, NFT3, NFT4];
console.log(arrayNFT);

console.log("Cheapest NFT: ", getCheapestNft(arrayNFT));
