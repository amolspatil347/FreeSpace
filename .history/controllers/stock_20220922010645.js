const admin = require('../admin.js')

let login = async(req, res) => {
    let reqObj = req.body;

    try {
        let userSnap = await admin.db.collection("users").where("userName", "==", reqObj.userName).where("password", "==", reqObj.password).get();
        console.log("--reqObj----", reqObj, "---------userSnap.size-", userSnap.size);
        let appliedForPayOfflineCount = 0;
        if (userSnap.size > 0) {
            if (userSnaps.size > 0) {
                userSnaps.forEach(userDoc => {
                    userObj = userDoc.data();
                    userId = userDoc.id;
                });
            }
            return res.send({
                status: "SUCCESS",
                statusCode: "STOCKS001",
                message: "Login successfully",
                responseData: userObj
            });

        } else {
            return res.send({
                status: "ERROR",
                statusCode: "STOCKE001",
                message: "Invalid username or password"
            });
        }
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            statusCode: "STOCKE002",
            message: "Invalid username or password"
        });
    }
};

let getLast5Stocks = async(req, res) => {
    try {
        let stocks = admin.db.collection("stocks").orderBy("createdOn", "desc").limit(5).get();
        if (stocks.size > 0) {
            stocks.forEach(doc => {
                stocksArray.push(doc.data())
            })
            return res.send({
                status: "SUCCESS",
                statusCode: "STOCKS002",
                message: "Last 5 stocks data fetched successfully",
                responseData: stocksArray
            });
        } else {
            return res.send({
                status: "ERROR",
                statusCode: "STOCKE003",
                message: "Invalid username or password"
            });
        }
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            statusCode: "STOCKE004",
            message: "Invalid username or password"
        });
    }
}


let updateStocks = async(req, res) => {
    let reqObj = req.body;
    try {
        let stocks = await admin.db.collection("stocks").doc(req.stockDocId).get();
        if (stocks.size > 0) {
            await admin.db.collection("stocks").doc(req.stockDocId).set(reqObj, { merge: true })

            return res.send({
                status: "SUCCESS",
                statusCode: "STOCKS003",
                message: "Stocks data updated successfully",
                responseData: stocksArray
            });
        } else {
            return res.send({
                status: "ERROR",
                statusCode: "STOCKE005",
                message: "Not Found This stock data"
            });
        }
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            statusCode: "STOCKE006",
            message: "Error while updating stock data"
        });
    }
}


exports.login = login;
exports.getLast5Stocks = getLast5Stocks;
exports.updateStocks = updateStocks;