import getJoke from '@/utils/getJoke'

export default async function RandomJoke() {
    const joke = await getJoke()
  return (
   <div className="mt-5">
    {joke.value}
   </div>
  )
}

