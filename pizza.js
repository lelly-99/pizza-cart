// function pizzaCart() {
//     return {
//         price: 0,
//         count: 0,
//         size: [],
//         checkoutMessage: "",
//         errorMessage: "",
//         cartMEssage: "",
//         reset() {
//             if (this.price >= 39.00) {
//                 this.cartMessage = "You have successfully cleared your cart"
//                 this.count = 0;
//                 this.price = 0;
//                 this.size = [];
//                 setTimeout(() => {
//                     this.checkoutMessage = ""
//                 }, 2000);
//             } else {
//                 this.cartMessage = "Cart is empty"
//                 setTimeout(() => {
//                     this.cartMessage = ""
//                 }, 2000);
//             }
    
//             },
//             addSmall() {
//                 this.count++;
//                 this.price += 39.00;
//                 this.size.push('small');
//             },
//             removeSmall() {
//                 if (this.count > 0 && this.size.includes('small')) {
//                     this.price -= 39.00;
//                     this.count--;
//                     this.size.splice(this.size.indexOf('small'), 1);
//                 }
//             },
//             addMedium() {
//                 this.count++;
//                 this.price += 89.00;
//                 this.size.push('medium');
//             },
//             removeMedium() {
//                 if (this.count > 0 && this.size.includes('medium')) {
//                     this.price -= 89.00;
//                     this.count--;
//                     this.size.splice(this.size.indexOf('medium'), 1);
//                 }
//             },
//             addLarge() {
//                 this.count++;
//                 this.price += 129.00;
//                 this.size.push('large');
//             },
//             removeLarge() {
//                 if (this.count > 0 && this.size.includes('large')) {
//                     this.price -= 129.00;
//                     this.count--;
//                     this.size.splice(this.size.indexOf('large'), 1);
//                 }
//             },
//             checkout() {
//                 if (this.price >= 39.00) {
//                     this.checkoutMessage = "Successfully paid..."
//                     setTimeout(() => {
//                         this.checkoutMessage = ""
//                     }, 2000);
//                 } else {
//                     this.errorMessage = "Please select an item"
//                     setTimeout(() => {
//                         this.errorMessage = ""
//                     }, 2000);
//                 }
//             }
//         };
//     }
function pizzaCart() {
    return {
      price: 0,
      count: 0,
      size: [],
      checkoutMessage: "",
      errorMessage: "",
      cartMessage: "",
      reset() {
        if (this.price >= 39.00) {
          this.cartMessage = "You have successfully cleared your cart";
          this.count = 0;
          this.price = 0;
          this.size = [];
          setTimeout(() => {
            this.cartMessage = "";
          }, 2000);
        } else {
          this.cartMessage = "Cart is empty";
          setTimeout(() => {
            this.cartMessage = "";
          }, 2000);
        }
      },
      addSmall() {
        this.count++;
        this.price += 39.00;
        this.size.push('small');
      },
      removeSmall() {
        if (this.count > 0 && this.size.includes('small')) {
          this.price -= 39.00;
          this.count--;
          this.size.splice(this.size.indexOf('small'), 1);
        }
      },
      addMedium() {
        this.count++;
        this.price += 89.00;
        this.size.push('medium');
      },
      removeMedium() {
        if (this.count > 0 && this.size.includes('medium')) {
          this.price -= 89.00;
          this.count--;
          this.size.splice(this.size.indexOf('medium'), 1);
        }
      },
      addLarge() {
        this.count++;
        this.price += 129.00;
        this.size.push('large');
      },
      removeLarge() {
        if (this.count > 0 && this.size.includes('large')) {
          this.price -= 129.00;
          this.count--;
          this.size.splice(this.size.indexOf('large'), 1);
        }
      },
      checkout() {
        if (this.price >= 39.00) {
          this.checkoutMessage = "Successfully paid...";
          setTimeout(() => {
            this.checkoutMessage = "";
          }, 2000);
        } else {
          this.errorMessage = "Please select an item";
          setTimeout(() => {
            this.errorMessage = "";
          }, 2000);
        }
      },
    };
  }
  
 
  





