
module.exports.spin = async function(context, req) {
  context.log('The dreidel is spinning!');

  const randomValue = Math.floor(Math.random() * 3);
  const driedel = [' נ (Nun)', ' ג (Gimmel)', ' ה (Hay)', ' ש (Shin)'];
  context.res = {
    body: driedel[randomValue]
  };
};
