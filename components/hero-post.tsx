import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import { Typography } from '@mui/material'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <Typography variant='h4'>
          <Link
              as={`/work/${slug}`}
              href="/work/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </Typography>
        </div>
        <div>
          <Typography variant="body1">{excerpt}</Typography>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
