export default (name, block) => {
    switch (name.toLowerCase()) {
        case "bellcoin":
            return "https://explorer.bellcoin.web4u.jp/block/" + block
        case "koto":
            return "https://insight.kotocoin.info/block/" + blcok
        default:
            return null
    }
}