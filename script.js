const readline = require('readline')

const rl = readline.createInterface(({
  input: process.stdin,
  output: process.stdout
}))

console.log("Stop! Who would cross the Bridge of Death. Must answer me these questions three, 'ere the other side he see.")

rl.question("What is your name? ", (name) => {
  rl.question("What is your quest? ", (quest) => {
    const questLower = quest.toLowerCase()
    if (!questLower.includes("seek") || !questLower.includes("holy grail")) {
      console.log("Ahh-hh-hh......")
      rl.close()
      return
    }
    rl.question("What is your favorite color? ", (color) => {
      if (color.toLowerCase() !== "blue") {
        console.log("Ahh-hh-hh......")
        rl.close()
        return
      }
      console.log(`Right then, ${name}. Off you go.`)
      rl.close()
    })
  })
})