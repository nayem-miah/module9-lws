
export default async function getJoke() {
    const res = await fetch('https://api.chucknorris.io/jokes/random',
    {
       next:{
          revalidate:10,
       },
    }
)

    if (!res.ok) {
        throw new Error('Fetch error...')
    }

    return res.json();
}

