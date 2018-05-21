const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const updatedDrivers = [...drivers, name];
  
  return updatedDrivers
}

function prependDriver(name) {
  const updatedDrivers = [name, ...drivers]
  
  return updatedDrivers
}

function removeLastDriver() {
  drivers.slice(-1)
}