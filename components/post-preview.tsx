import CoverImage from './cover-image'
import Link from 'next/link'
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
        {title}
      </Typography>
      <br />
      <Typography variant='body1'>{excerpt}</Typography>
    </div>
  )
}

export default PostPreview
