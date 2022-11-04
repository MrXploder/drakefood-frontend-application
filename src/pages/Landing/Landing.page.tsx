// import { useAppDispatch, useAppSelector } from '@/app/hooks'
// import { amountAdded, incremented } from '@/features/counter/counter.slice'

import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.page.scss'

export default () => {
  const navigate = useNavigate()

  const navigateToSuperSmashBrosAmiiboSeries = () => {
    navigate('/amiibos?gameseries=0x00&type=0x00')
  }

  const navigateToYoshiAmiiboSeries = () => {
    navigate('/amiibos?gameseries=0x03&type=0x02')
  }

  const navigateToAnimalCrossingAmiiboSeries = () => {
    navigate('/amiibos?gameseries=0x05&type=0x01')
  }

  return (
    <Fragment>
      <section className="mt-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
            Tap into more fun with Amiibo™ accessories
          </h1>
          <p className="mt-6 text-gray-500">
            Score additional characters, bonuses, or other perks in compatible
            games.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="rounded-xl hover:shadow-lg transition-all duration-500 cursor-pointer"
            src="/images/amiibo-lineup.avif"
            onClick={navigateToSuperSmashBrosAmiiboSeries}
          />
        </div>
      </section>

      <section
        className="mt-16 py-16 mx-5 md:mx-0 flex flex-wrap gap-10 justify-center items-center  hover:shadow-lg transition-all duration-500 cursor-pointer"
        onClick={navigateToYoshiAmiiboSeries}
      >
        <img
          className="rounded-xl w-full md:w-[30%]"
          src="/images/amiibo-yarn-yoshi.webp"
        />
        <div className="text-center w-full md:w-[50%]">
          <h2 className="text-md font-bold text-gray-800">
            Tap into more fun with Yoshi yarn-type Amiibo™s
          </h2>
          <p className="mt-6 text-gray-500">
            Get to see all amazing Yoshi and the Woolly world Amiibo™
          </p>
        </div>
      </section>

      <section
        className="mt-16 py-16 mx-5 md:mx-0 flex flex-wrap gap-10 justify-center items-center  hover:shadow-lg transition-all duration-500 cursor-pointer"
        onClick={navigateToAnimalCrossingAmiiboSeries}
      >
        <div className="w-full md:w-[50%] text-center order-2 md:order-1">
          <h2 className="text-md font-bold text-gray-800">
            Tap into more fun with Animal Crossing Amiibo™ cards Series 1 to 5
          </h2>
          <p className="mt-6 text-gray-500">
            Animal Crossing Amiibo™ cards series 1 to 5 are compatible with the
            game Animal Crossing: New Horizons. Animal Crossing Amiibo™ card
            series 1 to 4 are compatible with the Animal Crossing: New Leaf –
            Welcome Amiibo™, Animal Crossing: Happy Home Designer, and Animal
            Crossing: Amiibo™ Festival games.
          </p>
        </div>
        <img
          className="rounded-xl w-full md:w-[30%] order-1 md:order-2"
          src="/images/amiibo-card-animalcrossing.png"
        />
      </section>
    </Fragment>
  )
}
