import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-light tracking-regular md:tracking-regular leading-regular mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Bryce's Design Portfolio
      </Link>
    </h2>
  )
}

export default Header
