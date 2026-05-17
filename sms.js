export default function handler(req, res) {

    console.log("=================================");
    console.log("SMS WEBHOOK RECEIVED");
    console.log("METHOD:", req.method);
    console.log("BODY:", req.body);
    console.log("=================================");

    res.status(200).json({
        success: true,
        message: "Webhook received successfully"
    });
}
