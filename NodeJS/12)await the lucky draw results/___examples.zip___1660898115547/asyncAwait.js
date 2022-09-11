function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResult() {
  try {
    const tinaData = await luckyDraw("Tina");
    console.log("data:", tinaData);

    const jorgeData = await luckyDraw("Jorge");
    console.log("data:", jorgeData);

    const julienData = await luckyDraw("Julien");
    console.log("data:", julienData);
  
} catch (error) {
    console.error(error);
  }
}
getResult();
