import { memo } from 'react'
import Image from 'next/image'

type NextImageProps = {
	src: string
	alt: string
	className?: string
	imgClassName?: string
}

function NextImage({ src, alt, className, imgClassName }: NextImageProps) {
	return (
		<figure className={`relative overflow-hidden ${className}`}>
			<Image
				src={src}
				alt={alt}
				layout="fill"
				placeholder="empty"
				blurDataURL={src}
				priority
				className={`{isLoading ? 'animate-pulse : ''} h-full w-full object-cover ${imgClassName}`}
			/>
		</figure>
	)
}

export default memo(NextImage)
