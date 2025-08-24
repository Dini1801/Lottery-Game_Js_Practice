const gifts = [
  "₹100 Cash","Toy Car","Chocolate Box","₹500 Cash","Smartphone Cover","Book","Headphones",
  "₹50 Cash","Gift Voucher","Watch","Teddy Bear","Bluetooth Speaker","Movie Ticket","₹200 Cash",
  "Puzzle Game","Perfume","Sunglasses","₹1000 Cash","Board Game","Fitness Band","Digital Clock",
  "Lamp","Shopping Voucher","Laptop Bag","Wireless Mouse","Travel Mug","Notebook Set","Gaming Mousepad",
  "₹250 Cash","Keychain","Water Bottle","Portable Charger","Desk Organizer","Cooking Set","Action Figure",
  "₹300 Cash","Travel Pillow","Mini Backpack","Personalized Mug","Gaming Controller","Camera Strap","Toy Robot",
  "₹750 Cash","Sports Equipment","Pen Set","Bluetooth Earbuds","Digital Photo Frame","Wallet","Backpack","Gift Hamper"
];

const para = document.getElementById("pp");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  let indexx = Math.floor(Math.random() * gifts.length);
  let drawnNumber = indexx + 1;
  para.textContent = `🎊 Congrats! You got ticket #${drawnNumber}, and won ${gifts[indexx]} 🎁`;
});
