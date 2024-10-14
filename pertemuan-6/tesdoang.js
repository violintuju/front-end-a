Man = {
    firstName: "violin",
    weight: 54, // in kg
    height: 1.6, // in meters
    calculateBMI: function() {
      this.BMI = this.weight / (this.height * this.height); //hitung BMI
    
      // Determine the BMI category
      if (this.BMI < 16.0) {
        return 'BMI result: ' + this.BMI + ' (Severely Underweight)';
      } else if (this.BMI >=16 && this.BMI<=18.4) {
        return 'BMI result: ' + this.BMI + ' (Underweight)';
      } else if (this.BMI >=18.5 && this.BMI<= 24.9) {
        return 'BMI result: ' + this.BMI + ' (Normal)';
      } else if (this.BMI >=25.0 && this.BMI<= 29.9) {
        return 'BMI result: ' + this.BMI + ' (Overweight)';
      } else if (this.BMI >=30.0 && this.BMI<= 34.9) {
        return 'BMI result: ' + this.BMI + ' (Moderately obese)';
      } else if (this.BMI >=35.0 && this.BMI<= 39.9) {
        return 'BMI result: ' + this.BMI + ' (Severely obese)';
      } else {
        return 'BMI result: ' + this.BMI + ' (Morbidly obese)';
      }
    }
  };
  
  // Call the calculateBMI function