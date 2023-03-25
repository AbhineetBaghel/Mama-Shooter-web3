let ldk;
let connection;

async function connectToMetamask() {
    try {
        await window.ethereum.enable();
        const provider = window.ethereum;
        ldk = new LibrtyDevKit("LDKhack", NETWORK.POLYGON, false, {
            rpc: "https://polygon-rpc.com"
        });
        connection = new ldk.wallet.provider(provider);
        await connection.connect();
        console.log(await connection.getChainId());
        document.getElementById("status").textContent = "Connected";
        document.getElementById("address").textContent = `Wallet address: ${connection.accounts[0]}`;
    } catch (error) {
        console.error(error);
    }
}

window.onload = function() {
    ldk = new LibrtyDevKit("LDKhack", NETWORK.POLYGON, false, {
        rpc: "https://polygon-rpc.com"
    });
    connectToMetamask();
}