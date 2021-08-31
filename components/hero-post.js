import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="mb-8 md:mb-2">
      <div className="mb-3 md:mb-2 pb-5">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 ">
        <div>
          <h3 className="mb-2 text-xl lg:text-2xl leading-tight font-bold">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-2 md:mb-0 text-md">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-xs leading-relaxed mb-4 ">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        
      </div>
    </section>
  )
}
