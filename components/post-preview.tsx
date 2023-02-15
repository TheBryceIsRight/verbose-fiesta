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

const PostPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <Typography variant='h4'>
        <Link
          as={`/work/${slug}`}
          href="/work/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </Typography>
      <br/>
      <Typography variant='body1'>{excerpt}</Typography>
    </div>
  )
}

export default PostPreview
