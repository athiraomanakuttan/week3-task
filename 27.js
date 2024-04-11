let my_height ='1de';

try {
  if (isNaN(my_height)) {
    throw new Error("notANumber: Height is not a number.");
  } else if (my_height > 20) {
    throw new Error("HugeHeight: Height is too large.");
  } else if (my_height < 2) {
    throw new Error("TinyHeight: Height is too small.");
  }
  else
  {
    console.log(`My height is ${my_height}`);
  }
} catch (error) {
  if (error.message.startsWith("notANumber")) {
    console.error("Error: Height is not a number.");
  } else if (error.message.startsWith("HugeHeight")) {
    console.error("Error: Height is too large.");
  } else if (error.message.startsWith("TinyHeight")) {
    console.error("Error: Height is too small.");
  } else {
    console.error("Unknown error occurred:", error.message);
  }
}
