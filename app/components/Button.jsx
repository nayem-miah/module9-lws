'use client'
import { useFormStatus } from 'react-dom' // this is available react 19 or later

export default function Button() {

  const { pending } = useFormStatus()

  return (
    <>
      <button disabled={pending} type="submit">{pending? 'Submitting': 'Submit'}</button>
    </>
  )
}
