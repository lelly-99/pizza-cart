document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCart', () => ({
      price: 0,
      count: 0,
      size: [],
      small: 0,
      medium: 0,
      large: 0,
      checkoutMessage: "",
      errorMessage: "",
      paymentAmount: 0,
      addSmall() {
        this.small += 39.00;
        this.count += 1;
        this.price += 39.00;
        this.size.push('small');
      },
      removeSmall() {
        if (this.count > 0 && this.size.includes('small')) {
          this.price -= 39.00;
          this.small -= 39.00;
          this.count--;
          this.size.splice(this.size.indexOf('small'), 1);
        }
      },
      addMedium() {
        this.count++;
        this.price += 89.00;
        this.medium += 89.00;
        this.size.push('medium');
      },
      removeMedium() {
        if (this.count > 0 && this.size.includes('medium')) {
          this.price -= 89.00;
          this.medium -= 89.00;
          this.count--;
          this.size.splice(this.size.indexOf('medium'), 1);
        }
      },
      addLarge() {
        this.count++;
        this.price += 129.00;
        this.large += 129.00;
        this.size.push('large');
      },
      removeLarge() {
        if (this.count > 0 && this.size.includes('large')) {
          this.price -= 129.00;
          this.large -= 129.00;
          this.count--;
          this.size.splice(this.size.indexOf('large'), 1);
        }
      },
      checkout() {
        if (this.paymentAmount >= this.price) {
          this.checkoutMessage = "Payment successful and your change is R" + (this.paymentAmount - this.price)
          this.count = 0;
          this.price = 0;
          this.size = [];
          this.small = 0;
          this.medium = 0;
          this.large = 0;
          this.paymentAmount = 0;
          setTimeout(() => {
            this.checkoutMessage = "";
          }, 2000);
        }else if (this.paymentAmount <= this.price){
            this.errorMessage = "Insufficient funds!";
            setTimeout(() => {
              this.errorMessage = "";
            }, 2000);
          }
      }
    }))
  });
  




