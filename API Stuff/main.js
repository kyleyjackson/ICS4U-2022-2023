async function send() {
    const ph = document.getElementById('ph').value;
    const msg = document.getElementById('msg').value;

    var urlencoded = new URLSearchParams();
    urlencoded.append("From", "+14097105246");
    urlencoded.append("To", "+1" + ph);
    urlencoded.append("Body", msg);

    const fetchy = await fetch("https://api.twilio.com/2010-04-01/Accounts/AC72e41e1d48a615f1657be4c58fd87fd6/Messages.json", {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic QUM3MmU0MWUxZDQ4YTYxNWYxNjU3YmU0YzU4ZmQ4N2ZkNjpmMjU0YzVmM2E0ZTY2OTczZTNhMzFkNDcwZDc0ZjA3NA=="
        },
        method: "POST",
        body: urlencoded
    });
}

