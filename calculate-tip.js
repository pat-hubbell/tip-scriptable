const PERCENTAGES = {
  0: 0.12,
  1: 0.15,
  2: 0.18,
  3: 0.2,
};

let percentAlert = new Alert();
percentAlert.title = "Calculate Tip";
percentAlert.addAction("12%");
percentAlert.addAction("15%");
percentAlert.addAction("18%");
percentAlert.addAction("20%");
percentAlert.addAction("Cancel");

let percentIndex = await percentAlert.present();

if (percentIndex !== 4) {
  let amountAlert = new Alert();
  amountAlert.title = "Enter Amount";
  amountAlert.addTextField("17.80");
  amountAlert.addAction("Submit");
  amountAlert.addAction("Cancel");

  let amountIndex = await amountAlert.present();

  if (amountIndex !== 1) {
    const amount = amountAlert.textFieldValue(amountIndex);

    let result = amount * PERCENTAGES[percentIndex];

    let resultAlert = new Alert();
    resultAlert.title = "Tip Amount: $" + result.toFixed(2);
    resultAlert.addAction("Close");
    await resultAlert.present();
  }
}
