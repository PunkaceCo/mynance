const Account = require("./account")
const apikey = require("../../../data/apikey.json")

const account = new Account()


async function test_accountInfo() {
    let data = await account.accountInfo(apikey[0])
    console.log("\n \n Account info success : \n \n", JSON.parse(data))
}

// async function test_snapshot() {
//     let data = await account.snapshot(apikey[0])
//     console.log("\n \n Snapshot success: \n \n", JSON.parse(data))
// }


test_accountInfo()
// test_snapshot()

