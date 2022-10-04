const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor (exceededLength , ...params) {
    super ( ...params)
    this.exceededLength = exceededLength;
    if (exceededLength) {
      this.message = `Maximum length exceeded by ${exceededLength}`
    } else {
      this.message = `Maximum length exceeded`;
    }  
    // Maintains proper stack trace for where error was thrown (available on V8)
    //if (Error.captureStackTrace) {
    //  Error.captureStackTrace(this,  this.name = 'MaximumLengthExceededError');
    //} - not needed in child if exist in parent

    // The name property should match the class's name
    this.name = 'MaximumLengthExceededError'    
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}