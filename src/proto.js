/**
 *
 * @param {string} brand
 * @param {string} model
 * @param {string} color
 * @param {number} year
 */
function Car(brand, model, color, year) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.year = year;
}
Car.prototype.display = function () {
  console.table(this);
};

/**
 *
 * @returns new object
 */
function _new() {
  const NEW_OBJECT = Object.create(Car.prototype);
  Car.apply(NEW_OBJECT, [...arguments].slice(1));
  return NEW_OBJECT;
}

const car = _new(Car, 'Tesla', 'S', 'blue', 2020);
const auto = new Car('Tesla', 'S', 'white', 2019);

car.display();
auto.display();
