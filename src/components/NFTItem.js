
function NFTItem({nft}) {
    const openModal = () => {
        //setWalletAddress(undefined)
        var modal = document.querySelector(".modal");
        var container = modal.querySelector(".container");
        modal.classList.remove("hidden");
        
        modal.addEventListener("click", function (e) {
            if (e.target !== modal && e.target !== container) return;     
            modal.classList.add("hidden");
        });
    };

    return(
        <>
            <div className="card" style={{'width': '30%', 'float':'left', 'height': '300px', 'margin':'5px'}}>
                <img className="card-img-top" src={nft.media[0]?.gateway} alt={nft.title} style={{'height':'250px'}} onClick={openModal}></img>   
                <div className="card-body">
                    <h5 className="card-title"><a href={`https://testnets.opensea.io/assets/goerli/${nft.contract.address}/${nft.tokenId}`} target='_blank'>{nft.title}</a></h5>                
                </div>
            </div>
            <div className="modal hidden">
                <div className="container">
                    <div className="body">
                        <p><a href=''>{nft.title}</a></p>
                        <p>{nft.tokenId}</p>
                        <p>{nft.description}</p> 
                    </div>
                </div>
            </div>
        </>        
    );
}

export default NFTItem;