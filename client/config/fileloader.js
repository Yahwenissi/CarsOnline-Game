import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('asphalt', `${ASSETS_URL}/sprites/asphalt/asphalt.png`)
  game.load.image('car', `${ASSETS_URL}/sprites/car/car.png`)
}

export default fileLoader
/* Here we define the default background color for our game’s canvas, and we also load two sprites: asphalt and car . */