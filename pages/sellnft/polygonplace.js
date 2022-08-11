import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from "web3modal"
import { mumbaimarketaddress, mumbainftaddress } from '../../config';
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../../artifacts/contracts/NFTmarket.sol/NFTMarket.json';
import Image from 'next/image'

export default function polygonplace() {
    const [nfts, setNfts] = useState([]);
    const [loadingState, setLoadingState] = useState('not-loaded');

    useEffect(() => {
        loadNFTs();

    }, []);

    async function loadNFTs() {

        const polyprovider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/SyxJwad9MKR6ZqnQTU8NbFTm0xXptqrg");
        const tokenContract = new ethers.Contract(mumbainftaddress, NFT.abi, polyprovider);
        const marketContract = new ethers.Contract(mumbaimarketaddress, Market.abi, polyprovider);

        //return an array of unsold market items
        const data = await marketContract.fetchMarketItems();

        const items = await Promise.all(data.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatUnits(i.price.toString(), 18)
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description,
            }
            return item;
        }));

        setNfts(items);
        setLoadingState('loaded')
    }

    async function buyNFT(nft) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const polyprovider = new ethers.providers.Web3Provider(connection);

        //sign the transaction
        const signer = polyprovider.getSigner();
        const contract = new ethers.Contract(mumbaimarketaddress, Market.abi, signer);

        //set the price
        const price = ethers.utils.parseUnits(nft.price.toString(), 18);

        //make the sale
        const transaction = await contract.createMarketSale(mumbainftaddress, nft.tokenId, {
            value: price
        });
        await transaction.wait();

        loadNFTs();
    }

    if (loadingState === 'loaded' && !nfts.length) return (
        <h1 className="px-20 py-10 text-3xl">No items in market place</h1>
    )

    return (
        <div className="flex justify-center">
            <div className="px-4" style={{ maxWidth: '1600px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    {
                        nfts.map((nft, i) => (
                            <div key={i} className="border shadow rounded-xl overflow-hidden">

                                <Image
                                    src={nft.image}
                                    alt="Picture of the author"
                                    width={'300%'}
                                    height={'300%'}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                                />
                                <div className="p-4">
                                    <p style={{ height: '64px' }} className="text-2xl font-semibold">
                                        {nft.name}
                                    </p>
                                    <div style={{ height: '70px', overflow: 'hidden' }}>
                                        <p className="text-gray-400">{nft.description}</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-black">
                                    <p className="text-2xl mb-4 font-bold text-white">
                                        {nft.price} Matic
                                    </p>
                                    <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                                        onClick={() => buyNFT(nft)}>Buy NFT</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
